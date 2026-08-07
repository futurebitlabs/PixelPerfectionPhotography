"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const budgetOptions = ["Under 3L", "3L - 5L", "5L - 7L", "7L & above"];
const foundUsOptions = [
  "Instagram",
  "Facebook",
  "Website",
  "Friends & Family",
  "Other",
];

export function InquiryForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
    );
    data.append("subject", "New wedding inquiry — Pixel Perfection website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        router.push("/contact-us/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 bg-white p-5 md:p-8">
      <label className="grid gap-2 text-sm">
        Couple&apos;s names
        <input
          name="couple_names"
          required
          className="border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]"
          placeholder="e.g. Amit & Sanya"
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Email
          <input
            type="email"
            name="email"
            required
            className="border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Phone number
          <input
            type="tel"
            name="phone"
            required
            className="border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Wedding date
          <input
            type="date"
            name="wedding_date"
            required
            className="border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Budget range
          <select
            name="budget"
            required
            defaultValue=""
            className="border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]"
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        Venue / location
        <input
          name="venue"
          required
          className="border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]"
          placeholder="Where's the celebration happening?"
        />
      </label>

      <label className="grid gap-2 text-sm">
        Tell us about your celebrations
        <textarea
          name="celebration_details"
          required
          className="min-h-24 border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]"
          placeholder="What events do you have planned, and how many guests are you expecting at each?"
        />
      </label>

      <label className="grid gap-2 text-sm">
        Anything specific for your quote?
        <textarea
          name="preferences"
          className="min-h-20 border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]"
        />
      </label>

      <label className="grid gap-2 text-sm">
        How did you find us?
        <select
          name="how_found_us"
          required
          defaultValue=""
          className="border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]"
        >
          <option value="" disabled>
            Select an option
          </option>
          {foundUsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 h-12 bg-[#1a1a1a] text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#c9a876] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Inquire now"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-red-600">
          Something went wrong — please try again, or reach us directly.
        </p>
      ) : null}
    </form>
  );
}
