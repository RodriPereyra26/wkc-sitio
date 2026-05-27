---
layout: base
title: Eventos
permalink: /eventos/
---

<style>
.page-hero {
  padding: 80px 28px 40px;
  max-width: 1200px;
  margin: 0 auto;
}
.page-hero .kicker { font-family: 'Oswald', sans-serif; color: var(--gold); letter-spacing: 0.2em; text-transform: uppercase; font-size: 14px; }
.page-hero h1 { font-size: clamp(40px, 9vw, 96px); font-weight: 700; margin-top: 8px; }

.events-list { max-width: 1200px; margin: 0 auto; padding: 0 28px 80px; }
.event-card {
  display: grid;
  grid-template-columns: 140px 1fr auto;
  gap: 28px;
  align-items: center;
  padding: 32px 0;
  border-top: 1px solid var(--border);
  transition: padding-left 0.3s ease;
}
.event-card:last-child { border-bottom: 1px solid var(--border); }
.event-card:hover { padding-left: 12px; }
.event-date {
  text-align: center;
  border-right: 2px solid var(--gold);
  padding-right: 20px;
}
.event-date .day { font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 44px; color: #fff; line-height: 1; }
.event-date .mon { font-family: 'Oswald', sans-serif; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; font-size: 16px; }
.event-date .yr { color: var(--gray); font-size: 14px; }
.event-info h2 { font-size: clamp(24px, 4vw, 38px); margin-bottom: 8px; }
.event-info .loc { color: var(--gray); font-size: 16px; }
.event-info .loc::before { content: "◆ "; color: var(--gold); }
@media (max-width: 768px) {
  .event-card { grid-template-columns: 90px 1fr; }
  .event-card .btn { grid-column: 1 / -1; justify-self: start; }
  .event-date .day { font-size: 32px; }
}
</style>

<div class="page-hero">
  <div class="kicker">◆ Calendario oficial</div>
  <h1>Eventos</h1>
</div>

<div class="events-list">
  {% for evento in collections.eventos %}
  <div class="event-card">
    <div class="event-date">
      <div class="day">{{ evento.data.dia }}</div>
      <div class="mon">{{ evento.data.mes }}</div>
      <div class="yr">{{ evento.data.anio }}</div>
    </div>
    <div class="event-info">
      <h2>{{ evento.data.nombre }}</h2>
      <div class="loc">{{ evento.data.lugar }}</div>
    </div>
    <a href="{{ evento.url }}" class="btn">Ver detalles</a>
  </div>
  {% endfor %}
</div>
