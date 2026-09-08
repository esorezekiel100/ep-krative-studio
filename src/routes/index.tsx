import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/esor-portrait.jpg.asset.json";
import kingsView from "@/assets/kings-view.jpg";
import optimaCare from "@/assets/optimacare.jpg";
import epCreative from "@/assets/ep-creative.jpg";
import nextNews from "@/assets/nextnews.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Esor Ezekiel — Frontend Web Developer" },
      {
        name: "description",
        content:
          "Esor Ezekiel is a frontend web developer building fast, responsive, pixel-perfect web experiences with React, Tailwind CSS and modern JavaScript.",
      },
      { property: "og:title", content: "Esor Ezekiel — Frontend Web Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Esor Ezekiel: React, Tailwind CSS and JavaScript projects built for speed, accessibility and detail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/esorezekiel";
const LINKEDIN = "https://www.linkedin.com/in/esor-ezekiel-173402212";
const EMAIL = "esorezekiel@gmail.com";

const indexProjects = [
  {
    n: "01",
    name: "Solar-Max",
    desc: "Full-scale landing page for a premium solar energy company.",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    n: "02",
    name: "SpiceDesk",
    desc: "Dark-themed mobile app UI for a premium restaurant experience.",
    tech: ["React", "Tailwind", "Dark UI"],
  },
];

const gridProjects = [
  {
    name: "kings-view",
    img: kingsView,
    desc: "Vite-powered frontend build with a clean, data-dense interface.",
  },
  {
    name: "OptimaCare",
    img: optimaCare,
    desc: "Healthcare-themed frontend prioritising accessibility and speed.",
  },
  {
    name: "EP-CREATIVE",
    img: epCreative,
    desc: "Creative agency site built on core HTML, CSS and JavaScript.",
  },
  {
    name: "nextnews",
    img: nextNews,
    desc: "News and media frontend with a fast, content-first layout.",
  },
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background">
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <span className="font-mono text-sm tracking-tighter uppercase font-bold text-accent">
            Esor Ezekiel
          </span>
          <div className="flex gap-6 sm:gap-8 text-[10px] font-mono uppercase tracking-widest">
            <a href="#work" className="hover:text-accent transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6 mb-32 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 animate-fade-up">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8">
              Frontend <span className="text-accent">Web</span> Developer
            </h1>
            <p className="max-w-[40ch] text-lg text-muted-foreground mb-10">
              I'm Esor Ezekiel. I build fast, responsive, pixel-perfect web experiences that bridge
              the gap between complex logic and human interaction.
            </p>
            <a
              href="#work"
              className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-accent transition-all duration-300"
            >
              View My Work
            </a>
          </div>
          <div className="lg:col-span-5 relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -inset-20 bg-accent/20 blur-[100px] rounded-full z-0" />
            <img
              src={portrait.url}
              alt="Portrait of Esor Ezekiel standing in front of a large glowing sun"
              width={1080}
              height={1350}
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-2xl outline-1 -outline-offset-1 outline-white/10"
            />
          </div>
        </section>

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
          <div className="flex justify-between items-end border-b border-border pb-6 mb-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Selected Projects
            </h2>
            <span className="font-mono text-[10px] text-muted-foreground">(06 Total)</span>
          </div>

          <div>
            {indexProjects.map((p) => (
              <article
                key={p.name}
                className="group border-b border-border py-12 flex flex-col md:flex-row gap-8 md:items-center"
              >
                <span className="font-mono text-sm text-muted-foreground shrink-0 w-12">{p.n}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-muted-foreground max-w-md">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest shrink-0">
                  <a
                    href={GITHUB}
                    className="underline underline-offset-4 decoration-white/20 hover:decoration-accent"
                  >
                    Live Demo
                  </a>
                  <a
                    href={GITHUB}
                    className="underline underline-offset-4 decoration-white/20 hover:decoration-accent"
                  >
                    View Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridProjects.map((p) => (
            <article
              key={p.name}
              className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group"
            >
              <img
                src={p.img}
                alt={`Preview of the ${p.name} project`}
                loading="lazy"
                width={768}
                height={768}
                className="w-full aspect-square mb-6 rounded-lg object-cover bg-white/5"
              />
              <h4 className="text-xl font-bold mb-2">{p.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest">
                <a href={GITHUB} className="group-hover:text-accent transition-colors">
                  Live Demo
                </a>
                <a href={GITHUB} className="group-hover:text-accent transition-colors">
                  View Code
                </a>
              </div>
            </article>
          ))}
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
