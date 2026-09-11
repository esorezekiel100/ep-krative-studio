import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Braces,
  Check,
  Layers3,
  PanelsTopLeft,
  Sparkles,
} from "lucide-react";

import logo from "@/assets/ep-studio-logo.png";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/2348085381296";
const EMAIL = "esorezekiel100@gmail.com";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Web Design & Development Services — EP Studio" },
      {
        name: "description",
        content:
          "Explore EP Studio frontend builds, custom website themes and full-stack development packages, starting from $350.",
      },
      { property: "og:title", content: "Web Design & Development Services — EP Studio" },
      {
        property: "og:description",
        content:
          "Frontend builds, custom themes and full-stack products designed for speed, clarity and conversion.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ep-krative-studio.lovable.app/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ep-krative-studio.lovable.app/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    number: "01",
    title: "Frontend builds",
    summary: "High-performance interfaces that turn approved designs and ideas into polished digital experiences.",
    ideal: "Landing pages, company websites, portfolios and product interfaces.",
    icon: PanelsTopLeft,
    includes: [
      "React, JavaScript and Tailwind CSS builds",
      "Mobile-first, responsive implementation",
      "Accessible interactions and clean structure",
      "Speed, SEO and Core Web Vitals pass",
    ],
  },
  {
    number: "02",
    title: "Custom themes",
    summary: "Original brand-led website design without the generic look or limitations of an off-the-shelf template.",
    ideal: "Businesses ready to look more established, memorable and credible online.",
    icon: Sparkles,
    includes: [
      "Visual direction built around your brand",
      "Custom page layouts and design system",
      "Motion, micro-interactions and content styling",
      "Reusable sections for future growth",
    ],
  },
  {
    number: "03",
    title: "Full-stack development",
    summary: "Complete web products that connect a distinctive interface to the data and workflows behind it.",
    ideal: "Dashboards, portals, directories, booking systems and custom web apps.",
    icon: Braces,
    includes: [
      "Frontend and database architecture",
      "Authentication and protected user areas",
      "Forms, APIs and third-party integrations",
      "Testing, launch support and handover",
    ],
  },
];

const tiers = [
  {
    name: "Launch",
    service: "Focused frontend build",
    price: "$350",
    note: "starting at",
    time: "3–5 days",
    description: "A sharp, conversion-focused one-page site for a new offer, campaign or personal brand.",
    features: ["One custom landing page", "Responsive frontend", "Contact or WhatsApp action", "Basic SEO and speed tuning", "1 revision round"],
  },
  {
    name: "Elevate",
    service: "Custom business theme",
    price: "$750",
    note: "starting at",
    time: "1–2 weeks",
    description: "A distinctive multi-page presence shaped around your brand, goals and customer journey.",
    features: ["Up to 6 custom pages", "Original visual direction", "Motion and interactions", "SEO, analytics and performance", "2 revision rounds", "30-day launch support"],
    featured: true,
  },
  {
    name: "Scale",
    service: "Full-stack product",
    price: "$1,500",
    note: "starting at",
    time: "3+ weeks",
    description: "A custom web application with the interface, data and functionality needed to run your idea.",
    features: ["Product UI and architecture", "Database and authentication", "API integrations", "Accessibility and QA", "Launch and handover", "Retainer option"],
  },
];

const process = [
  ["Discover", "We clarify the goal, users, scope and success measures."],
  ["Direct", "EP Studio defines the visual direction and project structure."],
  ["Build", "Your site is developed, reviewed and refined across screen sizes."],
  ["Launch", "After final approval, everything is tested and prepared to go live."],
];

