import { PanelLabel } from "../components/PanelLabel";
import { SectionHeader } from "../components/SectionHeader";
import { adviceItems, adviceMeta, interviewSummaries } from "../data/siteData";

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
                <PanelLabel>{summary.label}</PanelLabel>
                <h3>{summary.title}</h3>
                <p>{summary.summary}</p>
              </article>
            ))}
          </div>

          <article className="advice-panel">
            <PanelLabel>{adviceMeta.label}</PanelLabel>
            <h3>{adviceMeta.title}</h3>
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
