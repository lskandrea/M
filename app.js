const cfg = window.MJSC_CONFIG || {};
const $ = (id) => document.getElementById(id);

if ($("year")) $("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");
navToggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

function safeSetLink(id, href, text){
  const el = $(id); if(!el || !href) return;
  el.href = href; if(text) el.textContent = text;
}
function makeIframe(id, src, title){
  const el = $(id); if(!el) return;
  if(!src){ el.innerHTML = `<div class="placeholder"><h3>À connecter</h3><p>Ajoute le lien dans <strong>config.js</strong>.</p></div>`; return; }
  el.innerHTML = `<iframe title="${title}" loading="lazy" src="${src}"></iframe>`;
}

if ($("clubAddress")) $("clubAddress").textContent = cfg.address || "Dojo à Manosque";
safeSetLink("clubEmail", cfg.email ? `mailto:${cfg.email}` : "", cfg.email);
safeSetLink("clubPhone", cfg.phone ? `tel:${cfg.phone.replace(/\s/g,"")}` : "", cfg.phone?.replace("+33", "0"));
safeSetLink("mapsLink", cfg.googleMapsUrl);
safeSetLink("driveFolderLink", cfg.googleDriveFolderUrl);
safeSetLink("driveFolderLink2", cfg.googleDriveFolderUrl);
safeSetLink("facebookLink", cfg.facebookUrl);
safeSetLink("instagramLink", cfg.instagramUrl);

makeIframe("calendarEmbed", cfg.googleCalendarEmbedUrl, "Calendrier du club");
makeIframe("formEmbed", cfg.googleFormEmbedUrl, "Formulaire d'inscription");
if ($("youtubeEmbed")) $("youtubeEmbed").innerHTML = `<iframe title="Vidéo YouTube du club" loading="lazy" allowfullscreen src="https://www.youtube.com/embed/${cfg.youtubeVideoId || "dQw4w9WgXcQ"}?rel=0"></iframe>`;
