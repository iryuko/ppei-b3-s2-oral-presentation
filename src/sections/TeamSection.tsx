import { PanelLabel } from "../components/PanelLabel";
import { SectionHeader } from "../components/SectionHeader";
import { teamMembers } from "../data/siteData";

export function TeamSection() {
  return (
    <section className="section section--quiet" id="team">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Team Stuff"
          title="Four contributors"
        />

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-card__portrait" aria-label={`${member.name} portrait`}>
                {member.portraitSrc ? (
                  <img src={member.portraitSrc} alt={`${member.name} portrait`} />
                ) : (
                  member.initials
                )}
              </div>
              <div className="team-card__identity">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <div className="team-card__body">
                <div>
                  <PanelLabel>Basic Info</PanelLabel>
                  <p>{member.basicInfo}</p>
                </div>
                <div>
                  <PanelLabel>Job(s) of Interest</PanelLabel>
                  <p>{member.jobsOfInterest.join(" / ")}</p>
                </div>
                <div>
                  <PanelLabel>Field(s) of Activity</PanelLabel>
                  <p>{member.fieldsOfActivity.join(" / ")}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
