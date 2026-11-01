const LANG_KEY = 'cv-lang';
const INTRO_KEY = 'cv-intro-seen';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function readStore(store, key) {
  try { return window[store].getItem(key); } catch { return null; }
}

function writeStore(store, key, value) {
  try { window[store].setItem(key, value); } catch {}
}

let lang = readStore('localStorage', LANG_KEY)
  || ((navigator.language || 'ru').toLowerCase().startsWith('ru') ? 'ru' : 'en');

// strings can be { ru, en } or 'ru|en' or a plain string
function t(value) {
  if (value == null) return '';
  if (typeof value === 'string') {
    const [ru, en] = value.split('|');
    return lang === 'en' && en ? en : ru;
  }
  return value[lang] ?? value.ru;
}

function esc(text) {
  return String(text).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[ch]);
}

const $ = id => document.getElementById(id);

const tagList = items => `<ul class="tags">${items.map(i => `<li class="tag">${esc(t(i))}</li>`).join('')}</ul>`;
const pointList = items => `<ul class="points">${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;

function contactButtons(withValues) {
  const { contacts, cv } = SITE.person;
  const buttons = contacts.map(c => {
    const external = c.href.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
    const value = withValues ? ` <small>${esc(c.value)}</small>` : '';
    return `<a class="btn${c.main ? ' main' : ''}" href="${esc(c.href)}"${external}>${esc(t(c.label))}${value}</a>`;
  });
  // cv is a list of files, or one plain file name
  const files = Array.isArray(cv) ? cv : cv ? [{ label: UI.cv, href: cv }] : [];
  files.forEach(file => {
    buttons.push(`<a class="btn" href="${esc(file.href)}" download>${esc(t(file.label))}</a>`);
  });
  return buttons.join('');
}

function glyphFor(project) {
  if (project.glyph) return project.glyph;
  const words = t(project.title).split(/\s+/);
  return words.length > 1 ? words[0][0] + words[1][0] : words[0].slice(0, 2);
}

function coverFor(project, index) {
  const media = project.video
    ? `<video src="${esc(project.video)}" muted loop playsinline preload="none"></video>`
    : project.image
      ? `<img src="${esc(project.image)}" alt="" loading="lazy" decoding="async"${project.focus ? ` style="object-position: ${esc(project.focus)}"` : ''}>`
      : `<span class="glyph">${esc(glyphFor(project))}</span>`;
  return `<span class="cover" style="--a: ${100 + index * 47}deg">${media}</span>`;
}

function renderHero() {
  const p = SITE.person;
  const name = t(p.name);
  $('name').textContent = name;
  $('name').dataset.text = name;
  $('role').textContent = t(p.role);
  $('tagline').textContent = t(p.tagline);
  $('facts').innerHTML = `<span>${esc(t(p.location))}</span><span class="status">${esc(t(p.status))}</span>`;
  $('contacts').innerHTML = contactButtons(false);
  $('contacts-bottom').innerHTML = contactButtons(true);
  document.title = `${name} | ${t(p.role)}`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', t(p.tagline));
}

function renderAbout() {
  $('about').innerHTML = t(SITE.about).map(line => `<p>${esc(line)}</p>`).join('');
}

function renderExperience() {
  $('experience').innerHTML = SITE.experience.map(job => `
    <li class="job">
      <p class="job-period">${esc(t(job.period))}<span class="job-kind">${esc(t(job.kind))}</span></p>
      <div>
        <h3 class="job-title">${esc(t(job.title))}</h3>
        <p class="job-place">${esc(t(job.place))}</p>
        ${pointList(t(job.points))}
        ${tagList(job.stack)}
      </div>
    </li>`).join('');
}

// big cards first, then small ones; inside each group ready projects go first and the order from data.js is kept
const STATUS_ORDER = { done: 0, wip: 1 };
const statusLabel = status => (status === 'done' ? UI.done : status === 'wip' ? UI.wip : null);

const byStatus = (a, b) => (STATUS_ORDER[a.status] ?? 2) - (STATUS_ORDER[b.status] ?? 2);

function renderProjects() {
  const featured = SITE.projects.filter(p => p.featured).sort(byStatus);
  const rest = SITE.projects.filter(p => !p.featured).sort(byStatus);

  $('projects').innerHTML = [...featured, ...rest].map(project => {
    const index = SITE.projects.indexOf(project);
    const label = statusLabel(project.status);
    const badge = label ? `<span class="badge ${project.status}">${esc(t(label))}</span>` : '';
    const size = project.featured ? '' : ' small';
    return `
      <button class="card${size}" type="button" data-id="${esc(project.id)}" aria-haspopup="dialog">
        ${coverFor(project, index)}
        ${project.featured ? badge : ''}
        <span class="card-body">
          ${project.featured ? '' : badge}
          <span class="card-title">${esc(t(project.title))}</span>
          <span class="card-text">${esc(t(project.short))}</span>
          ${project.featured ? `<span class="tags">${project.stack.map(s => `<span class="tag">${esc(s)}</span>`).join('')}</span>` : ''}
        </span>
      </button>`;
  }).join('');
}

function renderProjectsNote() {
  const git = SITE.person.contacts.find(c => c.label === 'GitHub');
  $('projects-note').innerHTML = git
    ? `${esc(t(UI.codeNote))} <a href="${esc(git.href)}" target="_blank" rel="noopener">${esc(git.href.replace(/^https?:\/\//, ''))}</a>`
    : '';
}

function renderSkills() {
  $('skills').innerHTML = SITE.skills.map(row => `
    <div class="skill-row">
      <dt>${esc(t(row.group))}</dt>
      <dd>${row.items.map(i => `<span class="tag">${esc(t(i))}</span>`).join('')}</dd>
    </div>`).join('');
}

function renderEducation() {
  const e = SITE.education;
  $('education').innerHTML = `
    <div>
      <h3>${esc(t(e.place))}</h3>
      <p class="muted">${esc(t(e.degree))}, ${esc(t(e.period))}</p>
    </div>
    <div class="edu-side">
      <h3>${esc(t(UI.languages))}</h3>
      ${pointList(SITE.languages.map(t))}
      <h3>${esc(t(UI.more))}</h3>
      <ul class="points">${SITE.extras.map(item => `<li>${esc(t(item))}${item.link
        ? ` <a href="${esc(item.link.href)}" target="_blank" rel="noopener">${esc(item.link.label)}</a>` : ''}</li>`).join('')}</ul>
    </div>`;
}

function renderUi() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ui]').forEach(node => {
    node.textContent = t(UI[node.dataset.ui]);
    if (node.classList.contains('glitch')) node.dataset.text = node.textContent;
  });
  document.querySelectorAll('#lang [data-lang]').forEach(span => {
    span.classList.toggle('is-active', span.dataset.lang === lang);
  });
}

