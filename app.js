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

const backToTop = $("backToTop");
window.addEventListener("scroll", () => backToTop?.classList.toggle("show", window.scrollY > 500));
backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

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
if ($("quickAddress")) $("quickAddress").textContent = cfg.address || "Dojo à Manosque";
safeSetLink("clubEmail", cfg.email ? `mailto:${cfg.email}` : "", cfg.email);
safeSetLink("clubPhone", cfg.phone ? `tel:${cfg.phone.replace(/\s/g,"")}` : "", cfg.phone?.replace("+33", "0"));
safeSetLink("mapsLink", cfg.googleMapsUrl);
safeSetLink("driveFolderLink", cfg.googleDriveFolderUrl);
safeSetLink("facebookLink", cfg.facebookUrl);
safeSetLink("instagramLink", cfg.instagramUrl);

const formUrl = cfg.googleFormEmbedUrl || "";
makeIframe("calendarEmbed", cfg.googleCalendarEmbedUrl, "Calendrier du club");
makeIframe("formEmbed", formUrl, "Formulaire d'inscription");
safeSetLink("formDirectLink", formUrl.replace("?embedded=true", "?usp=dialog"));

if ($("youtubeEmbed")) {
  $("youtubeEmbed").innerHTML = `<iframe title="Vidéo YouTube du club" loading="lazy" allowfullscreen src="https://www.youtube.com/embed/${cfg.youtubeVideoId || "dQw4w9WgXcQ"}?rel=0"></iframe>`;
}

function renderSchedule(){
  const el = $("scheduleTable"); if(!el) return;
  const items = Array.isArray(cfg.schedule) ? cfg.schedule : [];
  if(!items.length) return;
  el.innerHTML = items.map(item => `<div><strong>${item.day || "Jour"}</strong><span>${item.time || "Horaire"} — ${item.group || "Groupe"}</span></div>`).join("");
}
renderSchedule();

function renderCarousel(){
  const track = $("carouselTrack");
  const dots = $("carouselDots");
  if(!track || !dots) return;
  const fallback = [
    { title: "Entraînements", text: "Ajoute ici une photo des cours du club.", src: "" },
    { title: "Compétitions", text: "Mets une photo de tournoi ou remise de ceintures.", src: "" },
    { title: "Vie du club", text: "Stages, événements, moments conviviaux.", src: "" }
  ];
  const slides = Array.isArray(cfg.carouselImages) && cfg.carouselImages.length ? cfg.carouselImages : fallback;
  let current = 0;
  track.innerHTML = slides.map((s, i) => `
    <article class="slide ${i === 0 ? "active" : ""}">
      ${s.src ? `<img src="${s.src}" alt="${s.alt || s.title || 'Photo du club'}" loading="lazy">` : ""}
      <div class="slide-content"><h3>${s.title || "Photo du club"}</h3><p>${s.text || ""}</p></div>
    </article>`).join("");
  dots.innerHTML = slides.map((_, i) => `<button type="button" aria-label="Afficher la photo ${i+1}" class="${i === 0 ? "active" : ""}"></button>`).join("");
  const slideEls = Array.from(track.querySelectorAll(".slide"));
  const dotEls = Array.from(dots.querySelectorAll("button"));
  function go(index){
    current = (index + slides.length) % slides.length;
    slideEls.forEach((s, i) => s.classList.toggle("active", i === current));
    dotEls.forEach((d, i) => d.classList.toggle("active", i === current));
  }
  document.querySelector(".carousel-btn.prev")?.addEventListener("click", () => go(current - 1));
  document.querySelector(".carousel-btn.next")?.addEventListener("click", () => go(current + 1));
  dotEls.forEach((d, i) => d.addEventListener("click", () => go(i)));
  setInterval(() => go(current + 1), 5000);
}
renderCarousel();
