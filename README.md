# Tinatries

The Tinatries marketing site. Next.js App Router, TypeScript, and Tailwind CSS.

Tinatries is a premium digital marketing and creative agency. The site covers SEO, social media, paid advertising, branding, and web design. Projects in the portfolio are studio concepts — self-initiated studies, clearly labeled. They are not client results.

The visual system uses Cloud Dancer, the Pantone Color of the Year 2026, with Transformative Teal, the WGSN and Coloro Colour of the Year 2026.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` before adding contact details, email delivery, or analytics. Restart the dev server after changing environment variables.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint

## Environment variables

Public values are safe to expose. They are omitted from the interface when empty, so do not invent contact details.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin, used for metadata, sitemap, and structured data |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public studio email |
| `NEXT_PUBLIC_CONTACT_PHONE` | Public phone number |
| `NEXT_PUBLIC_CONTACT_ADDRESS` | Public address line |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number, digits with country code |
| `NEXT_PUBLIC_SOCIAL_INSTAGRAM` | Profile URL |
| `NEXT_PUBLIC_SOCIAL_LINKEDIN` | Profile URL |
| `NEXT_PUBLIC_SOCIAL_X` | Profile URL |
| `NEXT_PUBLIC_SOCIAL_FACEBOOK` | Profile URL |
| `NEXT_PUBLIC_CURRENCY` | Currency code. Default `GHS` |
| `NEXT_PUBLIC_SCHEDULING_URL` | Real scheduling link. Hidden until set |
| `NEXT_PUBLIC_ANALYTICS_PROVIDER` | Set to `plausible` to enable analytics |
| `NEXT_PUBLIC_ANALYTICS_DOMAIN` | Plausible domain |
| `RESEND_API_KEY` | Server-only Resend API key |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | Verified Resend sender, for example `Tinatries <enquiries@yourdomain.com>` |

The enquiry form reports success only after Resend accepts the message. Until all three server variables are set, submissions are rejected and are not stored.

The contact endpoint rate-limits by IP in process memory (5 requests each 10 minutes). That limit resets on restart and is not shared across multiple server instances.

## Content

Edit the TypeScript modules rather than scattering copy through components.

- `lib/site-config.ts` — brand lines; contact details come from the environment
- `lib/services.ts` — five services
- `lib/projects.ts` — studio concepts, labeled as self-initiated
- `lib/studio.ts` — process, standards, engagements, and questions

Do not add testimonials, client logos, team names, or performance figures until they are real and permitted.

Privacy and terms pages are drafts for review. They are not legal advice.

## Deployment

1. Push the project to the host of your choice.
2. Set `NEXT_PUBLIC_SITE_URL` to the production origin.
3. Set the contact and Resend variables if the form should deliver email.
4. Run `npm run build`.
5. Confirm the contact form, sitemap (`/sitemap.xml`), and a service and concept URL on the live domain.
