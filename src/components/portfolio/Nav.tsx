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
          {[
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Stack" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.href.slice(1))
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="transition-smooth hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
