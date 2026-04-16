import { projectMeta } from "../data/siteData";

export function HeroSection() {
  return (
    <section className="section hero-section" id="home">
      <div className="section__inner hero-section__grid">
        <div className="hero-section__copy">
          <h1>
            <span>PPEI_B3_S2</span>
            <span>Oral Presentation</span>
          </h1>
          <p>{projectMeta.description}</p>
          <div className="hero-section__meta" aria-label="Project metadata">
            <span className="hero-section__team-pill">
              {projectMeta.team} · {projectMeta.group}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
