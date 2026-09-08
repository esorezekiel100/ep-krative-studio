import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import logo from "@/assets/ep-studio-logo.png";
import portrait from "@/assets/esor-portrait.jpg.asset.json";

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
    meta: [
      { title: "EP Studio — Web Design & Frontend Development" },
      {
        name: "description",
        content:
          "EP Studio, led by Esor Ezekiel, designs and builds fast, responsive, pixel-perfect websites and web apps with React, Tailwind CSS and modern JavaScript.",
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

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out-expo ${
        shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-10 blur-[6px]"
      }`}
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

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="absolute -top-40 -left-32 size-[42rem] rounded-full bg-accent/15 blur-[140px] animate-drift" />
        <div className="absolute top-1/2 -right-40 size-[38rem] rounded-full bg-accent/10 blur-[150px] animate-drift [animation-delay:-6s]" />
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl py-2"
            : "border-b border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative grid place-items-center size-10 rounded-xl bg-accent/10 ring-1 ring-accent/25 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
              <span className="absolute inset-0 rounded-xl bg-accent/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            {[
              ["Work", "#work"],
              ["About", "#about"],
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
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-accent-foreground font-bold hover:shadow-[0_0_30px_-4px_var(--accent)] transition-shadow"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <main id="top" className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6 mb-24 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="animate-fade-up flex items-center gap-3 mb-8">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Available for new projects
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8">
              <span className="block animate-fade-up">We build</span>
              <span className="block animate-fade-up [animation-delay:120ms] bg-[linear-gradient(100deg,var(--accent),oklch(0.9_0.16_85),var(--accent))] bg-[length:220%_auto] bg-clip-text text-transparent animate-shimmer">
                web experiences
              </span>
              <span className="block animate-fade-up [animation-delay:240ms]">that convert.</span>
            </h1>
            <p className="max-w-[42ch] text-lg text-muted-foreground mb-10 animate-fade-up [animation-delay:320ms]">
              EP Studio is the design and frontend practice of Esor Ezekiel — fast, responsive,
              pixel-perfect websites for businesses that want to look serious online.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:400ms]">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-accent transition-all duration-300"
              >
                View Our Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
              >
                Hire EP Studio
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative animate-fade-up [animation-delay:300ms] group">
            <div className="absolute -inset-20 bg-accent/20 blur-[100px] rounded-full z-0 animate-glow" />
            <img
              src={portrait.url}
              alt="Esor Ezekiel, founder of EP Studio, standing in front of a large glowing sun"
              width={1080}
              height={1350}
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-2xl outline-1 -outline-offset-1 outline-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className="absolute z-20 -bottom-6 -left-6 size-20 rounded-2xl bg-background/80 backdrop-blur p-3 ring-1 ring-white/10 animate-float"
            />
          </div>
        </section>

        <Marquee />


        <section id="about" className="max-w-7xl mx-auto px-6 mb-32">
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
        </section>

        <section id="work" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex justify-between items-end border-b border-border pb-6 mb-16">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Selected Client Work
            </h2>
            <span className="font-mono text-[10px] text-muted-foreground">
              ({featured.length + gridProjects.length + earlier.length} Projects)
            </span>
          </div>

          <div className="space-y-24">
            {featured.map((p, i) => (
              <article
                key={p.name}
                className="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className={`lg:col-span-7 block overflow-hidden rounded-2xl border border-white/10 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={p.img}
                    alt={`Screenshot of the ${p.name} website built by Esor Ezekiel`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </a>
                <div className="lg:col-span-5">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-3 group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-muted-foreground max-w-md">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 mt-5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest mt-8">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 decoration-accent hover:text-accent"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 decoration-white/20 hover:decoration-accent"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((p) => (
            <article
              key={p.name}
              className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group"
            >
              <a href={p.live} target="_blank" rel="noreferrer" className="block">
                <img
                  src={p.img}
                  alt={`Screenshot of the ${p.name} website built by Esor Ezekiel`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full aspect-[16/10] mb-6 rounded-lg object-cover object-top bg-white/5"
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
          ))}
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-8">
            More Builds
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {earlier.map((p) => (
              <li key={p.name} className="border-b border-border">
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-baseline justify-between gap-4 py-5 group"
                >
                  <span className="font-bold group-hover:text-accent transition-colors">
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
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Technical <br />
                <span className="text-accent">Skillset</span>
              </h2>
              <p className="text-muted-foreground">
                Built on a foundation of precision and performance optimization.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
              {skills.map(([label, value]) => (
                <div key={value} className="space-y-2">
                  <span className="block text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    {label}
                  </span>
                  <p className="font-bold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-12">
            Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <blockquote className="space-y-6">
              <p className="text-xl leading-snug text-pretty">
                "Placeholder — a short line of client feedback goes here once the first testimonial
                comes in."
              </p>
              <cite className="block not-italic">
                <span className="block text-sm font-bold">Client name</span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Role, Company
                </span>
              </cite>
            </blockquote>
            <blockquote className="space-y-6">
              <p className="text-xl leading-snug text-pretty">
                "Placeholder — peer or collaborator feedback about working together on a build."
              </p>
              <cite className="block not-italic">
                <span className="block text-sm font-bold">Peer name</span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Role, Company
                </span>
              </cite>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-6">
          <div className="bg-white/5 rounded-[40px] p-10 sm:p-12 lg:p-24 text-center border border-white/5">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
              Ready to build?
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-12">
              Currently accepting freelance projects and full-time inquiries. Let's create something
              meaningful.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <a
                href={`mailto:${EMAIL}`}
                className="bg-accent text-accent-foreground px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-opacity"
              >
                Send Email
              </a>
              <div className="flex gap-4 items-center">
                <a
                  href={GITHUB}
                  aria-label="GitHub profile"
                  className="size-12 rounded-full border border-white/20 grid place-items-center hover:bg-white/10 transition-colors"
                >
                  <span className="text-[10px] font-mono">GH</span>
                </a>
                <a
                  href={LINKEDIN}
                  aria-label="LinkedIn profile"
                  className="size-12 rounded-full border border-white/20 grid place-items-center hover:bg-white/10 transition-colors"
                >
                  <span className="text-[10px] font-mono">LI</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-border">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Esor Ezekiel
        </span>
        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <a href={LINKEDIN} className="hover:text-accent">
            LinkedIn
          </a>
          <a href={GITHUB} className="hover:text-accent">
            GitHub
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-accent">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
