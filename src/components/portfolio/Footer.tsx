import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = ({ githubUser }: { githubUser: string }) => {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> let's build something together
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} ML Portfolio. Built with Lovable.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg border border-border p-2.5 text-muted-foreground transition-smooth hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="rounded-lg border border-border p-2.5 text-muted-foreground transition-smooth hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="rounded-lg border border-border p-2.5 text-muted-foreground transition-smooth hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
