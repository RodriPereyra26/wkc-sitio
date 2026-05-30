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

.section-divider {
  font-family: 'Oswald', sans-serif;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 12px;
  border-top: 1px solid var(--border);
  padding-top: 24px;
  margin: 28px 0 20px;
}

.fg { margin-bottom: 22px; }
.row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

.fg label { display: block; font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.06em; font-size: 14px; color: var(--gray-light); margin-bottom: 8px; }
.fg input, .fg select {
  width: 100%; padding: 14px 16px;
  background: var(--black-card); border: 1px solid var(--border);
  color: #fff; font-size: 15px; font-family: 'Barlow', sans-serif;
  transition: border-color 0.2s ease;
  appearance: none; -webkit-appearance: none;
}
.fg input:focus, .fg select:focus { outline: none; border-color: var(--gold); }
.fg select option { background: var(--black-card); }

.select-wrapper { position: relative; }
.select-wrapper::after {
  content: '▾';
  position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
  color: var(--gold); pointer-events: none; font-size: 13px;
}

/* Multi-select */
.multi-select-container { position: relative; }
.multi-select-trigger {
  width: 100%; padding: 14px 16px;
  background: var(--black-card); border: 1px solid var(--border);
  color: var(--gray); font-size: 15px; font-family: 'Barlow', sans-serif;
  cursor: pointer; text-align: left;
  display: flex; justify-content: space-between; align-items: center;
  transition: border-color 0.2s;
}
.multi-select-trigger:hover, .multi-select-trigger.open { border-color: var(--gold); }
.multi-select-trigger .arrow { color: var(--gold); font-size: 13px; transition: transform 0.2s; }
.multi-select-trigger.open .arrow { transform: rotate(180deg); }

.multi-select-dropdown {
  display: none;
  position: absolute; top: 100%; left: 0; right: 0;
  background: var(--black-card); border: 1px solid var(--gold); border-top: none;
  z-index: 100; max-height: 220px; overflow-y: auto;
}
.multi-select-dropdown.open { display: block; }

.multi-option {
  padding: 10px 16px; display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 14px; color: var(--gray-light);
  transition: background 0.15s; border-bottom: 1px solid var(--border);
  font-family: 'Barlow', sans-serif;
}
.multi-option:last-child { border-bottom: none; }
.multi-option:hover { background: rgba(200,162,74,0.08); }
.multi-option.selected { color: var(--gold); background: rgba(200,162,74,0.1); }
.multi-option.disabled { opacity: 0.3; cursor: not-allowed; pointer-events: none; }

