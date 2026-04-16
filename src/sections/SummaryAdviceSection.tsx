import { PanelLabel } from "../components/PanelLabel";
import { SectionHeader } from "../components/SectionHeader";
import { adviceItems, interviewSummaries } from "../data/siteData";

export function SummaryAdviceSection() {
  return (
    <section className="section" id="summary">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Summary & Advice"
          title="Interview Summary and Professional Advice"
        />

        <div className="summary-grid">
          <div className="summary-stack">
            {interviewSummaries.map((summary) => (
              <article className="summary-card" key={summary.id}>
                <PanelLabel>{summary.title}</PanelLabel>
                <h3>{summary.person}</h3>
                <p>{summary.summary}</p>
              </article>
            ))}
          </div>

          <article className="advice-panel">
            <PanelLabel>Synthesis</PanelLabel>
            <h3>Main advice / recommendations</h3>
            <p>
              This block is reserved for the team's final synthesis. It is visually larger because it should carry the
              conclusion of the interview work during the oral presentation.
            </p>
            <div className="advice-list">
              {adviceItems.map((item, index) => (
                <div className="advice-item" key={item.id}>
                  <span>{index + 1}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
