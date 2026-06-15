// Remplace les valeurs ci-dessous par les vrais liens du club.
window.MJSC_CONFIG = {
  clubName: "MJSC Judo Manosque",
  address: "Lycée des Iscles, Manosque",
  email: "contact@mjsc-judo.fr",
  phone: "+33 7 82 97 65 59",

  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lyc%C3%A9e%20des%20Iscles%20Manosque",

  // Pour connecter le vrai calendrier : Google Calendar > Paramètres > Intégrer le calendrier > copier l'URL src de l'iframe.
  googleCalendarEmbedUrl: "https://calendar.google.com/calendar/embed?src=fr.french%23holiday%40group.v.calendar.google.com&ctz=Europe%2FParis",

  // Google Forms : il faut bien finir par ?embedded=true
  googleFormEmbedUrl: "https://docs.google.com/forms/d/e/1FAIpQLScWsSrNFTJjSfwFfQDwoCRDX1ryQ0OJIu_pEe0zPilvZBVaEA/viewform?embedded=true",

  // Google Drive : le site l'ouvre avec un bouton, pas en iframe, pour éviter les erreurs Google Drive.
  googleDriveFolderUrl: "https://drive.google.com/drive/folders/1xPzKkZ_tdigLaPH5XZI_ixVt4WO3Wf5f?usp=sharing",

  facebookUrl: "https://www.facebook.com/",
  instagramUrl: "https://www.instagram.com/",

  // YouTube : mets seulement l'ID d'une vidéo. Exemple : pour https://www.youtube.com/watch?v=ABC123, mets ABC123
  youtubeVideoId: "dQw4w9WgXcQ",

  // Horaires visibles sur le site. Modifie librement.
  schedule: [
    { day: "Lundi", time: "18h00 - 19h00", group: "Enfants" },
    { day: "Lundi", time: "19h00 - 20h30", group: "Ados / adultes" },
    { day: "Mercredi", time: "17h30 - 18h30", group: "Baby judo / enfants" },
    { day: "Vendredi", time: "18h30 - 20h00", group: "Tous niveaux" }
  ],

  // Carrousel : ajoute tes photos dans assets, puis remplace les chemins ci-dessous.
  // Exemple : src: "assets/entrainement.jpg"
  carouselImages: [
    { src: "", title: "Entraînements", text: "Ajoute une photo des entraînements du club." },
    { src: "", title: "Compétitions", text: "Ajoute une photo de compétition ou remise de ceintures." },
    { src: "", title: "Vie du club", text: "Ajoute une photo de stage, sortie ou événement du club." }
  ]
};