function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-6">
          <Link to="/" className="group flex items-center gap-3" aria-label="EP Studio home">
            <span className="grid size-10 place-items-center rounded-lg bg-accent/10 ring-1 ring-accent/25 transition-transform duration-300 group-hover:-rotate-6">
              <img src={logo} alt="EP Studio logo" width={32} height={32} className="size-8 object-contain" />
            </span>
            <span className="font-mono text-sm font-bold uppercase tracking-[0.2em]">EP <span className="text-accent">Studio</span></span>
          </Link>
          <div className="flex items-center gap-5">
            <Link to="/" className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent sm:flex">
              <ArrowLeft aria-hidden="true" /> Portfolio
            </Link>
            <Button asChild className="h-10 rounded-full px-5 font-mono text-[10px] font-bold uppercase tracking-widest shadow-none">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">Start a project <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[34rem] rounded-full bg-accent/10 blur-[140px]" />
          <p className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent animate-fade-up">
            <span className="h-px w-10 bg-accent" /> Services / 2026
          </p>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:col-span-9 lg:text-8xl animate-fade-up [animation-delay:100ms]">
              Serious web work for <span className="text-accent">ambitious ideas.</span>
            </h1>
            <div className="lg:col-span-3 animate-fade-up [animation-delay:220ms]">
              <p className="text-base leading-relaxed text-muted-foreground">
                From a focused page to a complete product, EP Studio designs and develops digital experiences built to perform.
              </p>
              <a href="#offers" className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-accent">
                Explore services <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-3 border-y border-border py-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Design-led</span><span className="text-center">Built for speed</span><span className="text-right">Ready to scale</span>
          </div>
        </section>

        <section id="offers" className="mx-auto max-w-7xl px-6 pb-28 sm:pb-36">
          <div className="mb-12 flex items-end justify-between border-b border-border pb-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">What EP Studio does</h2>
            <span className="font-mono text-[10px] text-muted-foreground">Three ways to build</span>
          </div>
          <div className="divide-y divide-border border-b border-border">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group grid gap-8 py-12 md:grid-cols-12 md:py-16">
                  <div className="flex items-start justify-between md:col-span-2">
                    <span className="font-mono text-xs text-muted-foreground">{service.number}</span>
                    <span className="grid size-12 place-items-center rounded-lg bg-secondary text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground md:mr-5">
                      <Icon aria-hidden="true" />
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-3xl font-bold tracking-tight transition-colors group-hover:text-accent sm:text-4xl">{service.title}</h3>
                    <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{service.summary}</p>
                    <p className="mt-5 max-w-lg text-sm"><span className="font-semibold text-accent">Ideal for: </span>{service.ideal}</p>
                  </div>
                  <ul className="space-y-4 md:col-span-5 md:pl-8">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" /><span>{item}</span></li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-border bg-card/40 py-28 sm:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">Pricing</p>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Clear starting points.<br />Custom-fit outcomes.</h2>
              </div>
              <p className="max-w-md self-end text-muted-foreground lg:col-span-5 lg:justify-self-end">Choose the closest fit. The final quote reflects your exact pages, functionality, content and launch requirements.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {tiers.map((tier) => (
                <article key={tier.name} className={`relative flex flex-col rounded-lg border p-7 sm:p-8 ${tier.featured ? "border-accent bg-accent/5" : "border-border bg-background/50"}`}>
                  {tier.featured && <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-accent-foreground">Most popular</span>}
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{tier.name}</p>
                  <h3 className="mt-4 text-xl font-bold">{tier.service}</h3>
                  <div className="mt-8 flex items-end gap-3"><span className="text-5xl font-extrabold tracking-tight">{tier.price}</span><span className="pb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{tier.note}</span></div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-accent">Typical delivery: {tier.time}</p>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
                  <ul className="my-8 space-y-3 border-t border-border pt-7">
                    {tier.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />{feature}</li>)}
                  </ul>
                  <Button asChild variant={tier.featured ? "default" : "outline"} className="mt-auto h-12 rounded-full font-mono text-[10px] uppercase tracking-widest">
                    <a href={WHATSAPP} target="_blank" rel="noreferrer">Request a quote <ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 font-mono text-[10px] leading-relaxed text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>Need flexible support? Development time is available at <strong className="text-foreground">$25/hour</strong>.</p>
              <p>50% upfront · 50% on delivery · Maintenance quoted separately</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">The process</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight">Clear from first call to final launch.</h2>
            </div>
            <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8">
              {process.map(([title, detail], index) => (
                <li key={title} className="border-t border-border pt-5">
                  <div className="flex items-center gap-4"><span className="font-mono text-[10px] text-accent">0{index + 1}</span><h3 className="font-bold">{title}</h3></div>
                  <p className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-28">
          <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-accent/5 px-7 py-16 text-center sm:px-12 sm:py-24">
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]" />
            <Layers3 className="mx-auto mb-8 size-9 text-accent" aria-hidden="true" />
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">Bring the idea. EP Studio will make it real.</h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">Share what you are building, your timeline and your goals. You will get a clear response on scope and next steps.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-13 rounded-full px-8 font-mono text-[10px] font-bold uppercase tracking-widest">
                <a href={WHATSAPP} target="_blank" rel="noreferrer">Talk on WhatsApp <ArrowUpRight aria-hidden="true" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-full px-8 font-mono text-[10px] uppercase tracking-widest">
                <a href={`mailto:${EMAIL}`}>Send an email</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} EP Studio — Esor Ezekiel</span>
          <Link to="/" className="transition-colors hover:text-accent">View portfolio</Link>
        </div>
      </footer>
    </div>
  );
}