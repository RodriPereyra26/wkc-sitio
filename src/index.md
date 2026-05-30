---
layout: base
title: Inicio
permalink: /
---

<style>
/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  padding: 0 28px;
  overflow: hidden;
  background:
    radial-gradient(circle at 70% 30%, rgba(200,162,74,0.12), transparent 55%),
    linear-gradient(135deg, #0a0a0a 0%, #161208 100%);
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(115deg, transparent, transparent 60px, rgba(200,162,74,0.025) 60px, rgba(200,162,74,0.025) 61px);
  pointer-events: none;
}
.hero-inner { max-width: 1200px; margin: 0 auto; width: 100%; position: relative; z-index: 2; }
.hero-badge {
  display: inline-block;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--border);
  padding: 8px 18px;
  margin-bottom: 24px;
}
.hero h1 {
  font-size: clamp(48px, 11vw, 130px);
  font-weight: 700;
  line-height: 0.92;
  margin-bottom: 20px;
}
.hero h1 .gold { color: var(--gold); }
.hero p {
  font-size: clamp(16px, 2.2vw, 20px);
  color: var(--gray-light);
  max-width: 540px;
  margin-bottom: 36px;
}
.hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }

/* ===== FEATURED EVENT ===== */
.featured {
  background: var(--black-soft);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.featured-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
.featured-label {
  font-family: 'Oswald', sans-serif;
  color: var(--gold);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 16px;
}
.featured h2 { font-size: clamp(32px, 5vw, 56px); margin-bottom: 20px; }
.featured .meta { display: flex; gap: 28px; margin-bottom: 28px; flex-wrap: wrap; }
.featured .meta div { }
.featured .meta .k { font-size: 13px; color: var(--gray); text-transform: uppercase; letter-spacing: 0.1em; }
.featured .meta .v { font-family: 'Oswald', sans-serif; font-size: 22px; color: #fff; }
.featured-visual {
  aspect-ratio: 1170 / 1584;   /* match exacto del flyer (vertical) */
  width: 100%;
  max-width: 380px;            /* evita que el póster se agigante en la columna */
  justify-self: center;        /* lo centra dentro de su columna */
  border: 1px solid var(--border);
  overflow: hidden;
  position: relative;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
}
.featured-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;           /* no recorta: el ratio ya calza con el flyer */
  display: block;
  image-rendering: auto;   /* ya debería ser default, pero forzalo */
  -webkit-font-smoothing: antialiased; /* no aplica a img pero no daña */
}


/* ===== DISCIPLINES ===== */
.disc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}
.disc {
  background: var(--black-card);
  padding: 36px 28px;
  transition: background 0.3s ease;
}
.disc:hover { background: #211d11; }
.disc .num { font-family: 'Oswald', sans-serif; color: var(--gold); font-size: 14px; letter-spacing: 0.1em; }
.disc h3 { font-size: 24px; margin: 12px 0 10px; }
.disc p { font-size: 15px; color: var(--gray); }

/* ===== STATS ===== */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 28px;
  text-align: center;
}
.stat .n { font-family: 'Oswald', sans-serif; font-weight: 700; font-size: clamp(40px, 7vw, 68px); color: var(--gold); line-height: 1; }
.stat .l { text-transform: uppercase; letter-spacing: 0.12em; font-size: 14px; color: var(--gray); margin-top: 8px; }

/* ===== CTA BAND ===== */
.cta-band {
  background:
    radial-gradient(circle at 30% 50%, rgba(200,162,74,0.15), transparent 60%),
    linear-gradient(135deg, #161208, #0a0a0a);
  border-top: 1px solid var(--border);
  text-align: center;
  padding: 80px 28px;
}
.cta-band h2 { font-size: clamp(32px, 6vw, 64px); margin-bottom: 20px; }
.cta-band p { color: var(--gray-light); max-width: 520px; margin: 0 auto 32px; font-size: 18px; }

@media (max-width: 768px) {
  .featured-inner { grid-template-columns: 1fr; gap: 28px; }
  .hero { min-height: 80vh; }
}
</style>

<section class="hero">
  <div class="hero-inner">
    <span class="hero-badge">World Kickboxing Council · Uruguay</span>
    <h1>El kickboxing<br>de <span class="gold">élite</span><br>llegó al país</h1>
    <p>Competencia de alto nivel bajo reglas internacionales WKC. Peleadores, escuelas y eventos que marcan el ritmo del kickboxing uruguayo.</p>
    <div class="hero-cta">
      <a href="/eventos/" class="btn">Próximos eventos</a>
      <a href="/inscripcion/" class="btn btn-outline">Inscribirse</a>
    </div>
  </div>
</section>

<section class="featured">
  <div class="featured-inner">
    <div>
      <div class="featured-label">◆ Próximo evento</div>
      <h2>WKC Uruguay<br>2026 — Fecha 1</h2>
      <div class="meta">
        <div>
          <div class="k">Fecha</div>
          <div class="v">08 AGO 2026</div>
        </div>
        <div>
          <div class="k">Sede</div>
          <div class="v">Montevideo</div>
        </div>
        <div>
          <div class="k">Categorías</div>
          <div class="v">15 pesos</div>
        </div>
      </div>
      <a href="/eventos/" class="btn">Ver detalles e inscripción</a>
    </div>
    <div class="featured-visual">
       <img src="/assets/img/wkc-fecha1.webp"
          alt="Flyer WKC Uruguay 2026 — Fecha 1 · 8 de agosto, Montevideo">
</div>
  </div>
</section>

<section class="section">
  <div class="section-head"><h2>Disciplinas</h2></div>
  <div class="disc-grid">
    <div class="disc">
      <div class="num">01</div>
      <h3>Kickboxing</h3>
      <p>Combate con puños y patadas por encima de la cintura, bajo reglamento WKC internacional.</p>
    </div>
    <div class="disc">
      <div class="num">02</div>
      <h3>K1</h3>
      <p>Combate con puños, patadas y rodillazos. El estilo más espectacular y exigente del kickboxing moderno.</p>
    </div>
    <div class="disc">
      <div class="num">03</div>
      <h3>Muay Thai</h3>
      <p>Arte marcial tailandés con ocho superficies de contacto: puños, codos, rodillas y patadas.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="stats">
    <div class="stat"><div class="n">+50</div><div class="l">Peleadores</div></div>
    <div class="stat"><div class="n">2</div><div class="l">Escuelas afiliadas</div></div>
    <div class="stat"><div class="n">3</div><div class="l">Eventos por año</div></div>
    <div class="stat"><div class="n">36</div><div class="l">Países WKC</div></div>
  </div>
</section>

<section class="cta-band">
  <h2>¿Listo para competir?</h2>
  <p>Inscribite al próximo evento WKC Uruguay. Completá tus datos, adjuntá tu ficha médica y asegurá tu lugar.</p>
  <a href="/inscripcion/" class="btn">Inscribirme ahora</a>
</section>
