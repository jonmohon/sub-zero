import type { NextConfig } from "next";
import { CULLED_CITY_REDIRECTS } from "./src/data/areas";

const nextConfig: NextConfig = {
  // Serve URLs with trailing slashes. The sitemap and canonical tags
  // already use the trailing-slash form, so without this Next was 308
  // redirecting /foo/ -> /foo, creating a canonical loop that Google
  // used to drop city/service pages out of its index.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    // 308 redirect culled tiny-CDP city pages straight to their parent county.
    // Single-hop (destination already has trailing slash) so we don't burn
    // a second hop on Next's trailingSlash normalizer. Preserves any equity
    // from external links or stale Google index entries.
    return CULLED_CITY_REDIRECTS.flatMap(({ county, city }) => [
      // With-trailing-slash form (matches what was in the old sitemap)
      {
        source: `/areas-we-service/${county}/${city}/`,
        destination: `/areas-we-service/${county}/`,
        permanent: true,
      },
      // Without-trailing-slash form (in case anyone links it that way)
      {
        source: `/areas-we-service/${county}/${city}`,
        destination: `/areas-we-service/${county}/`,
        permanent: true,
      },
    ]);
  },
  async headers() {
    return [
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
