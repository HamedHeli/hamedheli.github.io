import { Project, ProjectCard } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Machine Learning Models from Scratch",
    description:
      "Pure-Python implementations of core ML algorithms: KNN, Decision Trees, Logistic Regression, PCA, k-Means, and more. Each model built from the ground up with NumPy, no black-box libraries.",
    tags: ["Python", "NumPy", "Algorithms"],
    notebook: "notebooks/ml-from-scratch.ipynb",
    repo: "hamedheli/ml-from-scratch",
    highlight: "100% from-scratch code, no scikit-learn",
  },
  {
    title: "Probabilistic Classify & Count for Rare Stroke Events",
    description:
      "Solving severe class imbalance (1.5% prevalence) in cerebral stroke prediction. Compares traditional resampling (SMOTE) against cost-sensitive Weighted Random Forests and PCC quantification.",
    tags: ["R-Tidyverse", "Supervised Learning", "Quantification"],
    notebook: "DataAnalysis/Training & Test/Unbalanced Dataset",
    repo: "HamedHeli/Appeal-Prediction",
    highlight: "Overall Accuracy: +90% on 1.5% Minority Class",
    githubUrl: "https://github.com/HamedHeli/Appeal-Prediction/tree/DataAnalysis/training-test/unbalanced-dataset",
    viewerUrl: null,
    kaggleUrl: "https://www.kaggle.com/datasets/shashwatwork/cerebral-stroke-predictionimbalaced-dataset",
    extraLabel: "View HTML Report",
    extraUrl: "https://hamedheli.github.io/Appeal-Prediction/training-test/unbalanced-dataset/Unbalanced-Dataset.html",
  },
  {
    title: "biniLasso: Automated Cut-Point Detection",
    description:
      "A sparse cumulative binarization framework for high-dimensional survival analysis. I applied this novel approach to population administrative data to redefine clinical adherence thresholds for oral anticoagulants, shifting the paradigm from rigid consensus guidelines to data-driven prognostic risk zones.",
    tags: ["Python", "R", "Survival Analysis", "Biostatistics"],
    notebook: "README.md",
    repo: "ab-sa/biniLasso-paper",
    highlight: "100% data-driven thresholds, replacing the arbitrary 80% rule",
    githubUrl: "https://github.com/ab-sa/biniLasso-paper",
    viewerUrl: null,
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41224177/",
    extraLabel: "View on arXiv",
    extraUrl: "https://arxiv.org/abs/2503.16687",
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
