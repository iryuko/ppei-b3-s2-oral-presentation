import { SectionHeader } from "../components/SectionHeader";
import { ganttTasks, ganttWeeks } from "../data/siteData";

export function GanttSection() {
  return (
    <section className="section" id="gantt">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Gantt Chart"
          title="Timeline for Team work management"
        />

        <div className="gantt" aria-label="Gantt chart placeholder">
          <div className="gantt__header">
            <div>Workstream</div>
            {ganttWeeks.map((week) => (
              <div key={week}>{week}</div>
            ))}
          </div>

          {ganttTasks.map((task) => (
            <div className="gantt__row" key={task.id}>
              <div className="gantt__task">
                <strong>{task.label}</strong>
                <span>{task.owner}</span>
              </div>
              <div className="gantt__timeline">
                {ganttWeeks.map((week, index) => (
                  <span className="gantt__week-cell" key={week} aria-hidden="true">
                    {task.milestone && index + 1 === task.endWeek ? (
                      <span className="gantt__milestone" title={task.milestone} />
                    ) : null}
                  </span>
                ))}
                <span
                  className={`gantt__bar gantt__bar--${task.tone}`}
                  style={{
                    gridColumn: `${task.startWeek} / ${task.endWeek + 1}`,
                  }}
                  title={`${task.label}: ${task.owner}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
