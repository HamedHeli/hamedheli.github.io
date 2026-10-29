import { ExternalLink } from "lucide-react";

type Publication = {
  year: number;
  title: string;
  authors: string;
  journal: string;
  doi: string;
};

const health: Publication[] = [
  {
    year: 2026,
    title:
      "Optimal adherence thresholds for oral anticoagulants in patients with atrial fibrillation using machine learning and population administrative data",
    authors: "Safari A, Helisaz H, Tadrous M, Deyell MW, Andrade JG, Salmasi S, Adelakun A, Filion KB, De Vera MA, Loewen P",
    journal: "Journal of Thrombosis and Haemostasis",
    doi: "10.1016/j.jtha.2025.10.031",
  },
  {
    year: 2025,
    title:
      "Effect of P2Y12 Inhibitors on Major Adverse Cardiovascular Events After Coronary Artery Bypass Graft Surgery: A Population-Based Cohort Study",
    authors: "Barry AR, Helisaz H, Safari A, Loewen P",
    journal: "Pharmacotherapy",
    doi: "10.1002/phar.70047",
  },
  {
    year: 2024,
    title:
      "Association Between Oral Anticoagulant Adherence and Serious Clinical Outcomes in Patients With Atrial Fibrillation: A Long-Term Retrospective Cohort Study",
    authors: "Safari A, Helisaz H, Salmasi S, Adelakun A, De Vera MA, Andrade JG, Deyell MW, Loewen P",
    journal: "Journal of the American Heart Association",
    doi: "10.1161/JAHA.124.035639",
  },
  {
    year: 2024,
    title:
      "Effect of Angiotensin-Converting Enzyme Inhibitors and Angiotensin Receptor Blockers After Coronary Artery Bypass Graft Surgery: A Population-Based Cohort Study",
    authors: "Barry AR, Helisaz H, Safari A, Loewen P",
    journal: "Journal of the American Heart Association",
    doi: "10.1161/JAHA.124.035215",
  },
  {
    year: 2024,
    title:
      "Quantifying the Impact of Cancer on the Viscoelastic Properties of the Prostate Gland using a Quasi-Linear Viscoelastic Model",
    authors: "Helisaz H, Belanger E, Black P, Bacca M, Chiao M",
    journal: "Acta Biomaterialia",
    doi: "10.1016/j.actbio.2023.11.002",
  },
  {
    year: 2023,
    title:
      "Transcranial Direct-Current Stimulation Improves Verbal Fluency in Children with Attention Deficit Hyperactivity Disorder (ADHD)",
    authors: "Nejati, Estaji, Helisaz H",
    journal: "Brain Sciences",
    doi: "10.3390/brainsci13091257",
  },
];

const engineering: Publication[] = [
  {
    year: 2023,
    title:
      "A fiber Bragg grating tactile sensor for soft material characterization based on quasi linear viscoelastic analysis",
    authors: "Sepehri, Helisaz H, Chiao M",
    journal: "Sensors and Actuators A: Physical",
    doi: "10.1016/j.sna.2022.114079",
  },
  {
    year: 2022,
    title:
      "A New Characterization Procedure for Quasi-Linear Viscoelastic Materials Using Indentation Test: Validation with Finite Element and Experimental Results",
    authors: "Helisaz H, Bacca M, Chiao M",
    journal: "Experimental Mechanics",
    doi: "10.1007/s11340-022-00837-7",
  },
  {
    year: 2021,
    title: "Quasi-Linear Viscoelastic Characterization of Soft Tissue-Mimicking Materials",
    authors: "Helisaz H, Bacca M, Chiao M",
    journal: "Journal of Biomechanical Engineering",
    doi: "10.1115/1.4050036",
  },
  {
    year: 2018,
    title: "Theoretical modeling of transient reaction–diffusion dynamics in electrokinetic Y-shaped microreactors",
    authors: "Helisaz H, Babaei, Sadeghi A",
    journal: "Chemical Engineering Science",
    doi: "10.1016/j.ces.2018.06.077",
  },
  {
    year: 2017,
    title: "Reduction of production rate in Y-shaped microreactors in the presence of viscoelasticity",
    authors: "Helisaz H, Saidi MH, Sadeghi A",
    journal: "Analytica Chimica Acta",
    doi: "10.1016/j.aca.2017.08.041",
  },
  {
    year: 2016,
    title: "3D modeling of reaction-diffusion dynamics in an electrokinetic Y-shaped microreactor",
    authors: "Helisaz H, Saidi MH, Sadeghi A",
    journal: "Sensors and Actuators B: Chemical",
    doi: "10.1016/j.snb.2016.05.085",
  },
];

const groups = [
  { title: "Health Research & Pharmacoepidemiology", items: health },
  { title: "Engineering & Biomechanics", items: engineering },
];

const Authors = ({ authors }: { authors: string }) => {
  const [before, after] = authors.split("Helisaz H");
  return (
    <>
      {before}
      <span className="font-semibold text-foreground/90">Helisaz H</span>
      {after}
    </>
  );
};

export const Publications = () => {
  return (
    <section id="publications" className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            // publications
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Peer-reviewed Publications
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {health.length + engineering.length} journal articles, plus 10 conference abstracts in the
            Canadian Journal of Cardiology (2023–2026).{" "}
            <a
              href="https://scholar.google.com/citations?user=ysnRjxoAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Google Scholar
            </a>
          </p>
        </div>

        <div className="space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-muted-foreground">
                {g.title}
              </h3>
              <ol className="space-y-3">
                {g.items.map((p) => (
                  <li
                    key={p.doi}
                    className="rounded-xl border border-border bg-card-gradient p-4 shadow-card transition-smooth hover:border-primary/30"
                  >
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start justify-between gap-4"
                    >
                      <div>
                        <p className="text-sm font-medium leading-snug text-foreground group-hover:text-primary">
                          {p.title}
                        </p>
                        <p className="mt-1.5 text-xs text-muted-foreground">
                          <Authors authors={p.authors} />
                        </p>
                        <p className="mt-1 text-xs">
                          <span className="italic text-foreground/80">{p.journal}</span>
                          <span className="text-muted-foreground"> · {p.year}</span>
                        </p>
                      </div>
                      <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
