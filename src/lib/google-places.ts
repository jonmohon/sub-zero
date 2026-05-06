/**
 * Google Places API (New) integration for fetching real Google reviews
 * and aggregate rating data server-side.
 *
 * Setup required (one-time):
 * 1. Get a Place ID for the business:
 *    https://developers.google.com/maps/documentation/places/web-service/place-id
 *    Search "Sub-Zero Repair Services" and select 1600 Ponce De Leon Blvd, Coral Gables.
 *    Copy the Place ID (looks like: ChIJxxxxxxxxxxxxxxxxxx).
 * 2. Create a Google Cloud project + enable "Places API (New)":
 *    https://console.cloud.google.com/apis/library/places.googleapis.com
 * 3. Create an API key (restrict it to Places API + the production domain):
 *    https://console.cloud.google.com/apis/credentials
 * 4. Add to environment variables (Vercel project settings, .env.local for dev):
 *      GOOGLE_PLACES_API_KEY=AIza...
 *      GOOGLE_PLACES_PLACE_ID=ChIJ...
 *
 * Cost: Free tier covers ~10K Place Details requests/month. With 24h caching,
 * one site needs ~30 requests/month. Realistic monthly cost: $0.
 *
 * Privacy: Server-side fetch only. The API key is never exposed to the client.
 */

const PLACES_API_ENDPOINT = "https://places.googleapis.com/v1/places";
const FIELD_MASK = "rating,userRatingCount,reviews";

/** Single review as returned by Places API (New). */
export interface GooglePlacesReview {
  /** "places/{place_id}/reviews/{review_id}" */
  name?: string;
  authorAttribution: {
    displayName: string;
    photoUri?: string;
    uri?: string;
  };
  /** 1-5 star rating */
  rating: number;
  text?: {
    text: string;
    languageCode?: string;
  };
  /** ISO 8601 datetime */
  publishTime: string;
  /** Human-readable, e.g. "2 weeks ago" */
  relativePublishTimeDescription?: string;
}

export interface GooglePlacesData {
  /** Aggregate rating, e.g. 4.9 */
  rating: number;
  /** Total review count across all time */
  userRatingCount: number;
  /** Up to 5 most recent reviews. API does not paginate; this is Places API (New)'s limit. */
  reviews: GooglePlacesReview[];
}

/**
 * Fetch live Google Places data (rating + recent reviews).
 *
 * Returns null if env vars are unset (graceful degradation — the
 * GoogleReviewsSection falls back to its placeholder card) or if the API
 * call fails. Never throws.
 *
 * Cached for 24 hours via Next's data cache. To force a fresh fetch
 * (e.g. after a new review is published), trigger a deployment or call
 * `revalidatePath("/")` from a Server Action.
 */
export async function fetchGooglePlacesData(): Promise<GooglePlacesData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const response = await fetch(`${PLACES_API_ENDPOINT}/${placeId}`, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": FIELD_MASK,
      },
      // Cache for 24 hours. Place data and reviews change slowly; this stays
      // well under the Places API free quota and keeps page renders fast.
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      // Log the failure server-side but don't throw — section will fall back
      // to placeholder card.
      console.error(
        `[google-places] Fetch failed ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = (await response.json()) as Partial<GooglePlacesData>;

    if (
      typeof data.rating !== "number" ||
      typeof data.userRatingCount !== "number"
    ) {
      console.error("[google-places] Response missing rating fields", data);
      return null;
    }

    return {
      rating: data.rating,
      userRatingCount: data.userRatingCount,
      reviews: Array.isArray(data.reviews) ? data.reviews : [],
    };
  } catch (err) {
    console.error("[google-places] Unexpected fetch error", err);
    return null;
  }
}
