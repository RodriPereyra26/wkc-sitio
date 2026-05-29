---
layout: base
title: Inscripción
permalink: /inscripcion/
---

<style>
.insc-hero { padding: 80px 28px 30px; max-width: 700px; margin: 0 auto; text-align: center; }
.insc-hero .kicker { font-family: 'Oswald', sans-serif; color: var(--gold); letter-spacing: 0.2em; text-transform: uppercase; font-size: 14px; }
.insc-hero h1 { font-size: clamp(40px, 9vw, 80px); font-weight: 700; margin-top: 8px; }
.insc-hero p { color: var(--gray); margin-top: 14px; }

.insc-form { max-width: 640px; margin: 0 auto; padding: 20px 28px 100px; }
.fg { margin-bottom: 22px; }
.fg label { display: block; font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.06em; font-size: 14px; color: var(--gray-light); margin-bottom: 8px; }
.fg input, .fg select {
  width: 100%; padding: 14px 16px;
  background: var(--black-card); border: 1px solid var(--border);
  color: #fff; font-size: 15px; font-family: 'Barlow', sans-serif;
  transition: border-color 0.2s ease;
}
.fg input:focus, .fg select:focus { outline: none; border-color: var(--gold); }
.fg select option { background: var(--black-card); }
.file-label {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  padding: 22px; background: var(--black-card);
  border: 2px dashed var(--border); cursor: pointer;
  color: var(--gray); font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.05em; font-size: 14px;
  transition: all 0.2s ease;
}
.file-label:hover { border-color: var(--gold); color: var(--gold); }
.file-label.has-file { border-color: var(--gold); border-style: solid; color: var(--gold); }
input[type=file] { position: absolute; left: -9999px; }
.error { color: #e25555; font-size: 13px; margin-top: 6px; display: none; }
.error.show { display: block; }
.success { background: rgba(200,162,74,0.1); border: 1px solid var(--gold); color: var(--gold); padding: 14px; margin-bottom: 20px; display: none; font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.05em; }
.success.show { display: block; }
.btn-full { width: 100%; padding: 18px; font-size: 17px; }
</style>

<div class="insc-hero">
  <div class="kicker">◆ Formulario oficial</div>
  <h1>Inscripción</h1>
  <p>Completá tus datos y adjuntá tu ficha médica para asegurar tu lugar en el próximo evento WKC Uruguay.</p>
</div>

<div class="insc-form">
  <form id="inscriptionForm">
    <div class="success" id="successMsg">✓ Inscripción enviada — procesando...</div>

    <div class="fg">
      <label for="nombre">Nombre completo *</label>
      <input type="text" id="nombre" name="nombre" placeholder="Juan Pérez" required>
      <div class="error" id="error-nombre"></div>
    </div>
    <div class="fg">
      <label for="email">Email *</label>
      <input type="email" id="email" name="email" placeholder="tu@email.com" required>
      <div class="error" id="error-email"></div>
    </div>
    <div class="fg">
      <label for="telefono">Teléfono *</label>
      <input type="tel" id="telefono" name="telefono" placeholder="+598 99 123 456" required>
      <div class="error" id="error-telefono"></div>
    </div>
    <div class="fg">
      <label for="categoria">Categoría de peso *</label>
      <select id="categoria" name="categoria" required>
        <option value="">Seleccioná tu categoría</option>
        <option value="Ligero (-60kg)">Ligero (-60kg)</option>
        <option value="Medio (-70kg)">Medio (-70kg)</option>
        <option value="Mediano (-80kg)">Mediano (-80kg)</option>
        <option value="Pesado (-90kg)">Pesado (-90kg)</option>
        <option value="Super Pesado (+90kg)">Super Pesado (+90kg)</option>
      </select>
      <div class="error" id="error-categoria"></div>
    </div>
    <div class="fg">
      <label>Ficha médica (PDF) *</label>
      <input type="file" id="ficha" name="ficha" accept=".pdf" required>
      <label for="ficha" class="file-label" id="fileLabel">
        <span id="fileName">◆ Cargá tu ficha médica en PDF</span>
      </label>
      <div class="error" id="error-ficha"></div>
    </div>
    <button type="submit" class="btn btn-full" id="submitBtn">Confirmar inscripción</button>
  </form>
</div>

<script>
const API_URL = 'https://ubsd9byg87.execute-api.us-east-1.amazonaws.com/prod';
const form = document.getElementById('inscriptionForm');
const fileInput = document.getElementById('ficha');
const fileLabel = document.getElementById('fileLabel');
const fileName = document.getElementById('fileName');
const submitBtn = document.getElementById('submitBtn');

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    fileName.textContent = '◆ ' + e.target.files[0].name;
    fileLabel.classList.add('has-file');
  } else {
    fileName.textContent = '◆ Cargá tu ficha médica en PDF';
    fileLabel.classList.remove('has-file');
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const errors = validateForm();
  if (Object.keys(errors).length > 0) { displayErrors(errors); return; }
  clearErrors();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Procesando...';

  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = async (event) => {
    const base64 = event.target.result.split(',')[1];
    const payload = {
      nombre: document.getElementById('nombre').value,
      email: document.getElementById('email').value,
      telefono: document.getElementById('telefono').value,
      categoria: document.getElementById('categoria').value,
      fichaBase64: base64
    };
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (response.ok) {
        document.getElementById('successMsg').classList.add('show');
        setTimeout(() => {
          form.reset();
          document.getElementById('successMsg').classList.remove('show');
          fileName.textContent = '◆ Cargá tu ficha médica en PDF';
          fileLabel.classList.remove('has-file');
          submitBtn.disabled = false;
          submitBtn.textContent = 'Confirmar inscripción';
        }, 2000);
      } else {
        alert('Error: ' + (data.error || 'desconocido'));
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirmar inscripción';
      }
    } catch (error) {
      alert('Error al conectar con el servidor: ' + error.message);
      submitBtn.disabled = false;
      submitBtn.textContent = 'Confirmar inscripción';
    }
  };
  reader.readAsDataURL(file);
});

function validateForm() {
  const errors = {};
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const categoria = document.getElementById('categoria').value;
  const file = fileInput.files[0];
  if (!nombre) errors.nombre = 'El nombre es requerido';
  if (!email) errors.email = 'El email es requerido';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Email inválido';
  if (!telefono) errors.telefono = 'El teléfono es requerido';
  if (!categoria) errors.categoria = 'Seleccioná una categoría';
  if (!file) errors.ficha = 'Cargá la ficha médica';
  else if (file.type !== 'application/pdf') errors.ficha = 'Solo archivos PDF';
  else if (file.size > 5 * 1024 * 1024) errors.ficha = 'Máximo 5MB';
  return errors;
}
function displayErrors(errors) {
  Object.keys(errors).forEach(f => {
    const el = document.getElementById('error-' + f);
    if (el) { el.textContent = errors[f]; el.classList.add('show'); }
  });
}
function clearErrors() {
  document.querySelectorAll('.error').forEach(el => el.classList.remove('show'));
}
</script>
