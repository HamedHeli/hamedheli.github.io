export const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/15 text-primary">
            {"{}"}
          </span>
          ml.portfolio
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#projects" className="transition-smooth hover:text-foreground">Projects</a>
          <a href="#skills" className="transition-smooth hover:text-foreground">Stack</a>
          <a href="#contact" className="transition-smooth hover:text-foreground">Contact</a>
        </nav>
      </div>
    </header>
  );
};
