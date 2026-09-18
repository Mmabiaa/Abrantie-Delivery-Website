# Abrantie Delivery Company Website
[Live Preview](abrantie-delivery-website.vercel.app)
> **Fast · Reliable · Secure** — Accelerating your deliveries across Ghana.

A modern marketing and booking website for **Abrantie's Delivery Company Ltd.**, a courier and logistics service operating across Accra and surrounding areas in Ghana.

---

## Overview

This is a statically-optimised **Next.js 16** web application that serves as the public-facing website for Abrantie's Delivery. It presents the company's services, brand story, and contact information, and lets customers submit delivery booking requests directly from the browser.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero section, parcel tracking input, service cards, value props, and a final CTA |
| `/about` | Company story, operating principles, and customer promise |
| `/contact` | Delivery booking form + parcel tracking input + contact details |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS v4 |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) |
| Package Manager | pnpm 12 |

---

## Project Structure

```
abrantie delivery/
├── app/
│   ├── layout.tsx          # Root layout — metadata, fonts, analytics
│   ├── globals.css         # Global styles & design tokens
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact / booking page
├── components/
│   ├── site-shell.tsx      # Shared layout components (Header, Footer, ButtonLink, SectionLabel)
│   └── ui/                 # shadcn-generated UI primitives
├── lib/                    # Utility helpers
├── public/                 # Static assets
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- [pnpm](https://pnpm.io/) ≥ 12 — `npm install -g pnpm`

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

---

## Features

- **Hero section** with animated delivery status card and live route badge
- **Parcel tracking** input with `ABR-XXXXX` tracking number format
- **Service cards** — On-demand delivery, Business logistics, Food & retail
- **Booking form** — collects pickup point, drop-off point, package type, preferred timing, and special instructions
- **Responsive navigation** with accessible hamburger menu (Escape key + outside-click to close)
- **Light / dark mode** support via CSS `prefers-color-scheme`
- **Vercel Analytics** integrated (production only)
- **SEO-ready** metadata — title, description, and favicon configured in `layout.tsx`

---

## Contact Details (reflected in the site)

| Channel | Detail |
|---|---|
| Phone | +233 24 115 1868 |
| Phone | +233 50 809 3047 |
| Email | Abrantiedelivery@gmail.com |
| Coverage | Accra & surrounding areas |

---


## License

[MIT](./LICENSE) © Abrantie's Delivery Company Ltd.
