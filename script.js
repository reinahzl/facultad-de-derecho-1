const materias = {
  1: [
    { id: 'constitucional', nombre: 'Derecho Constitucional', creditos: 15, previas: [] },
    { id: 'personas', nombre: 'Derecho de las Personas', creditos: 6, previas: [] },
    { id: 'ideas', nombre: 'Ideas Político-Jurídicas', creditos: 8, previas: [] },
    { id: 'sociedad', nombre: 'Sociedad y Derecho', creditos: 7, previas: [] },
    { id: 'historia', nombre: 'Historia del Derecho', creditos: 6, previas: [] },
    { id: 'taller', nombre: 'Taller de Lectoescritura', creditos: 5, previas: [] },
    { id: 'introFenomeno', nombre: 'Intro Fenómeno Jurídico', creditos: 4, previas: [] }
  ],
  2: [
    { id: 'introPenal', nombre: 'Intro Derecho Penal', creditos: 6, previas: ['constitucional', 'personas'] },
    { id: 'bienes', nombre: 'Bienes', creditos: 6, previas: [] },
    { id: 'infoJuridico1', nombre: 'Informático Jurídico 1', creditos: 6, previas: ['constitucional', 'personas'] },
    { id: 'cienciaPolitica', nombre: 'Ciencia Política', creditos: 7, previas: [] },
    { id: 'derechosHumanos', nombre: 'Derechos Humanos', creditos: 10, previas: ['constitucional'] }
  ],
  3: [
    { id: 'obligacionesContratos', nombre: 'Obligaciones y Contratos', creditos: 14, previas: ['bienes', 'constitucional', 'personas', 'historia'] },
    { id: 'economia', nombre: 'Economía, Derecho e Instituciones', creditos: 8, previas: [] },
    { id: 'introMetodologia', nombre: 'Intro Metodología Investigación', creditos: 6, previas: [] },
    { id: 'procesal1', nombre: 'Procesal 1', creditos: 12, previas: ['bienes', 'constitucional', 'personas', 'historia', 'derechosHumanos'] },
    { id: 'infoJuridico2', nombre: 'Informático Jurídico 2', creditos: 4, previas: ['bienes', 'infoJuridico1'] }
  ],
  4: [
    { id: 'dPenalParteGeneral', nombre: 'D. Penal - Parte General', creditos: 7, previas: ['bienes', 'introPenal', 'derechosHumanos'] },
    { id: 'teoriaRespCivil', nombre: 'Teoría de la Responsabilidad Civil', creditos: 10, previas: ['obligacionesContratos'] },
    { id: 'dirIntPublico', nombre: 'Derecho Internacional Público', creditos: 12, previas: ['bienes', 'constitucional', 'personas', 'historia', 'introFenomeno'] },
    { id: 'trabajoSegSocial1', nombre: 'Trabajo y Seguridad Social 1', creditos: 11, previas: ['constitucional', 'obligacionesContratos', 'economia'] }
  ],
  5: [
    { id: 'contratosEspeciales', nombre: 'Contratos Especiales', creditos: 12, previas: ['teoriaRespCivil', 'obligacionesContratos'] },
    { id: 'dPenalParteEspecial', nombre: 'D. Penal - Parte Especial', creditos: 10, previas: ['dPenalParteGeneral'] },
    { id: 'administrativo1', nombre: 'Administrativo 1', creditos: 6, previas: ['bienes', 'constitucional', 'personas'] },
    { id: 'registral', nombre: 'Registral', creditos: 4, previas: ['bienes', 'personas'] },
    { id: 'practicaProfesional1', nombre: 'Práctica Profesional 1', creditos: 14, previas: [] }
  ],
  6: [
    { id: 'financiero1', nombre: 'Financiero 1', creditos: 6, previas: ['constitucional', 'administrativo1', 'economia', 'dPenalParteGeneral'] },
    { id: 'procesal2', nombre: 'Procesal 2', creditos: 12, previas: ['constitucional', 'contratosEspeciales', 'procesal1', 'dPenalParteGeneral'] },
    { id: 'comercial1', nombre: 'Comercial 1', creditos: 14, previas: ['obligacionesContratos', 'teoriaRespCivil', 'economia'] }
  ],
  7: [
    { id: 'minoridad', nombre: 'Minoridad, Adolescencia y Familia', creditos: 6, previas: ['constitucional', 'contratosEspeciales', 'procesal1'] },
    { id: 'comercial2', nombre: 'Comercial 2', creditos: 12, previas: ['constitucional', 'contratosEspeciales', 'procesal1', 'comercial1'] },
    { id: 'seminarioArea', nombre: 'Seminario del Área', creditos: 2, previas: [] },
    { id: 'familiaPersonalPatrimonial', nombre: 'Familia Personal y Patrimonial', creditos: 8, previas: ['constitucional', 'contratosEspeciales', 'procesal1', 'comercial1'] },
    { id: 'derechoAgrario', nombre: 'Derecho Agrario', creditos: 10, previas: ['administrativo1', 'contratosEspeciales'] },
    { id: 'administrativo2', nombre: 'Administrativo 2', creditos: 0, previas: ['administrativo1'] }
  ],
  8: [
    { id: 'financiero2', nombre: 'Financiero 2', creditos: 7, previas: ['financiero1', 'constitucional'] },
    { id: 'sucesiones', nombre: 'Sucesiones', creditos: 6, previas: ['contratosEspeciales', 'procesal1'] }
  ],
  9: [
    { id: 'teoriaDerecho', nombre: 'Teoría del Derecho', creditos: 8, previas: ['administrativo1', 'contratosEspeciales', 'procesal1', 'introFenomeno'] },
    { id: 'trabajoSegSocial2', nombre: 'Trabajo y Seguridad Social 2', creditos: 11, previas: ['obligacionesContratos', 'teoriaRespCivil', 'economia', 'trabajoSegSocial1'] },
    { id: 'consultorio1', nombre: 'Consultorio Jurídico 1', creditos: 11, previas: [] }
  ],
  10: [
    { id: 'consultorio2', nombre: 'Consultorio Jurídico 2', creditos: 11, previas: [] },
    { id: 'financiamientoEmpresarial', nombre: 'Financiamiento Empresarial', creditos: 4, previas: ['contratosEspeciales', 'comercial1', 'comercial2'] },
    { id: 'dirIntPrivado', nombre: 'Derecho Internacional Privado', creditos: 12, previas: ['obligacionesContratos', 'comercial1', 'comercial2', 'familiaPersonalPatrimonial', 'sucesiones', 'dirIntPublico', 'procesal1', 'procesal2'] },
    { id: 'situacionesJuridicas', nombre: 'Situaciones Jurídicas Subjetivas', creditos: 12, previas: ['administrativo1', 'administrativo2'] }
  ]
};

