import type { Institution } from "../data/siteData";

type FixedInstitutionLinksProps = {
  institutions: Institution[];
};

export function FixedInstitutionLinks({ institutions }: FixedInstitutionLinksProps) {
  return (
    <aside className="institution-dock" aria-label="Institutional links">
      {institutions.map((institution, index) => (
        <div className="institution-dock__item" key={institution.shortName}>
          {index > 0 ? <span className="institution-dock__divider" aria-hidden="true" /> : null}
          <a
            className={`institution-link institution-link--${institution.logoShape}`}
            href={institution.href}
            target="_blank"
            rel="noreferrer"
            aria-label={institution.fullName}
            title={institution.fullName}
          >
            <img src={institution.logoSrc} alt="" aria-hidden="true" />
            <span className="sr-only">{institution.shortName}</span>
          </a>
        </div>
      ))}
    </aside>
  );
}
