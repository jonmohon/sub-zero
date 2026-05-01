import Link from "next/link";

export interface AnswerStat {
  value: string;
  label: string;
}

export interface AnswerSource {
  label: string;
  url: string;
}

export interface AnswerQuote {
  text: string;
  attribution: string;
}

interface AnswerBlockProps {
  /** The user query this page answers, e.g. "Where can I get a Sub-Zero refrigerator repaired in Miami?" */
  question: string;
  /** Direct answer in 40-60 words. The first sentence should fully answer the query. */
  answer: string;
  /** 3-4 verifiable statistics shown as cards. Optional. */
  stats?: AnswerStat[];
  /** External authoritative sources cited inline. Optional. */
  sources?: AnswerSource[];
  /** Pull quote from a technician or customer. Optional. */
  quote?: AnswerQuote;
}

/**
 * Princeton GEO methodology: direct-answer-first content block designed to
 * maximize citation pickup by ChatGPT, Google AI Overviews, and Perplexity.
 *
 * Place this immediately after the hero on priority pages. The combination
 * of a direct answer, embedded statistics, source citations, and quotes is
 * the +30-40% citation lift pattern from Liu et al. 2023.
 */
export default function AnswerBlock({
  question,
  answer,
  stats,
  sources,
  quote,
}: AnswerBlockProps) {
  return (
    <section
      className="py-12 md:py-16 bg-white border-b border-gray-100"
      aria-label="Direct answer"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0387cc] mb-2">
          Quick answer
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mb-4 leading-tight">
          {question}
        </h2>
        <p className="text-lg text-[#334155] leading-relaxed">{answer}</p>

        {stats && stats.length > 0 && (
          <div
            className={`grid gap-4 mt-8 ${
              stats.length === 4
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : stats.length === 3
                  ? "sm:grid-cols-3"
                  : "sm:grid-cols-2"
            }`}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#f8fafc] border border-gray-200 rounded-xl p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#0B1D33]">
                  {s.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-[#64748B] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {quote && (
          <blockquote className="mt-8 border-l-4 border-[#f89406] pl-5 py-2">
            <p className="text-[#334155] italic leading-relaxed mb-2">
              &ldquo;{quote.text}&rdquo;
            </p>
            <footer className="text-sm font-semibold text-[#0B1D33] not-italic">
              — {quote.attribution}
            </footer>
          </blockquote>
        )}

        {sources && sources.length > 0 && (
          <div className="mt-8 pt-5 border-t border-gray-100">
            <p className="text-xs uppercase tracking-[0.15em] text-[#64748B] font-semibold mb-2">
              Sources
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {sources.map((src) => (
                <li key={src.url}>
                  {src.url.startsWith("http") ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0387cc] hover:text-[#0F3460] underline underline-offset-2"
                    >
                      {src.label}
                    </a>
                  ) : (
                    <Link
                      href={src.url}
                      className="text-[#0387cc] hover:text-[#0F3460] underline underline-offset-2"
                    >
                      {src.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