let aprobadas = new Set(JSON.parse(localStorage.getItem('aprobadas')) || []);
let notas = JSON.parse(localStorage.getItem('notas')) || {};
let examenes = JSON.parse(localStorage.getItem('examenes')) || {};
let eventos = JSON.parse(localStorage.getItem('eventos')) || [];

const mallaDiv = document.getElementById('malla');
const creditosDiv = document.getElementById('creditos');
const progresoCircle = document.querySelector('#progreso circle:nth-child(2)');
const toggleCalendarBtn = document.getElementById('toggleCalendar');
const calendarPopup = document.getElementById('calendar-popup');
const examDateInput = document.getElementById('exam-date');
const examNoteInput = document.getElementById('exam-note');
const addExamNoteBtn = document.getElementById('addExamNote');
const examNotesList = document.getElementById('exam-notes');

function puedeAprobar(materia) {
  return materia.previas.every(prev => aprobadas.has(prev));
}

function crearMateriaElemento(materia) {
  const div = document.createElement('div');
  div.className = 'materia';
  div.dataset.id = materia.id;

  if (aprobadas.has(materia.id)) {
    div.classList.add('aprobada');
  } else if (!puedeAprobar(materia)) {
    div.classList.add('bloqueada');
  }

  div.innerHTML = `
    <strong>${materia.nombre}</strong>
    <div>Créditos: ${materia.creditos}</div>
    <div>Nota: ${notas[materia.id] !== undefined ? notas[materia.id] : '-'}</div>
    <div class="acciones">
      <button class="btn-aprobar">${aprobadas.has(materia.id) ? 'Anular' : 'Aprobar'}</button>
      <button class="btn-examen">${examenes[materia.id] ? 'Examen ✔' : 'Examen'}</button>
    </div>
  `;

  // Aprobar/Anular botón
  div.querySelector('.btn-aprobar').onclick = e => {
    e.stopPropagation();
    if (aprobadas.has(materia.id)) {
      aprobadas.delete(materia.id);
      delete notas[materia.id];
      delete examenes[materia.id];
    } else if (puedeAprobar(materia)) {
      aprobadas.add(materia.id);
      notas[materia.id] = null;
    }
    guardarDatos();
    renderMalla();
    actualizarProgreso();
  };

  // Examen botón
  div.querySelector('.btn-examen').onclick = e => {
    e.stopPropagation();
    if (examenes[materia.id]) {
      delete examenes[materia.id];
    } else {
      examenes[materia.id] = true;
    }
    guardarDatos();
    renderMalla();
  };

  // Cambiar nota al hacer doble click en el texto nota
  div.querySelector('div:nth-child(3)').ondblclick = () => {
    if (!aprobadas.has(materia.id)) return alert('Debe aprobar la materia primero para ingresar nota');
    let nuevaNota = prompt('Ingrese la nota de aprobación para ' + materia.nombre, notas[materia.id] || '');
    if (nuevaNota !== null) {
      notas[materia.id] = nuevaNota.trim() || null;
      guardarDatos();
      renderMalla();
    }
  };

  return div;
}

