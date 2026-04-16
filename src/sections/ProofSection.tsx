import { SectionHeader } from "../components/SectionHeader";
import { proofSlots } from "../data/siteData";

export function ProofSection() {
  return (
    <section className="section section--final section--quiet" id="proof">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Proof of Professional Behavior"
          title="A prepared evidence area that does not feel unfinished."
          description="The current version is intentionally empty but structured for future screenshots, text evidence, images, or behavior records."
        />

        <div className="proof-panel">
          <div className="proof-panel__intro">
            <span aria-hidden="true">+</span>
            <h3>Evidence area prepared</h3>
            <p>
              Add proof of punctuality, meeting organization, professional communication, interview etiquette, or
              documented collaboration here.
            </p>
          </div>

          <div className="proof-grid">
            {proofSlots.map((slot) => (
              <article className="proof-slot" key={slot.id}>
                <strong>{slot.label}</strong>
                <p>{slot.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

