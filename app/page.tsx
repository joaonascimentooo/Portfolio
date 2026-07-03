import { AnimatedSections } from "./animated-sections";
import { HeroDetails } from "./hero-details";
import { HeroArt } from "./hero-art";
import { Navbar } from "./navbar";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Navbar />
      </header>

      <section id="inicio" className="hero">
        <HeroArt />
        <HeroDetails />
      </section>

      <AnimatedSections />
    </main>
  );
}