.multi-checkbox {
  width: 14px; height: 14px; border: 1px solid var(--border);
  background: var(--black-card); display: flex; align-items: center;
  justify-content: center; flex-shrink: 0; font-size: 10px;
}
.multi-option.selected .multi-checkbox { background: var(--gold); border-color: var(--gold); color: #000; }

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
.success { background: rgba(200,162,74,0.1); border: 1px solid var(--gold); color: var(--gold); padding: 14px; margin-bottom: 20px; display: none; font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.05em; text-align: center; }
.success.show { display: block; }
.btn-full { width: 100%; padding: 18px; font-size: 17px; }

.multi-select-dropdown::-webkit-scrollbar { width: 4px; }
.multi-select-dropdown::-webkit-scrollbar-track { background: var(--black-card); }
.multi-select-dropdown::-webkit-scrollbar-thumb { background: var(--border); }

@media (max-width: 480px) {
  .row-2 { grid-template-columns: 1fr; }
}
</style>

<div class="insc-hero">
  <div class="kicker">◆ Formulario oficial</div>
  <h1>Inscripción</h1>
  <p>Completá tus datos y adjuntá tu ficha médica para asegurar tu lugar en el próximo evento WKC Uruguay.</p>
</div>

<div class="insc-form">
  <form id="inscriptionForm">
    <div class="success" id="successMsg">✓ Inscripción enviada — procesando...</div>

    <!-- DATOS PERSONALES -->
    <div class="section-divider">◆ Datos personales</div>

    <div class="fg">
      <label for="nombre">Nombre completo *</label>
      <input type="text" id="nombre" name="nombre" placeholder="Juan Pérez" required>
      <div class="error" id="error-nombre"></div>
    </div>

    <div class="row-2">
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
    </div>

    <div class="fg">
      <label for="sexo">Sexo *</label>
      <div class="select-wrapper">
        <select id="sexo" name="sexo" required>
          <option value="">Seleccioná</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </div>
      <div class="error" id="error-sexo"></div>
    </div>

    <!-- COMPETENCIA -->
    <div class="section-divider">◆ Competencia</div>

    <div class="fg">
      <label for="modalidad">Modalidad *</label>
      <div class="select-wrapper">
        <select id="modalidad" name="modalidad" required>
          <option value="">Seleccioná tu modalidad</option>
          <option value="Kickboxing">Kickboxing</option>
          <option value="K1">K1</option>
          <option value="Muay Thai">Muay Thai</option>
        </select>
      </div>
      <div class="error" id="error-modalidad"></div>
    </div>

    <div class="row-2">
      <div class="fg">
        <label for="categoria">Categoría oficial *</label>
        <div class="select-wrapper">
          <select id="categoria" name="categoria" required onchange="updateOtrasCategorias()">
            <option value="">Seleccioná tu categoría</option>
            <option value="Hasta 50kg">Hasta 50 kg</option>
            <option value="Hasta 52kg">Hasta 52 kg</option>
            <option value="Hasta 54kg">Hasta 54 kg</option>
            <option value="Hasta 57kg">Hasta 57 kg</option>
            <option value="Hasta 61kg">Hasta 61 kg</option>
            <option value="Hasta 63kg">Hasta 63 kg</option>
            <option value="Hasta 67kg">Hasta 67 kg</option>
            <option value="Hasta 71kg">Hasta 71 kg</option>
            <option value="Hasta 75kg">Hasta 75 kg</option>
            <option value="Hasta 77kg">Hasta 77 kg</option>
            <option value="Hasta 81kg">Hasta 81 kg</option>
            <option value="Hasta 83kg">Hasta 83 kg</option>
            <option value="Hasta 86kg">Hasta 86 kg</option>
            <option value="Hasta 91kg">Hasta 91 kg</option>
            <option value="+91kg">+91 kg</option>
          </select>
        </div>
        <div class="error" id="error-categoria"></div>
      </div>
      <div class="fg">
        <label for="pesoNatural">Peso natural (kg) *</label>
        <input type="number" id="pesoNatural" name="pesoNatural" placeholder="Ej: 68.5" min="30" max="200" step="0.1" required>
        <div class="error" id="error-pesoNatural"></div>
      </div>
    </div>

    <div class="fg">
      <label>Otras categorías de interés</label>
      <div class="multi-select-container" id="multiSelectContainer">
        <button type="button" class="multi-select-trigger" id="multiTrigger" onclick="toggleDropdown()">
          <span id="multiLabel" style="color: var(--gray)">Seleccioná una o más (opcional)</span>
          <span class="arrow">▾</span>
        </button>
        <div class="multi-select-dropdown" id="multiDropdown"></div>
      </div>
    </div>

    <!-- DOCUMENTACIÓN -->
    <div class="section-divider">◆ Documentación</div>

    <div class="fg">
      <label>Ficha médica (PDF) *</label>
      <input type="file" id="ficha" name="ficha" accept=".pdf,image/jpeg,image/png,image/webp" required>
      <label for="ficha" class="file-label" id="fileLabel">
        <span id="fileName">◆ Cargá tu ficha médica (PDF o foto)</span>
      </label>
      <div class="error" id="error-ficha"></div>
    </div>

    <button type="submit" class="btn btn-full" id="submitBtn">Confirmar inscripción</button>
  </form>
</div>

<script>
const API_URL = 'https://ubsd9byg87.execute-api.us-east-1.amazonaws.com/prod';

const CATEGORIAS = [
  "Hasta 50kg","Hasta 52kg","Hasta 54kg","Hasta 57kg","Hasta 61kg",
  "Hasta 63kg","Hasta 67kg","Hasta 71kg","Hasta 75kg","Hasta 77kg",
  "Hasta 81kg","Hasta 83kg","Hasta 86kg","Hasta 91kg","+91kg"
];

let selectedOtras = new Set();

function updateOtrasCategorias() {
  const catOficial = document.getElementById('categoria').value;
  const dropdown = document.getElementById('multiDropdown');
  selectedOtras.clear();
  dropdown.innerHTML = '';

  CATEGORIAS.forEach(cat => {
    const isOfficial = cat === catOficial;
    const div = document.createElement('div');
    div.className = 'multi-option' + (isOfficial ? ' disabled' : '');
    div.dataset.value = cat;
    div.innerHTML = `<span class="multi-checkbox"></span>${cat}${isOfficial ? ' <span style="color:var(--gray);font-size:12px">(tu categoría)</span>' : ''}`;
    if (!isOfficial) {
      div.onclick = () => toggleOption(div, cat);
    }
    dropdown.appendChild(div);
  });

  updateMultiLabel();
}

function toggleOption(div, cat) {
  if (selectedOtras.has(cat)) {
    selectedOtras.delete(cat);
    div.classList.remove('selected');
    div.querySelector('.multi-checkbox').textContent = '';
  } else {
    selectedOtras.add(cat);
    div.classList.add('selected');
    div.querySelector('.multi-checkbox').textContent = '✓';
  }
  updateMultiLabel();
}

function updateMultiLabel() {
  const label = document.getElementById('multiLabel');
  if (selectedOtras.size === 0) {
    label.textContent = 'Seleccioná una o más (opcional)';
    label.style.color = 'var(--gray)';
  } else {
    label.textContent = [...selectedOtras].join(', ');
    label.style.color = '#fff';
  }
}

function toggleDropdown() {
  const trigger = document.getElementById('multiTrigger');
  const dropdown = document.getElementById('multiDropdown');
  const isOpen = dropdown.classList.contains('open');
  trigger.classList.toggle('open', !isOpen);
  dropdown.classList.toggle('open', !isOpen);
}

document.addEventListener('click', (e) => {
  const container = document.getElementById('multiSelectContainer');
  if (!container.contains(e.target)) {
    document.getElementById('multiTrigger').classList.remove('open');
    document.getElementById('multiDropdown').classList.remove('open');
  }
});

// Inicializar dropdown
updateOtrasCategorias();

// File input
const fileInput = document.getElementById('ficha');
const fileLabel = document.getElementById('fileLabel');
const fileName = document.getElementById('fileName');
const submitBtn = document.getElementById('submitBtn');

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    fileName.textContent = '◆ ' + e.target.files[0].name;
    fileLabel.classList.add('has-file');
  } else {
    fileName.textContent = '◆ Cargá tu ficha médica (PDF o foto)';
    fileLabel.classList.remove('has-file');
  }
});

