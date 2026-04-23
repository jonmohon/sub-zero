"use client";

import { useState } from "react";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

const COUNTRIES = [
  "United States", "Canada", "United Kingdom", "Australia", "Bahamas", "Brazil",
  "Cayman Islands", "Colombia", "Dominican Republic", "France", "Germany", "Italy",
  "Jamaica", "Mexico", "Spain", "Trinidad and Tobago", "Venezuela", "Other",
];

const CONTACT_METHODS = ["Email", "Phone", "Text Message"];

const SERVICE_TYPES = [
  "Refrigerator Repair",
  "Freezer Repair",
  "Ice Maker Repair",
  "Wine Cooler Repair",
  "Marine Refrigeration Repair",
  "Maintenance",
  "Other",
];

const inputStyles =
  "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0387cc] focus:border-[#0387cc] outline-none transition-colors text-sm";
const labelStyles = "block text-sm font-medium text-[#0B1D33] mb-1";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (captchaAnswer.trim() !== "13") {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setSubmitError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Failed to submit");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-semibold text-[#0B1D33] mb-2">Thank You!</h3>
        <p className="text-[#64748B]">Your service request has been submitted. We will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-[#64748B]">Fields marked with an <span className="text-red-500">*</span> are required</p>

      {/* Name */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelStyles}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="firstName" name="firstName" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelStyles}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="lastName" name="lastName" required className={inputStyles} />
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className={labelStyles}>Address</label>
        <input type="text" id="address" name="address" className={inputStyles} />
      </div>

      {/* City / State */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className={labelStyles}>City</label>
          <input type="text" id="city" name="city" className={inputStyles} />
        </div>
        <div>
          <label htmlFor="state" className={labelStyles}>State</label>
          <select id="state" name="state" defaultValue="Florida" className={inputStyles}>
            <option value="">Select State</option>
            {US_STATES.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ZIP / Country */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="zip" className={labelStyles}>ZIP Code</label>
          <input type="text" id="zip" name="zip" className={inputStyles} />
        </div>
        <div>
          <label htmlFor="country" className={labelStyles}>Country</label>
          <select id="country" name="country" defaultValue="United States" className={inputStyles}>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Phone / Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Telephone Number <span className="text-red-500">*</span>
          </label>
          <input type="tel" id="phone" name="phone" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="email" className={labelStyles}>
            Email Address <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" name="email" required className={inputStyles} />
        </div>
      </div>

      {/* Preferred Contact Method / Service Type */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contactMethod" className={labelStyles}>Preferred Contact Method</label>
          <select id="contactMethod" name="contactMethod" defaultValue="Email" className={inputStyles}>
            {CONTACT_METHODS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="serviceType" className={labelStyles}>Service Type</label>
          <select id="serviceType" name="serviceType" className={inputStyles}>
            <option value="">Select Service Type</option>
            {SERVICE_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelStyles}>General Question / Description of Issue</label>
        <textarea id="message" name="message" rows={5} className={`${inputStyles} resize-y`} />
      </div>

      {/* Spam Captcha */}
      <div>
        <label htmlFor="captcha" className={labelStyles}>
          What is 9 plus four? <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="captcha"
          name="captcha"
          required
          value={captchaAnswer}
          onChange={(e) => { setCaptchaAnswer(e.target.value); setCaptchaError(false); }}
          className={`${inputStyles} max-w-[200px] ${captchaError ? "border-red-500 focus:ring-red-500" : ""}`}
        />
        {captchaError && (
          <p className="text-red-500 text-sm mt-1">Incorrect answer. Please try again.</p>
        )}
      </div>

      {submitError && (
        <p className="text-red-500 text-sm" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#f89406] hover:bg-[#e08505] disabled:bg-[#f89406]/60 disabled:cursor-not-allowed text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors"
      >
        {submitting ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}
