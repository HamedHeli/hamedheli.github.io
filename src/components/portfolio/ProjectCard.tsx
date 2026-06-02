import { Github, ExternalLink, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const KaggleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.825 13.05c.09 0 .18-.015.255-.045.09-.015.165-.06.24-.12.075-.045.12-.105.165-.18.045-.075.06-.165.06-.27V9.72c0-.105-.015-.195-.06-.27-.045-.075-.09-.135-.165-.18-.075-.045-.15-.09-.24-.12-.075-.03-.165-.045-.255-.045H17.25v4.17h1.575c.09 0 .18-.015.255-.045zm-2.325-4.68c.3 0 .585.045.84.135.27.09.495.21.69.375.195.165.345.36.45.6.12.24.165.51.165.81v2.115c0 .3-.045.57-.165.81-.105.24-.255.435-.45.6-.195.165-.42.285-.69.375-.255.09-.54.135-.84.135H14.25V8.37h2.25zm-4.41 4.68c.09 0 .18-.015.255-.045.09-.015.165-.06.24-.12.075-.045.12-.105.165-.18.045-.075.06-.165.06-.27V9.72c0-.105-.015-.195-.06-.27-.045-.075-.09-.135-.165-.18-.075-.045-.15-.09-.24-.12-.075-.03-.165-.045-.255-.045H11.25v4.17h1.575c.09 0 .18-.015.255-.045zm-2.325-4.68c.3 0 .585.045.84.135.27.09.495.21.69.375.195.165.345.36.45.6.12.24.165.51.165.81v2.115c0 .3-.045.57-.165.81-.105.24-.255.435-.45.6-.195.165-.42.285-.69.375-.255.09-.54.135-.84.135H8.25V8.37h2.25zm-4.155 4.68h1.95V8.37H4.125v4.68zM3 6h6.75v9H3V6z"/>
  </svg>
);

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
  kaggleUrl?: string | null; // null hides the button
  pubmedUrl?: string | null; // null hides the button
  arxivUrl?: string | null; // null hides the button
  thesisUrl?: string | null;
  thesisLabel?: string;
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
          0{index + 1} / {index === 0 ? "Notebook" : index === 1 ? "Kaggle Project" : index === 2 ? "Publication" : "Ph.D. Thesis"}
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
        {project.viewerUrl !== null && (
          <Button asChild size="sm" variant="outline-soft">
            <a href={viewerUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> {project.viewerLabel ?? "nbviewer"}
            </a>
          </Button>
        )}
        {project.kaggleUrl !== undefined && project.kaggleUrl !== null && (
          <Button asChild size="sm" variant="outline-soft">
            <a href={project.kaggleUrl} target="_blank" rel="noreferrer">
              <KaggleIcon className="mr-1.5 h-3.5 w-3.5" /> Kaggle
            </a>
          </Button>
        )}
        {project.pubmedUrl !== undefined && project.pubmedUrl !== null && (
          <Button asChild size="sm" variant="outline-soft">
            <a href={project.pubmedUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> PubMed
            </a>
          </Button>
        )}
        {project.extraUrl !== null && (
          <Button asChild size="sm" variant="ghost-glow">
            <a href={extraUrl} target="_blank" rel="noreferrer">
              {project.extraLabel ?? "Open in Colab"}
            </a>
          </Button>
        )}
        {project.arxivUrl !== undefined && project.arxivUrl !== null && (
          <Button asChild size="sm" variant="link">
            <a href={project.arxivUrl} target="_blank" rel="noreferrer">
              <FileText className="mr-1.5 h-3.5 w-3.5" /> View on arXiv
            </a>
          </Button>
        )}
      </div>
    </article>
  );
};
