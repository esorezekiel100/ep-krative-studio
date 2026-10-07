import { Link, createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, MotionConfig, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { media } from "@/lib/site-media";
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


const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease, delay: Math.min(delay, 300) / 1000 }}
    >
      {children}
    </motion.div>
  );
}

function GradientPill({ href, children, external = true, className = "" }: { href: string; children: ReactNode; external?: boolean; className?: string }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-[transform,box-shadow] duration-300 hover:scale-105 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
    >
      {children}
    </a>
  );
}

const clients = ["Cyberagris", "Oppora", "BridgeView", "MarketFlow", "VertexBuild", "Fundora", "Newbreed", "USA Logistics"];

function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border py-7 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]" aria-label="Clients and partners">
      <div className="flex w-max animate-marquee gap-10">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 gap-10" aria-hidden={dup === 1}>
            {clients.map((c) => (
              <span key={c} className="flex items-center gap-10 font-display text-2xl uppercase text-foreground/85 sm:text-3xl">
                {c}
                <span className="text-gradient-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 80, damping: 20 });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 20 });

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="relative overflow-hidden px-4 pt-28 sm:px-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/3 size-[60vw] max-w-[760px] -translate-x-1/2 rounded-full bg-gradient-accent opacity-25 blur-[120px]" />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
        className="relative z-0 text-center font-display uppercase leading-[0.85] text-[clamp(3.5rem,15vw,15rem)]"
      >
        Hi, I'm <span className="block">Esor Ezekiel</span>
      </motion.h1>
      <motion.div
        style={{ x, y }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease, delay: 0.15 }}
        className="relative z-10 mx-auto -mt-[12vw] w-[min(78vw,420px)]"
      >
        <img
          src={portrait}
          alt="Esor Ezekiel, founder of EP Studio"
          width={853}
          height={1280}
          fetchPriority="high"
          className="aspect-[4/5] w-full rounded-[2rem] border border-border object-cover shadow-glow"
        />
        <img src={logo} alt="" aria-hidden="true" width={80} height={80} className="absolute -bottom-5 -left-5 size-16 rounded-2xl border border-border bg-background/80 p-2.5 backdrop-blur sm:size-20" />
      </motion.div>
      <div className="relative z-20 mx-auto mt-10 grid max-w-7xl gap-6 pb-14 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          <span className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground">
            <span className="size-2 rounded-full bg-gradient-accent" /> EP Studio — available for projects
          </span>
          Fast, responsive, pixel-perfect websites and web apps for businesses that want to look serious online.
        </p>
        <GradientPill href={WHATSAPP}>Contact me <ArrowRight className="size-4" aria-hidden="true" /></GradientPill>
      </div>
    </section>
  );
}

function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.88, 1]);
  const tiles = [
    { ...media.gallery[0], cls: "col-span-2 row-span-2" },
    { ...media.gallery[1], cls: "" },
    { ...media.gallery[2], cls: "row-span-2" },
    { src: oppora, alt: "Oppora website", w: 1280, h: 800, cls: "" },
  ];
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 py-20 sm:px-8" aria-label="Visual gallery">
      <motion.div style={{ scale }} className="grid auto-rows-[140px] grid-cols-2 gap-4 sm:auto-rows-[200px] md:grid-cols-4">
        {tiles.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: i * 0.08 }}
            className={`overflow-hidden rounded-[1.75rem] border border-border ${t.cls}`}
          >
            <img src={t.src} alt={t.alt} width={t.w} height={t.h} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const up = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const down = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const rot = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  return (
    <section id="about" ref={ref} className="relative overflow-hidden px-4 py-32 sm:px-8">
      <motion.img style={{ y: up, rotate: rot }} src={media.icons} alt="" aria-hidden="true" width={1024} height={1024} loading="lazy" className="animate-float pointer-events-none absolute -left-10 top-10 w-40 sm:w-64" />
      <motion.img style={{ y: down, rotate: rot }} src={media.icons} alt="" aria-hidden="true" width={1024} height={1024} loading="lazy" className="animate-float pointer-events-none absolute -right-8 bottom-6 w-36 -scale-x-100 sm:w-56" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display uppercase leading-[0.9] text-[clamp(3.5rem,12vw,10rem)]">About me</h2>
        <p className="mx-auto mt-8 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
          I'm a self-driven frontend developer focused on the space where interface design meets engineering. I work daily with HTML5, CSS3, JavaScript, Tailwind CSS and React — shipping responsive, accessible interfaces for landing pages, product UIs and client sites.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {skills.map(([, v]) => (
            <span key={v} className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-wider text-foreground/80">{v}</span>
          ))}
        </div>
        <GradientPill href={WHATSAPP} className="mt-10">Start your project</GradientPill>
      </Reveal>
    </section>
  );
}

