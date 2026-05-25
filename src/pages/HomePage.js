import { translations } from "../i18n";

function withPublicUrl(path) {
  return `${process.env.PUBLIC_URL}${path}`;
}

const shots = [
  { src: "/media/screen-01.svg", span: "Span6" },
  { src: "/media/screen-02.svg", span: "Span6" },
  { src: "/media/screen-03.svg", span: "Span4" },
  { src: "/media/screen-04.svg", span: "Span8" },
  { src: "/media/screen-05.svg", span: "Span6" },
  { src: "/media/screen-06.svg", span: "Span6" },
];

const team = [
  {
    name: "Léo Ponchon",
    handle: "Shimakuro",
    githubUrl: "https://www.github.com/LeoPonchon",
    roles: {
      en: ["Direction", "Development", "Pixel art / UI"],
      fr: ["Direction", "Développement", "Pixel art / UI"],
    },
  },
  {
    name: "Lenaya Mukei",
    handle: null,
    githubUrl: "https://github.com/Axelle-LM",
    roles: { en: ["Pixel art", "Game design", "QA"], fr: ["Pixel art", "Game design", "QA"] },
  },
  {
    name: "Kineria",
    handle: null,
    githubUrl: null,
    roles: { en: ["Game design", "Level design", "QA"], fr: ["Game design", "Level design", "QA"] },
  },
];

export default function HomePage({ lang = "en" }) {
  const copy = translations[lang] ?? translations.en;
  const installerHref = `${process.env.PUBLIC_URL}/Oniric%20Streams_Setup_v1.0.0.exe`;

  return (
    <div className="Page" id="top">
      <section className="HomeTopCta" aria-label={copy.topCta.aria}>
        <div className="Container">
          <div className="HomeTopCtaInner">
            <div>
              <h1 className="PageTitle" style={{ margin: 0 }}>
                {copy.topCta.title}
              </h1>
              <p className="Lead" style={{ marginTop: 8 }}>
                {copy.topCta.lead}
              </p>
              <div className="HomeTopCtaActions" aria-label={copy.topCta.actionsAria ?? "Actions"} style={{ justifyContent: "flex-start" }}>
                <a className="Button ButtonPrimary" href={installerHref} download>
                  {copy.topCta.download}
                </a>
                <a className="Button ButtonGhost" href="#media">
                  {copy.topCta.seeShots}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section aria-label={copy.about.aria}>
        <div className="Container">
          <div className="Grid2" style={{ marginTop: 14 }}>
            <div className="Card">
              <div className="CardInner">
                <h2 className="CardTitle">{copy.about.aboutTitle}</h2>
                <p className="Lead">{copy.about.aboutLead}</p>
              </div>
            </div>

            <div className="Card">
              <div className="CardInner">
                <h2 className="CardTitle">{copy.about.storyTitle}</h2>
                <p className="Lead">{copy.about.storyLead}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label={copy.features.aria}>
        <div className="Container" style={{ marginTop: 14 }}>
          <div className="Card">
            <div className="CardInner">
              <div className="PageHeader" style={{ margin: 0 }}>
                <h2 className="PageTitle">{copy.features.title}</h2>
              </div>
              <div className="Divider" />
              <ul className="FeatureList" aria-label={copy.features.listAria}>
                {copy.features.items.map((f) => (
                  <li key={f} className="FeatureItem">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="media" aria-label={copy.media.aria}>
        <div className="Container">
          <div className="PageHeader" style={{ marginTop: 18 }}>
            <h2 className="PageTitle">{copy.media.title}</h2>
            <p className="Lead">{copy.media.lead}</p>
          </div>

          <div className="Gallery" aria-label={copy.media.galleryAria}>
            {shots.map((s, idx) => (
              <figure key={s.src} className={`Shot ${s.span}`}>
                <img
                  className="ShotImg"
                  src={withPublicUrl(s.src)}
                  alt={copy.media.shotsAlt(idx + 1)}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="credits" aria-label={copy.credits.aria}>
        <div className="Container">
          <div className="PageHeader" style={{ marginTop: 18 }}>
            <h2 className="PageTitle">{copy.credits.title}</h2>
            <p className="Lead">{copy.credits.lead}</p>
          </div>

          <div className="Card" aria-label={copy.credits.listAria ?? "List"}>
            <div className="CardInner">
              <h3 className="CardTitle" style={{ marginBottom: 12 }}>
                {copy.credits.contributors}
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(43, 33, 48, 0.86)" }}>
                {team.map((m) => (
                  <li key={m.name} style={{ marginBottom: 10, lineHeight: 1.7 }}>
                    <div className="TeamMember">
                      {m.githubUrl ? (
                        <a className="TeamHandle" href={m.githubUrl} target="_blank" rel="noreferrer">
                          {m.handle ?? m.name}
                        </a>
                      ) : (
                        <div className="TeamHandle">{m.handle ?? m.name}</div>
                      )}
                      <div className="TeamRole">{(m.roles[lang] ?? m.roles.en).join(" / ")}</div>
                      {m.handle && m.name !== "Léo Ponchon" ? <div className="TeamName">{m.name}</div> : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="changelogs" aria-label={copy.changelog.aria}>
        <div className="Container">
          <div className="PageHeader" style={{ marginTop: 18 }}>
            <h2 className="PageTitle">{copy.changelog.title}</h2>
          </div>

          <div className="Card" aria-label={copy.changelog.aria}>
            <div className="CardInner">
              <p className="Lead" style={{ marginTop: 0 }}>
                {copy.changelog.lead}
              </p>

              <div className="Divider" />

              {(copy.changelog.sections ?? []).map((section) => (
                <div key={section.heading}>
                  <h3 className="CardTitle" style={{ marginBottom: 8 }}>
                    {section.heading}
                  </h3>

                  {(section.blocks ?? []).map((block, idx) => (
                    <div key={`${section.heading}-${idx}`}>
                      {block.title ? (
                        <h4 className="CardTitle" style={{ marginTop: 14, marginBottom: 6, fontSize: 16 }}>
                          {block.title}
                        </h4>
                      ) : null}

                      <ul style={{ marginTop: 0, paddingLeft: 18, color: "rgba(43, 33, 48, 0.86)" }}>
                        {(block.items ?? []).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="Divider" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
