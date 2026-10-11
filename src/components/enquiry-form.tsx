"use client";

import { useState, type FormEvent } from "react";
import {
  contactMethods,
  deliveryMethods,
  enquiryTypes,
  site,
  tuitionCourses,
} from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  organisation: string;
  participants: string;
  enquiryType: string;
  contactMethod: string;
  delivery: string;
  course: string;
  topics: string;
  message: string;
  companyWebsite: string;
};

const empty: Fields = {
  name: "",
  email: "",
  organisation: "",
  participants: "",
  enquiryType: "",
  contactMethod: "email",
  delivery: "",
  course: "",
  topics: "",
  message: "",
  companyWebsite: "",
};

export function EnquiryForm({
  idPrefix,
  defaultType = "",
  showOrganisation = false,
  showParticipants = false,
  showTopics = false,
  showCourse = false,
  submitLabel = "Send an enquiry",
}: {
  idPrefix: string;
  defaultType?: string;
  showOrganisation?: boolean;
  showParticipants?: boolean;
  showTopics?: boolean;
  showCourse?: boolean;
  submitLabel?: string;
}) {
  const [fields, setFields] = useState<Fields>({ ...empty, enquiryType: defaultType });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
    setReady(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields, { showOrganisation, showParticipants, showCourse });
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setReady(false);
      return;
    }
    if (fields.companyWebsite.trim()) {
      setReady(false);
      return;
    }
    if (!site.email) {
      setErrors({ form: "This form is not connected to an inbox yet." });
      setReady(false);
      return;
    }

    const typeLabel = enquiryTypes.find((item) => item.value === fields.enquiryType)?.label ?? fields.enquiryType;
    const deliveryLabel = deliveryMethods.find((item) => item.value === fields.delivery)?.label ?? "Not specified";
    const courseLabel = tuitionCourses.find((item) => item.id === fields.course)?.title ?? "Not specified";
    const contactLabel = contactMethods.find((item) => item.value === fields.contactMethod)?.label ?? fields.contactMethod;
    const lines = [
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      showOrganisation ? `Organisation: ${fields.organisation.trim()}` : "",
      showParticipants ? `Participants: ${fields.participants.trim() || "Not specified"}` : "",
      `Enquiry type: ${typeLabel}`,
      `Preferred contact: ${contactLabel}`,
      `Delivery: ${deliveryLabel}`,
      showCourse ? `Topic: ${courseLabel}` : "",
      showTopics ? `Topics: ${fields.topics.trim() || "Not specified"}` : "",
      "",
      fields.message.trim(),
    ].filter(Boolean);

    const subject = encodeURIComponent(`Digital Steps enquiry: ${typeLabel}`);
    const body = encodeURIComponent(lines.join("\n"));
    setReady(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <Field
        id={`${idPrefix}-name`}
        label="Full name"
        value={fields.name}
        error={errors.name}
        autoComplete="name"
        onChange={(value) => set("name", value)}
      />
      <Field
        id={`${idPrefix}-email`}
        label="Email address"
        type="email"
        value={fields.email}
        error={errors.email}
        autoComplete="email"
        onChange={(value) => set("email", value)}
      />
      {showOrganisation ? (
        <Field
          id={`${idPrefix}-organisation`}
          label="Business or organisation"
          value={fields.organisation}
          error={errors.organisation}
          autoComplete="organization"
          onChange={(value) => set("organisation", value)}
        />
      ) : null}
      {showParticipants ? (
        <Field
          id={`${idPrefix}-participants`}
          label="Number of participants"
          value={fields.participants}
          error={errors.participants}
          inputMode="numeric"
          onChange={(value) => set("participants", value)}
        />
      ) : null}
      <SelectField
        id={`${idPrefix}-type`}
        label="Enquiry type"
        value={fields.enquiryType}
        error={errors.enquiryType}
        options={[{ value: "", label: "Choose one" }, ...enquiryTypes]}
        onChange={(value) => set("enquiryType", value)}
      />
      <SelectField
        id={`${idPrefix}-contact`}
        label="Preferred contact method"
        value={fields.contactMethod}
        error={errors.contactMethod}
        options={contactMethods}
        onChange={(value) => set("contactMethod", value)}
      />
      <SelectField
        id={`${idPrefix}-delivery`}
        label="Preferred delivery method (optional)"
        value={fields.delivery}
        error={errors.delivery}
        options={[{ value: "", label: "Choose one" }, ...deliveryMethods]}
        onChange={(value) => set("delivery", value)}
      />
      {showCourse ? (
        <SelectField
          id={`${idPrefix}-course`}
          label="Topic you want to learn"
          value={fields.course}
          error={errors.course}
          options={[
            { value: "", label: "Choose one" },
            ...tuitionCourses.map((course) => ({ value: course.id, label: course.title })),
          ]}
          onChange={(value) => set("course", value)}
        />
      ) : null}
      {showTopics ? (
        <TextArea
          id={`${idPrefix}-topics`}
          label="Training topics or project outline"
          value={fields.topics}
          error={errors.topics}
          onChange={(value) => set("topics", value)}
        />
      ) : null}
      <TextArea
        id={`${idPrefix}-message`}
        label="Message"
        value={fields.message}
        error={errors.message}
        required
        onChange={(value) => set("message", value)}
      />
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={`${idPrefix}-website`}>Company website</label>
        <input
          id={`${idPrefix}-website`}
          tabIndex={-1}
          autoComplete="off"
          value={fields.companyWebsite}
          onChange={(event) => set("companyWebsite", event.target.value)}
        />
      </div>
      {errors.form ? (
        <p role="alert" className="text-sm leading-6 font-medium text-deep">
          {errors.form}
        </p>
      ) : null}
      {ready ? (
        <p role="status" className="rounded-2xl bg-mint px-4 py-3 text-sm leading-6 text-deep">
          This website has not delivered your enquiry. Your email app should open so you can send it
          yourself. Nothing is stored here.
        </p>
      ) : (
        <p className="text-sm leading-6 text-charcoal">
          The form opens your email app. It does not send or store the message on this website.
        </p>
      )}
      <button
        type="submit"
        className="inline-flex h-12 w-fit items-center rounded-full bg-deep px-5 text-sm leading-4 font-medium text-warm"
      >
        {submitLabel}
      </button>
    </form>
  );
}

