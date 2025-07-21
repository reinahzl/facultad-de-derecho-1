// script.js

const materias = [
  // Primer semestre
  { id: 'constitucional', nombre: 'Derecho Constitucional', creditos: 15, requisitos: [] },
  { id: 'personas', nombre: 'Derecho de las Personas', creditos: 6, requisitos: [] },
  { id: 'ideas', nombre: 'Ideas Político-Jurídicas', creditos: 6, requisitos: [] },

  // Segundo semestre
  { id: 'obligaciones', nombre: 'Obligaciones', creditos: 10, requisitos: ['personas'] },
  { id: 'historia', nombre: 'Historia del Derecho', creditos: 6, requisitos: [] },
  { id: 'procesal1', nombre: 'Procesal I', creditos: 10, requisitos: ['constitucional'] },

  // Tercer semestre
  { id: 'reales', nombre: 'Reales', creditos: 10, requisitos: ['obligaciones'] },
  { id: 'penal1', nombre: 'Penal I', creditos: 8, requisitos: [] },
  { id: 'procesal2', nombre: 'Procesal II', creditos: 10, requisitos: ['procesal1'] },

  // Cuarto semestre
  { id: 'contratos', nombre: 'Contratos', creditos: 10, requisitos: ['reales'] },
  { id: 'penal2', nombre: 'Penal II', creditos: 8, requisitos: ['penal1'] },
  { id: 'procesal3', nombre: 'Procesal III', creditos: 10, requisitos: ['procesal2'] },

  // Quinto semestre
  { id: 'familia', nombre: 'Familia', creditos: 10, requisitos: ['personas'] },
  { id: 'sociedades', nombre: 'Sociedades', creditos: 6, requisitos: ['contratos'] },
  { id: 'filosofia', nombre: 'Filosofía del Derecho', creditos: 6, requisitos: [] },

  // Sexto semestre
  { id: 'sucesiones', nombre: 'Sucesiones', creditos: 10, requisitos: ['familia'] },
  { id: 'laboral', nombre: 'Laboral', creditos: 10, requisitos: [] },
  { id: 'administrativo', nombre: 'Administrativo', creditos: 10, requisitos: ['constitucional'] },

  // Séptimo semestre
  { id: 'registral', nombre: 'Registral', creditos: 8, requisitos: ['reales'] },
  { id: 'tributario', nombre: 'Tributario', creditos: 8, requisitos: ['administrativo'] },
  { id: 'clinica', nombre: 'Clínica Jurídica', creditos: 8, requisitos: ['procesal3'] },

  // Octavo semestre
  { id: 'internacional', nombre: 'Derecho Internacional', creditos: 6, requisitos: [] },
  { id: 'notarial', nombre: 'Notarial', creditos: 10, requisitos: ['registral'] },
  { id: 'practica', nombre: 'Práctica Profesional', creditos: 12, requisitos: ['clinica'] }
];

let materiasAprobadas = JSON.parse(localStorage.getItem('materiasAprobadas')) || [];
let notasMaterias = JSON.parse(localStorage.getItem('notasMaterias')) || {};
let examenesMaterias = JSON.parse(localStorage.getItem('examenesMaterias')) || {};
let eventos = JSON.parse(localStorage.getItem('eventos')) || [];

const malla = document.getElementById('malla');
const creditosEl = document.getElementById('creditos');
const progresoCircle = document.querySelector('#progreso svg circle:nth-child(2)');
const examNotesList = document.getElementById('exam-notes');
const toggleCalendarBtn = document.getElementById('toggleCalendar');
const calendarHeart = document.getElementById('calendar-heart');
const examDateInput = document.getElementById('exam-date');
const examNoteInput = document.getElementById('exam-note');

