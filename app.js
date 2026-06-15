const C = window.MJSC_CONFIG || {};
const $ = (s) => document.querySelector(s);
const all = (s) => [...document.querySelectorAll(s)];

function setText(id, value){ const el = document.getElementById(id); if(el && value) el.textContent = value; }
function setHref(id, value){ const el = document.getElementById(id); if(el && value) el.href = value; }
function telHref(phone){ return 'tel:' + String(phone || '').replace(/\s+/g,''); }

setText('clubAddress', C.address);
setText('clubEmail', C.email);
setText('clubPhone', C.phone);
setHref('clubEmail', 'mailto:' + C.email);
setHref('clubPhone', telHref(C.phone));
setHref('mapsLink', C.googleMapsUrl);
setHref('driveButton', C.googleDriveFolderUrl);
setHref('driveButton2', C.googleDriveFolderUrl);
setHref('facebookLink', C.facebookUrl);
setHref('instagramLink', C.instagramUrl);
setHref('youtubeLink', C.youtubeUrl);
setHref('footerFacebook', C.facebookUrl);
setHref('footerInstagram', C.instagramUrl);
setHref('footerYoutube', C.youtubeUrl);
$('#year').textContent = new Date().getFullYear();

if(C.googleCalendarEmbedUrl) $('#calendarFrame').src = C.googleCalendarEmbedUrl;
if(C.googleFormEmbedUrl){ $('#formFrame').src = C.googleFormEmbedUrl; $('#formButton').href = '#inscription'; }

const body = $('#horairesBody');
(C.horaires || []).forEach(row => {
  const tr = document.createElement('tr');
  row.forEach(cell => { const td = document.createElement('td'); td.textContent = cell; tr.appendChild(td); });
  body.appendChild(tr);
});

if(C.youtubeVideoId){
  $('#youtubeEmbed').innerHTML = `<iframe title="Vidéo YouTube" width="100%" height="230" src="https://www.youtube.com/embed/${C.youtubeVideoId}" allowfullscreen></iframe>`;
}

const nav = $('.nav');
$('.menu-toggle').addEventListener('click', () => nav.classList.toggle('open'));
all('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const slides = all('.hero-slide');
const dots = $('.dots');
let current = 0;
slides.forEach((_,i)=>{ const b=document.createElement('button'); b.addEventListener('click',()=>show(i)); dots.appendChild(b); });
function show(i){ slides[current].classList.remove('is-active'); dots.children[current].classList.remove('is-active'); current=(i+slides.length)%slides.length; slides[current].classList.add('is-active'); dots.children[current].classList.add('is-active'); }
show(0);
$('.hero-arrow.prev').addEventListener('click',()=>show(current-1));
$('.hero-arrow.next').addEventListener('click',()=>show(current+1));
setInterval(()=>show(current+1),5000);

const track = $('.strip-track');
$('.strip-prev').addEventListener('click',()=> track.scrollBy({left:-260,behavior:'smooth'}));
$('.strip-next').addEventListener('click',()=> track.scrollBy({left:260,behavior:'smooth'}));

const topBtn = $('.to-top');
window.addEventListener('scroll',()=> topBtn.classList.toggle('show', window.scrollY > 550));
topBtn.addEventListener('click',()=> window.scrollTo({top:0,behavior:'smooth'}));
