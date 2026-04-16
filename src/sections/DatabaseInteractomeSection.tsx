import { useMemo, useState } from "react";
import { AccordionGroup } from "../components/AccordionGroup";
import { PanelLabel } from "../components/PanelLabel";
import { SectionHeader } from "../components/SectionHeader";
import {
  interactomeEdges,
  interactomeNodes,
  professionals,
  type InteractomeNode,
} from "../data/siteData";

const nodeById = new Map(interactomeNodes.map((node) => [node.id, node]));

function edgeCoordinates(source: InteractomeNode, target: InteractomeNode) {
  return {
    x1: source.x * 5.2,
    y1: source.y * 4.2,
    x2: target.x * 5.2,
    y2: target.y * 4.2,
  };
}

export function DatabaseInteractomeSection() {
  const [activeProfessionalId, setActiveProfessionalId] = useState(professionals[0].id);
  const activeProfessional = useMemo(
    () => professionals.find((professional) => professional.id === activeProfessionalId) ?? professionals[0],
    [activeProfessionalId],
  );

  return (
    <section className="section section--quiet" id="database">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Interactome & Database"
          title="Analytical network and Interview database"
        />

        <div className="analysis-grid">
          <article className="analysis-panel">
            <div className="panel-heading">
              <div>
                <PanelLabel>Interactome</PanelLabel>
                <h3>Concept network placeholder</h3>
                <p>Hover nodes to preview a slightly interactive analytical feeling.</p>
              </div>
              <span className="panel-badge">Network</span>
            </div>
            <svg className="interactome" viewBox="0 0 520 420" role="img" aria-label="Interactome placeholder network">
              {interactomeEdges.map((edge) => {
                const source = nodeById.get(edge.source);
                const target = nodeById.get(edge.target);
                if (!source || !target) return null;
                const coords = edgeCoordinates(source, target);
                return (
                  <line
                    className="interactome__edge"
                    key={`${edge.source}-${edge.target}`}
                    x1={coords.x1}
                    y1={coords.y1}
                    x2={coords.x2}
                    y2={coords.y2}
                  />
                );
              })}
              {interactomeNodes.map((node) => (
                <g
                  className={`interactome__node interactome__node--${node.tone}`}
                  key={node.id}
                  transform={`translate(${node.x * 5.2} ${node.y * 4.2})`}
                >
                  <circle r={node.size} />
                  <text y="4">{node.label}</text>
                  <title>{node.description}</title>
                </g>
              ))}
            </svg>
          </article>

          <article className="analysis-panel database-panel">
            <div className="panel-heading">
              <div>
                <PanelLabel>Database</PanelLabel>
                <h3>Interview database explorer</h3>
                <p>Three professionals, grouped categories, and expandable fields.</p>
              </div>
              <span className="panel-badge">60 cells ready</span>
            </div>

            <div className="professional-tabs" role="tablist" aria-label="Interviewed professionals">
              {professionals.map((professional) => (
                <button
                  className={professional.id === activeProfessionalId ? "is-active" : ""}
                  key={professional.id}
                  type="button"
                  role="tab"
                  aria-selected={professional.id === activeProfessionalId}
                  onClick={() => setActiveProfessionalId(professional.id)}
                >
                  {professional.name}
                </button>
              ))}
            </div>

            <div className="professional-card">
              <span>{activeProfessional.headline}</span>
              <h4>{activeProfessional.name}</h4>
            </div>

            <AccordionGroup categories={activeProfessional.categories} />
          </article>
        </div>
      </div>
    </section>
  );
}
