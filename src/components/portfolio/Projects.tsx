import { Project, ProjectCard } from "./ProjectCard";

const publications: Project[] = [
  {
    title: "biniLasso: Automated Cut-Point Detection",
    description:
      "A Lasso-based machine learning method that automatically detects optimal cut-points in high-dimensional survival data. Applied to population administrative data to redefine adherence thresholds for oral anticoagulants, replacing rigid consensus guidelines with data-driven risk zones.",
    tags: ["Python", "R", "Lasso", "Survival Analysis"],
    notebook: "README.md",
    repo: "ab-sa/biniLasso-paper",
    label: "Machine Learning",
    highlight: "100% data-driven thresholds, replacing the arbitrary 80% rule",
    githubUrl: "https://github.com/ab-sa/biniLasso-paper",
    papers: [
      { label: "JTH 2026", url: "https://pubmed.ncbi.nlm.nih.gov/41224177/" },
      { label: "arXiv Preprint", url: "https://arxiv.org/abs/2503.16687" },
    ],
  },
  {
    title: "Oral Anticoagulant Adherence & AF Outcomes",
    description:
      "Joint modelling of long-term adherence to oral anticoagulants (warfarin vs. DOACs) and serious clinical outcomes in atrial fibrillation patients, linking the adherence trajectory to time-to-event risk. Built in R on Population Data BC administrative records.",
    tags: ["R", "Joint Modelling", "Survival Analysis", "Population Data BC"],
    notebook: "",
    repo: "",
    label: "Joint Modelling",
    highlight: "Adherence-driven risk stratification across warfarin & DOACs",
    githubUrl: null,
    papers: [
      { label: "JAHA 2024", url: "https://doi.org/10.1161/JAHA.124.035639" },
      { label: "Abstract · Can J Diabetes", url: "https://www.canadianjournalofdiabetes.com/article/S1499-2671(24)00196-2/fulltext" },
    ],
  },
  {
    title: "Cardioprotective Drugs After CABG Surgery",
    description:
      "Two population-based studies estimating the causal effect of P2Y12 inhibitors and ACE inhibitors/ARBs on major adverse cardiovascular events after coronary artery bypass graft surgery, using IPCW-weighted survival models to handle time-varying confounding.",
    tags: ["R", "Survival Analysis", "IPCW", "Causal Inference", "Population Data BC"],
    notebook: "",
    repo: "",
    label: "Causal Inference",
    highlight: "IPCW-weighted causal survival models on linked population data",
    githubUrl: null,
    papers: [
      { label: "JAHA 2024", url: "https://doi.org/10.1161/JAHA.124.035215" },
      { label: "Pharmacotherapy 2025", url: "https://doi.org/10.1002/phar.70047" },
    ],
  },
  {
    title: "Predicting Prostate Cancer via GLM",
    description:
      "Using Generalized Linear Models to quantify how cancer alters tissue mechanics. Analyzed 49 fresh post-surgery samples and found a 20% shift in tissue viscoelasticity, then derived diagnostic cut-offs that distinguish cancerous from healthy tissue.",
    tags: ["Python", "GLM", "Diagnostic Cut-offs"],
    notebook: "",
    repo: "",
    label: "Ph.D. Thesis: GLM & Cut-offs",
    highlight: "Quantifying tumor effect on viscoelasticity (p < 0.02)",
    githubUrl: null,
    extraUrl: null,
    thesisUrl: "https://open.library.ubc.ca/search?q=%22quasi-linear+viscoelastic%22+prostate+Heli",
    thesisLabel: "UBC Thesis",
    papers: [
      { label: "Acta Biomaterialia 2024", url: "https://pubmed.ncbi.nlm.nih.gov/37939817/" },
      { label: "J Biomech Eng 2021", url: "https://doi.org/10.1115/1.4050036" },
      { label: "Exp Mechanics 2022", url: "https://doi.org/10.1007/s11340-022-00837-7" },
    ],
  },
];

