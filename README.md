# Digital Steps

Teaching-led website for Digital Steps: IT tuition, business digital skills training, and straightforward websites and apps.

The public address in configuration is [https://www.digital-steps.co.uk](https://www.digital-steps.co.uk).

## Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure the business details

Edit `src/lib/site.ts`. That file holds:

- Business name, strapline and public URL
- Contact email and telephone (`email` and `phone`; leave blank to hide them)
- Service area and the online-delivery note
- Course descriptions, formats and indicative prices
- Business training prices and website or app starting prices
- The availability note (no dates are published)
- `bookingUrl` (leave blank until a real booking page exists)
- `socialLinks` (leave empty until profiles exist)
- Legal page paths

The founder block on `/about` is a labelled placeholder. Replace it with a real name and biography only when you have them. Do not add testimonials, accreditations or client logos unless they are real.

`hello@digitalsteps.co.uk` comes from the brand concept. Confirm the inbox before launch.

## Connect the enquiry form

The forms on `/contact`, `/it-tuition`, `/business-training` and `/websites-and-apps` validate in the browser, then open the visitor’s email app with a `mailto:` link to `site.email`.

The site does not send, store or confirm delivery of the message. The success text says that explicitly. If `site.email` is empty, the form shows an error and does not pretend the enquiry was sent.

A honeypot field is included. It is not a substitute for a server.

Before launch, connect a real inbox in one of these ways:

1. Confirm `hello@digitalsteps.co.uk` receives mail, and keep the mailto flow; or
2. Add a server route (for example a Route Handler) that validates the same fields, rate-limits requests, and sends through a provider such as Resend. Put the API key in an environment variable, never in client code. Only then change the status message to say the enquiry was received.

## Update courses

Change titles, topics, formats and prices in `tuitionCourses` inside `src/lib/site.ts`. The IT tuition page and the topic list on its form both read that list.

## Build and deploy

```bash
npm run lint
npm run build
```

The site is a Next.js app and is set up to deploy on Vercel from the `main` branch of `ScottMar71/digitalsteps`. Production environment variables are not required for the current mailto form.

## Before launch

- Confirm the public email address, and add a telephone number only if you want it shown.
- Replace the founder placeholder on `/about`.
- Point GoDaddy DNS at Vercel: apex A records `216.198.79.1` and `64.29.17.1`, and `www` CNAME `87a181c112847296.vercel-dns-017.com`. Keep existing MX records.
- In Vercel, make `www.digital-steps.co.uk` the address visitors see, with the apex redirecting to `www`, so it matches `site.url`.
- Review the privacy, cookie and accessibility pages with whoever is responsible for the business. Those pages explain the current site. They are not a compliance certificate.
- Do not turn on analytics cookies without updating `/cookies` and asking for consent first.
