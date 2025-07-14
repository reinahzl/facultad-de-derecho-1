const materias = {
  "Constitucional": { creditos: 15, previas: [], semestre: 1 },
  "Personas": { creditos: 6, previas: [], semestre: 1 },
  "Ideas Jurídico-Políticas": { creditos: 8, previas: [], semestre: 1 },
  "Sociedad y Derecho": { creditos: 7, previas: [], semestre: 1 },
  "Historia del Derecho": { creditos: 6, previas: [], semestre: 1 },
  "Taller de Lectoescritura": { creditos: 5, previas: [], semestre: 1 },
  "Intro Fenómeno Jurídico": { creditos: 4, previas: [], semestre: 1 },
  "Intro Derecho Penal": { creditos: 6, previas: ["Constitucional", "Personas"], semestre: 1 },

  "Bienes": { creditos: 6, previas: [], semestre: 2 },
  "Informático Jurídico 1": { creditos: 6, previas: ["Constitucional", "Personas"], semestre: 2 },
  "Ciencia Política": { creditos: 7, previas: [], semestre: 2 },
  "Derechos Humanos": { creditos: 10, previas: ["Constitucional"], semestre: 2 },

  "Obligaciones y Contratos": { creditos: 14, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho"], semestre: 3 },
  "Economía, Derecho e Instituciones": { creditos: 8, previas: [], semestre: 3 },
  "Intro Metodología Investigación": { creditos: 6, previas: [], semestre: 3 },
  "Procesal 1": { creditos: 12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Derechos Humanos"], semestre: 3 },
  "Informático Jurídico 2": { creditos: 4, previas: ["Bienes", "Informático Jurídico 1"], semestre: 3 },

  "D. Penal - Parte General": { creditos: 7, previas: ["Bienes", "Intro Derecho Penal", "Derechos Humanos"], semestre: 4 },
  "Teoría de la Responsabilidad Civil": { creditos: 10, previas: ["Obligaciones y Contratos"], semestre: 4 },
  "Derecho Internacional Público": { creditos: 12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Intro Fenómeno Jurídico"], semestre: 4 },
  "Trabajo y Seguridad Social 1": { creditos: 11, previas: ["Constitucional", "Obligaciones y Contratos", "Economía, Derecho e Instituciones"], semestre: 4 },

  "Contratos Especiales": { creditos: 12, previas: ["Teoría de la Responsabilidad Civil", "Obligaciones y Contratos"], semestre: 5 },
  "D. Penal - Parte Especial": { creditos: 10, previas: ["D. Penal - Parte General"], semestre: 5 },
  "Administrativo 1": { creditos: 6, previas: ["Bienes", "Constitucional", "Personas"], semestre: 5 },
  "Registral": { creditos: 4, previas: ["Bienes", "Personas"], semestre: 5 },
  "Práctica Profesional 1": { creditos: 14, previas: [], semestre: 5 },

  "Financiero 1": { creditos: 6, previas: ["Constitucional", "Administrativo 1", "Economía, Derecho e Instituciones", "D. Penal - Parte General"], semestre: 6 },
  "Procesal 2": { creditos: 12, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "D. Penal - Parte General"], semestre: 6 },
  "Comercial 1": { creditos: 14, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones"], semestre: 6 },

  "Minoridad, Adolescencia y Familia": { creditos: 6, previas: ["Constitucional", "Contratos Especiales", "Procesal 1"], semestre: 7 },
  "Comercial 2": { creditos: 12, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "Comercial 1"], semestre: 7 },
  "Seminario del Área": { creditos: 2, previas: [], semestre: 7 },
  "Familia Personal y Patrimonial": { creditos: 8, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "Comercial 1"], semestre: 7 },
  "Derecho Agrario": { creditos: 10, previas: ["Administrativo 1", "Contratos Especiales"], semestre: 7 },
  "Administrativo 2": { creditos: 0, previas: ["Administrativo 1"], semestre: 7 },

  "Financiero 2": { creditos: 7, previas: ["Financiero 1", "Constitucional"], semestre: 8 },
  "Sucesiones": { creditos: 6, previas: ["Contratos Especiales", "Procesal 1"], semestre: 8 },

  "Teoría del Derecho": { creditos: 8, previas: ["Administrativo 1", "Contratos Especiales", "Procesal 1", "Intro Fenómeno Jurídico"], semestre: 8 },
  "Trabajo y Seguridad Social 2": { creditos: 11, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones", "Trabajo y Seguridad Social 1"], semestre: 8 },
  "Consultorio Jurídico 1": { creditos: 11, previas: [], semestre: 8 },

  "Consultorio Jurídico 2": { creditos: 11, previas: [], semestre: 9 },
  "Financiamiento Empresarial": { creditos: 4, previas: ["Contratos Especiales", "Comercial 1", "Comercial 2"], semestre: 9 },
  "Derecho Internacional Privado": { creditos: 12, previas: ["Obligaciones y Contratos", "Comercial 1", "Comercial 2", "Familia Personal y Patrimonial", "Sucesiones", "Derecho Internacional Público", "Procesal 1", "Procesal 2"], semestre: 9 },
  "Situaciones Jurídicas Subjetivas": { creditos: 12, previas: ["Administrativo 1", "Administrativo 2"], semestre: 9 }
};

let aprobadas = new Set();
let notas = {};
let examenes = {};
let eventosAgenda = [];

const maxCreditos = Object.values(materias).reduce((acc, m) => acc + m.creditos, 0);

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  // Agrupar materias por semestre
  const semestres = {};
  for (const nombre in materias) {
    const sem = materias[nombre].semestre;
    if (!semestres[sem]) semestres[sem] = [];
    semestres[sem].push(nombre);
  }

  // Crear columnas por semestre ordenadas
  Object.keys(semestres).sort((a,b) => a-b).forEach(sem => {
    const columna = document.createElement("div");
    columna.className = "semestre-columna";
    columna.setAttribute("aria-label", `Semestre ${sem}`);
    columna.innerHTML = `<h2>Semestre ${sem}</h2>`;

    semestres[sem].forEach(nombre => {
      const materia = document.createElement("div");
      materia.className = "materia bloqueada";
      materia.dataset.nombre = nombre;
      materia.tabIndex = 0;
      materia.setAttribute("role", "button");
      materia.setAttribute("aria-pressed", "false");
      materia.innerHTML = `
        <div class="nombre-materia">${nombre}</div>
        <div class="info-extra">
          <span>(${materias[nombre].creditos} créditos)</span>
          <span class="nota">Nota: ${notas[nombre] ?? "-"}</span>
          <span class="examen">Examen: ${examenes[nombre] ? "Sí" : "No"}</span>
        </div>
      `;
      materia.onclick = () => toggleAprobarMateria(nombre);
      materia.onkeypress = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleAprobarMateria(nombre);
        }
      };
      columna.appendChild(materia);
    });

    malla.appendChild(columna);
  });

  actualizarEstadoMaterias();
  actualizarCreditos();
}

