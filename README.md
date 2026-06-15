# MJSC Judo Manosque — Site Cloudflare Pages

## Nouveautés de cette version
- Logo MJSC intégré dans le menu, la bannière, le footer et le favicon.
- Menu fixe qui reste visible quand on descend dans la page.
- Bouton retour en haut en bas à droite.
- Carrousel photo automatique avec flèches.
- Version ordinateur mieux équilibrée.
- Google Drive ouvert par bouton, pas en iframe, car Drive bloque souvent l'intégration.

## Modifier les liens
Tout se change dans `config.js` :
- Google Form
- Google Drive
- Google Calendar
- Facebook / Instagram / YouTube
- horaires
- photos du carrousel

## Ajouter des photos au carrousel
1. Mets tes images dans le dossier `assets`.
2. Dans `config.js`, modifie :

```js
carouselImages: [
  { src: "assets/photo1.jpg", title: "Entraînement", text: "Cours enfants" },
  { src: "assets/photo2.jpg", title: "Compétition", text: "Tournoi" }
]
```

## Déploiement GitHub + Cloudflare
Remplace les fichiers sur GitHub, clique `Commit changes`, puis redéploie dans Cloudflare Pages.
