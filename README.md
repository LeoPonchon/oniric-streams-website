# Oniric Streams — site officiel

Site web de présentation et de distribution du projet **Oniric Streams**.

L'application React rassemble les pages de présentation du jeu, des médias/captures, la localisation de l'interface et le téléchargement de l'installeur Windows actuellement versionné dans le dépôt.

## Fonctionnalités

- site de présentation du jeu ;
- galerie de médias/captures ;
- contenu multilingue via `i18n` ;
- navigation React ;
- téléchargement de l'installeur Windows ;
- contenu autour de fonctionnalités du jeu comme la ferme, la personnalisation, la boutique, le sommeil et les coffres.

## Stack

- React 19
- React Router
- Create React App / `react-scripts`

## Installation

```bash
git clone https://github.com/LeoPonchon/oniric-streams-website.git
cd oniric-streams-website
npm install
npm start
```

Le serveur de développement affiche l'URL locale au démarrage.

## Build de production

```bash
npm run build
```

Le résultat est généré dans `build/`.

## Distribution du jeu

Le dossier public contient actuellement un installeur Windows `Oniric Streams_Setup_v1.0.0.exe`.

Lors d'une nouvelle release, pensez à mettre à jour ensemble :

- le binaire distribué ;
- le numéro de version affiché sur le site ;
- les captures d'écran si l'interface du jeu évolue ;
- les traductions concernées.

## Projet associé

Le code Unity du jeu se trouve dans le dépôt `Oniric-Streams`.
