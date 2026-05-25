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
              <div className="HomeTopCtaActions" aria-label="Actions" style={{ justifyContent: "flex-start" }}>
                <a className="Button ButtonPrimary" href={installerHref} download>
                  {copy.topCta.download}
                </a>
                <a className="Button ButtonGhost" href="#media">
                  {copy.topCta.seeShots}
                </a>
              </div>
            </div>

            <div className="HeroArt" aria-hidden="true">
              <img className="HeroArtImg" src={withPublicUrl("/media/hero-sprite.svg")} alt="" decoding="async" />
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

          <div className="Card" aria-label="Liste">
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
                Tous les changements notables du projet sont listés ici.
              </p>

              <div className="Divider" />

              <h3 className="CardTitle" style={{ marginBottom: 8 }}>
                [Non publié]
              </h3>
              <ul style={{ marginTop: 0, paddingLeft: 18, color: "rgba(43, 33, 48, 0.86)" }}>
                <li>Rien pour le moment.</li>
              </ul>

              <div className="Divider" />

              <h3 className="CardTitle" style={{ marginBottom: 8 }}>
                [Depuis 1.0.0] - 2026-05-23 → 2026-05-25
              </h3>

              <h4 className="CardTitle" style={{ marginTop: 14, marginBottom: 6, fontSize: 16 }}>
                UI / Shop
              </h4>
              <ul style={{ marginTop: 0, paddingLeft: 18, color: "rgba(43, 33, 48, 0.86)" }}>
                <li>
                  Mise à jour des visuels et layouts du shop : <code>shop.png</code>, <code>shop_slot.prefab</code>,{" "}
                  <code>shop_slot_selector.png</code>.
                </li>
                <li>
                  Ajout de nouveaux sprites : <code>locker.png</code>, <code>name_slot.png</code>,{" "}
                  <code>normal_slot.png</code>.
                </li>
                <li>
                  Suppression de l’ancien sprite <code>shop_slot.png</code>.
                </li>
                <li>
                  Ajustements de scène liés au shop : <code>Assets/_Project/Scenes/Production/SampleScene.unity</code>.
                </li>
              </ul>

              <h4 className="CardTitle" style={{ marginTop: 14, marginBottom: 6, fontSize: 16 }}>
                Ajouté
              </h4>
              <ul style={{ marginTop: 0, paddingLeft: 18, color: "rgba(43, 33, 48, 0.86)" }}>
                <li>Bruitages de pas (footsteps).</li>
                <li>Panel de paramètres (settings panel).</li>
              </ul>

              <h4 className="CardTitle" style={{ marginTop: 14, marginBottom: 6, fontSize: 16 }}>
                Corrigé
              </h4>
              <ul style={{ marginTop: 0, paddingLeft: 18, color: "rgba(43, 33, 48, 0.86)" }}>
                <li>UI/typo : font.</li>
                <li>Interactions : arbres qui réapparaissent + joueur bloqué après certaines interactions.</li>
                <li>
                  Sauvegarde/économie : cultures (crops) non sauvegardées, or (gold) qui ne se met pas à jour.
                </li>
                <li>Shop : régressions après retour au menu principal / hotbar / menu in-game.</li>
                <li>Coffres : slots non visibles, transferts joueur ↔ coffre, divers soucis.</li>
                <li>Chargement du personnage.</li>
                <li>Lit (bed) et shipping bin.</li>
                <li>Customisation compatible avec des tilesheets supplémentaires.</li>
                <li>Animations : idle up (back hair).</li>
              </ul>

              <h4 className="CardTitle" style={{ marginTop: 14, marginBottom: 6, fontSize: 16 }}>
                Modifié
              </h4>
              <ul style={{ marginTop: 0, paddingLeft: 18, color: "rgba(43, 33, 48, 0.86)" }}>
                <li>Site web : itérations + déplacement vers un autre repo.</li>
              </ul>

              <div className="Divider" />

              <h3 className="CardTitle" style={{ marginBottom: 8 }}>
                [1.0.0] - 2026-05-23
              </h3>

              <h4 className="CardTitle" style={{ marginTop: 14, marginBottom: 6, fontSize: 16 }}>
                Ajouté
              </h4>
              <ul style={{ marginTop: 0, paddingLeft: 18, color: "rgba(43, 33, 48, 0.86)" }}>
                <li>UI “fundamentals” fonctionnelle.</li>
                <li>
                  Menu de customisation du personnage (fonctionnel) + corrections de changement de scènes.
                </li>
                <li>Stamina.</li>
              </ul>

              <h4 className="CardTitle" style={{ marginTop: 14, marginBottom: 6, fontSize: 16 }}>
                Corrigé / Amélioré
              </h4>
              <ul style={{ marginTop: 0, paddingLeft: 18, color: "rgba(43, 33, 48, 0.86)" }}>
                <li>UI du menu.</li>
                <li>Inventaire.</li>
                <li>Démarrage (startup panel).</li>
                <li>Tilemap registry.</li>
                <li>Coffres : stabilisation des interactions et transferts.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
