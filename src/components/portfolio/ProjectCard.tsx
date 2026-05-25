import { Github, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  notebook: string; // path inside the repo, e.g. "notebooks/cnn.ipynb"
  repo: string; // full repo, e.g. "username/repo"
  branch?: string;
  highlight?: string;
  githubUrl?: string; // optional override
  viewerUrl?: string | null; // null hides the button
  viewerLabel?: string;
  extraUrl?: string | null; // null hides the button
  extraLabel?: string;
}

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const branch = project.branch ?? "main";
  const githubUrl = project.githubUrl ?? `https://github.com/${project.repo}/blob/${branch}/${project.notebook}`;
  const viewerUrl = project.viewerUrl === undefined
    ? `https://nbviewer.org/github/${project.repo}/blob/${branch}/${project.notebook}`
    : project.viewerUrl;
  const extraUrl = project.extraUrl === undefined
    ? `https://colab.research.google.com/github/${project.repo}/blob/${branch}/${project.notebook}`
    : project.extraUrl;

  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-border bg-card-gradient p-6 shadow-card transition-smooth hover:border-primary/40 hover:shadow-glow animate-fade-up"
      style={{ animationDelay: `${index * 80}ms`, opacity: 0 }}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          0{index + 1} / notebook
        </span>
        <BookOpen className="h-4 w-4 text-primary opacity-70 transition-smooth group-hover:opacity-100" />
      </div>

      <h3 className="font-sans text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.highlight && (
        <div className="mt-4 rounded-lg border border-border bg-secondary/40 px-3 py-2 font-mono text-xs text-foreground/80">
          → {project.highlight}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Button asChild size="sm" variant="secondary">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <Github className="mr-1.5 h-3.5 w-3.5" /> GitHub
          </a>
        </Button>
        <Button asChild size="sm" variant="outline-soft">
          <a href={nbviewerUrl} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> nbviewer
          </a>
        </Button>
        <Button asChild size="sm" variant="ghost-glow">
          <a href={colabUrl} target="_blank" rel="noreferrer">
            Open in Colab
          </a>
        </Button>
      </div>
    </article>
  );
};
