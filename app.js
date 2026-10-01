const cfg = window.MJSC_CONFIG || {};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function setText(id,v){const e=document.getElementById(id); if(e&&v)e.textContent=v}
function setHref(id,v){const e=document.getElementById(id); if(e&&v)e.href=v}
setText('clubAddress', cfg.address); setText('clubPhoneText', cfg.phone); setText('clubEmailText', cfg.email);
setHref('instaLink', cfg.instagramUrl); setHref('fbLink', cfg.facebookUrl); setHref('driveBtn', cfg.googleDriveFolderUrl); setHref('driveBtn2', cfg.googleDriveFolderUrl);
setHref('formBtn', (cfg.googleFormEmbedUrl||'').replace('embedded=true','usp=sharing'));
setHref('mailLink', 'mailto:'+cfg.email); setHref('phoneLink', 'tel:'+(cfg.phone||'').replaceAll(' ',''));
const form = $('#formFrame'); if(form && cfg.googleFormEmbedUrl) form.src = cfg.googleFormEmbedUrl;
const cal = $('#calendarFrame'); if(cal && cfg.googleCalendarEmbedUrl) cal.src = cfg.googleCalendarEmbedUrl;
const map = $('#mapFrame'); if(map) map.src = `https://www.google.com/maps?q=${encodeURIComponent(cfg.address || 'Lycée des Iscles Manosque')}&output=embed`;
const burger = $('.burger'), nav = $('.nav'); burger?.addEventListener('click',()=>nav.classList.toggle('open')); $$('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const slides = $$('.hero-slide'), dots = $$('.hero-controls button'); let i=0; function show(n){ if(!slides.length)return; i=(n+slides.length)%slides.length; slides.forEach((s,k)=>s.classList.toggle('active',k===i)); dots.forEach((d,k)=>d.classList.toggle('active',k===i)); } dots.forEach((d,k)=>d.addEventListener('click',()=>show(k))); setInterval(()=>show(i+1),5200);
const back=$('.backtop'); window.addEventListener('scroll',()=>back?.classList.toggle('show',scrollY>500)); back?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const cookie=$('.cookie'); if(cookie && localStorage.getItem('mjscCookies')!=='set') cookie.classList.add('show'); $$('.cookie button').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem('mjscCookies','set');cookie.classList.remove('show')}));
const modal=$('.modal'); $$('.gallery img').forEach(img=>img.addEventListener('click',()=>{if(modal){modal.querySelector('img').src=img.src; modal.classList.add('show')}})); $('.modal button')?.addEventListener('click',()=>modal.classList.remove('show')); modal?.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
