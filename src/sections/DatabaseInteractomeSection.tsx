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

const X_SCALE = 8.2;
const Y_SCALE = 5.2;

function nodeRadius(node: InteractomeNode) {
  return node.id === "group4" ? 108 : 52;
}

function edgeCoordinates(source: InteractomeNode, target: InteractomeNode) {
  const sourceX = source.x * X_SCALE;
  const sourceY = source.y * Y_SCALE;
  const targetX = target.x * X_SCALE;
  const targetY = target.y * Y_SCALE;
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const length = Math.hypot(dx, dy) || 1;
  const unitX = dx / length;
  const unitY = dy / length;
  const sourceRadius = nodeRadius(source);
  const targetRadius = nodeRadius(target);

  return {
    x1: sourceX + unitX * sourceRadius,
    y1: sourceY + unitY * sourceRadius,
    x2: targetX - unitX * targetRadius,
    y2: targetY - unitY * targetRadius,
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
                <p>{interactomeNote[0]}</p>
              </div>
              <span className="panel-badge">Network</span>
            </div>
            <div className="interactome-board">
              <div className="interactome-board__legend" aria-label="Interactome legend">
                <span className="interactome-board__caption">Legend</span>
                <div className="interactome-legend">
                  {interactomeLegendItems.map((item) => (
                    <div className="interactome-legend__item" key={item.label}>
                      <span className={`interactome-legend__dot interactome-legend__dot--${item.tone}`} aria-hidden="true" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
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
                    transform={`translate(${node.x * X_SCALE} ${node.y * Y_SCALE})`}
                  >
                    <circle r={nodeRadius(node)} />
                    <text y={node.id === "group4" ? -54 : -8}>
                      {node.label.split("\n").map((line, index) => (
                        <tspan key={`${node.id}-${line}`} x="0" dy={index === 0 ? 0 : node.id === "group4" ? 24 : 22}>
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
