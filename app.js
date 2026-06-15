const cfg = window.MJSC_CONFIG || {};
const $ = (s) => document.querySelector(s);
const photos = cfg.photos || [];

function setText(id, value){ const el = document.getElementById(id); if(el && value) el.textContent = value; }
function setHref(id, value){ const el = document.getElementById(id); if(el && value) el.href = value; }

setText('addressShort', cfg.address);
setText('addressFull', cfg.address);
setText('phoneText', cfg.phone);
setText('emailText', cfg.email);
setHref('mapHero', cfg.googleMapsUrl);
setHref('mapContact', cfg.googleMapsUrl);
setHref('driveBtn', cfg.googleDriveFolderUrl);
setHref('driveQuick', cfg.googleDriveFolderUrl);
setHref('facebookLink', cfg.facebookUrl);
setHref('instagramLink', cfg.instagramUrl);
setHref('youtubeLink', cfg.youtubeUrl);
setText('year', new Date().getFullYear());

if ($('#formFrame')) $('#formFrame').src = cfg.googleFormEmbedUrl || '';
if ($('#calendarFrame')) $('#calendarFrame').src = cfg.googleCalendarEmbedUrl || '';
if ($('#heroBg') && photos[0]) $('#heroBg').style.backgroundImage = `url('${photos[0]}')`;
if ($('#clubPhoto') && photos[1]) $('#clubPhoto').src = photos[1];

const track = $('#carouselTrack');
let slideIndex = 0;
if (track) {
  photos.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `<img src="${src}" alt="Photo judo ${i+1}"><div class="slide-caption">MJSC Judo Manosque</div>`;
    track.appendChild(slide);
  });
}
function showSlide(i){
  if (!track || !photos.length) return;
  slideIndex = (i + photos.length) % photos.length;
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
  if ($('#heroBg')) $('#heroBg').style.backgroundImage = `url('${photos[slideIndex]}')`;
}
$('.prev')?.addEventListener('click', () => showSlide(slideIndex - 1));
$('.next')?.addEventListener('click', () => showSlide(slideIndex + 1));
setInterval(() => showSlide(slideIndex + 1), 5200);

$('.menu-toggle')?.addEventListener('click', () => $('.main-nav')?.classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => $('.main-nav')?.classList.remove('open')));

const backTop = $('.back-top');
window.addEventListener('scroll', () => backTop?.classList.toggle('visible', window.scrollY > 500));
backTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