function renderMalla() {
  mallaDiv.innerHTML = '';
  for (const semestre in materias) {
    const semDiv = document.createElement('div');
    semDiv.className = 'semestre';
    semDiv.innerHTML = `<h2>Semestre ${semestre}</h2>`;
    materias[semestre].forEach(mat => {
      semDiv.appendChild(crearMateriaElemento(mat));
    });
    mallaDiv.appendChild(semDiv);
  }
}

function actualizarProgreso() {
  const totalCreditos = Object.values(materias).flat().reduce((acc, m) => acc + m.creditos, 0);
  const creditosAprobados = Object.values(materias).flat()
    .filter(m => aprobadas.has(m.id))
    .reduce((acc, m) => acc + m.creditos, 0);

  creditosDiv.textContent = `Créditos aprobados: ${creditosAprobados} / ${totalCreditos}`;

  // Actualizar círculo SVG
  const radio = 70;
  const circunferencia = 2 * Math.PI * radio;
  const offset = circunferencia - (creditosAprobados / totalCreditos) * circunferencia;
  progresoCircle.style.strokeDashoffset = offset;
}

// Guardar datos en localStorage
function guardarDatos() {
  localStorage.setItem('aprobadas', JSON.stringify([...aprobadas]));
  localStorage.setItem('notas', JSON.stringify(notas));
  localStorage.setItem('examenes', JSON.stringify(examenes));
  localStorage.setItem('eventos', JSON.stringify(eventos));
}

function cargarEventos() {
  examNotesList.innerHTML = '';
  if (eventos.length === 0) {
    examNotesList.innerHTML = '<li>No hay notas agregadas.</li>';
  } else {
    eventos.forEach(ev => {
      const li = document.createElement('li');
      li.textContent = `${ev.fecha}: ${ev.texto}`;
      examNotesList.appendChild(li);
    });
  }
}

// Manejo del calendario popup
toggleCalendarBtn.onclick = () => {
  if (calendarPopup.style.display === 'none') {
    calendarPopup.style.display = 'block';
  } else {
    calendarPopup.style.display = 'none';
  }
};

addExamNoteBtn.onclick = () => {
  const fecha = examDateInput.value;
  const texto = examNoteInput.value.trim();
  if (!fecha || !texto) {
    alert('Complete ambos campos para agregar una nota.');
    return;
  }
  eventos.push({ fecha, texto });
  examDateInput.value = '';
  examNoteInput.value = '';
  guardarDatos();
  cargarEventos();
};

// Confeti corazones al aprobar materia
function lanzarConfeti() {
  const container = document.createElement('div');
  container.className = 'confeti';
  document.body.appendChild(container);

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'corazon-confeti';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-20px';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';
    heart.textContent = '❤️';
    container.appendChild(heart);
  }

  setTimeout(() => {
    container.remove();
  }, 5000);
}

// Cuando se aprueba materia, lanzar confeti
const originalAprobarMateria = () => {}; // solo para referencia

// Usamos aquí para disparar confeti en el botón aprobar (ya hecho en renderMalla)

function init() {
  renderMalla();
  actualizarProgreso();
  cargarEventos();
}

init();