function crearMateria(materia) {
  const div = document.createElement('div');
  div.classList.add('materia');
  div.id = materia.id;

  const estaAprobada = materiasAprobadas.includes(materia.id);
  const puedeAprobar = materia.requisitos.every(req => materiasAprobadas.includes(req));

  if (!puedeAprobar && !estaAprobada) {
    div.classList.add('bloqueada');
  }

  if (estaAprobada) {
    div.classList.add('aprobada');
  }

  div.innerHTML = `
    <strong>${materia.nombre}</strong>
    <div>Créditos: ${materia.creditos}</div>
    <div>Nota: ${notasMaterias[materia.id] || '-'}</div>
    <div>Examen: ${examenesMaterias[materia.id] ? 'Sí' : 'No'}</div>
    <div class="acciones">
      <button onclick="anotarNota('${materia.id}'); event.stopPropagation();">Anotar Nota</button>
      <button onclick="toggleExamen('${materia.id}'); event.stopPropagation();">Marcar Examen</button>
      <button onclick="anularMateria('${materia.id}'); event.stopPropagation();">Anular</button>
    </div>
  `;

  div.addEventListener('click', () => {
    if (estaAprobada) {
      anularMateria(materia.id);
    } else if (puedeAprobar) {
      aprobarMateria(materia.id);
    }
  });

  malla.appendChild(div);
}

function actualizarMalla() {
  malla.innerHTML = '';
  materias.forEach(crearMateria);
  actualizarCreditos();
  mostrarEventos();
}

function aprobarMateria(id) {
  if (!materiasAprobadas.includes(id)) {
    materiasAprobadas.push(id);
    localStorage.setItem('materiasAprobadas', JSON.stringify(materiasAprobadas));
    lanzarConfeti();
    actualizarMalla();
  }
}

function anularMateria(id) {
  materiasAprobadas = materiasAprobadas.filter(m => m !== id);
  delete notasMaterias[id];
  delete examenesMaterias[id];
  localStorage.setItem('materiasAprobadas', JSON.stringify(materiasAprobadas));
  localStorage.setItem('notasMaterias', JSON.stringify(notasMaterias));
  localStorage.setItem('examenesMaterias', JSON.stringify(examenesMaterias));
  actualizarMalla();
}

function actualizarCreditos() {
  const total = materiasAprobadas.reduce((sum, id) => {
    const materia = materias.find(m => m.id === id);
    return sum + (materia ? materia.creditos : 0);
  }, 0);

  creditosEl.textContent = `Créditos aprobados: ${total}`;

  const porcentaje = Math.min(100, Math.round((total / 120) * 100)); // Ajustar según créditos totales
  const offset = 440 - (440 * porcentaje) / 100;
  progresoCircle.style.strokeDashoffset = offset;
}

function anotarNota(id) {
  const nota = prompt('Ingrese la nota obtenida (0-100):');
  if (nota !== null && nota.trim() !== '') {
    notasMaterias[id] = nota.trim();
    localStorage.setItem('notasMaterias', JSON.stringify(notasMaterias));
    actualizarMalla();
  }
}

function toggleExamen(id) {
  examenesMaterias[id] = !examenesMaterias[id];
  localStorage.setItem('examenesMaterias', JSON.stringify(examenesMaterias));
  actualizarMalla();
}

function lanzarConfeti() {
  const confeti = document.createElement('div');
  confeti.className = 'confeti';
  document.body.appendChild(confeti);

  // Crear varios pequeños corazones para confeti
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'corazon-confeti';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 2 + Math.random() * 2 + 's';
    heart.style.fontSize = 10 + Math.random() * 20 + 'px';
    confeti.appendChild(heart);
  }

  setTimeout(() => confeti.remove(), 4000);
}

// --- Agenda ---

function addExamNote() {
  const fecha = examDateInput.value;
  const texto = examNoteInput.value.trim();
  if (!fecha || !texto) {
    alert('Ingrese fecha y texto para la nota.');
    return;
  }
  eventos.push({ fecha, texto });
  localStorage.setItem('eventos', JSON.stringify(eventos));
  examDateInput.value = '';
  examNoteInput.value = '';
  mostrarEventos();
}

function mostrarEventos() {
  if (!examNotesList) return;
  examNotesList.innerHTML = '';
  eventos
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
    .forEach(e => {
      const li = document.createElement('li');
      li.textContent = `${e.fecha}: ${e.texto}`;
      examNotesList.appendChild(li);
    });
}

toggleCalendarBtn.addEventListener('click', () => {
  if (calendarHeart.style.display === 'none') {
    calendarHeart.style.display = 'block';
    toggleCalendarBtn.textContent = '❌ Cerrar agenda';
  } else {
    calendarHeart.style.display = 'none';
    toggleCalendarBtn.textContent = '📅 Agenda de exámenes';
  }
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  actualizarMalla();
  mostrarEventos();
});
