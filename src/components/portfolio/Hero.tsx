import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export const Hero = ({ githubUser }: { githubUser: string }) => {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="container relative mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-mono text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for collaboration
          </div>
          <h1 className="font-sans text-5xl font-bold tracking-tight md:text-7xl">
            Machine Learning
            <br />
            <span className="text-gradient">Projects & Notebooks</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            A curated collection of my work in deep learning, NLP, and data science —
            mostly built and explored inside Jupyter notebooks.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="hero">
              <a href="#projects">
                Browse projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline-soft">
              <a href={`https://github.com/${githubUser}`} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