const services = [
  ["Frontend builds", "Pixel-perfect React and Tailwind interfaces, built mobile-first and fast."],
  ["Custom themes", "Bespoke brand sites and design systems — no templates, no shortcuts."],
  ["Full-stack development", "Dashboards, portals and web apps wired to real backends and auth."],
  ["Motion & performance", "Purposeful animation and Core Web Vitals tuning that converts."],
];

function Services() {
  return (
    <section id="services" className="theme-light rounded-t-[2.5rem] px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display uppercase leading-[0.9] text-[clamp(3.5rem,12vw,10rem)]">Services</h2>
          <Link to="/services" className="rounded-full border border-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background">
            Full services & pricing
          </Link>
        </Reveal>
        <ol>
          {services.map(([title, desc], i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.06 }}
              className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-6 border-t border-border py-8 last:border-b sm:gap-12"
            >
              <span className="font-display text-[clamp(3rem,9vw,7rem)] leading-none text-foreground/15">0{i + 1}</span>
              <div className="min-w-0 sm:flex sm:items-center sm:justify-between sm:gap-10">
                <h3 className="font-display text-3xl uppercase sm:text-5xl">{title}</h3>
                <p className="mt-2 max-w-sm text-muted-foreground sm:mt-0">{desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const stackCards = [
  { ...featured[0], category: "Opportunity platform", extra: [fundora, agroMarket] },
  { ...featured[1], category: "Automotive", extra: [marksGarage, usaLogistics] },
  { ...featured[2], category: "Food & beverage", extra: [punique, newbreed] },
  { ...featured[3], category: "E-commerce", extra: [vertexbuild, fundora] },
];

function Projects() {
  return (
    <section id="work" className="rounded-t-[2.5rem] bg-background px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display uppercase leading-[0.9] text-[clamp(3.5rem,12vw,10rem)]">Projects</h2>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            {featured.length + gridProjects.length + earlier.length} projects shipped
          </span>
        </Reveal>
        <div className="space-y-8">
          {stackCards.map((p, i) => (
            <article
              key={p.name}
              style={{ top: `${6 + i * 1.5}rem` }}
              className="sticky rounded-[2rem] border border-border bg-card p-5 shadow-[0_-20px_60px_-30px_rgb(0_0_0/0.8)] sm:p-8"
            >
              <div className="mb-6 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 sm:flex sm:justify-between">
                <span className="font-display text-5xl text-gradient-accent sm:text-6xl">0{i + 1}</span>
                <div className="min-w-0 sm:mr-auto sm:ml-6">
                  <h3 className="truncate font-display text-3xl uppercase sm:text-4xl">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.category} · {(p.tech ?? []).join(" / ")}</p>
                </div>
                <div className="col-span-2 flex gap-3">
                  <a href={p.live} target="_blank" rel="noreferrer" className="rounded-full border border-foreground/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-[transform,background-color,color] hover:scale-105 hover:bg-foreground hover:text-background">
                    Live project
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="rounded-full px-3 py-2.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground">
                    Code
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-[2fr_1fr_1fr] sm:gap-4">
                {[p.img, ...p.extra].map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt={j === 0 ? `Screenshot of ${p.name}` : ""}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className={`h-40 w-full rounded-[1.25rem] object-cover object-top sm:h-64 ${j === 0 ? "col-span-2 sm:col-span-1" : ""}`}
                  />
                ))}
              </div>
              <p className="mt-5 max-w-2xl text-sm text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoreWorkCarousel() {
  const [viewportRef, embla] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const sync = useCallback(() => embla && setSelected(embla.selectedScrollSnap()), [embla]);

  useEffect(() => {
    if (!embla) return;
    sync();
    embla.on("select", sync);
    embla.on("reInit", sync);
    return () => {
      embla.off("select", sync);
      embla.off("reInit", sync);
    };
  }, [embla, sync]);

  useEffect(() => {
    if (!embla || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => embla.scrollNext(), 5500);
    return () => window.clearInterval(t);
  }, [embla, paused]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-8" aria-labelledby="more-work">
      <Reveal className="mb-8 flex items-end justify-between gap-4">
        <h2 id="more-work" className="font-display text-4xl uppercase sm:text-6xl">More work</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => embla?.scrollPrev()} aria-label="Previous project" className="min-h-11 min-w-11 rounded-full bg-transparent">
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => embla?.scrollNext()} aria-label="Next project" className="min-h-11 min-w-11 rounded-full bg-transparent">
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </Reveal>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="More client projects"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { e.preventDefault(); embla?.scrollPrev(); }
          if (e.key === "ArrowRight") { e.preventDefault(); embla?.scrollNext(); }
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }}
        className="rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div ref={viewportRef} className="overflow-hidden">
          <div className="flex touch-pan-y gap-4">
            {gridProjects.map((p, i) => (
              <article key={p.name} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${gridProjects.length}: ${p.name}`} className="group min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]">
                <div className="h-full rounded-[1.75rem] border border-border bg-card p-4 transition-transform duration-300 group-hover:-translate-y-1.5">
                  <a href={p.live} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-[1.25rem]">
                    <img src={p.img} alt={`Screenshot of ${p.name}`} width={1280} height={800} loading="lazy" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </a>
                  <h3 className="mt-4 font-display text-2xl uppercase">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex gap-4 text-xs uppercase tracking-wider">
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-gradient-accent font-semibold">Live demo</a>
                    <a href={p.code} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">Code</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-1" aria-label="Choose project slide">
          {gridProjects.map((p, i) => (
            <button key={p.name} onClick={() => embla?.scrollTo(i)} aria-label={`Go to slide ${i + 1}: ${p.name}`} aria-current={selected === i ? "true" : undefined} className="grid min-h-11 min-w-11 place-items-center">
              <span className={`block h-1.5 rounded-full transition-all duration-300 ${selected === i ? "w-8 bg-gradient-accent" : "w-3 bg-foreground/30"}`} />
            </button>
          ))}
        </div>
      </div>
      <ul className="mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {earlier.map((p) => (
          <li key={p.name} className="border-b border-border">
            <a href={p.code} target="_blank" rel="noreferrer" className="flex items-baseline justify-between gap-4 py-4 hover:text-gradient-accent">
              <span className="font-semibold">{p.name}</span>
              <span className="text-right text-xs text-muted-foreground">{p.desc}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

const testimonials = [
  { quote: "EP Studio understood our vision and turned it into a polished digital experience. The attention to detail, communication and final delivery were excellent.", name: "Shola Anthony", role: "Cyberagris", initials: "SA" },
  { quote: "Working with EP Studio was smooth from start to finish. The website feels modern, works beautifully on every screen and presents the brand with confidence.", name: "Celestine Junnior", role: "Client", initials: "CJ" },
  { quote: "Esor brings creativity and technical skill together in a way that makes the entire process easy. The result was professional, fast and better than expected.", name: "Clement Faith", role: "Client", initials: "CF" },
];

function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-28 sm:px-8" aria-labelledby="testimonials-heading">
      <img src={media.icons} alt="" aria-hidden="true" width={1024} height={1024} loading="lazy" className="animate-float pointer-events-none absolute -top-10 right-2 w-24 sm:w-36" />
      <Reveal>
        <h2 id="testimonials-heading" className="mb-14 max-w-3xl font-display uppercase leading-[0.9] text-[clamp(2.75rem,8vw,6.5rem)]">
          What clients are <span className="text-gradient-accent">saying</span>
        </h2>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80} className={i === 1 ? "md:mt-12" : ""}>
            <blockquote className="flex h-full flex-col justify-between gap-10 rounded-[1.75rem] border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1.5">
              <p className="text-lg leading-relaxed text-foreground/90">“{t.quote}”</p>
              <footer className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-accent text-sm font-bold text-primary-foreground" aria-hidden="true">{t.initials}</span>
                <cite className="not-italic">
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">{t.role}</span>
                </cite>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Rates() {
  return (
    <section id="rates" className="mx-auto max-w-7xl px-4 pb-28 sm:px-8">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-5xl uppercase sm:text-7xl">Rates</h2>
        <p className="text-sm text-muted-foreground">Hourly: <span className="font-semibold text-foreground">{HOURLY}</span> · Fixed quotes available</p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {packages.map((pkg, i) => (
          <Reveal key={pkg.name} delay={i * 80}>
            <div className={`flex h-full flex-col rounded-[1.75rem] border p-7 transition-transform duration-300 hover:-translate-y-1.5 ${pkg.featured ? "border-transparent bg-gradient-accent text-primary-foreground shadow-glow" : "border-border bg-card"}`}>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] opacity-80">{pkg.name}</span>
                {pkg.featured && <span className="rounded-full bg-background/25 px-3 py-1 text-[10px] uppercase tracking-widest">Popular</span>}
              </div>
              <p className="font-display text-6xl">{pkg.price}</p>
              <p className="mt-2 text-xs uppercase tracking-widest opacity-75">{pkg.note} · {pkg.time}</p>
              <ul className="mt-7 flex-1 space-y-3 text-sm opacity-90">
                {pkg.items.map((item) => <li key={item}>✦ {item}</li>)}
              </ul>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`mt-8 rounded-full px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest transition-transform hover:scale-105 ${pkg.featured ? "bg-background text-foreground" : "border border-border hover:border-foreground"}`}>
                Get a quote
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-xs text-muted-foreground">All prices are starting points and depend on scope. 50% upfront, 50% on delivery.</p>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi EP Studio, I'm ${form.name} (${form.email}).\n\n${form.message}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };
  const field = "w-full rounded-2xl border border-border bg-card px-5 py-4 outline-none transition-colors focus:border-foreground";
  return (
    <section id="contact" className="theme-light rounded-t-[2.5rem] px-4 py-28 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display uppercase leading-[0.88] text-[clamp(3.25rem,10vw,8rem)]">Let's get in touch</h2>
          <ul className="mt-10 space-y-3 text-lg">
            <li><a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp · {PHONE}</a></li>
            <li><a href={`tel:+234${PHONE.slice(1)}`} className="hover:underline">Call · {PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="break-all hover:underline">{EMAIL}</a></li>
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <form onSubmit={submit} className="space-y-4">
            <label className="block"><span className="sr-only">Name</span>
              <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
            </label>
            <label className="block"><span className="sr-only">Email</span>
              <input required type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
            </label>
            <label className="block"><span className="sr-only">Message</span>
              <textarea required rows={6} placeholder="Tell me about your project" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={field} />
            </label>
            <button type="submit" className="w-full rounded-full bg-gradient-accent px-8 py-5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-glow">
              Send message
            </button>
            <p className="text-xs text-muted-foreground">Your message opens in WhatsApp, ready to send.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background px-4 pb-28 pt-6 sm:px-8 md:pb-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-card p-8 sm:p-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="EP Studio logo" width={48} height={48} loading="lazy" className="size-12" />
            <div>
              <p className="font-display text-2xl uppercase">EP Studio</p>
              <p className="text-sm text-muted-foreground">Esor Ezekiel</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Social</p>
            <ul className="space-y-2">
              <li><a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-gradient-accent">LinkedIn</a></li>
              <li><a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-gradient-accent">GitHub</a></li>
              <li><Link to="/services" className="hover:text-gradient-accent">Services</Link></li>
              <li><Link to="/portal" className="hover:text-gradient-accent">Client login</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
            <ul className="space-y-2">
              <li><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp · {PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="break-all">{EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div aria-hidden="true" className="mt-14 flex select-none items-end justify-between gap-2 font-display uppercase leading-none text-[clamp(4rem,17vw,15rem)]">
          <span className="text-gradient-accent">EP</span>
          <span className="flex gap-2 sm:gap-4">
            <span className="inline-block size-[0.6em] rounded-full bg-gradient-accent" />
            <span className="inline-block size-[0.6em] rotate-45 rounded-[0.15em] border-[0.06em] border-foreground" />
            <span className="inline-block size-[0.6em] rounded-t-full bg-foreground" />
          </span>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} EP Studio — Esor Ezekiel</p>
      </div>
    </footer>
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

  const links: [string, string][] = [["About", "#about"], ["Services", "#services"], ["Projects", "#work"], ["Rates", "#rates"], ["Contact", "#contact"]];

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground selection:bg-signal selection:text-signal-foreground">
        <nav className={`fixed inset-x-0 top-0 z-50 transition-[background-color,padding] duration-200 ${scrolled ? "bg-background/70 py-3 backdrop-blur-xl" : "py-5"}`}>
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 text-[11px] uppercase tracking-[0.2em] sm:px-8">
            <a href="#top" className="flex items-center gap-2 font-semibold">
              <img src={logo} alt="EP Studio logo" width={32} height={32} className="size-8" />
              EP Studio
            </a>
            {links.map(([label, href]) => (
              <a key={href} href={href} className="hidden transition-opacity hover:opacity-60 md:inline">{label}</a>
            ))}
            <Link to="/portal" className="hover:opacity-60">Client login</Link>
          </div>
        </nav>

        <main>
          <Hero />
          <Marquee />
          <Gallery />
          <About />
          <Services />
          <Projects />
          <MoreWorkCarousel />
          <Testimonials />
          <Rates />
          <Contact />
        </main>
        <Footer />

        <div className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-border bg-background/90 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
          <a href="#rates" className="flex-1 rounded-full border border-border py-3 text-center text-[11px] uppercase tracking-widest">See rates</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-gradient-accent py-3 text-center text-[11px] font-bold uppercase tracking-widest text-primary-foreground">WhatsApp</a>
        </div>
      </div>
    </MotionConfig>
  );
}