function render() {
  renderUi();
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderProjectsNote();
  renderSkills();
  renderEducation();
}

// pixel ghost avatar, one char per pixel

const GHOST = [
  '................',
  '.....oooooo.....',
  '...oohhbbbboo...',
  '..ohhbbbbbbbbo..',
  '..ohbbbbbbbbbo..',
  '.ohbeebbbbeebbo.',
  '.obbeebbbbeebbo.',
  '.obcbbbbbbbbcbo.',
  '.obbbbbmmbbbbbo.',
  '.obbbbbbbbbbbso.',
  '.osbbbbbbbbbsso.',
  '.ossbbbbbbbssso.',
  '.osssssssssssso.',
  '.oso.oso.oso.oo.',
  '..o...o...o.....'
];

const GHOST_COLORS = {
  o: '#f4f0ff',
  h: '#ffffff',
  b: 'url(#ghost-fill)',
  s: '#7b5fd8',
  e: '#000',
  m: '#000',
  c: '#ff5fa8'
};

function drawAvatar() {
  const rects = [];
  GHOST.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (!GHOST_COLORS[ch]) return;
      const cls = ch === 'e' ? ' class="eye"' : '';
      rects.push(`<rect${cls} x="${x}" y="${y}" width="1.02" height="1.02" fill="${GHOST_COLORS[ch]}"/>`);
    });
  });
  $('avatar').innerHTML = `
    <svg viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ghost-fill" gradientUnits="userSpaceOnUse" x1="2" y1="2" x2="14" y2="13">
          <stop offset="0" stop-color="#ff5fa8"/>
          <stop offset=".55" stop-color="#b088ff"/>
          <stop offset="1" stop-color="#5fe0ff"/>
        </linearGradient>
      </defs>
      ${rects.join('')}
    </svg>`;
}

function blink() {
  const eyes = document.querySelectorAll('#avatar .eye');
  eyes.forEach(eye => eye.setAttribute('fill', GHOST_COLORS.b));
  setTimeout(() => eyes.forEach(eye => eye.setAttribute('fill', GHOST_COLORS.e)), 140);
}

function glitch(node) {
  if (!node || reduceMotion || node.classList.contains('is-glitching')) return;
  node.classList.remove('is-glitching');
  void node.offsetWidth;
  node.classList.add('is-glitching');
  setTimeout(() => node.classList.remove('is-glitching'), 380);
}

// mostly blinks, glitches are rare and never repeat in a row
function startIdle() {
  if (reduceMotion) return;
  let last = 'name';
  const tick = () => {
    if (!document.hidden) {
      const roll = Math.random();
      if (roll < .2 && last !== 'name') { glitch($('name')); last = 'name'; }
      else if (roll < .35 && last !== 'avatar') { glitch($('avatar')); last = 'avatar'; }
      else { blink(); last = 'blink'; }
    }
    setTimeout(tick, 5000 + Math.random() * 5000);
  };
  setTimeout(tick, 9000);

  let hoverAt = 0;
  const onHover = action => () => {
    if (Date.now() - hoverAt < 2500) return;
    hoverAt = Date.now();
    action();
  };
  $('name').addEventListener('mouseenter', onHover(() => glitch($('name'))));
  $('avatar').addEventListener('mouseenter', onHover(() => { glitch($('avatar')); blink(); }));
}

