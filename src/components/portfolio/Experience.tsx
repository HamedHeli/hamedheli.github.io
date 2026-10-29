import { Briefcase } from "lucide-react";

type Role = {
  title: string;
  org: string;
  period: string;
  client?: string;
  points: string[];
};

const roles: Role[] = [
  {
    title: "Data Scientist",
    org: "BC Assessment",
    period: "Aug 2023 – Present",
    points: [
      "Operational Management Dashboard: built a resource prediction model that supports operational planning across the organization.",
      "Roll Quality Summary Report: multi-year project using sample size estimation to assess the representativeness of the assessment roll.",
    ],
  },
  {
    title: "Co-Founder & CEO",
    org: "GranTAZ Consulting",
    period: "Oct 2021 – Present",
    client: "UBC Faculty of Pharmaceutical Sciences",
    points: [
      "Survival analysis on Population Data BC with propensity score weighting and matching; identified cardiovascular drugs that reduce the risk of major adverse events (published in JAHA and Pharmacotherapy).",
      "Evaluation of adding pharmacists into primary and community care.",
      "Quality of care evaluation for local government and the Ministry of Health.",
    ],
  },
  {
    title: "Data Science Analyst II",
    org: "BCAA",
    period: "Apr 2022 – Aug 2023",
    points: [
      "At-risk customer targeting and churn reduction through data-driven marketing campaigns.",
      "Home replacement cost valuation and competitive analysis of insurance price engines.",
    ],
  },
  {
    title: "Data Analyst",
    org: "Vancouver General Hospital",
    period: "Mar 2020 – Apr 2022",
    points: [
      "GLM-based prediction of the presence, location and grade of prostate cancer from tissue mechanics (Ph.D. project).",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            // experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Industry &amp; Consulting
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Six years applying statistics and machine learning in production and research settings,
            from public-sector analytics to population health studies.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {roles.map((r) => (
            <div
              key={`${r.org}-${r.title}`}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card-gradient p-5 shadow-card transition-smooth hover:border-primary/30 hover:shadow-glow"
            >
              <div className="flex items-start gap-3">
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-base font-semibold leading-tight">{r.title}</p>
                  <p className="mt-1 text-sm font-medium text-foreground/80">{r.org}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">{r.period}</p>
                  {r.client && (
                    <p className="mt-2 inline-block rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      Lead client: {r.client}
                    </p>
                  )}
                </div>
              </div>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                {r.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
