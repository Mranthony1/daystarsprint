"use client";

import { useState } from "react";
import Link from "next/link";
import {
  budgetOptions,
  contactMethodOptions,
  engagementOptions,
  serviceOptions,
  timelineOptions,
} from "@/lib/form-options";
import { enquirySchema, fieldErrorsFromSchema } from "@/lib/validation";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  website: string;
  service: string;
  engagement: string;
  budget: string;
  timeline: string;
  contactMethod: string;
  description: string;
  consent: boolean;
  companyFax: string;
};

const emptyErrors: Record<string, string> = {};

export function EnquiryForm({
  deliveryConfigured,
  initialService,
  initialEngagement,
}: {
  deliveryConfigured: boolean;
  initialService: string;
  initialEngagement: string;
}) {
  const [values, setValues] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    website: "",
    service: initialService,
    engagement: initialEngagement,
    budget: "",
    timeline: "",
    contactMethod: "",
    description: "",
    consent: false,
    companyFax: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>(emptyErrors);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const parsed = enquirySchema.safeParse({
      fullName: values.fullName,
      email: values.email,
      company: values.company,
      website: values.website,
      service: values.service,
      engagement: values.engagement,
      budget: values.budget,
      timeline: values.timeline,
      contactMethod: values.contactMethod,
      description: values.description,
      consent: values.consent,
    });

    if (!parsed.success) {
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      setErrors(fieldErrorsFromSchema(parsed.error));
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, companyFax: values.companyFax }),
      });
      const payload = (await response.json()) as {
        ok: boolean;
        message?: string;
        fieldErrors?: Record<string, string>;
      };
      if (!response.ok || !payload.ok) {
        setStatus("error");
        setMessage(payload.message || "The enquiry could not be sent.");
        setErrors(payload.fieldErrors ?? emptyErrors);
        return;
      }
      setStatus("success");
      setMessage("");
    } catch {
      setStatus("error");
      setMessage("The enquiry could not be sent. Check the connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-line bg-sheet p-8 md:p-12">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-signal">Sent</p>
        <h2 className="mt-4 text-4xl">The brief is with the studio.</h2>
        <p className="mt-4 max-w-lg text-ink-soft">
          Your enquiry was delivered. Daystarsprint will read it and reply if there is a useful way
          to help. This form is not a booking, and a response time is not promised here.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative border border-line bg-sheet p-6 md:p-10" noValidate>
      {deliveryConfigured ? null : (
        <p className="mb-6 border border-signal/30 bg-bone px-4 py-3 text-sm leading-relaxed text-ink-soft">
          Email delivery is not configured yet. You can review the form, but a submission will not
          be sent or stored.
        </p>
      )}
      <div className="hp" aria-hidden="true">
        <label>
          Fax
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.companyFax}
            onChange={(event) => update("companyFax", event.target.value)}
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="fullName" error={errors.fullName} required>
          <input
            id="fullName"
            className="field"
            autoComplete="name"
            maxLength={80}
            value={values.fullName}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            onChange={(event) => update("fullName", event.target.value)}
          />
        </Field>
        <Field label="Email" name="email" error={errors.email} required>
          <input
            id="email"
            type="email"
            className="field"
            autoComplete="email"
            maxLength={200}
            value={values.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
        <Field label="Company" name="company" error={errors.company}>
          <input
            id="company"
            className="field"
            autoComplete="organization"
            maxLength={120}
            value={values.company}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            onChange={(event) => update("company", event.target.value)}
          />
        </Field>
        <Field label="Website" name="website" error={errors.website} hint="Optional. Include https://">
          <input
            id="website"
            className="field"
            inputMode="url"
            autoComplete="url"
            maxLength={300}
            placeholder="https://"
            value={values.website}
            aria-invalid={Boolean(errors.website)}
            aria-describedby={errors.website ? "website-error" : "website-hint"}
            onChange={(event) => update("website", event.target.value)}
          />
        </Field>
        <SelectField
          label="What do you need?"
          name="service"
          value={values.service}
          error={errors.service}
          required
          onChange={(value) => update("service", value)}
          options={serviceOptions}
          placeholder="Choose a service"
        />
        <SelectField
          label="Engagement"
          name="engagement"
          value={values.engagement}
          error={errors.engagement}
          onChange={(value) => update("engagement", value)}
          options={engagementOptions}
          placeholder="Optional"
        />
        <SelectField
          label="Budget direction"
          name="budget"
          value={values.budget}
          error={errors.budget}
          onChange={(value) => update("budget", value)}
          options={budgetOptions}
          placeholder="Optional"
        />
        <SelectField
          label="Timing"
          name="timeline"
          value={values.timeline}
          error={errors.timeline}
          onChange={(value) => update("timeline", value)}
          options={timelineOptions}
          placeholder="Optional"
        />
      </div>
      <div className="mt-5">
        <SelectField
          label="Preferred contact"
          name="contactMethod"
          value={values.contactMethod}
          error={errors.contactMethod}
          onChange={(value) => update("contactMethod", value)}
          options={contactMethodOptions}
          placeholder="Optional"
        />
      </div>
      <div className="mt-5">
        <Field
          label="The project"
          name="description"
          error={errors.description}
          required
          hint="A few sentences on the business, who it is for, and what you want to change."
        >
          <textarea
            id="description"
            className="field min-h-40 resize-y"
            maxLength={4000}
            value={values.description}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? "description-error" : "description-hint"}
            onChange={(event) => update("description", event.target.value)}
          />
        </Field>
      </div>
      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-[#C43222]"
            checked={values.consent}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            onChange={(event) => update("consent", event.target.checked)}
          />
          <span>
            Daystarsprint may use these details to respond to this enquiry. Read the{" "}
            <Link href="/privacy" className="underline decoration-signal underline-offset-4">
              privacy note
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="mt-2 text-sm text-signal">
            {errors.consent}
          </p>
        ) : null}
      </div>
      {message ? (
        <p role="alert" className="mt-5 text-sm text-signal">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="btn-signal mt-6 inline-flex min-h-12 items-center bg-signal px-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-sheet transition-colors hover:bg-ink disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send the brief"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  hint,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
        {label}
        {required ? <span className="text-signal"> *</span> : null}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${name}-hint`} className="mt-2 text-sm text-mute">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-signal">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  error,
  required,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (value: string) => void;
  options: readonly { value: string; label: string }[];
  placeholder: string;
}) {
  return (
    <Field label={label} name={name} error={error} required={required}>
      <select
        id={name}
        className="field select"
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  );
}
