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
const eventosList = document.getElementById('eventos-list');

function crearMateria(materia) {
  const div = document.createElement('div');
  div.classList.add('materia');
  div.id = materia.id;
  div.innerHTML = `
    <strong>${materia.nombre}</strong>
    <br><span class="nota">Nota: ${notasMaterias[materia.id] || '-'}</span>
    <br><span class="examen">Examen: ${examenesMaterias[materia.id] ? 'Sí' : 'No'}</span>
    <div class="acciones">
      <button onclick="anotarNota('${materia.id}')">Nota</button>
      <button onclick="marcarExamen('${materia.id}')">Examen</button>
      <button onclick="anularMateria('${materia.id}')">Anular</button>
    </div>
  `;

  if (!materia.requisitos.every(req => materiasAprobadas.includes(req))) {
    div.classList.add('bloqueada');
  } else {
    div.addEventListener('click', () => aprobarMateria(materia.id));
  }

  if (materiasAprobadas.includes(materia.id)) {
    div.classList.add('aprobada');
  }

  malla.appendChild(div);
}

function actualizarMalla() {
  malla.innerHTML = '';
  materias.forEach(crearMateria);
  actualizarCreditos();
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
  localStorage.setItem('materiasAprobadas', JSON.stringify(materiasAprobadas));
  actualizarMalla();
}

function actualizarCreditos() {
  const total = materiasAprobadas.reduce((sum, id) => {
    const materia = materias.find(m => m.id === id);
    return sum + (materia ? materia.creditos : 0);
  }, 0);

  creditosEl.textContent = `Créditos aprobados: ${total}`;

  const porcentaje = Math.min(100, Math.round((total / 180) * 100));
  const offset = 440 - (440 * porcentaje) / 100;
  progresoCircle.style.strokeDashoffset = offset;
}

function anotarNota(id) {
  const nota = prompt('Ingrese la nota obtenida:');
  if (nota) {
    notasMaterias[id] = nota;
    localStorage.setItem('notasMaterias', JSON.stringify(notasMaterias));
    actualizarMalla();
  }
}

function marcarExamen(id) {
  examenesMaterias[id] = !examenesMaterias[id];
  localStorage.setItem('examenesMaterias', JSON.stringify(examenesMaterias));
  actualizarMalla();
}

function lanzarConfeti() {
  const confeti = document.createElement('div');
  confeti.classList.add('confeti');
  document.body.appendChild(confeti);
  setTimeout(() => confeti.remove(), 3000);
}

function agregarEvento(fecha, texto) {
  eventos.push({ fecha, texto });
  localStorage.setItem('eventos', JSON.stringify(eventos));
  mostrarEventos();
}

function mostrarEventos() {
  if (!eventosList) return;
  eventosList.innerHTML = '';
  eventos.forEach(e => {
    const div = document.createElement('div');
    div.className = 'evento';
    div.textContent = `${e.fecha} - ${e.texto}`;
    eventosList.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarMalla();
  mostrarEventos();
});
