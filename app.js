const cfg = window.MJSC_CONFIG || {};
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function setAttr(id, attr, value){ const el = document.getElementById(id); if(el && value) el.setAttribute(attr, value); }
function setText(id, value){ const el = document.getElementById(id); if(el && value) el.textContent = value; }

setText('clubAddress', cfg.address);
const email = $('#clubEmail'); if(email){ email.textContent = cfg.email; email.href = `mailto:${cfg.email}`; }
const phone = $('#clubPhone'); if(phone){ phone.textContent = cfg.phone; phone.href = `tel:${(cfg.phone||'').replaceAll(' ','')}`; }
setAttr('formBtn','href',cfg.googleFormEmbedUrl?.replace('embedded=true','usp=dialog') || cfg.googleFormEmbedUrl);
setAttr('driveBtn','href',cfg.googleDriveFolderUrl);
setAttr('driveBtn2','href',cfg.googleDriveFolderUrl);
setAttr('formFrame','src',cfg.googleFormEmbedUrl);
setAttr('facebookLink','href',cfg.facebookUrl);
setAttr('instagramLink','href',cfg.instagramUrl);
setAttr('youtubeLink','href',cfg.youtubeUrl);
setAttr('mapsLink','href',cfg.googleMapsUrl);
setAttr('mapFrame','src',`https://www.google.com/maps?q=${encodeURIComponent(cfg.address || 'Lycée des Iscles Manosque')}&output=embed`);

const slides = $$('.hero-slide'); const dots = $$('.dots span'); let idx = 0;
function showSlide(n){ idx = (n + slides.length) % slides.length; slides.forEach((s,i)=>s.classList.toggle('active', i===idx)); dots.forEach((d,i)=>d.classList.toggle('on', i===idx)); }
$('.next')?.addEventListener('click',()=>showSlide(idx+1)); $('.prev')?.addEventListener('click',()=>showSlide(idx-1));
setInterval(()=>showSlide(idx+1), 5200);

const track = $('.strip-track');
$('.strip-btn.right')?.addEventListener('click',()=>track.scrollBy({left:260,behavior:'smooth'}));
$('.strip-btn.left')?.addEventListener('click',()=>track.scrollBy({left:-260,behavior:'smooth'}));

const burger = $('.burger'); const nav = $('.nav');
burger?.addEventListener('click',()=>nav.classList.toggle('open'));
$$('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const back = $('.backtop');
window.addEventListener('scroll',()=>back.classList.toggle('show', window.scrollY > 500));
back?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
