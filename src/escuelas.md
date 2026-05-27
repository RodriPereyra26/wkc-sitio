---
layout: base
title: Escuelas
permalink: /escuelas/
---

<style>
.page-hero { padding: 80px 28px 40px; max-width: 1200px; margin: 0 auto; }
.page-hero .kicker { font-family: 'Oswald', sans-serif; color: var(--gold); letter-spacing: 0.2em; text-transform: uppercase; font-size: 14px; }
.page-hero h1 { font-size: clamp(40px, 9vw, 96px); font-weight: 700; margin-top: 8px; }
.page-hero p { color: var(--gray); max-width: 560px; margin-top: 16px; font-size: 17px; }

.school-grid { max-width: 1200px; margin: 0 auto; padding: 20px 28px 80px; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); gap: 24px; }
.school {
  background: var(--black-card);
  border: 1px solid var(--border);
  padding: 0;
  transition: transform 0.25s ease, border-color 0.25s ease;
}
.school:hover { transform: translateY(-6px); border-color: var(--gold); }
.school-top {
  height: 120px;
  background: radial-gradient(circle at 70% 30%, rgba(200,162,74,0.2), transparent 60%), linear-gradient(135deg, #1a1a1a, #0a0a0a);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: flex-end; padding: 16px;
}
.school-top .city { font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold); font-size: 14px; }
.school-body { padding: 22px; }
.school-body h3 { font-size: 22px; margin-bottom: 6px; }
.school-body .instr { color: var(--gray); font-size: 14px; margin-bottom: 16px; }
.school-body .instr strong { color: var(--gray-light); }
.school-wa {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.06em;
  font-size: 13px; color: var(--gold); border: 1px solid var(--border); padding: 8px 16px;
  transition: all 0.2s ease;
}
.school-wa:hover { background: var(--gold); color: var(--black); }
</style>

<div class="page-hero">
  <div class="kicker">◆ Red oficial</div>
  <h1>Escuelas</h1>
  <p>Gimnasios y academias afiliadas a WKC Uruguay. Entrená con instructores certificados y competí bajo la bandera oficial.</p>
</div>

<div class="school-grid">
  <div class="school">
    <div class="school-top"><span class="city">Montevideo</span></div>
    <div class="school-body">
      <h3>Gym WKC Centro</h3>
      <div class="instr">Instructor: <strong>Carlos López</strong></div>
      <a href="#" class="school-wa">◆ Contactar por WhatsApp</a>
    </div>
  </div>
  <div class="school">
    <div class="school-top"><span class="city">Canelones</span></div>
    <div class="school-body">
      <h3>Team Águila</h3>
      <div class="instr">Instructor: <strong>Roberto Díaz</strong></div>
      <a href="#" class="school-wa">◆ Contactar por WhatsApp</a>
    </div>
  </div>
  <div class="school">
    <div class="school-top"><span class="city">Maldonado</span></div>
    <div class="school-body">
      <h3>Fight Club UY</h3>
      <div class="instr">Instructor: <strong>Ana Morales</strong></div>
      <a href="#" class="school-wa">◆ Contactar por WhatsApp</a>
    </div>
  </div>
  <div class="school">
    <div class="school-top"><span class="city">Colonia</span></div>
    <div class="school-body">
      <h3>Spartan Box</h3>
      <div class="instr">Instructor: <strong>Federico Pérez</strong></div>
      <a href="#" class="school-wa">◆ Contactar por WhatsApp</a>
    </div>
  </div>
</div>
