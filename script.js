const materias = {
  "1": [
    { id: "Constitucional", nombre:"Constitucional", creditos:15, previas: [] },
    { id: "Personas", nombre:"Personas", creditos:6, previas: [] },
    { id: "Ideas Jurídico-Políticas", nombre:"Ideas Jurídico-Políticas", creditos:8, previas: [] },
    { id: "Sociedad y Derecho", nombre:"Sociedad y Derecho", creditos:7, previas: [] },
    { id: "Historia del Derecho", nombre:"Historia del Derecho", creditos:6, previas: [] }
  ],
  "2": [
    { id: "Taller de Lecto Escritura Universitaria", nombre:"Taller de Lecto Escritura Universitaria", creditos:5, previas: [] },
    { id: "Introducción al Fenómeno Jurídico", nombre:"Introducción al Fenómeno Jurídico", creditos:4, previas: [] },
    { id: "Introducción al Derecho Penal", nombre:"Introducción al Derecho Penal", creditos:6, previas: ["Constitucional", "Personas"] },
    { id: "Bienes", nombre:"Bienes", creditos:6, previas: [] },
    { id: "Derecho Informático e Informática Jurídica 1", nombre:"Derecho Informático e Informática Jurídica 1", creditos:6, previas: ["Constitucional", "Personas"] },
    { id: "Ciencia Política", nombre:"Ciencia Política", creditos:7, previas: [] },
    { id: "Sociedad y Derecho - Ciencia Política", nombre:"Sociedad y Derecho - Ciencia Política", creditos:2, previas: [] },
    { id: "Derechos Humanos", nombre:"Derechos Humanos", creditos:10, previas: ["Constitucional"] }
  ],
  "3": [
    { id: "Obligaciones y Contratos", nombre:"Obligaciones y Contratos", creditos:14, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho"] },
    { id: "Economía, Derecho e Instituciones", nombre:"Economía, Derecho e Instituciones", creditos:8, previas: [] },
    { id: "Introducción a la Metodología de la Investigación", nombre:"Introducción a la Metodología de la Investigación", creditos:6, previas: [] },
    { id: "Procesal 1", nombre:"Procesal 1", creditos:12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Derechos Humanos"] },
    { id: "Derecho Informático e Informática Jurídica 2", nombre:"Derecho Informático e Informática Jurídica 2", creditos:4, previas: ["Bienes", "Derecho Informático e Informática Jurídica 1"] }
  ],
  "4": [
    { id: "D. Penal - Parte General", nombre:"D. Penal - Parte General", creditos:7, previas: ["Bienes", "Introducción al Derecho Penal", "Derechos Humanos"] },
    { id: "Teoría de la Responsabilidad Civil", nombre:"Teoría de la Responsabilidad Civil", creditos:10, previas: ["Obligaciones y Contratos"] },
    { id: "Derecho Internacional Público", nombre:"Derecho Internacional Público", creditos:12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Introducción al Fenómeno Jurídico"] },
    { id: "Trabajo y Seguridad Social 1", nombre:"Trabajo y Seguridad Social 1", creditos:11, previas: ["Constitucional", "Obligaciones y Contratos", "Economía, Derecho e Instituciones"] }
  ],
  "5": [
    { id: "Contratos Especiales", nombre:"Contratos Especiales", creditos:12, previas: ["Teoría de la Responsabilidad Civil", "Obligaciones y Contratos"] },
    { id: "D. Penal - Parte Especial", nombre:"D. Penal - Parte Especial", creditos:10, previas: ["D. Penal - Parte General"] },
    { id: "Administrativo 1", nombre:"Administrativo 1", creditos:6, previas: ["Bienes", "Constitucional", "Personas"] },
    { id: "Registral", nombre:"Registral", creditos:4, previas: ["Bienes", "Personas"] },
    { id: "Práctica Profesional 1", nombre:"Práctica Profesional 1", creditos:14, previas: [] }
  ],
  "6": [
    { id: "Financiero 1", nombre:"Financiero 1", creditos:6, previas: ["Constitucional", "Administrativo 1", "Economía, Derecho e Instituciones", "D. Penal - Parte General"] },
    { id: "Procesal 2", nombre:"Procesal 2", creditos:12, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "D. Penal - Parte General"] },
    { id: "Comercial 1", nombre:"Comercial 1", creditos:14, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones"] }
  ],
  "7": [
    { id: "Minoridad, Adolescencia y Familia", nombre:"Minoridad, Adolescencia y Familia", creditos:6, previas: ["Constitucional", "Contratos Especiales", "Procesal 1"] },
    { id: "Comercial 2", nombre:"Comercial 2", creditos:12, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "Comercial 1"] },
    { id: "Seminario del Área", nombre:"Seminario del Área", creditos:2, previas: [] },
    { id: "Familia Personal y Patrimonial", nombre:"Familia Personal y Patrimonial", creditos:8, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "Comercial 1"] },
    { id: "Derecho Agrario", nombre:"Derecho Agrario", creditos:10, previas: ["Administrativo 1", "Contratos Especiales"] },
    { id: "Administrativo 2", nombre:"Administrativo 2", creditos:0, previas: ["Administrativo 1"] }
  ],
  "8": [
    { id: "Financiero 2", nombre:"Financiero 2", creditos:7, previas: ["Financiero 1", "Constitucional"] },
    { id: "Sucesiones", nombre:"Sucesiones", creditos:6, previas: ["Contratos Especiales", "Procesal 1"] }
  ],
  "9": [
    { id: "Teoría del Derecho", nombre:"Teoría del Derecho", creditos:8, previas: ["Administrativo 1", "Contratos Especiales", "Procesal 1", "Introducción al Fenómeno Jurídico"] },
    { id: "Trabajo y Seguridad Social 2", nombre:"Trabajo y Seguridad Social 2", creditos:11, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones", "Trabajo y Seguridad Social 1"] },
    { id: "Consultorio Jurídico 1", nombre:"Consultorio Jurídico 1", creditos:11, previas: [] }
  ],
  "10": [
    { id: "Consultorio Jurídico 2", nombre:"Consultorio Jurídico 2", creditos:11, previas: [] },
    { id: "Financiamiento Empresarial", nombre:"Financiamiento Empresarial", creditos:4, previas: ["Contratos Especiales", "Comercial 1", "Comercial 2"] },
    { id: "Derecho Internacional Privado", nombre:"Derecho Internacional Privado", creditos:12, previas: ["Obligaciones y Contratos", "Comercial 1", "Comercial 2", "Familia Personal y Patrimonial", "Sucesiones", "Derecho Internacional Público", "Procesal 1", "Procesal 2"] },
    { id: "Situaciones Jurídicas Subjetivas", nombre:"Situaciones Jurídicas Subjetivas", creditos:12, previas: ["Administrativo 1", "Administrativo 2"] }
  ],
};

const materiasEstadoKey = "mallaDerechoEstado";
const notasKey = "mallaDerechoNotas";
const examenesKey = "mallaDerechoExamenes";

let materiasEstado = {};
let notas = {};
let examenes = [];

const mallaContenedor = document.getElementById("malla");
const creditosDisplay = document.getElementById("creditos");
const progresoCircle = document.getElementById("progreso-circle");
const progresoText = document.getElementById("progreso-text");

const toggleCalendarBtn = document.getElementById("toggle-calendar");
const calendarPopup = document.getElementById("calendar-popup");
const calendarOverlay = document.getElementById("calendar-overlay");
const examDateInput = document.getElementById("exam-date");
const examNoteInput = document.getElementById("exam-note");
const addExamNoteBtn = document.getElementById("add-exam-note");
const examNotesList = document.getElementById("exam-notes-list");

// Cargar estados guardados o inicializar
function cargarEstado() {
  const savedEstado = localStorage.getItem(materiasEstadoKey);
  const savedNotas = localStorage.getItem(notasKey);
  const savedExamenes = localStorage.getItem(examenesKey);

  materiasEstado = savedEstado ? JSON.parse(savedEstado) : {};
  notas = savedNotas ? JSON.parse(savedNotas) : {};
  examenes = savedExamenes ? JSON.parse(savedExamenes) : [];
}

// Guardar estados en localStorage
function guardarEstado() {
  localStorage.setItem(materiasEstadoKey, JSON.stringify(materiasEstado));
  localStorage.setItem(notasKey, JSON.stringify(notas));
  localStorage.setItem(examenesKey, JSON.stringify(examenes));
}

// Crear elementos materias y columnas semestre
function renderMalla() {
  mallaContenedor.innerHTML = "";

  for (const semestre of Object.keys(materias)) {
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");
    divSemestre.setAttribute("data-semestre", semestre);
    divSemestre.innerHTML = `<h2>Semestre ${semestre}</h2>`;

    for (const materia of materias[semestre]) {
      const materiaDiv = document.createElement("div");
      materiaDiv.classList.add("materia");

      const aprobada = materiasEstado[materia.id] === "aprobada";
      const enExamen = materiasEstado[materia.id] === "examen";
      const bloqueada = !puedeCursar(materia);

      if (aprobada) materiaDiv.classList.add("aprobada");
      if (bloqueada) materiaDiv.classList.add("bloqueada");
      if (enExamen) materiaDiv.classList.add("examen");

      materiaDiv.setAttribute("data-id", materia.id);
      if (!bloqueada) {
        materiaDiv.style.cursor = "pointer";
      }

      materiaDiv.innerHTML = `
        <div class="nombre">${materia.nombre}</div>
        <div class="creditos">Créditos: ${materia.creditos}</div>
        <div class="nota">Nota: <input type="number" min="0" max="100" value="${notas[materia.id] ?? ""}" data-id="${materia.id}" class="nota-input" ${bloqueada ? "disabled" : ""} /></div>
        <div class="acciones">
          <button class="btn-aprobar" ${bloqueada ? "disabled" : ""}>${aprobada ? "Anular" : "Aprobar"}</button>
          <button class="btn-examen" ${bloqueada ? "disabled" : ""}>${enExamen ? "Quitar Examen" : "Poner Examen"}</button>
        </div>
      `;

      divSemestre.appendChild(materiaDiv);
    }
    mallaContenedor.appendChild(divSemestre);
  }
  agregarEventosMaterias();
  actualizarProgreso();
}

// Chequear si la materia se puede cursar (previas aprobadas)
function puedeCursar(materia) {
  if (!materia.previas || materia.previas.length === 0) return true;
  return materia.previas.every((prev) => materiasEstado[prev] === "aprobada");
}

// Actualizar progreso y rueda de créditos
function actualizarProgreso() {
  let totalCreditos = 0;
  let aprobados = 0;

  for (const semestre of Object.values(materias)) {
    for (const mat of semestre) {
      totalCreditos += mat.creditos;
      if (materiasEstado[mat.id] === "aprobada") {
        aprobados += mat.creditos;
      }
    }
  }

  creditosDisplay.textContent = `Créditos aprobados: ${aprobados} / ${totalCreditos}`;

  // Calcular porcentaje para el progreso de la rueda
  const porcentaje = totalCreditos ? Math.round((aprobados / totalCreditos) * 100) : 0;
  const circunferencia = 2 * Math.PI * 70;
  const offset = circunferencia - (porcentaje / 100) * circunferencia;
  progresoCircle.style.strokeDashoffset = offset;
  progresoText.textContent = `${porcentaje}%`;
}

// Eventos botones aprobar/anular y examen, y nota input
function agregarEventosMaterias() {
  const materiasDivs = document.querySelectorAll(".materia");

  materiasDivs.forEach((div) => {
    const id = div.getAttribute("data-id");
    const btnAprobar = div.querySelector(".btn-aprobar");
    const btnExamen = div.querySelector(".btn-examen");
    const inputNota = div.querySelector(".nota-input");

    if (btnAprobar) {
      btnAprobar.onclick = () => {
        if (materiasEstado[id] === "aprobada") {
          delete materiasEstado[id];
        } else {
          if (puedeCursar(getMateriaById(id))) {
            materiasEstado[id] = "aprobada";
            delete materiasEstado[id + "-examen"];
          }
        }
        guardarEstado();
        renderMalla();
        lanzarConfeti();
      };
    }

    if (btnExamen) {
      btnExamen.onclick = () => {
        if (materiasEstado[id] === "examen") {
          delete materiasEstado[id];
        } else {
          if (puedeCursar(getMateriaById(id))) {
            materiasEstado[id] = "examen";
            delete materiasEstado[id + "-examen"];
          }
        }
        guardarEstado();
        renderMalla();
      };
    }

    if (inputNota) {
      inputNota.onchange = () => {
        const val = parseInt(inputNota.value);
        if (!isNaN(val) && val >= 0 && val <= 100) {
          notas[id] = val;
        } else {
          delete notas[id];
        }
        guardarEstado();
      };
    }
  });
}

function getMateriaById(id) {
  for (const semestre of Object.values(materias)) {
    for (const mat of semestre) {
      if (mat.id === id) return mat;
    }
  }
  return null;
}

// Confeti corazones al aprobar
function lanzarConfeti() {
  const confetiCount = 30;
  const confetiContainer = document.createElement("div");
  confetiContainer.classList.add("confeti");
  document.body.appendChild(confetiContainer);

  for (let i = 0; i < confetiCount; i++) {
    const confeti = document.createElement("div");
    confeti.classList.add("corazon-confeti");
    confeti.style.left = Math.random() * window.innerWidth + "px";
    confeti.style.animationDuration = 2 + Math.random() * 2 + "s";
    confeti.style.fontSize = 12 + Math.random() * 24 + "px";
    confeti.style.color = `rgba(204,0,0,${0.5 + Math.random() * 0.5})`;
    confeti.textContent = "❤️";
    confetiContainer.appendChild(confeti);
  }

  setTimeout(() => {
    confetiContainer.remove();
  }, 4000);
}

// Mostrar/ocultar calendario
toggleCalendarBtn.addEventListener("click", () => {
  const isHidden = calendarPopup.classList.contains("hidden");
  if (isHidden) {
    calendarPopup.classList.remove("hidden");
    calendarOverlay.classList.remove("hidden");
    toggleCalendarBtn.setAttribute("aria-expanded", "true");
  } else {
    calendarPopup.classList.add("hidden");
    calendarOverlay.classList.add("hidden");
    toggleCalendarBtn.setAttribute("aria-expanded", "false");
  }
});

// Cerrar calendario al hacer click fuera
calendarOverlay.addEventListener("click", () => {
  calendarPopup.classList.add("hidden");
  calendarOverlay.classList.add("hidden");
  toggleCalendarBtn.setAttribute("aria-expanded", "false");
});

// Agregar nota de examen
addExamNoteBtn.addEventListener("click", () => {
  const fecha = examDateInput.value;
  const descripcion = examNoteInput.value.trim();
  if (!fecha || !descripcion) {
    alert("Por favor completa fecha y descripción");
    return;
  }
  examenes.push({ fecha, descripcion });
  guardarEstado();
  examDateInput.value = "";
  examNoteInput.value = "";
  renderExamNotes();
});

// Renderizar notas de examen en la lista
function renderExamNotes() {
  examNotesList.innerHTML = "";
  examenes.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  examenes.forEach(({ fecha, descripcion }, index) => {
    const li = document.createElement("li");
    li.textContent = `${fecha} - ${descripcion}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "×";
    btnEliminar.title = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      examenes.splice(index, 1);
      guardarEstado();
      renderExamNotes();
    });

    li.appendChild(btnEliminar);
    examNotesList.appendChild(li);
  });
}

window.addEventListener("load", () => {
  cargarEstado();
  renderMalla();
  renderExamNotes();
});