const kaggle: Project[] = [
  {
    title: "Probabilistic Classify & Count for Rare Stroke Events",
    description:
      "Tackling severe class imbalance (1.5% prevalence) in a Kaggle cerebral stroke prediction dataset. Compares resampling (SMOTE, EN-SMOTE) against class-weighted, cost-sensitive Weighted Random Forests and Probabilistic Classify & Count (PCC) quantification.",
    tags: ["R", "Tidyverse", "Imbalanced Data", "Quantification"],
    notebook: "DataAnalysis/Training & Test/Unbalanced Dataset",
    repo: "HamedHeli/Appeal-Prediction",
    label: "Imbalanced Classification",
    highlight: "Imbalance treated via SMOTE, EN-SMOTE & class weighting",
    githubUrl: "https://github.com/HamedHeli/Appeal-Prediction/tree/DataAnalysis/training-test/unbalanced-dataset",
    kaggleUrl: "https://www.kaggle.com/datasets/shashwatwork/cerebral-stroke-predictionimbalaced-dataset",
    extraLabel: "HTML Report",
    extraUrl: "https://hamedheli.github.io/Appeal-Prediction/training-test/unbalanced-dataset/Unbalanced-Dataset.html",
  },
];

const otherWork: Project[] = [
  {
    title: "Machine Learning Models from Scratch",
    description:
      "Course projects implementing core ML algorithms in pure Python: KNN, Decision Trees, Logistic Regression, PCA, k-Means, and more. Each model built from the ground up with NumPy, with no black-box libraries.",
    tags: ["Python", "NumPy", "Algorithms"],
    notebook: "",
    repo: "HamedHeli/ml-from-scratch",
    label: "Coursework",
    highlight: "100% from-scratch — no scikit-learn",
    githubUrl: "https://github.com/HamedHeli/ml-from-scratch",
  },
];

const selected = [
  { journal: "Journal of the American Heart Association", count: 2, url: "https://doi.org/10.1161/JAHA.124.035639" },
  { journal: "Journal of Thrombosis and Haemostasis", count: 1, url: "https://pubmed.ncbi.nlm.nih.gov/41224177/" },
  { journal: "Pharmacotherapy", count: 1, url: "https://doi.org/10.1002/phar.70047" },
  { journal: "Acta Biomaterialia", count: 1, url: "https://pubmed.ncbi.nlm.nih.gov/37939817/" },
  { journal: "Journal of Biomechanical Engineering", count: 1, url: "https://doi.org/10.1115/1.4050036" },
  { journal: "Experimental Mechanics", count: 1, url: "https://doi.org/10.1007/s11340-022-00837-7" },
];

const categories = [
  { title: "Peer-reviewed Publications", items: publications },
  { title: "Kaggle", items: kaggle },
  { title: "Other Work", items: otherWork },
];

export const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
          // research &amp; projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Publications &amp; Work
        </h2>
        <p className="mt-3 text-muted-foreground">
          Peer-reviewed publications, Kaggle projects, and coursework. Each card links to the published paper, source code, or dataset.
          {" "}Also 10 conference abstracts in the Canadian Journal of Cardiology; full record on{" "}
          <a
            href="https://scholar.google.com/citations?user=ysnRjxoAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Google Scholar
          </a>
          .
        </p>
        <div className="mt-5">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Selected publications in
          </p>
          <ul className="flex flex-wrap gap-2">
            {selected.map((s) => (
              <li key={s.journal}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/60 px-2.5 py-1 text-xs font-medium text-foreground/90 transition-smooth hover:border-primary/50 hover:text-primary"
                >
                  {s.journal}
                  {s.count > 1 && <span className="text-primary">×{s.count}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {categories.map((c, ci) => {
        const offset = categories.slice(0, ci).reduce((n, prev) => n + prev.items.length, 0);
        return (
          <div key={c.title} className={ci > 0 ? "mt-14 border-t border-border pt-14" : ""}>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-muted-foreground">
              {c.title}
            </h3>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {c.items.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={offset + i} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};