function toggleAprobarMateria(nombre) {
  if (aprobadas.has(nombre)) {
    aprobadas.delete(nombre);
    delete notas[nombre];
    delete examenes[nombre];
  } else {
    if (!puedeAprobar(nombre)) return;
    aprobadas.add(nombre);
  }
  guardarDatos();
  crearMalla();
  animarConfeti();
}

function puedeAprobar(nombre) {
  return materias[nombre].previas.every(pr => aprobadas.has(pr));
}

function actualizarEstadoMaterias() {
  document.querySelectorAll(".materia").forEach(div => {
    const nombre = div.dataset.nombre;
    div.classList.remove("bloqueada", "aprobada");
    div.setAttribute("aria-pressed", aprobadas.has(nombre) ? "true" : "false");

    if (aprobadas.has(nombre)) {
      div.classList.add("aprobada");
    } else if (!puedeAprobar(nombre)) {
      div.classList.add("bloqueada");
    }
  });
}

function actualizarCreditos() {
  const total = Array.from(aprobadas).reduce((sum, mat) => sum + materias[mat].creditos, 0);
  document.getElementById("creditos").innerText = `Créditos aprobados: ${total}`;

  // Rueda progreso
  const circle = document.getElementById("progreso-circle");
  const porcentaje = Math.round((total / maxCreditos) * 100);
  const dashoffset = 440 - (440 * porcentaje) / 100;
  circle.style.strokeDashoffset = dashoffset;

  // Número animado
  const num = document.getElementById("progreso-num");
  animarNumero(num, porcentaje);
}

function animarNumero(elemento, numeroFinal) {
  let start = 0;
  const duracion = 1000; // ms
  const paso = 20;
  const incremento = numeroFinal / (duracion / paso);
  let current = 0;
  clearInterval(elemento._interval);
  elemento._interval = setInterval(() => {
    current += incremento;
    if (current >= numeroFinal) {
      current = numeroFinal;
      clearInterval(elemento._interval);
    }
    elemento.textContent = `${Math.round(current)}%`;
  }, paso);
}

