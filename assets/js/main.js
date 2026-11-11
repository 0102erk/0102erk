/* =========================================================
   Can Erkurt Studio — etkileşimler
   Projeleri güncellemek için yalnızca PROJECTS dizisini
   düzenlemeniz yeterlidir; ızgara ve detay penceresi buradan üretilir.
   ========================================================= */
const PROJECTS = [
  {
    id: 'kaya-evi', cat: 'mimarlik', catLabel: 'Mimarlık', layout: 'full',
    title: 'Kaya Evi', place: 'Bodrum', year: '2025',
    img: 'assets/img/projects/kaya-evi.svg',
    desc: 'Yarımadanın sarp kayalıkları üzerinde, denize doğru 9 metre konsol yapan tek katlı bir yazlık konut. Betonarme döşeme plağı yapının hem çatısı hem de gölgelik saçağı; cam kütle ise içeriyi manzaraya tamamen açıyor. Taşıyıcı pilotiler, arazinin doğal profiline dokunmadan yapıyı kayaya oturtuyor.',
    specs: { Konum: 'Bodrum, Muğla', Alan: '420 m²', Yıl: '2025', Durum: 'Tamamlandı', Kapsam: 'Mimari + İç mimari', Ekip: '6 kişi' }
  },
  {
    id: 'galata-loft', cat: 'ic', catLabel: 'İç Mimarlık', layout: 'narrow tall',
    title: 'Galata Loft', place: 'İstanbul', year: '2024',
    img: 'assets/img/projects/galata-loft.svg',
    desc: '19. yüzyıldan kalma bir yapının çatı katında, tavan kirişlerini açığa çıkaran bir dönüşüm. Meşe zemin, kireç sıva duvarlar ve özel tasarım alçak oturma grubu; Haliç\'e bakan büyük pencereden gelen ışığı mekânın merkezine taşıyor.',
    specs: { Konum: 'Beyoğlu, İstanbul', Alan: '180 m²', Yıl: '2024', Durum: 'Tamamlandı', Kapsam: 'İç mimari + Mobilya', Ekip: '4 kişi' }
  },
  {
    id: 'my-lodos', cat: 'yat', catLabel: 'Yat Tasarımı', layout: 'wide',
    title: 'M/Y Lodos', place: '42 m Motor Yat', year: '2025',
    img: 'assets/img/projects/my-lodos.svg',
    desc: 'Üç katlı üst yapısı kesintisiz cam bantlarla tanımlanan, 42 metrelik tam deplasmanlı motor yat. Exterior styling ile birlikte genel yerleşim ve tüm iç mekânlar stüdyomuz tarafından tasarlandı. Ana salon, kıç güverteye tamamen açılabilen cam paneller sayesinde iç ve dış mekânı birleştiriyor.',
    specs: { Boy: '42 m', Misafir: '12 kişi · 6 kabin', Tersane: 'Tuzla, İstanbul', Yıl: '2025', Kapsam: 'Exterior + Interior', Malzeme: 'Teak, meşe, traverten' }
  },
  {
    id: 'mavi-teras', cat: 'mimarlik', catLabel: 'Mimarlık', layout: 'narrow',
    title: 'Mavi Teras Konutları', place: 'İzmir', year: '2024',
    img: 'assets/img/projects/mavi-teras.svg',
    desc: 'Her katta kaydırılan balkon ritmiyle cepheye derinlik kazandıran 48 konutluk bir yapı. Derin teraslar yaz güneşine karşı doğal gölge oluştururken, cephe boyunca uzanan bitki saksıları yapıya yaşayan bir yüz veriyor.',
    specs: { Konum: 'Karşıyaka, İzmir', Alan: '6.800 m²', Yıl: '2024', Durum: 'İnşaat aşamasında', Kapsam: 'Mimari', Birim: '48 konut' }
  },
  {
    id: 'salon', cat: 'yat', catLabel: 'Yat Tasarımı', layout: 'wide',
    title: 'Lodos — Ana Salon', place: 'Yat İç Mekânı', year: '2025',
    img: 'assets/img/projects/salon.svg',
    desc: 'Geniş panoramik pencerelerle çevrelenen ana salonda kavisli tavan, gizli aydınlatma ve özel üretim modüler oturma grubu kullanıldı. Tüm mobilyalar ağırlık ve deniz koşulları dikkate alınarak hafif sandviç paneller ile üretildi.',
    specs: { Alan: '68 m²', Yıl: '2025', Kapsam: 'Interior', Malzeme: 'Teak, bouclé, mermer', Aydınlatma: 'Özel tasarım', Durum: 'Teslim edildi' }
  },
  {
    id: 'kultur-merkezi', cat: 'mimarlik', catLabel: 'Mimarlık', layout: 'full',
    title: 'Ege Kültür Merkezi', place: 'Çeşme', year: '2026',
    img: 'assets/img/projects/kultur-merkezi.svg',
    desc: 'Meydana doğru eğimlenen tek bir çatı altında konser salonu, sergi alanları ve atölyeleri bir araya getiren yarışma projesi. Cam cephe akşam saatlerinde bir fener gibi yanarak kamusal meydanı canlandırıyor.',
    specs: { Konum: 'Çeşme, İzmir', Alan: '4.200 m²', Yıl: '2026', Durum: 'Yarışma — 1. Ödül', Kapsam: 'Mimari', Kapasite: '600 kişilik salon' }
  },
  {
    id: 'ofis', cat: 'ic', catLabel: 'İç Mimarlık', layout: 'wide',
    title: 'Levent Ofis', place: 'İstanbul', year: '2023',
    img: 'assets/img/projects/ofis.svg',
    desc: 'Bir yatırım şirketi için 30. katta, şehir manzarasına açılan toplantı ve çalışma alanları. Ahşap akustik paneller, cam bölücüler ve doğrusal aydınlatma ile hem odaklanmaya hem de iş birliğine uygun bir ortam kurgulandı.',
    specs: { Konum: 'Levent, İstanbul', Alan: '950 m²', Yıl: '2023', Durum: 'Tamamlandı', Kapsam: 'İç mimari + Uygulama', Kullanıcı: '70 kişi' }
  },
  {
    id: 'otel-lobi', cat: 'ic', catLabel: 'İç Mimarlık', layout: 'narrow tall',
    title: 'Kemer Butik Otel', place: 'Alaçatı', year: '2024',
    img: 'assets/img/projects/otel-lobi.svg',
    desc: 'Tarihi taş yapının kemerli açıklıklarını öne çıkaran lobi ve resepsiyon tasarımı. Traverten zemin, sıcak aydınlatma ve yerel zanaatkârlarla üretilen mobilyalar, misafiri ilk adımda Ege\'nin sakin ritmine davet ediyor.',
    specs: { Konum: 'Alaçatı, İzmir', Alan: '1.100 m²', Yıl: '2024', Durum: 'Tamamlandı', Kapsam: 'İç mimari + Restorasyon', Oda: '14 oda' }
  }
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Loader ---------- */
window.addEventListener('load', () => setTimeout(() => document.body.classList.add('is-loaded'), reduce ? 0 : 900));
setTimeout(() => document.body.classList.add('is-loaded'), 3000); // güvenlik ağı

/* ---------- Header ---------- */
const header = $('.header');
let lastY = 0;
const onScroll = () => {
  const y = scrollY;
  header.classList.toggle('is-solid', y > innerHeight * 0.85);
  header.classList.toggle('is-hidden', y > lastY && y > innerHeight && !document.body.classList.contains('is-locked'));
  lastY = y;
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Aktif menü bağlantısı
const navLinks = $$('.nav a[href^="#"]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach((s) => sectionObserver.observe(s));

/* ---------- Mobile menu ---------- */
const burger = $('.burger');
const menu = $('#mobileMenu');
const toggleMenu = (open) => {
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
  menu.hidden = !open;
  menu.classList.toggle('is-open', open);
  document.body.classList.toggle('is-locked', open);
};
burger.addEventListener('click', () => toggleMenu(burger.getAttribute('aria-expanded') !== 'true'));
$$('a', menu).forEach((a) => a.addEventListener('click', () => toggleMenu(false)));
addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) toggleMenu(false); });

