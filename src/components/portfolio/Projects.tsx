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
    title: "Sentiment Analysis with BERT",
    description:
      "Fine-tuning a pre-trained BERT model on movie reviews. Walks through tokenization, training loop, and evaluation with attention visualizations.",
    tags: ["Transformers", "NLP", "HuggingFace"],
    notebook: "notebooks/bert_sentiment.ipynb",
    repo: "your-username/ml-portfolio",
    highlight: "F1: 0.91 on IMDB test set",
  },
  {
    title: "Time Series Forecasting",
    description:
      "Comparison of ARIMA, Prophet, and LSTM models on energy consumption data. Includes feature engineering and walk-forward validation.",
    tags: ["LSTM", "Prophet", "Time Series"],
    notebook: "notebooks/timeseries_forecast.ipynb",
    repo: "your-username/ml-portfolio",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "End-to-end pipeline: EDA, feature engineering, XGBoost training, SHAP explanations, and a clean reusable scikit-learn pipeline.",
    tags: ["XGBoost", "SHAP", "scikit-learn"],
    notebook: "notebooks/churn_xgboost.ipynb",
    repo: "your-username/ml-portfolio",
    highlight: "ROC-AUC 0.88",
  },
  {
    title: "GAN for Image Generation",
    description:
      "A DCGAN trained from scratch on a fashion dataset. Step-by-step build with training stability tricks and progress visualizations.",
    tags: ["GAN", "PyTorch", "Generative"],
    notebook: "notebooks/dcgan_fashion.ipynb",
    repo: "your-username/ml-portfolio",
  },
  {
    title: "Recommender System",
    description:
      "Matrix factorization and neural collaborative filtering compared on MovieLens. Includes cold-start handling and evaluation metrics.",
    tags: ["RecSys", "Embeddings", "TensorFlow"],
    notebook: "notebooks/recommender.ipynb",
    repo: "your-username/ml-portfolio",
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
          Notebooks & experiments
        </h2>
        <p className="mt-3 text-muted-foreground">
          Each card links directly to the source notebook on GitHub, a rendered
          preview via nbviewer, and a one-click Colab launch.
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
