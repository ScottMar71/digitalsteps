"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Fields = {
  name: string;
  organisation: string;
  message: string;
};

const empty: Fields = { name: "", organisation: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [error, setError] = useState("");

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = fields.name.trim();
    const organisation = fields.organisation.trim();
    const message = fields.message.trim();

    if (!name || !organisation || message.length < 12) {
      setError("Add your name, organisation, and a short note about what should change.");
      return;
    }

    setError("");
    const subject = encodeURIComponent(`Digital Steps enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganisation: ${organisation}\n\n${message}`,
    );
    const recipient = site.email;
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-5" noValidate>
      <Field
        id="name"
        label="Name"
        value={fields.name}
        onChange={(value) => update("name", value)}
        autoComplete="name"
      />
      <Field
        id="organisation"
        label="Organisation"
        value={fields.organisation}
        onChange={(value) => update("organisation", value)}
        autoComplete="organization"
      />
      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          What should change?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={2000}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          className="mt-2 w-full resize-y rounded-2xl border border-line bg-paper px-4 py-3 text-ink outline-none ring-rust/40 placeholder:text-muted/70 focus:ring-2"
          placeholder="The launch, process, or skill you need people to use in their real work."
        />
      </div>
      {error ? (
        <p role="alert" className="text-sm text-rust-deep">
          {error}
        </p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-rust px-6 text-sm font-medium text-paper transition-colors hover:bg-rust-deep"
        >
          Open this in your email
        </button>
        <p className="text-sm leading-6 text-muted">
          Your email app opens with the note filled in. This site does not store the message.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        maxLength={120}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-full border border-line bg-paper px-4 text-ink outline-none ring-rust/40 focus:ring-2"
      />
    </div>
  );
}
