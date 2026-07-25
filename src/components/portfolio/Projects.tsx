import { Project, ProjectCard } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "biniLasso: Automated Cut-Point Detection",
    description:
      "A sparse cumulative binarization framework for high-dimensional survival analysis. I applied this novel approach to population administrative data to redefine clinical adherence thresholds for oral anticoagulants, shifting the paradigm from rigid consensus guidelines to data-driven prognostic risk zones.",
    tags: ["Python", "R", "Survival Analysis", "Biostatistics"],
    notebook: "README.md",
    repo: "ab-sa/biniLasso-paper",
    label: "Publication",
    highlight: "100% data-driven thresholds, replacing the arbitrary 80% rule",
    githubUrl: "https://github.com/ab-sa/biniLasso-paper",
    viewerUrl: null,
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41224177/",
    extraLabel: "View on arXiv",
    extraUrl: "https://arxiv.org/abs/2503.16687",
  },
  {
    title: "Predicting Prostate Cancer via GLM",
    description:
      "Leveraging Generalized Linear Models (GLMs) to quantify how cancer alters tissue mechanics. Analyzed 49 fresh post-surgery samples to establish a 20% shift in tissue viscoelasticity and using it as a novel biomarker for early detection of cancer.",
    tags: ["Python", "GLM", "Predictive Modeling"],
    notebook: "",
    repo: "",
    label: "Ph.D. Thesis",
    highlight: "Quantifying tumor effect on viscoelasticity (p<0.02)",
    githubUrl: null,
    viewerUrl: null,
    extraUrl: null,
    thesisUrl: "https://open.library.ubc.ca/search?q=%22quasi-linear+viscoelastic%22+prostate+Heli",
    thesisLabel: "UBC Thesis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37939817/",
  },
  {
    title: "Oral Anticoagulant Adherence & AF Outcomes",
    description:
      "Long-term retrospective cohort study on patients with atrial fibrillation, linking adherence to oral anticoagulants (warfarin vs. DOACs) with serious clinical outcomes. Built in R using survival analysis on Population Data BC linked administrative records.",
    tags: ["R", "Survival Analysis", "Epidemiology", "Population Data BC"],
    notebook: "",
    repo: "",
    label: "Publication",
    highlight: "Adherence-driven risk stratification across warfarin & DOACs",
    githubUrl: null,
    viewerUrl: null,
    extraUrl: "https://www.ahajournals.org/doi/10.1161/JAHA.124.036466",
    extraLabel: "Read JAHA Article",
    extraUrl2: "https://www.canadianjournalofdiabetes.com/article/S1499-2671(24)00196-2/fulltext",
    extraLabel2: "Conference Paper (CJD)",
  },
  {
    title: "Cardioprotective Drugs After CABG Surgery",
    description:
      "Two population-based cohort studies evaluating the effect of P2Y12 inhibitors and ACE inhibitors/ARBs on major adverse cardiovascular events after coronary artery bypass graft surgery. Used survival analysis with IPCW weighting to address time-varying confounding and strengthen causal inference. Implemented in R on Population Data BC.",
    tags: ["R", "Survival Analysis", "IPCW", "Causal Inference", "Population Data BC"],
    notebook: "",
    repo: "",
    label: "Publication",
    highlight: "IPCW-weighted causal survival models on linked population data",
    githubUrl: null,
    viewerUrl: null,
    extraUrl: "https://accpjournals.onlinelibrary.wiley.com/doi/10.1002/phar.70027",
    extraLabel: "P2Y12 Study (Pharmacotherapy)",
    extraUrl2: "https://www.ahajournals.org/doi/10.1161/JAHA.124.038960",
    extraLabel2: "ACEi/ARB Study (JAHA)",
  },
  {
    title: "Probabilistic Classify & Count for Rare Stroke Events",
    description:
      "Solving severe class imbalance (1.5% prevalence) in cerebral stroke prediction. Compares traditional resampling (SMOTE) against cost-sensitive Weighted Random Forests and PCC quantification.",
    tags: ["R-Tidyverse", "Supervised Learning", "Quantification"],
    notebook: "DataAnalysis/Training & Test/Unbalanced Dataset",
    repo: "HamedHeli/Appeal-Prediction",
    label: "Kaggle Project",
    highlight: "Overall Accuracy: +90% on 1.5% Minority Class",
    githubUrl: "https://github.com/HamedHeli/Appeal-Prediction/tree/DataAnalysis/training-test/unbalanced-dataset",
    viewerUrl: null,
    kaggleUrl: "https://www.kaggle.com/datasets/shashwatwork/cerebral-stroke-predictionimbalaced-dataset",
    extraLabel: "View HTML Report",
    extraUrl: "https://hamedheli.github.io/Appeal-Prediction/training-test/unbalanced-dataset/Unbalanced-Dataset.html",
  },
  {
    title: "Machine Learning Models from Scratch",
    description:
      "Pure-Python implementations of core ML algorithms: KNN, Decision Trees, Logistic Regression, PCA, k-Means, and more. Each model built from the ground up with NumPy, no black-box libraries.",
    tags: ["Python", "NumPy", "Algorithms"],
    notebook: "notebooks/ml-from-scratch.ipynb",
    repo: "hamedheli/ml-from-scratch",
    label: "Notebook",
    highlight: "100% from-scratch code, no scikit-learn",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
          // projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Projects & Publications
        </h2>
        <p className="mt-3 text-muted-foreground">
          Each card links directly to source code, notebooks, datasets, and
          published research.
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
