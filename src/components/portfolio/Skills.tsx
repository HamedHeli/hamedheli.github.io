const groups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "R", "Bash"],
  },
  {
    title: "ML / DL",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "HuggingFace"],
  },
  {
    title: "Data",
    items: ["pandas", "NumPy", "Polars", "Spark", "DuckDB"],
  },
  {
    title: "Tools",
    items: ["Jupyter", "Docker", "MLflow", "Weights & Biases", "Git"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="border-y border-border bg-secondary/20">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            // stack
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Tools I work with
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-border bg-card-gradient p-5 shadow-card"
            >
              <h3 className="mb-3 font-mono text-sm text-primary">{g.title}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-foreground/90"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