function setupReveal() {
  const targets = document.querySelectorAll('.caption, .about, .job, .card, .skill-row, .edu, .outro');
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  targets.forEach(node => node.classList.add('reveal'));

  const observer = new IntersectionObserver(entries => {
    let order = 0;
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      node.style.animationDelay = `${order++ * 70}ms`;
      node.classList.add('is-in');
      node.addEventListener('animationend', () => {
        node.classList.remove('reveal', 'is-in');
        node.style.animationDelay = '';
      }, { once: true });
      observer.unobserve(node);
    });
  }, { threshold: .15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(node => observer.observe(node));
}

function playIntro(done) {
  const intro = $('intro');
  const seen = readStore('sessionStorage', INTRO_KEY);

  if (reduceMotion || seen) {
    intro.hidden = true;
    done();
    return;
  }

  document.body.classList.add('is-locked');
  let opened = false;

  const open = () => {
    if (opened) return;
    opened = true;
    writeStore('sessionStorage', INTRO_KEY, '1');
    intro.classList.add('is-open');
    setTimeout(done, 700);
    setTimeout(() => {
      intro.hidden = true;
      document.body.classList.remove('is-locked');
    }, 1150);
  };

  setTimeout(open, 1200);
  intro.addEventListener('click', open);
  window.addEventListener('keydown', open, { once: true });
}

const modal = $('modal');

function openProject(id) {
  const project = SITE.projects.find(p => p.id === id);
  if (!project) return;
  const index = SITE.projects.indexOf(project);
  const links = (project.links || [])
    .map(l => `<a class="btn" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(t(l.label))}</a>`)
    .join('');

  $('modal-panel').innerHTML = `
    <button class="btn modal-close" type="button" data-close>${esc(t(UI.close))}</button>
    ${coverFor(project, index)}
    <div class="modal-body">
      <h2 class="modal-title glitch" data-text="${esc(t(project.title))}">${esc(t(project.title))}</h2>
      <p class="modal-role">${esc(t(project.role))}${project.status === 'wip' ? `, ${esc(t(UI.wip).toLowerCase())}` : ''}</p>
      <div class="modal-text">${t(project.text).map(p => `<p>${esc(p)}</p>`).join('')}</div>
      <h3>${esc(t(UI.did))}</h3>
      ${pointList(t(project.did))}
      ${tagList(project.stack)}
      ${links ? `<div class="contacts">${links}</div>` : ''}
    </div>`;

  modal.classList.remove('is-closing');
  document.body.classList.add('is-locked');
  modal.showModal();
  requestAnimationFrame(() => modal.querySelector('video')?.play().catch(() => {}));
  setTimeout(() => glitch(modal.querySelector('.modal-title')), 440);
}

function closeProject() {
  if (!modal.open || modal.classList.contains('is-closing')) return;
  const end = () => {
    modal.close();
    modal.classList.remove('is-closing');
    document.body.classList.remove('is-locked');
  };
  if (reduceMotion) return end();
  modal.classList.add('is-closing');
  $('modal-panel').addEventListener('animationend', end, { once: true });
}

modal.addEventListener('cancel', event => {
  event.preventDefault();
  closeProject();
});

modal.addEventListener('click', event => {
  if (event.target === modal || event.target.closest('[data-close]')) closeProject();
});

$('projects').addEventListener('click', event => {
  const card = event.target.closest('.card');
  if (card) openProject(card.dataset.id);
});

$('projects').addEventListener('mouseover', event => {
  const video = event.target.closest('.card')?.querySelector('video');
  if (video && video.paused) video.play().catch(() => {});
});

$('projects').addEventListener('mouseout', event => {
  const card = event.target.closest('.card');
  if (card && !card.contains(event.relatedTarget)) card.querySelector('video')?.pause();
});

$('lang').addEventListener('click', () => {
  lang = lang === 'ru' ? 'en' : 'ru';
  writeStore('localStorage', LANG_KEY, lang);
  render();
});

// a typo in data.js used to leave a black screen behind the intro, now the contacts stay reachable
function showFallback(error) {
  console.error(error);
  const spare = $('fallback');
  $('app').innerHTML = '';
  if (spare) $('app').append(spare.content.cloneNode(true));
  $('intro').hidden = true;
  document.body.classList.remove('is-locked');
}

try {
  render();
  drawAvatar();
  playIntro(() => {
    try {
      setupReveal();
      startIdle();
      setTimeout(() => glitch($('name')), 450);
    } catch (error) {
      console.error(error);
    }
  });
} catch (error) {
  showFallback(error);
}