// Submit
document.getElementById('inscriptionForm').addEventListener('submit', async (e) => {
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
      sexo: document.getElementById('sexo').value,
      modalidad: document.getElementById('modalidad').value,
      categoria: document.getElementById('categoria').value,
      pesoNatural: document.getElementById('pesoNatural').value,
      otrasCategoriasInteres: [...selectedOtras],
      fichaTipo: file.type,
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
          document.getElementById('inscriptionForm').reset();
          selectedOtras.clear();
          updateOtrasCategorias();
          document.getElementById('successMsg').classList.remove('show');
          fileName.textContent = '◆ Cargá tu ficha médica (PDF o foto)';
          fileLabel.classList.remove('has-file');
          submitBtn.disabled = false;
          submitBtn.textContent = 'Confirmar inscripción';
        }, 2500);
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
  if (!document.getElementById('nombre').value.trim()) errors.nombre = 'El nombre es requerido';
  const email = document.getElementById('email').value.trim();
  if (!email) errors.email = 'El email es requerido';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Email inválido';
  if (!document.getElementById('telefono').value.trim()) errors.telefono = 'El teléfono es requerido';
  if (!document.getElementById('sexo').value) errors.sexo = 'Seleccioná el sexo';
  if (!document.getElementById('modalidad').value) errors.modalidad = 'Seleccioná una modalidad';
  if (!document.getElementById('categoria').value) errors.categoria = 'Seleccioná tu categoría oficial';
  const peso = document.getElementById('pesoNatural').value;
  if (!peso) errors.pesoNatural = 'Ingresá tu peso natural';
  else if (peso < 30 || peso > 200) errors.pesoNatural = 'Peso fuera de rango válido';
  const file = fileInput.files[0];
  if (!file) errors.ficha = 'Cargá la ficha médica';
  else if (!['application/pdf','image/jpeg','image/png','image/webp'].includes(file.type)) errors.ficha = 'Solo PDF o imagen (JPG, PNG)';
  else if (file.size > 7 * 1024 * 1024) errors.ficha = 'Máximo 7MB';
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