// Guardar y cargar datos localStorage

function guardarDatos() {
  localStorage.setItem("aprobadas", JSON.stringify([...aprobadas]));
  localStorage.setItem("notas", JSON.stringify(notas));
  localStorage.setItem("examenes", JSON.stringify(examenes));
  localStorage.setItem("eventosAgenda", JSON.stringify(eventosAgenda));
}

function cargarDatos() {
  const ap = JSON.parse(localStorage.getItem("aprobadas") || "[]");
  aprobadas = new Set(ap);
  notas = JSON.parse(localStorage.getItem("notas") || "{}");
  examenes = JSON.parse(localStorage.getItem("examenes") || "{}");
  eventosAgenda = JSON.parse(localStorage.getItem("eventosAgenda") || "[]");
}

// Nota y examen

function editarNota(nombre) {
  const nota = prompt(`Ingrese la nota para ${nombre}:`, notas[nombre] ?? "");
  if (nota !== null) {
    if (nota === "") {
      delete notas[nombre];
    } else {
      notas[nombre] = nota;
    }
    guardarDatos();
    crearMalla();
  }
}

function toggleExamen(nombre) {
  if (examenes[nombre]) {
    delete examenes[nombre];
  } else {
    examenes[nombre] = true;
  }
  guardarDatos();
  crearMalla();
}

// Agenda calendario

const modal = document.getElementById("modal-calendario");
const listaEventos = document.getElementById("lista-eventos");
const inputFecha = document.getElementById("fecha");
const inputEvento = document.getElementById("evento");
const btnAgregarEvento = document.getElementById("agregarEvento");
const btnCerrarCalendario = document.getElementById("cerrarCalendario");
const btnBorrarTodo = document.getElementById("borrarTodo");

document.getElementById("calendar-heart").onclick = () => {
  modal.classList.remove("hidden");
  inputFecha.focus();
};

btnCerrarCalendario.onclick = () => {
  modal.classList.add("hidden");
};

btnAgregarEvento.onclick = () => {
  const fecha = inputFecha.value;
  const desc = inputEvento.value.trim();
  if (!fecha || !desc) {
    alert("Por favor ingrese fecha y descripción.");
    return;
  }
  eventosAgenda.push({ fecha, desc });
  guardarDatos();
  mostrarEventos();
  inputFecha.value = "";
  inputEvento.value = "";
  inputFecha.focus();
};

btnBorrarTodo.onclick = () => {
  if (confirm("¿Seguro que desea borrar todos los eventos?")) {
    eventosAgenda = [];
    guardarDatos();
    mostrarEventos();
  }
};

function mostrarEventos() {
  listaEventos.innerHTML = "";
  eventosAgenda.sort((a,b) => a.fecha.localeCompare(b.fecha));
  eventosAgenda.forEach((ev, i) => {
    const li = document.createElement("li");
    li.textContent = `${ev.fecha}: ${ev.desc}`;
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "×";
    btnBorrar.title = "Borrar evento";
    btnBorrar.onclick = () => {
      eventosAgenda.splice(i, 1);
      guardarDatos();
      mostrarEventos();
    };
    li.appendChild(btnBorrar);
    listaEventos.appendChild(li);
  });
}

// Confeti corazones

let confetiCount = 0;
const confetiMax = 30;
const confetiContainer = document.getElementById("confeti-container");

function animarConfeti() {
  if (confetiCount >= confetiMax) return;
  confetiCount++;
  const confeti = document.createElement("div");
  confeti.className = "confeti-corazon";
  confeti.style.left = `${Math.random() * window.innerWidth}px`;
  confeti.style.top = `-30px`;
  confeti.style.fontSize = `${12 + Math.random() * 20}px`;
  confeti.style.animationDuration = `${3000 + Math.random() * 2000}ms`;
  confeti.textContent = "❤️";

  confetiContainer.appendChild(confeti);

  confeti.addEventListener("animationend", () => {
    confeti.remove();
    confetiCount--;
  });
}

// Modo oscuro

const btnModoOscuro = document.getElementById("toggleModoOscuro");
btnModoOscuro.onclick = () => {
  document.body.classList.toggle("modo-oscuro");
  const activo = document.body.classList.contains("modo-oscuro");
  btnModoOscuro.setAttribute("aria-pressed", activo);
  btnModoOscuro.textContent = activo ? "Modo claro ☀️" : "Modo oscuro 🌙";
};

// Al cargar página

window.onload = () => {
  cargarDatos();
  crearMalla();
  mostrarEventos();
  actualizarCreditos();
};