function validate(
  fields: Fields,
  options: { showOrganisation: boolean; showParticipants: boolean; showCourse: boolean },
) {
  const errors: Record<string, string> = {};
  if (fields.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter an email address we can reply to.";
  }
  if (!fields.enquiryType) errors.enquiryType = "Choose an enquiry type.";
  if (!fields.contactMethod) errors.contactMethod = "Choose how you would like us to reply.";
  if (fields.message.trim().length < 12) {
    errors.message = "Add a short note about what you need. A sentence or two is enough.";
  }
  if (options.showOrganisation && fields.organisation.trim().length < 2) {
    errors.organisation = "Enter the business or organisation name.";
  }
  if (options.showParticipants) {
    const count = Number(fields.participants);
    if (!fields.participants.trim() || !Number.isInteger(count) || count < 1 || count > 200) {
      errors.participants = "Enter how many people would take part, as a whole number.";
    }
  }
  if (options.showCourse && !fields.course) {
    errors.course = "Choose the topic you want to learn.";
  }
  return errors;
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "text" | "email";
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm leading-5 font-medium text-deep">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-2xl border border-soft bg-warm px-4 text-base text-charcoal"
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm leading-5 font-medium text-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  error,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  options: readonly { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm leading-5 font-medium text-deep">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-2xl border border-soft bg-warm px-4 text-base text-charcoal"
      >
        {options.map((option) => (
          <option key={option.value || "empty"} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm leading-5 font-medium text-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function TextArea({
  id,
  label,
  value,
  error,
  onChange,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm leading-5 font-medium text-deep">
        {label}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      <textarea
        id={id}
        name={id}
        rows={5}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-soft bg-warm px-4 py-3 text-base leading-7 text-charcoal"
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm leading-5 font-medium text-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
