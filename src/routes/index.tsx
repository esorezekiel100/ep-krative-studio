import { Link, createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ep-studio-logo.png";
import portrait from "@/assets/esor-portrait.jpg";

import oppora from "@/assets/work/oppora.jpg";
import bridgeview from "@/assets/work/bridgeview.jpg";
import teaShop from "@/assets/work/tea-shop.jpg";
import marketflow from "@/assets/work/marketflow.jpg";
import punique from "@/assets/work/punique.jpg";
import marksGarage from "@/assets/work/marks-garage.jpg";
import vertexbuild from "@/assets/work/vertexbuild.jpg";
import usaLogistics from "@/assets/work/usa-logistics.jpg";
import agroMarket from "@/assets/work/agro-market.jpg";
import newbreed from "@/assets/work/newbreed.jpg";
import fundora from "@/assets/work/fundora.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preload", as: "image", href: portrait, fetchPriority: "high" },
    ],
    meta: [
      { title: "EP Studio — Web Design & Frontend Development" },
      {
        name: "description",
        content:
          "EP Studio, led by Esor Ezekiel, designs and builds fast, responsive, pixel-perfect websites and web apps with React, Tailwind CSS and modern JavaScript. Clear project rates.",
      },
      { property: "og:title", content: "EP Studio — Web Design & Frontend Development" },
      {
        property: "og:description",
        content:
          "EP Studio builds high-performing websites for businesses: landing pages, brand sites and product UIs, crafted for speed and detail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/esorezekiel100";
const LINKEDIN = "https://www.linkedin.com/in/esor-ezekiel-173402212/";
const EMAIL = "esorezekiel100@gmail.com";
const PHONE = "08085381296";
const WHATSAPP = "https://wa.me/2348085381296";


type Project = {
  name: string;
  desc: string;
  tech: string[];
  img: string;
  live: string;
  code: string;
};

const featured: Project[] = [
  {
    name: "Oppora",
    desc: "Global opportunity hub aggregating verified scholarships, funding and fellowships into one trusted platform.",
    tech: ["React", "TypeScript", "Tailwind"],
    img: oppora,
    live: "https://oppora-brown.vercel.app",
    code: "https://github.com/esorezekiel100/https-github.com-esorezekiel100-Oppora",
  },
  {
    name: "BridgeView Auto",
    desc: "Neighbourhood mechanic shop in Lower Manhattan — inspections, repairs and booking, built to convert.",
    tech: ["React", "TypeScript", "Tailwind"],
    img: bridgeview,
    live: "https://bridge-view-ashen.vercel.app",
    code: "https://github.com/esorezekiel100/BridgeView",
  },
  {
    name: "Modern Tea Shop",
    desc: "Playful brand site for a Midtown Manhattan boba and leaf-tea house, rich in motion and imagery.",
    tech: ["React", "TypeScript", "Tailwind"],
    img: teaShop,
    live: "https://morden-tea-shop.vercel.app",
    code: "https://github.com/esorezekiel100/Morden-Tea-Shop",
  },
  {
    name: "MarketFlow",
    desc: "Dark, high-contrast e-commerce experience with a polished authentication and storefront flow.",
    tech: ["React", "TypeScript", "Tailwind"],
    img: marketflow,
    live: "https://market-flow-psi.vercel.app",
    code: "https://github.com/esorezekiel100/MarketFlow",
  },
];

const gridProjects: Project[] = [
  {
    name: "Punique's Kitchen",
    desc: "Warm restaurant site with menu, story and reservation flow.",
    tech: ["React", "Tailwind"],
    img: punique,
    live: "https://punique-s.vercel.app",
    code: "https://github.com/esorezekiel100/https-github.com-esorezekiel100-punique-s-",
  },
  {
    name: "Mark's Garage",
    desc: "Auto service brand site for a workshop in Naxxar, Malta.",
    tech: ["React", "TypeScript"],
    img: marksGarage,
    live: "https://mark-s-garage.vercel.app",
    code: "https://github.com/esorezekiel100/mark-sGarage",
  },
  {
    name: "VertexBuild Co.",
    desc: "Construction company site with services, projects and quotes.",
    tech: ["React", "Tailwind"],
    img: vertexbuild,
    live: "https://vertex-build-co.vercel.app",
    code: "https://github.com/esorezekiel100/https-github.com-esorezekiel100-VertexBuild-Co",
  },
  {
    name: "USA Logistics",
    desc: "Logistics and transport company site with tracking-style UI.",
    tech: ["React", "TypeScript"],
    img: usaLogistics,
    live: "https://usa-logistic-transport.vercel.app",
    code: "https://github.com/esorezekiel100/https-github.com-esorezekiel100-USA-logistic-and-transport",
  },
  {
    name: "Agro-Market",
    desc: "Agricultural marketplace frontend for produce buyers and sellers.",
    tech: ["JavaScript", "Tailwind"],
    img: agroMarket,
    live: "https://agro-market-red.vercel.app",
    code: "https://github.com/esorezekiel100/Agro-market",
  },
  {
    name: "Newbreed Worship Centre",
    desc: "Church website with events, sermons and community sections.",
    tech: ["React", "TypeScript"],
    img: newbreed,
    live: "https://newbred-worship-center-intl.vercel.app",
    code: "https://github.com/esorezekiel100/https-github.com-esorezekiel100-NEWBRED-WORSHIP-CENTER",
  },
  {
    name: "Fundora",
    desc: "Fundraising platform interface with campaign cards and dashboards.",
    tech: ["React", "TypeScript"],
    img: fundora,
    live: "https://fundora-self.vercel.app",
    code: "https://github.com/esorezekiel100/Fundora",
  },
];

const earlier = [
  { name: "Solar-Max", desc: "Solar energy landing page", code: "https://github.com/esorezekiel100/Solar-Max" },
  { name: "SpiceDesk", desc: "Restaurant mobile app UI", code: "https://github.com/esorezekiel100/SpiceDesk" },
  { name: "kings-view", desc: "React / Vite frontend build", code: "https://github.com/esorezekiel100/kings-view" },
  { name: "OptimaCare", desc: "Healthcare frontend", code: "https://github.com/esorezekiel100/OptimaCare" },
  { name: "EP-CREATIVE", desc: "Creative agency site", code: "https://github.com/esorezekiel100/EP-CREATIVE" },
  { name: "nextnews", desc: "News and media frontend", code: "https://github.com/esorezekiel100/nextnews" },
];


const skills = [
  ["Base", "HTML5 / CSS3"],
  ["Logic", "JavaScript (ES6+)"],
  ["Framework", "React / Vite"],
  ["Styling", "Tailwind CSS"],
  ["Responsive", "Mobile First"],
  ["Design", "UI/UX Principles"],
  ["Version", "Git / GitHub"],
  ["Performance", "Core Web Vitals"],
];

const packages = [
  {
    name: "Landing Page",
    price: "$350",
    note: "from / one page",
    time: "3–5 days",
    items: [
      "One high-converting page",
      "Mobile-first responsive build",
      "Contact / WhatsApp integration",
      "Basic SEO + speed tuning",
      "1 round of revisions",
    ],
    featured: false,
  },
  {
    name: "Business Website",
    price: "$750",
    note: "from / 4–6 pages",
    time: "1–2 weeks",
    items: [
      "Up to 6 custom pages",
      "Bespoke design, no templates",
      "Animations & interactions",
      "SEO, analytics & performance pass",
      "2 rounds of revisions",
      "30 days post-launch support",
    ],
    featured: true,
  },
  {
    name: "Web App / Custom",
    price: "$1,500",
    note: "from / scoped per project",
    time: "3+ weeks",
    items: [
      "Dashboards, portals, product UIs",
      "React + Tailwind architecture",
      "API / backend integration",
      "Accessibility & QA",
      "Ongoing retainer available",
    ],
    featured: false,
  },
];

const HOURLY = "$25/hour";


function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${Math.min(delay, 240)}ms` }}
      className={`transition-[opacity,transform] duration-500 ease-out-expo motion-reduce:transition-none ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const marqueeWords = [
  "Web Design",
  "Frontend Engineering",
  "Landing Pages",
  "Brand Sites",
  "React & Tailwind",
  "Motion & Interaction",
];

function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border py-5 mb-32 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 will-change-transform">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 gap-10" aria-hidden={dup === 1}>
            {marqueeWords.map((w) => (
              <span
                key={w}
                className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
              >
                {w}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCarousel() {
  const [viewportRef, embla] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const syncSelected = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    syncSelected();
    embla.on("select", syncSelected);
    embla.on("reInit", syncSelected);
    return () => {
      embla.off("select", syncSelected);
      embla.off("reInit", syncSelected);
    };
  }, [embla, syncSelected]);

  useEffect(() => {
    if (!embla || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => embla.scrollNext(), 5500);
    return () => window.clearInterval(timer);
  }, [embla, paused]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      embla?.scrollPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      embla?.scrollNext();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured client projects"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      className="outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <div ref={viewportRef} className="overflow-hidden">
        <div className="flex touch-pan-y gap-4 sm:gap-6">
          {featured.map((project, index) => (
            <article
              key={project.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${featured.length}: ${project.name}`}
              className="group min-w-0 flex-[0_0_88%] sm:flex-[0_0_72%] lg:flex-[0_0_62%]"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-[4/3] overflow-hidden border border-border bg-card"
              >
                <img
                  src={project.img}
                  alt={`Screenshot of the ${project.name} website built by Esor Ezekiel`}
                  loading={index === 0 ? "eager" : "lazy"}
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover object-top transition-[transform,filter] duration-500 ease-out-expo group-hover:scale-[1.025] group-hover:saturate-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-8">
                  <span>
                    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.25em] text-signal">
                      {project.tech.join(" / ")}
                    </span>
                    <span className="block text-2xl font-extrabold uppercase sm:text-4xl">{project.name}</span>
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center border border-foreground/30 bg-background/50 backdrop-blur transition-colors group-hover:border-signal group-hover:text-signal">
                    <ArrowRight aria-hidden="true" />
                  </span>
                </span>
              </a>
              <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                <a href={project.code} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-signal">
                  View code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <div className="h-px flex-1 overflow-hidden bg-border" aria-hidden="true">
          <span className="carousel-progress block h-full w-full bg-signal" style={{ transform: `scaleX(${(selected + 1) / featured.length})` }} />
        </div>
        <span className="min-w-14 font-mono text-[10px] text-signal" aria-live="polite">
          {String(selected + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1" aria-label="Choose project slide">
          {featured.map((project, index) => (
            <Button
              key={project.name}
              variant="ghost"
              size="icon"
              onClick={() => embla?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}: ${project.name}`}
              aria-current={selected === index ? "true" : undefined}
              className="group/indicator min-h-11 min-w-11 rounded-none hover:bg-transparent"
            >
              <span className={`block h-1 transition-all duration-300 ${selected === index ? "w-7 bg-signal" : "w-3 bg-muted-foreground group-hover/indicator:bg-foreground"}`} />
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => embla?.scrollPrev()} aria-label="Previous project" className="min-h-11 min-w-11 rounded-none border-border bg-transparent hover:border-signal hover:bg-signal hover:text-signal-foreground">
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => embla?.scrollNext()} aria-label="Next project" className="min-h-11 min-w-11 rounded-none border-border bg-transparent hover:border-signal hover:bg-signal hover:text-signal-foreground">
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-signal selection:text-signal-foreground">

      <nav
        className={`fixed top-0 w-full z-50 transition-[background-color,border-color,padding] duration-200 ${
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl py-2"
            : "border-b border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative grid size-10 place-items-center border border-border bg-card transition-colors duration-200 group-hover:border-accent">
              <img
                src={logo}
                alt="EP Studio logo"
                width={40}
                height={40}
                className="relative size-7 object-contain"
              />
            </span>
            <span className="font-mono text-sm tracking-[0.2em] uppercase font-bold">
              EP <span className="text-accent">Studio</span>
            </span>
          </a>
          <div className="flex items-center gap-6 sm:gap-8 text-[10px] font-mono uppercase tracking-widest">
            <Link
              to="/services"
              className="relative hidden sm:inline-block hover:text-accent transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </Link>
            {[
              ["Work", "#work"],
              ["About", "#about"],
              ["Rates", "#rates"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative hidden sm:inline-block hover:text-accent transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
            <Link
              to="/portal"
              className="hover:text-accent transition-colors"
            >
              Client login
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="bg-accent px-4 py-2 text-accent-foreground font-bold transition-colors hover:bg-signal hover:text-signal-foreground"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <main id="top" className="pt-32 pb-24">
        <section className="hero-enter mx-auto mb-24 grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Available for new projects
              </span>
            </div>
            <h1 className="mb-8 text-5xl font-extrabold uppercase leading-[0.84] sm:text-7xl md:text-8xl">
              <span className="block">We build</span>
              <span className="block text-signal">web experiences</span>
              <span className="block">that convert.</span>
            </h1>
            <p className="max-w-[42ch] text-lg text-muted-foreground mb-10">
              EP Studio is the design and frontend practice of Esor Ezekiel — fast, responsive,
              pixel-perfect websites for businesses that want to look serious online.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-xs font-medium uppercase tracking-widest text-accent-foreground transition-colors duration-200 hover:bg-signal hover:text-signal-foreground"
              >
                Start your project
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-2 py-4 font-mono text-xs uppercase tracking-widest text-muted-foreground underline underline-offset-8 decoration-border hover:text-foreground hover:decoration-accent transition-colors duration-200"
              >
                View our work
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <img
              src={portrait}
              alt="Esor Ezekiel, founder of EP Studio, standing in front of a large glowing sun"
              width={1080}
              height={1350}
              fetchPriority="high"
              decoding="async"
              className="relative z-10 aspect-[4/5] w-full border border-border object-cover saturate-[0.9]"
            />
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className="absolute z-20 -bottom-5 -left-5 size-20 border border-border bg-background/90 p-3 backdrop-blur"
            />
          </div>
        </section>

        <Marquee />


        <section id="about" className="max-w-7xl mx-auto px-6 mb-32">
          <Reveal>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-lg text-muted-foreground max-w-[60ch]">
              <p>
                I'm a self-driven frontend developer focused on the space where interface design
                meets engineering. What drives me is the detail: the spacing that finally lands, the
                interaction that feels effortless, the page that loads before you notice it.
              </p>
              <p>
                I work daily with HTML5, CSS3, JavaScript, Tailwind CSS and React, shipping
                responsive, accessible interfaces for landing pages, product UIs and client sites —
                available for freelance work and full-time roles.
              </p>
            </div>
          </div>
          </Reveal>
        </section>

        <section id="work" className="max-w-7xl mx-auto px-6 mb-32">
          <Reveal>
          <div className="flex justify-between items-end border-b border-border pb-6 mb-16">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Selected Client Work
            </h2>
            <span className="font-mono text-[10px] text-muted-foreground">
              ({featured.length + gridProjects.length + earlier.length} Projects)
            </span>
          </div>
          </Reveal>

          <Reveal><ProjectCarousel /></Reveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 60}>
            <article
              className="h-full border border-border bg-card/50 p-5 transition-[transform,border-color,background-color] duration-200 group hover:-translate-y-1 hover:border-signal/50 hover:bg-card"
            >
              <a href={p.live} target="_blank" rel="noreferrer" className="block">
                <img
                  src={p.img}
                  alt={`Screenshot of the ${p.name} website built by Esor Ezekiel`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="mb-6 aspect-[16/10] w-full border-b border-border bg-secondary object-cover object-top saturate-[0.9] transition-[filter,transform] duration-300 group-hover:scale-[1.015] group-hover:saturate-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </a>
              <h4 className="text-xl font-bold mb-2">{p.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:opacity-80"
                >
                  Live Demo
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  View Code
                </a>
              </div>
            </article>
            </Reveal>
          ))}
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-8">
              More Builds
            </h2>
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {earlier.map((p) => (
              <li key={p.name} className="border-b border-border">
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-baseline justify-between gap-4 py-5 group"
                >
                  <span className="font-bold transition-colors group-hover:text-signal">
                    {p.name}
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground text-right">
                    {p.desc}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>


        <section className="max-w-7xl mx-auto px-6 mb-32 py-24 border-y border-border">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <h2 className="text-4xl font-extrabold uppercase mb-4">
                Technical <br />
                <span className="text-signal">Skillset</span>
              </h2>
              <p className="text-muted-foreground">
                Built on a foundation of precision and performance optimization.
              </p>
            </Reveal>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
              {skills.map(([label, value], i) => (
                <Reveal key={value} delay={Math.min(i * 40, 240)} className="space-y-2">
                  <span className="block text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    {label}
                  </span>
                  <p className="font-bold">{value}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative max-w-7xl mx-auto px-6 mb-32" aria-labelledby="testimonials-heading">
          <Reveal>
            <div className="mb-12 grid gap-8 border-b border-border pb-9 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  EP Studio / Testimonials
                </p>
                <h2 id="testimonials-heading" className="text-4xl font-extrabold uppercase sm:text-5xl">
                  Voices of <span className="text-signal">impact.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
                Real words from people who trusted EP Studio to bring their ideas to life.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                quote:
                  "EP Studio understood our vision and turned it into a polished digital experience. The attention to detail, communication and final delivery were excellent.",
                name: "Shola Anthony",
                role: "Cyberagris",
                initials: "SA",
              },
              {
                quote:
                  "Working with EP Studio was smooth from start to finish. The website feels modern, works beautifully on every screen and presents the brand with confidence.",
                name: "Celestine Junnior",
                role: "Client",
                initials: "CJ",
              },
              {
                quote:
                  "Esor brings creativity and technical skill together in a way that makes the entire process easy. The result was professional, fast and better than expected.",
                name: "Clement Faith",
                role: "Client",
                initials: "CF",
              },
            ].map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={i * 60}>
                <blockquote className="testimonial-card group relative flex min-h-[360px] h-full overflow-hidden border border-border bg-card/55 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 sm:p-8">
                  <span className="testimonial-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-accent/5 blur-xl" aria-hidden="true" />
                  <div className="relative flex w-full flex-col justify-between gap-10">
                    <div>
                      <div className="mb-8 flex items-start justify-between">
                        <span className="font-editorial text-7xl italic leading-none text-signal/35 transition-colors duration-300 group-hover:text-signal" aria-hidden="true">
                          “
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="font-editorial text-xl italic leading-relaxed text-foreground/90 text-pretty sm:text-[1.35rem]">
                        {testimonial.quote}
                      </p>
                    </div>
                    <footer className="flex items-center gap-4 border-t border-border pt-6">
                      <span className="grid size-11 shrink-0 place-items-center border border-signal/40 bg-signal/10 font-mono text-[11px] font-bold text-signal" aria-hidden="true">
                        {testimonial.initials}
                      </span>
                      <cite className="block min-w-0 not-italic">
                        <span className="block text-sm font-semibold uppercase tracking-wider">{testimonial.name}</span>
                        <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                          {testimonial.role}
                        </span>
                      </cite>
                    </footer>
                  </div>
                </blockquote>
              </Reveal>
            ))}
          </div>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex -space-x-2" aria-hidden="true">
                {["SA", "CJ", "CF"].map((initials) => (
                  <span key={initials} className="grid size-9 place-items-center border-2 border-background bg-secondary font-mono text-[9px] font-bold text-signal">
                    {initials}
                  </span>
                ))}
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Three client voices <span className="mx-2 text-accent">✦</span> One standard of excellence
              </p>
            </div>
          </Reveal>
        </section>

        <section id="rates" className="max-w-7xl mx-auto px-6 mb-32">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border pb-6 mb-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Rates & Packages
              </h2>
              <p className="font-mono text-[11px] text-muted-foreground">
                Hourly: <span className="text-foreground font-bold">{HOURLY}</span> · Fixed quotes
                available
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 120}>
                <div
                  className={`flex h-full flex-col border p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                    pkg.featured
                      ? "border-accent/40 bg-accent/5 shadow-[0_30px_80px_-50px_var(--accent)]"
                      : "border-white/10 bg-white/5 hover:border-accent/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {pkg.name}
                    </span>
                    {pkg.featured && (
                      <span className="rounded-full bg-accent px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-accent-foreground">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-4xl sm:text-5xl font-extrabold tracking-tighter">{pkg.price}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {pkg.note}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-accent">Delivery {pkg.time}</p>
                  <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-accent">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-8 block rounded-full px-6 py-4 text-center font-mono text-[11px] uppercase tracking-widest transition-all ${
                      pkg.featured
                        ? "bg-accent text-accent-foreground hover:shadow-[0_0_35px_-6px_var(--accent)]"
                        : "border border-white/20 hover:border-accent hover:text-accent"
                    }`}
                  >
                    Get a quote
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 max-w-2xl font-mono text-[11px] leading-relaxed text-muted-foreground">
              All prices are starting points and depend on scope. 50% upfront, 50% on delivery.
              Ongoing maintenance and retainers quoted separately.
            </p>
          </Reveal>
        </section>


        <section id="contact" className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="relative overflow-hidden border border-border bg-card/50 p-10 sm:p-12 lg:p-20">
              <div className="relative text-center">
                <img
                  src={logo}
                  alt="EP Studio logo"
                  loading="lazy"
                  width={80}
                  height={80}
                  className="mx-auto size-16 mb-8"
                />
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
                  Let's build yours.
                </h2>
                <p className="max-w-xl mx-auto text-muted-foreground mb-12">
                  Tell EP Studio about your project — websites, landing pages, product interfaces.
                  Fastest reply is on WhatsApp.
                </p>
              </div>

              <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { label: "WhatsApp", value: PHONE, href: WHATSAPP },
                  { label: "Call", value: PHONE, href: `tel:+234${PHONE.slice(1)}` },
                  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                  { label: "LinkedIn", value: "Esor Ezekiel", href: LINKEDIN },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group border border-border bg-background/40 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-signal/50"
                  >
                    <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
                      {c.label}
                    </span>
                    <span className="block text-sm font-bold break-words group-hover:text-accent transition-colors">
                      {c.value}
                    </span>
                  </a>
                ))}
              </div>

              <div className="relative mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent text-accent-foreground px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:shadow-[0_0_40px_-6px_var(--accent)] transition-shadow"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 px-10 py-5 rounded-full font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 pb-28 md:pb-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-border">
        <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <img src={logo} alt="" aria-hidden="true" loading="lazy" width={24} height={24} className="size-6" />
          © {new Date().getFullYear()} EP Studio — Esor Ezekiel
        </span>
        <div className="flex flex-wrap justify-center gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <Link to="/services" className="hover:text-accent">
            Services
          </Link>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-accent">
            WhatsApp
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-accent">
            Email
          </a>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/90 backdrop-blur-xl px-4 py-3 flex gap-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a
          href="#rates"
          className="flex-1 rounded-full border border-white/20 py-3 text-center font-mono text-[10px] uppercase tracking-widest"
        >
          See Rates
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full bg-accent py-3 text-center font-mono text-[10px] font-bold uppercase tracking-widest text-accent-foreground"
        >
          WhatsApp
        </a>
      </div>


    </div>
  );
}
