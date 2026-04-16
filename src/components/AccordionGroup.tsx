import type { DatabaseCategory } from "../data/siteData";

type AccordionGroupProps = {
  categories: DatabaseCategory[];
};

export function AccordionGroup({ categories }: AccordionGroupProps) {
  return (
    <div className="accordion-stack">
      {categories.map((category, index) => (
        <details className="accordion" key={category.id} open={index === 0}>
          <summary>{category.title}</summary>
          <div className="accordion__grid">
            {category.fields.map((field) => (
              <div className="data-field" key={`${category.id}-${field.label}`}>
                <span>{field.label}</span>
                <strong>{field.value}</strong>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

