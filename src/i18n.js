const translations = {
  en: {
    pageTitle: "Oniric Streams — Official website",
    langLabel: "Language",
    langSwitch: "FR",
    skipToContent: "Skip to content",
    brandAria: "Go to home",
    tagline: "Between dreams, harvests, and rebirths.",
    nav: {
      home: "Home",
      media: "Media",
      credits: "Credits",
    },
    footerRights: "All rights reserved.",
    a11y: {
      site: "Oniric Streams website",
      mainNav: "Main navigation",
      mainContent: "Main content",
      externalLinks: "External links",
      footer: "Footer",
      pages: "Pages",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    topCta: {
      aria: "Download",
      actionsAria: "Actions",
      kicker: "Farm • Tower • Rebirth",
      title: "Oniric Streams",
      lead:
        "Grow your farm and climb the tower at the heart of the village. Each cycle, the Oniric Streams bring you back… with something more.",
      download: "Download",
      seeShots: "See screenshots",
    },
    about: {
      aria: "Overview",
      aboutTitle: "About",
      aboutLead:
        "Oniric Streams is a pixel-art farming game with a stronger focus on combat. At the center of the village stands an impossible tower: your parents died inside, and you inherit their farm once you’re old enough to restore it.",
      storyTitle: "Story",
      storyLead:
        "An orphan at the edge of a quiet village, you inherit your parents’ farm—left behind after they died in the tower at its center. As the fields thrive, you push higher into the tower’s dreamlike currents, chasing the truth they never brought back. Reach the summit, and a wish awaits… but each fall sends you back to the start, changed.",
      credits: "Credits",
      pressKit: "Press kit",
    },
    features: {
      aria: "Features",
      title: "Features",
      lead: "A quick look at the game’s pillars.",
      listAria: "Feature list",
      items: [
        "Build your dream farm: crops, animals, upgrades, and cozy routines.",
        "Explore the Tower: ever-higher floors, secrets, and memorable bosses.",
        "Combat-first progression: gear, skills, and build variety.",
        "A satisfying loop: farm by day, delve for power and rare materials.",
        "Rebirth system: start over stronger, with lasting boons and new insights.",
        "A living village: relationships, seasonal events, and hidden stories.",
      ],
    },
    media: {
      aria: "Media",
      kicker: "Gallery",
      title: "Media",
      lead: "Screenshots and visuals from the project.",
      galleryAria: "Screenshot gallery",
      shotsAlt: (n) => `Screenshot ${n}`,
    },
    credits: {
      aria: "Credits",
      kicker: "Credits",
      title: "Team",
      lead: "The people behind Oniric Streams.",
      contributors: "Contributors",
      listAria: "Contributors list",
    },
    changelog: {
      aria: "Changelog",
      title: "Changelog",
      lead: "All notable changes to the project are listed here.",
      sections: [
        { heading: "[Unreleased]", blocks: [{ title: null, items: ["Nothing yet."] }] },
        {
          heading: "[1.0.3] - 2026-05-26",
          blocks: [
            {
              title: "Interactions (quality of life)",
              items: [
                "Chests no longer open automatically: you must now aim at the chest and press Interact.",
                "The bed, Shipping Bin, and vendors also use Interact on the targeted object (no more invisible “zones”).",
                "To sleep, you must be on the bed (not just next to it).",
              ],
            },
          ],
        },
        {
          heading: "[1.0.2] - 2026-05-25",
          blocks: [
            {
              title: "UI / Shop",
              items: ["New shop entries and improvements (including seasonal deals)."],
            },
            {
              title: "Shipping Bin",
              items: ["Improved selling via the Shipping Bin (more sellable items, with configured prices)."],
            },
            {
              title: "Farming",
              items: [
                "Withering tuned: crops now wither on season change.",
                "Perennial crops: production adjusted for better consistency.",
              ],
            },
            {
              title: "Items / Animations",
              items: ["Visual/animation tweaks for held items."],
            },
          ],
        },
        {
          heading: "[Since 1.0.0] - 2026-05-23 → 2026-05-25",
          blocks: [
            { title: "UI / Shop", items: ["Updated shop visuals and layouts.", "New UI elements.", "Shop scene adjustments."] },
            { title: "Added", items: ["Footstep SFX.", "Settings panel."] },
            {
              title: "Fixed",
              items: [
                "UI typography.",
                "Blocking interactions.",
                "Save and economy issues.",
                "Shop stability (menus / hotbar).",
                "Chests (visibility and transfers).",
                "Loading and transitions.",
                "Customization.",
                "Animations.",
              ],
            },
          ],
        },
        {
          heading: "[1.0.0] - 2026-05-23",
          blocks: [
            { title: "Added", items: ["Core UI (fundamentals).", "Character customization menu.", "Stamina."] },
            { title: "Fixed", items: ["Menu UI.", "Inventory.", "Startup flow.", "Tilemaps.", "Chests."] },
          ],
        },
      ],
    },
    updates: {
      aria: "Updates",
      title: "Updates",
      lead: "A few concrete notes, so the page feels more like a real project log than a template.",
      listAria: "Updates list",
      items: [
        { title: "Windows build", body: "Public installer available: Oniric Streams_Setup_v1.0.0.exe" },
        { title: "Scope", body: "Small team, focused on a tight loop: farm → tower → rebirth." },
        { title: "Feedback", body: "If you spot a bug or have balance thoughts, ping the team on GitHub (links below)." },
      ],
    },
  },
  fr: {
    pageTitle: "Oniric Streams — Site officiel",
    langLabel: "Langue",
    langSwitch: "EN",
    skipToContent: "Aller au contenu",
    brandAria: "Aller à l’accueil",
    tagline: "Entre rêves, récoltes et renaissances.",
    nav: {
      home: "Accueil",
      media: "Médias",
      credits: "Crédits",
    },
    footerRights: "Tous droits réservés.",
    a11y: {
      site: "Site Oniric Streams",
      mainNav: "Navigation principale",
      mainContent: "Contenu principal",
      externalLinks: "Liens externes",
      footer: "Footer",
      pages: "Pages",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    topCta: {
      aria: "Téléchargement",
      kicker: "Ferme • Tour • Renaissance",
      title: "Oniric Streams",
      lead:
        "Quitte l’Ordre des Veilleurs, reconstruis la ferme de tes parents et gravis la Tour où ils ont disparu. Cultive le jour, combats la nuit, meurs, renais, et découvre ce que les Flux Oniriques ont enfoui au sommet.",
      download: "Télécharger",
      seeShots: "Voir des captures",
    },
    about: {
      aria: "Présentation",
      aboutTitle: "À propos",
      aboutLead:
        "Oniric Streams est un farming roguelite narratif en pixel art, situé dans un monde médiéval-fantastique traversé par une magie ancienne : les Flux Oniriques. Le jour, tu reconstruis la ferme familiale et fais revivre le domaine. La nuit, tu gravis la Tour où tes parents ont disparu.",
      storyTitle: "Histoire",
      storyLead:
        "Tu as grandi dans la capitale, recueilli par l’Ordre des Veilleurs après la disparition de tes parents. On t’a appris à copier des sceaux et à canaliser les rêves des autres. Mais lorsque le sceau qu’ils t’avaient laissé se brise, leur dernier appel traverse ton sommeil. Tu retournes au village, à une ferme envahie par les herbes et les souvenirs. À mesure que ton domaine reprend vie, les Flux Oniriques se réveillent… et la Tour ouvre de nouveaux étages. Chaque défaite te renvoie au premier jour — pas exactement le même premier jour.",
      credits: "Crédits",
      pressKit: "Press kit",
    },
    features: {
      aria: "Fonctionnalités",
      title: "Fonctionnalités",
      lead: "Les piliers du jeu, entre douceur et vertige.",
      listAria: "Liste des fonctionnalités",
      items: [
        "Reconstruis une ferme héritée d’une lignée magique : cultive, récolte, élève des animaux, restaure ton domaine et transforme une terre abandonnée en refuge vivant.",
        "Prépare chaque ascension : récoltes, outils, améliorations et liens avec le village influencent ta progression dans la Tour.",
        "Gravis la Tour impossible : étages instables, secrets, créatures oniriques et boss marquants.",
        "Meurs, renais, transforme le monde : chaque chute te ramène au début du cycle avec de nouvelles forces, de nouveaux indices et des traces durables.",
        "Maîtrise les Flux Oniriques : magie des rêves, des saisons et des souvenirs pour composer des builds variés.",
        "Découvre un village qui cache ses propres rêves : relations, événements saisonniers et histoires enfouies.",
        "Vis une boucle entre douceur et vertige : une vie simple le jour, puis la Tour la nuit.",
      ],
    },
    media: {
      aria: "Médias",
      kicker: "Galerie",
      title: "Médias",
      lead: "Captures d’écran et visuels du projet.",
      galleryAria: "Galerie",
      shotsAlt: (n) => `Capture d’écran ${n}`,
    },
    credits: {
      aria: "Crédits",
      kicker: "Crédits",
      title: "Équipe",
      lead: "Les personnes derrière Oniric Streams.",
      contributors: "Contributeurs",
      listAria: "Liste des contributeurs",
    },
    changelog: {
      aria: "Changelog",
      title: "Changelog",
      lead: "Tous les changements notables du projet sont listés ici.",
      sections: [
        { heading: "[Non publié]", blocks: [{ title: null, items: ["Rien pour le moment."] }] },
        {
          heading: "[1.0.3] - 2026-05-26",
          blocks: [
            {
              title: "Interactions (qualité de vie)",
              items: [
                "Les coffres ne s’ouvrent plus automatiquement : il faut désormais viser le coffre et appuyer sur Interagir.",
                "Le lit, la Shipping Bin et les vendeurs s’utilisent aussi via Interagir sur l’objet visé (plus besoin de se coller à une “zone” invisible).",
                "Pour dormir, il faut être sur le lit (pas juste à côté).",
              ],
            },
          ],
        },
        {
          heading: "[1.0.2] - 2026-05-25",
          blocks: [
            {
              title: "UI / Shop",
              items: ["Nouvelles entrées et améliorations du shop (incluant des offres saisonnières)."],
            },
            {
              title: "Shipping Bin",
              items: ["Amélioration de la vente via la Shipping Bin (plus d’objets vendables, avec prix configurés)."],
            },
            {
              title: "Farming",
              items: [
                "Flétrissement ajusté : les cultures flétrissent lors d’un changement de saison.",
                "Cultures pérennes : production ajustée pour être plus cohérente.",
              ],
            },
            {
              title: "Items / Animations",
              items: ["Ajustements visuels/animations des objets en main."],
            },
          ],
        },
        {
          heading: "[Depuis 1.0.0] - 2026-05-23 → 2026-05-25",
          blocks: [
            {
              title: "UI / Shop",
              items: ["Mise à jour des visuels et des layouts du shop.", "Nouveaux éléments UI.", "Ajustements de scène liés au shop."],
            },
            { title: "Ajouté", items: ["Bruitages de pas.", "Panneau de paramètres."] },
            {
              title: "Corrigé",
              items: [
                "Polices / typo UI.",
                "Interactions bloquantes.",
                "Sauvegarde et économie.",
                "Stabilité du shop (menus / hotbar).",
                "Coffres (affichage et transferts).",
                "Chargements et transitions.",
                "Customisation.",
                "Animations.",
              ],
            },
          ],
        },
        {
          heading: "[1.0.0] - 2026-05-23",
          blocks: [
            { title: "Ajouté", items: ["UI “fundamentals” fonctionnelle.", "Menu de customisation du personnage.", "Stamina."] },
            { title: "Corrigé", items: ["UI du menu.", "Inventaire.", "Démarrage.", "Tilemaps.", "Coffres."] },
          ],
        },
      ],
    },
    updates: {
      aria: "Actus",
      title: "Actus",
      lead: "Quelques notes concrètes (ça fait tout de suite moins “template”).",
      listAria: "Liste des actus",
      items: [
        { title: "Build Windows", body: "Installer public disponible : Oniric Streams_Setup_v1.0.0.exe" },
        { title: "Cadre", body: "Petite équipe, focus sur une boucle simple : ferme → tour → rebirth." },
        { title: "Retours", body: "Bug / équilibrage / ressenti : écris-nous via GitHub (liens en bas)." },
      ],
    },
  },
};

function getInitialLang() {
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "fr" || stored === "en") return stored;
  } catch {}
  return "en";
}

function t(lang, key) {
  const parts = key.split(".");
  let node = translations[lang] ?? translations.en;
  for (const part of parts) node = node?.[part];
  return node ?? key;
}

export { getInitialLang, t, translations };
