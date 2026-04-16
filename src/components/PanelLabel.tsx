type PanelLabelProps = {
  children: string;
};

export function PanelLabel({ children }: PanelLabelProps) {
  return <span className="panel-label">{children}</span>;
}

