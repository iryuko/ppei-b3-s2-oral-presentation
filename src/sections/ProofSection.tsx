import { PanelLabel } from "../components/PanelLabel";
import {
  proofEvidencePanel,
  proofTeamRoles,
  proofTimelineSteps,
  type ProofTimelineIcon,
} from "../data/siteData";
import { SectionHeader } from "../components/SectionHeader";

function ProofIcon({ icon }: { icon: ProofTimelineIcon }) {
  if (icon === "contact") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 6.5h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
        <path d="m6 8 6 4.7L18 8" />
      </svg>
    );
  }

  if (icon === "schedule") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 5.5v3M16.5 5.5v3" />
        <path d="M6.5 7.5h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
        <path d="M4.5 11.5h15" />
      </svg>
    );
  }

  if (icon === "roles") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 6.5a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Z" />
        <path d="M6.8 9.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10.4 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
        <path d="M8.5 17c.5-1.8 2-2.8 3.5-2.8s3 .9 3.5 2.8" />
        <path d="M4.8 17c.2-1.1 1.1-1.9 2.3-1.9m9.8 1.9c-.2-1.1-1.1-1.9-2.3-1.9" />
      </svg>
    );
  }

  if (icon === "refreshments") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 8.5h8v3.7a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V8.5Z" />
        <path d="M15.5 9h1.4a1.9 1.9 0 0 1 0 3.8h-1.2" />
        <path d="M9 5.8c.7.7.7 1.7 0 2.4m3-2.4c.7.7.7 1.7 0 2.4" />
        <path d="M8 18.3h7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4.8 18.3 7v4.8c0 3.6-2.1 6.5-6.3 7.9-4.2-1.4-6.3-4.3-6.3-7.9V7L12 4.8Z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.5" />
    </svg>
  );
}

export function ProofSection() {
  return (
    <section className="section section--final section--quiet" id="proof">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Proof of Professional Behavior"
          title="Professional process and supporting evidence"
          description="A documented process showing preparation, coordination, respectful conduct, and privacy-aware evidence."
        />

        <div className="proof-layout">
          <article className="proof-panel proof-panel--timeline">
            <div className="panel-heading panel-heading--compact">
              <div>
                <PanelLabel>Process Timeline</PanelLabel>
                <h3>Interview preparation and conduct</h3>
              </div>
            </div>

            <div className="proof-timeline">
              {proofTimelineSteps.map((step, index) => (
                <article className="proof-step" key={step.id}>
                  <div className="proof-step__rail" aria-hidden="true">
                    <span className="proof-step__dot" />
                    {index < proofTimelineSteps.length - 1 ? <span className="proof-step__line" /> : null}
                  </div>
                  <div className="proof-step__card">
                    <div className="proof-step__icon">
                      <ProofIcon icon={step.icon} />
                    </div>
                    <div className="proof-step__body">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="proof-panel proof-panel--evidence">
            <div className="panel-heading panel-heading--compact">
              <div>
                <PanelLabel>Supporting Evidence</PanelLabel>
                <h3>{proofEvidencePanel.title}</h3>
              </div>
            </div>

            <div className="proof-evidence__stack">
              <section className="proof-evidence__card">
                <div className="proof-evidence__card-head">
                  <h4>{proofEvidencePanel.businessCardTitle}</h4>
                </div>
                <div className="proof-evidence__image" role="img" aria-label="Business card evidence placeholder">
                  {proofEvidencePanel.businessCardSrc ? (
                    <img src={proofEvidencePanel.businessCardSrc} alt="Business card evidence" />
                  ) : (
                    <div className="proof-evidence__placeholder">
                      <span>Business card evidence</span>
                      <p>{proofEvidencePanel.businessCardCaption}</p>
                    </div>
                  )}
                </div>
              </section>

              <section className="proof-evidence__card">
                <h4>{proofEvidencePanel.rolesTitle}</h4>
                <div className="proof-roles">
                  {proofTeamRoles.map((assignment) => (
                    <div className="proof-role" key={assignment.role}>
                      <span>{assignment.role}</span>
                      <strong>{assignment.member}</strong>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
