---
layout: base
title: Rankings
permalink: /rankings/
---

<style>
.page-hero { padding: 80px 28px 40px; max-width: 1200px; margin: 0 auto; }
.page-hero .kicker { font-family: 'Oswald', sans-serif; color: var(--gold); letter-spacing: 0.2em; text-transform: uppercase; font-size: 14px; }
.page-hero h1 { font-size: clamp(40px, 9vw, 96px); font-weight: 700; margin-top: 8px; }
.page-hero p { color: var(--gray); max-width: 560px; margin-top: 16px; font-size: 17px; }

.rank-tabs { max-width: 1200px; margin: 0 auto; padding: 0 28px 24px; display: flex; gap: 10px; flex-wrap: wrap; }
.rank-tab { font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.06em; font-size: 14px; padding: 10px 22px; border: 1px solid var(--border); color: var(--gray-light); background: transparent; cursor: pointer; transition: all 0.2s ease; }
.rank-tab.active, .rank-tab:hover { background: var(--gold); color: var(--black); border-color: var(--gold); }

.rank-table { max-width: 1200px; margin: 0 auto; padding: 0 28px 80px; }
.rank-row { display: grid; grid-template-columns: 60px 1fr 140px 120px; gap: 20px; align-items: center; padding: 18px 0; border-bottom: 1px solid var(--border); }
.rank-row.head { border-bottom: 2px solid var(--gold); }
.rank-row.head span { font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.1em; font-size: 13px; color: var(--gray); }
.rank-pos { font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 28px; color: var(--gold); text-align: center; }
.rank-name { font-family: 'Oswald', sans-serif; font-size: 20px; color: #fff; text-transform: uppercase; }
.rank-gym { font-size: 14px; color: var(--gray); }
.rank-cat, .rank-rec { font-size: 15px; }
@media (max-width: 768px) {
  .rank-row { grid-template-columns: 40px 1fr 80px; }
  .rank-cat { display: none; }
}
</style>

<div class="page-hero">
  <div class="kicker">◆ Clasificación nacional</div>
  <h1>Rankings</h1>
  <p>Posiciones oficiales del circuito WKC Uruguay. Actualizado tras cada evento puntuable del calendario nacional.</p>
</div>

<div class="rank-tabs">
  <button class="rank-tab active">Masculino</button>
  <button class="rank-tab">Femenino</button>
  <button class="rank-tab">Junior</button>
</div>

<div class="rank-table">
  <div class="rank-row head">
    <span>Pos</span><span>Peleador</span><span>Categoría</span><span>Récord</span>
  </div>
</div>
