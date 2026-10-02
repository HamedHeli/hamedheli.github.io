import { Project, ProjectCard } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "biniLasso: Automated Cut-Point Detection",
    description:
      "A sparse cumulative binarization framework for high-dimensional survival analysis. Applied to population administrative data to redefine clinical adherence thresholds for oral anticoagulants — shifting from rigid consensus guidelines to data-driven prognostic risk zones.",
    tags: ["Python", "R", "Survival Analysis", "Biostatistics"],
    notebook: "README.md",
    repo: "ab-sa/biniLasso-paper",
    label: "Publication",
    highlight: "100% data-driven thresholds, replacing the arbitrary 80% rule",
    githubUrl: "https://github.com/ab-sa/biniLasso-paper",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41224177/",
    extraLabel: "arXiv",
    extraUrl: "https://arxiv.org/abs/2503.16687",
  },
  {
    title: "Predicting Prostate Cancer via GLM",
    description:
      "Leveraging Generalized Linear Models to quantify how cancer alters tissue mechanics. Analyzed 49 fresh post-surgery samples to establish a 20% shift in tissue viscoelasticity — proposing it as a novel biomarker for early cancer detection.",
    tags: ["Python", "GLM", "Predictive Modeling"],
    notebook: "",
    repo: "",
    label: "Ph.D. Thesis",
    highlight: "Quantifying tumor effect on viscoelasticity (p < 0.02)",
    githubUrl: null,
    extraUrl: null,
    thesisUrl: "https://open.library.ubc.ca/search?q=%22quasi-linear+viscoelastic%22+prostate+Heli",
    thesisLabel: "UBC Thesis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37939817/",
  },
  {
    title: "Oral Anticoagulant Adherence & AF Outcomes",
    description:
      "Long-term retrospective cohort study linking adherence to oral anticoagulants (warfarin vs. DOACs) with serious clinical outcomes in atrial fibrillation patients. Built in R using survival analysis on Population Data BC linked administrative records.",
    tags: ["R", "Survival Analysis", "Epidemiology", "Population Data BC"],
    notebook: "",
    repo: "",
    label: "Publication",
    highlight: "Adherence-driven risk stratification across warfarin & DOACs",
    githubUrl: null,
    extraUrl: "https://www.ahajournals.org/doi/10.1161/JAHA.124.036466",
    extraLabel: "JAHA Article",
    extraUrl2: "https://www.canadianjournalofdiabetes.com/article/S1499-2671(24)00196-2/fulltext",
    extraLabel2: "Conference Paper",
  },
  {
    title: "Cardioprotective Drugs After CABG Surgery",
    description:
      "Two population-based cohort studies evaluating P2Y12 inhibitors and ACE inhibitors/ARBs on major adverse cardiovascular events after coronary artery bypass graft surgery. Used IPCW-weighted survival analysis to address time-varying confounding.",
    tags: ["R", "Survival Analysis", "IPCW", "Causal Inference", "Population Data BC"],
    notebook: "",
    repo: "",
    label: "Publication",
    highlight: "IPCW-weighted causal survival models on linked population data",
    githubUrl: null,
    extraUrl: "https://accpjournals.onlinelibrary.wiley.com/doi/10.1002/phar.70027",
    extraLabel: "Pharmacotherapy",
    extraUrl2: "https://www.ahajournals.org/doi/10.1161/JAHA.124.038960",
    extraLabel2: "JAHA",
  },
  {
    title: "Probabilistic Classify & Count for Rare Stroke Events",
    description:
      "Solving severe class imbalance (1.5% prevalence) in cerebral stroke prediction. Compares traditional resampling (SMOTE) against cost-sensitive Weighted Random Forests and PCC quantification.",
    tags: ["R", "Tidyverse", "Supervised Learning", "Quantification"],
    notebook: "DataAnalysis/Training & Test/Unbalanced Dataset",
    repo: "HamedHeli/Appeal-Prediction",
    label: "Kaggle Project",
    highlight: "Overall accuracy >90% on 1.5% minority class",
    githubUrl: "https://github.com/HamedHeli/Appeal-Prediction/tree/DataAnalysis/training-test/unbalanced-dataset",
    kaggleUrl: "https://www.kaggle.com/datasets/shashwatwork/cerebral-stroke-predictionimbalaced-dataset",
    extraLabel: "HTML Report",
    extraUrl: "https://hamedheli.github.io/Appeal-Prediction/training-test/unbalanced-dataset/Unbalanced-Dataset.html",
  },
  {
    title: "Machine Learning Models from Scratch",
    description:
      "Pure-Python implementations of core ML algorithms: KNN, Decision Trees, Logistic Regression, PCA, k-Means, and more. Each model built from the ground up with NumPy — no black-box libraries.",
    tags: ["Python", "NumPy", "Algorithms"],
    notebook: "",
    repo: "HamedHeli/ml-from-scratch",
    label: "Notebook",
    highlight: "100% from-scratch — no scikit-learn",
    githubUrl: "https://github.com/HamedHeli/ml-from-scratch",
  },
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
          Peer-reviewed publications, applied ML projects, and open-source implementations — each card links to source code, datasets, or the published paper.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};
