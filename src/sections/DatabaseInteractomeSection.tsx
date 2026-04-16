import { useMemo, useState } from "react";
import { AccordionGroup } from "../components/AccordionGroup";
import { PanelLabel } from "../components/PanelLabel";
import { SectionHeader } from "../components/SectionHeader";
import {
  interactomeEdges,
  interactomeLegendItems,
  interactomeNote,
  interactomeNodes,
  professionals,
  type InteractomeNode,
} from "../data/siteData";

const nodeById = new Map(interactomeNodes.map((node) => [node.id, node]));

function edgeCoordinates(source: InteractomeNode, target: InteractomeNode) {
  return {
    x1: source.x * 8.2,
    y1: source.y * 5.2,
    x2: target.x * 8.2,
    y2: target.y * 5.2,
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
                <h3>Interview relationship map</h3>
                <p>Legend on the left, network in the center, and a context note on the upper right.</p>
              </div>
              <span className="panel-badge">Network</span>
            </div>
            <div className="interactome-board">
              <div className="interactome-board__legend" aria-label="Interactome legend">
                <span className="interactome-board__caption">Graphic symbol</span>
                <div className="interactome-legend">
                  {interactomeLegendItems.map((item) => (
                    <div className={`interactome-legend__item interactome-legend__item--${item.tone}`} key={item.label}>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="interactome-board__note">
                {interactomeNote.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <svg className="interactome" viewBox="0 0 920 540" role="img" aria-label="Interview interactome network">
                {interactomeEdges.map((edge) => {
                  const source = nodeById.get(edge.source);
                  const target = nodeById.get(edge.target);
                  if (!source || !target) return null;
                  const coords = edgeCoordinates(source, target);
                  return (
                    <line
                      className={`interactome__edge ${edge.style === "dashed" ? "interactome__edge--dashed" : ""}`}
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
                    className={`interactome__node interactome__node--${node.tone} ${
                      node.id === "group4" ? "interactome__node--core" : "interactome__node--leaf"
                    }`}
                    key={node.id}
                    transform={`translate(${node.x * 8.2} ${node.y * 5.2})`}
                  >
                    <ellipse
                      rx={node.id === "group4" ? 128 : Math.max(node.label.length * 4.9, 76)}
                      ry={node.id === "group4" ? 92 : 38}
                    />
                    <text y={node.id === "group4" ? -34 : 6}>
                      {node.label.split("\n").map((line, index) => (
                        <tspan key={`${node.id}-${line}`} x="0" dy={index === 0 ? 0 : 28}>
                          {line}
                        </tspan>
                      ))}
                    </text>
                    <title>{node.description}</title>
                  </g>
                ))}
              </svg>
            </div>
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
