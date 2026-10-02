import { BookOpen, GraduationCap, BarChart3, FlaskConical } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: "5+",
    label: "Peer-Reviewed Publications",
    sub: "JAHA, Pharmacotherapy, arXiv",
  },
  {
    icon: GraduationCap,
    value: "Ph.D.",
    label: "University of British Columbia",
    sub: "Medical Data Processing and Modeling",
  },
  {
    icon: BarChart3,
    value: "Causal Inference",
    label: "Survival Analysis · IPCW",
    sub: "Population-scale clinical data",
  },
  {
    icon: FlaskConical,
    value: "Python · R",
    label: "Dual-Language Expertise",
    sub: "scikit-learn, PyTorch, tidyverse",
  },
];

export const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            // about
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Research Background
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I'm a PhD-trained researcher bridging applied statistics and machine learning for real-world
            healthcare problems. My work ranges from developing novel biostatistical methods — published
            and peer-reviewed — to building ML models on large linked administrative datasets via{" "}
            <span className="text-foreground/80">Population Data BC</span>. I bring both the methodological
            rigour of academic research and the practical instincts to ship working code.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card-gradient p-5 shadow-card transition-smooth hover:border-primary/30 hover:shadow-glow"
            >
              <s.icon className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold tracking-tight leading-none">{s.value}</p>
                <p className="mt-1.5 text-sm font-medium text-foreground/80">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
