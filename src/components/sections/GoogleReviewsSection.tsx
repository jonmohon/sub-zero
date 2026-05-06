import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS } from "@/lib/constants";
import { fetchGooglePlacesData, type GooglePlacesReview } from "@/lib/google-places";
import { generateReviewSchema } from "@/lib/schema";

/**
 * Server component that fetches real Google reviews via the Places API
 * and renders them along with valid Review + AggregateRating schema.
 *
 * If GOOGLE_PLACES_API_KEY / GOOGLE_PLACES_PLACE_ID are unset, falls back
 * to a clean "View Reviews on Google" CTA card so the section still has
 * value during setup.
 *
 * Cached for 24h via the Places API helper. No client-side script.
 */
export default async function GoogleReviewsSection() {
  const data = await fetchGooglePlacesData();
  const hasReviews = data && data.reviews.length > 0;

  // Build review schema only from real reviews. Never fabricate.
  const reviewSchema = hasReviews
    ? generateReviewSchema(
        data.reviews.map((r) => ({
          author: r.authorAttribution.displayName,
          rating: r.rating,
          body: r.text?.text ?? "",
          datePublished: r.publishTime,
        }))
      )
    : null;

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #eef2ff 100%)",
      }}
    >
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="blur-up">
          <div className="flex items-center justify-center gap-3 mb-3">
            <GoogleGlyph />
            <p className="text-[#0387cc] font-semibold uppercase tracking-wider text-sm">
              Verified Google Reviews
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1D33] mb-4">
            What South Florida Homeowners Are Saying
          </h2>

          {hasReviews ? (
            <RatingHeader rating={data.rating} count={data.userRatingCount} />
          ) : (
            <p className="text-center text-[#64748B] max-w-2xl mx-auto mb-12">
              Real, dated reviews from Sub-Zero owners across Miami-Dade and
              Broward — pulled live from our Google Business Profile.
            </p>
          )}
        </ScrollReveal>

        {hasReviews ? (
          <ReviewsGrid reviews={data.reviews} />
        ) : (
          <ReviewsFallback />
        )}
      </div>
    </section>
  );
}

function RatingHeader({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-12">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <StarIcon key={i} filled={i <= Math.round(rating)} />
        ))}
      </div>
      <span className="font-bold text-[#0B1D33] text-lg">{rating.toFixed(1)}</span>
      <span className="text-[#64748B] text-sm">
        ({count.toLocaleString()} Google reviews)
      </span>
    </div>
  );
}

function ReviewsGrid({ reviews }: { reviews: GooglePlacesReview[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <ReviewCard
          key={review.name ?? review.publishTime + review.authorAttribution.displayName}
          review={review}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GooglePlacesReview }) {
  const initials = review.authorAttribution.displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const text = review.text?.text ?? "";
  const truncated = text.length > 280 ? text.slice(0, 280).trim() + "…" : text;
  const dateLabel =
    review.relativePublishTimeDescription ??
    new Date(review.publishTime).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

  return (
    <ScrollReveal animation="fade-up">
      <article className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          {review.authorAttribution.photoUri ? (
            <img
              src={review.authorAttribution.photoUri}
              alt=""
              className="w-12 h-12 rounded-full object-cover bg-gray-100"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0387cc] to-[#00B4D8] flex items-center justify-center text-white font-bold text-sm"
              aria-hidden="true"
            >
              {initials}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-[#0B1D33] truncate">
              {review.authorAttribution.displayName}
            </div>
            <div className="text-xs text-[#64748B]">{dateLabel}</div>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon key={i} filled={i <= review.rating} small />
          ))}
        </div>

        <blockquote className="text-[#334155] text-sm leading-relaxed flex-1">
          {truncated}
        </blockquote>
      </article>
    </ScrollReveal>
  );
}

function ReviewsFallback() {
  return (
    <ScrollReveal animation="fade-up">
      <div className="bg-white rounded-2xl p-10 md:p-14 shadow-sm border border-gray-100 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-5 px-4 py-2 bg-[#0387cc]/5 rounded-full">
          <GoogleGlyph />
          <span className="text-sm font-semibold text-[#0B1D33]">
            Read & leave reviews on Google
          </span>
        </div>
        <p className="text-[#334155] text-lg leading-relaxed mb-8">
          Every Sub-Zero repair we complete gets a follow-up review request.
          See what real customers say — and share your own experience — on
          our verified Google Business Profile.
        </p>
        <a
          href={BUSINESS.social.googleBusinessProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#0387cc] hover:bg-[#0F3460] text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(3,135,204,0.3)]"
        >
          View Reviews on Google
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </ScrollReveal>
  );
}

function StarIcon({ filled, small }: { filled: boolean; small?: boolean }) {
  const size = small ? "w-4 h-4" : "w-5 h-5";
  return (
    <svg
      className={`${size} ${filled ? "text-[#f89406]" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleGlyph() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09 0-.73.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

