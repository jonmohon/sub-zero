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

const SERVICE_TYPES = [
  "Refrigerator Repair",
  "Freezer Repair",
  "Ice Maker Repair",
  "Wine Cooler Repair",
  "Marine Refrigeration Repair",
  "Maintenance",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-semibold text-[#0A2540] mb-2">Thank You!</h3>
        <p className="text-[#64748B]">Your service request has been submitted. We will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[#0A2540] mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-[#0A2540] mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-[#0A2540] mb-1">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] outline-none transition-colors"
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-[#0A2540] mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-[#0A2540] mb-1">
            State
          </label>
          <select
            id="state"
            name="state"
            defaultValue="Florida"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] outline-none transition-colors"
          >
            <option value="">Select State</option>
            {US_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-[#0A2540] mb-1">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#0A2540] mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#0A2540] mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-[#0A2540] mb-1">
          Service Type
        </label>
        <select
          id="serviceType"
          name="serviceType"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] outline-none transition-colors"
        >
          <option value="">Select Service Type</option>
          {SERVICE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#0A2540] mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] outline-none transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#f89406] hover:bg-[#e08505] text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors"
      >
        Submit Request
      </button>
    </form>
  );
}
