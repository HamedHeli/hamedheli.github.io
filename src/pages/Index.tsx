import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Footer } from "@/components/portfolio/Footer";

const GITHUB_USER = "your-username";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero githubUser={GITHUB_USER} />
        <Projects />
        <Skills />
      </main>
      <Footer githubUser={GITHUB_USER} />
    </div>
  );
};

export default Index;