/* ---------- Hero slider ---------- */
const slides = $$('.hero__slide');
let current = 0;
let timer;
const num = $('.hero__num'), label = $('.hero__label'), name = $('.hero__name'), bar = $('.hero__progress span');
const goTo = (i) => {
  const prev = slides[current];
  current = (i + slides.length) % slides.length;
  const next = slides[current];
  if (prev !== next) {
    prev.classList.remove('is-active');
    prev.classList.add('is-leaving');
    setTimeout(() => prev.classList.remove('is-leaving'), 1400);
    next.classList.add('is-active');
  }
  num.textContent = String(current + 1).padStart(2, '0');
  label.textContent = next.dataset.label;
  name.textContent = next.dataset.title;
  bar.classList.remove('run'); void bar.offsetWidth; bar.classList.add('run');
};
const startHero = () => { clearInterval(timer); timer = setInterval(() => goTo(current + 1), 6000); goTo(current); };
if (!reduce) startHero();

/* ---------- Manifesto: kelime kelime okuma efekti ---------- */
const manifesto = $('[data-words]');
if (manifesto) {
  manifesto.innerHTML = manifesto.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span> `).join('');
  const words = $$('.w', manifesto);
  const paint = () => {
    const r = manifesto.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)));
    const lit = Math.round(progress * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < lit));
  };
  addEventListener('scroll', paint, { passive: true });
  paint();
}

/* ---------- Reveal & sayaçlar ---------- */
const countUp = (el) => {
  const target = +el.dataset.count, suffix = el.dataset.suffix || '';
  if (reduce) { el.textContent = target + suffix; return; }
  const t0 = performance.now(), dur = 1600;
  const tick = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const delay = [...e.target.parentElement.children].indexOf(e.target) * 90;
    setTimeout(() => e.target.classList.add('in'), delay);
    const c = $('[data-count]', e.target);
    if (c) setTimeout(() => countUp(c), delay);
    obs.unobserve(e.target);
  });
}, { threshold: 0.2 });
$$('.reveal').forEach((el) => revealObserver.observe(el));

/* ---------- Disiplinler: akordeon + imleç önizleme ---------- */
const discs = $$('.disc');
discs.forEach((d, i) => {
  if (i === 0) d.classList.add('is-open');
  $('.disc__head', d).addEventListener('click', () => {
    const willOpen = !d.classList.contains('is-open');
    discs.forEach((o) => { o.classList.remove('is-open'); $('.disc__head', o).setAttribute('aria-expanded', 'false'); });
    if (willOpen) { d.classList.add('is-open'); $('.disc__head', d).setAttribute('aria-expanded', 'true'); }
  });
});
const preview = $('.cursor-preview');
if (preview && matchMedia('(hover: hover)').matches) {
  const pimg = $('img', preview);
  let px = 0, py = 0, tx = 0, ty = 0, raf;
  const follow = () => { px += (tx - px) * 0.18; py += (ty - py) * 0.18; preview.style.left = px + 'px'; preview.style.top = py + 'px'; raf = requestAnimationFrame(follow); };
  discs.forEach((d) => {
    const head = $('.disc__head', d);
    head.addEventListener('mouseenter', (e) => { pimg.src = d.dataset.preview; tx = px = e.clientX + 180; ty = py = e.clientY; preview.classList.add('on'); cancelAnimationFrame(raf); follow(); });
    head.addEventListener('mousemove', (e) => { tx = e.clientX + 180; ty = e.clientY; });
    head.addEventListener('mouseleave', () => { preview.classList.remove('on'); cancelAnimationFrame(raf); });
  });
}

/* ---------- Projeler ---------- */
const grid = $('#projectGrid');
grid.innerHTML = PROJECTS.map((p) => `
  <article class="card ${p.layout}" data-cat="${p.cat}" data-id="${p.id}" tabindex="0" role="button" aria-label="${p.title} projesini aç">
    <div class="card__media">
      <img src="${p.img}" alt="${p.title}, ${p.place}" loading="lazy">
      <span class="card__cat mono">${p.catLabel}</span>
      <span class="card__view mono" aria-hidden="true">İncele</span>
    </div>
    <div class="card__info">
      <h3 class="card__title">${p.title}</h3>
      <span class="card__meta mono">${p.place} · ${p.year}</span>
    </div>
  </article>`).join('');

$$('.filters button').forEach((btn) => btn.addEventListener('click', () => {
  $$('.filters button').forEach((b) => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-selected', b === btn); });
  const f = btn.dataset.filter;
  $$('.card', grid).forEach((c, i) => {
    const show = f === 'all' || c.dataset.cat === f;
    c.classList.toggle('is-hidden', !show);
    c.classList.remove('enter');
    if (show) { c.style.animationDelay = (i % 4) * 70 + 'ms'; void c.offsetWidth; c.classList.add('enter'); }
  });
}));

/* ---------- Proje detay penceresi ---------- */
const modal = $('#projectModal');
let modalIndex = 0;
const visibleProjects = () => $$('.card:not(.is-hidden)', grid).map((c) => PROJECTS.findIndex((p) => p.id === c.dataset.id));
const fillModal = (i) => {
  modalIndex = i;
  const p = PROJECTS[i];
  $('.modal__media img', modal).src = p.img;
  $('.modal__media img', modal).alt = `${p.title} — ${p.place}`;
  $('.modal__cat', modal).textContent = `${p.catLabel} · ${p.year}`;
  $('#modalTitle').textContent = p.title;
  $('.modal__desc', modal).textContent = p.desc;
  $('.modal__specs', modal).innerHTML = Object.entries(p.specs).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
};
const openProject = (id) => {
  const i = PROJECTS.findIndex((p) => p.id === id);
  if (i < 0) return;
  fillModal(i);
  modal.showModal();
  document.body.classList.add('is-locked');
};
grid.addEventListener('click', (e) => { const c = e.target.closest('.card'); if (c) openProject(c.dataset.id); });
grid.addEventListener('keydown', (e) => { const c = e.target.closest('.card'); if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openProject(c.dataset.id); } });
$$('[data-open]').forEach((b) => b.addEventListener('click', () => openProject(b.dataset.open)));
$('.modal__close', modal).addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
modal.addEventListener('close', () => document.body.classList.remove('is-locked'));
$$('.modal__nav button', modal).forEach((b) => b.addEventListener('click', () => {
  const list = visibleProjects().length ? visibleProjects() : PROJECTS.map((_, i) => i);
  let pos = list.indexOf(modalIndex);
  pos = (pos + +b.dataset.step + list.length) % list.length;
  fillModal(list[pos]);
}));
modal.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') $('[data-step="1"]', modal).click();
  if (e.key === 'ArrowLeft') $('[data-step="-1"]', modal).click();
});

/* ---------- Çizim / görsel karşılaştırma ---------- */
const compare = $('.compare');
if (compare) {
  const range = $('input', compare);
  range.addEventListener('input', () => compare.style.setProperty('--pos', range.value + '%'));
}

/* ---------- Öne çıkan görsel: hafif paralaks ---------- */
const featureImg = $('.feature__media img');
if (featureImg && !reduce) {
  addEventListener('scroll', () => {
    const r = featureImg.parentElement.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
    featureImg.style.transform = `scale(1.12) translateY(${p * -40}px)`;
  }, { passive: true });
}

/* ---------- İletişim formu ----------
   Sunucu tarafı yoksa form, kullanıcının e-posta uygulamasını hazır
   bir mesajla açar. Formspree / Netlify Forms vb. bir servis
   kullanılacaksa FORM_ENDPOINT değişkenine adres yazmanız yeterli. */
const FORM_ENDPOINT = ''; // örn. 'https://formspree.io/f/xxxxxx'
const STUDIO_EMAIL = 'info@canerkurt.studio';
const form = $('#contactForm');
const note = $('.form__note', form);
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let ok = true;
  $$('[required]', form).forEach((el) => {
    const bad = !el.value.trim() || (el.type === 'email' && !/^\S+@\S+\.\S+$/.test(el.value));
    el.closest('.field').classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  if (!ok) { note.textContent = 'Lütfen işaretli alanları kontrol edin.'; return; }
  const data = new FormData(form);
  const types = data.getAll('tur').join(', ') || 'Belirtilmedi';
  if (FORM_ENDPOINT) {
    note.textContent = 'Gönderiliyor…';
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      form.reset();
      note.textContent = 'Teşekkürler! Mesajınız bize ulaştı.';
    } catch { note.textContent = `Bir sorun oluştu. Lütfen ${STUDIO_EMAIL} adresine yazın.`; }
    return;
  }
  const body = `Ad Soyad: ${data.get('ad')}\nE-posta: ${data.get('eposta')}\nTelefon: ${data.get('telefon') || '-'}\nProje konumu: ${data.get('konum') || '-'}\nProje türü: ${types}\n\n${data.get('mesaj')}`;
  location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent('Proje talebi — ' + types)}&body=${encodeURIComponent(body)}`;
  note.textContent = 'E-posta uygulamanız açılıyor…';
});
$$('.field input, .field textarea', form).forEach((el) => el.addEventListener('input', () => el.closest('.field').classList.remove('invalid')));

/* ---------- Yıl ---------- */
$('#year').textContent = new Date().getFullYear();
