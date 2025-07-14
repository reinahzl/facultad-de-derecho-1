const materias = {
  "Constitucional": { creditos: 15, previas: [], semestre: 1 },
  "Personas": { creditos: 6, previas: [], semestre: 1 },
  "Ideas Jurídico-Políticas": { creditos: 8, previas: [], semestre: 1 },
  "Sociedad y Derecho": { creditos: 7, previas: [], semestre: 1 },
  "Historia del Derecho": { creditos: 6, previas: [], semestre: 1 },
  "Taller de Lectoescritura": { creditos: 5, previas: [], semestre: 1 },
  "Intro Fenómeno Jurídico": { creditos: 4, previas: [], semestre: 1 },

  "Intro Derecho Penal": { creditos: 6, previas: ["Constitucional", "Personas"], semestre: 2 },
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
  "Sucesiones": { creditos: 6, previas: ["Contratos Especiales", "Procesal 1", "Intro Fenómeno Jurídico"], semestre: 8 },
  "Trabajo y Seguridad Social 2": { creditos: 11, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones", "Trabajo y Seguridad Social 1"], semestre: 8 },
  "Consultorio Jurídico 1": { creditos: 11, previas: [], semestre: 8 },

  "Consultorio Jurídico 2": { creditos: 11, previas: [], semestre: 9 },
  "Financiamiento Empresarial": { creditos: 4, previas: ["Contratos Especiales", "Comercial 1", "Comercial 2"], semestre: 9 },
  "Derecho Internacional Privado": { creditos: 12, previas: ["Obligaciones y Contratos", "Comercial 1", "Comercial 2", "Familia Personal y Patrimonial", "Sucesiones", "Derecho Internacional Público", "Procesal 1", "Procesal 2"], semestre: 9 },
  "Situaciones Jurídicas Subjetivas": { creditos: 12, previas: ["Administrativo 1", "Administrativo 2"], semestre: 9 }
};

let aprobadas = new Set();
let notas = {};
let examenes = new Set();
let eventos = [];

const MAX_CREDITOS = Object.values(materias).reduce((acc, m) => acc + m.creditos, 0);

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";
  // Crear columnas por semestre
  const semestres = {};
  for (const nombre in materias) {
    const semestre = materias[nombre].semestre;
    if (!semestres[semestre]) semestres[semestre] = [];
    semestres[semestre].push(nombre);
  }
  const semestresKeys = Object.keys(semestres).sort((a,b) => a-b);

  semestresKeys.forEach(s => {
    const divCol = document.createElement("div");
    divCol.className = "semestre-columna";
    divCol.innerHTML = `<h2>Semestre ${s}</h2>`;
    semestres[s].forEach(m => {
      const divMat = document.createElement("div");
      divMat.className = "materia bloqueada";
      divMat.dataset.nombre = m;
      divMat.tabIndex = 0;
      divMat.setAttribute("role","button");
      divMat.setAttribute("aria-pressed", aprobadas.has(m));
      divMat.innerHTML = `
        <div class="nombre-materia">${m} (${materias[m].creditos} créditos)</div>
        <div class="info-extra">
          <span class="nota">${notas[m] !== undefined ? "Nota: "+notas[m] : ""}</span>
          <span class="examen">${examenes.has(m) ? "📝 Examen" : ""}</span>
        </div>`;
      divMat.onclick = () => toggleMateria(m);
      divMat.onkeydown = (e) => { if(e.key==="Enter" || e.key===" ") toggleMateria(m); };
      divCol.appendChild(divMat);
    });
    malla.appendChild(divCol);
  });

  actualizarEstadoMaterias();
  llenarSelectMateria();
}

function puedeAprobar(nombre) {
  return materias[nombre].previas.every(pr => aprobadas.has(pr));
}

function toggleMateria(nombre) {
  if (aprobadas.has(nombre)) {
    // Desaprobar solo si ninguna materia dependiente está aprobada
    const dependientes = Object.entries(materias).filter(([mat, val]) => val.previas.includes(nombre)).map(([mat])=>mat);
    if(dependientes.some(d => aprobadas.has(d))){
      alert("No puedes anular esta materia porque tiene materias dependientes aprobadas.");
      return;
    }
    aprobadas.delete(nombre);
  } else {
    if (!puedeAprobar(nombre)) return;
    aprobadas.add(nombre);
  }
  guardarProgreso();
  actualizarEstadoMaterias();
  actualizarCreditos();
  dispararConfeti();
}

function actualizarEstadoMaterias() {
  const divs = document.querySelectorAll(".materia");
  divs.forEach(div => {
    const nombre = div.dataset.nombre;
    div.classList.remove("bloqueada", "aprobada");
    div.setAttribute("aria-pressed", aprobadas.has(nombre));
    if (aprobadas.has(nombre)) {
      div.classList.add("aprobada");
    } else if (!puedeAprobar(nombre)) {
      div.classList.add("bloqueada");
    }
    // Actualizar info extra
    const notaSpan = div.querySelector(".nota");
    notaSpan.textContent = notas[nombre] !== undefined ? "Nota: " + notas[nombre] : "";
    const examenSpan = div.querySelector(".examen");
    examenSpan.textContent = examenes.has(nombre) ? "📝 Examen" : "";
  });
}

function actualizarCreditos() {
  const total = Array.from(aprobadas).reduce((sum, mat) => sum + materias[mat].creditos, 0);
  document.getElementById("creditos").innerText = `Créditos aprobados: ${total}`;
  actualizarProgresoGrafico(total);
}

function actualizarProgresoGrafico(total) {
  const circle = document.getElementById("progreso-circle");
  const ratio = total / MAX_CREDITOS;
  const dashOffset = 440 - (440 * ratio);
  circle.style.strokeDashoffset = dashOffset;
}

// Guardar y cargar progreso, notas, exámenes y eventos
function guardarProgreso() {
  localStorage.setItem("aprobadas", JSON.stringify(Array.from(aprobadas)));
  localStorage.setItem("notas", JSON.stringify(notas));
  localStorage.setItem("examenes", JSON.stringify(Array.from(examenes)));
  localStorage.setItem("eventos", JSON.stringify(eventos));
}

function cargarProgreso() {
  const guardadas = JSON.parse(localStorage.getItem("aprobadas"));
  const guardadasNotas = JSON.parse(localStorage.getItem("notas"));
  const guardadasExamenes = JSON.parse(localStorage.getItem("examenes"));
  const guardadosEventos = JSON.parse(localStorage.getItem("eventos"));

  if (guardadas && Array.isArray(guardadas)) aprobadas = new Set(guardadas);
  if (guardadasNotas && typeof guardadasNotas === "object") notas = guardadasNotas;
  if (guardadasExamenes && Array.isArray(guardadasExamenes)) examenes = new Set(guardadasExamenes);
  if (guardadosEventos && Array.isArray(guardadosEventos)) eventos = guardadosEventos;
}

// Barra de opciones: modo oscuro y manejo de notas/examenes

function toggleModoOscuro() {
  document.body.classList.toggle("modo-oscuro");
  const modoActivo = document.body.classList.contains("modo-oscuro");
  localStorage.setItem("modoOscuro", modoActivo);
}

function cargarModoOscuro() {
  const modo = localStorage.getItem("modoOscuro");
  if (modo === "true") document.body.classList.add("modo-oscuro");
}

function llenarSelectMateria() {
  const select = document.getElementById("selectMateria");
  select.innerHTML = '<option value="">-- Seleccionar materia --</option>';
  Object.keys(materias).forEach(m => {
    const option = document.createElement("option");
    option.value = m;
    option.textContent = m;
    select.appendChild(option);
  });
}

function guardarNotaExamen() {
  const materia = document.getElementById("selectMateria").value;
  if (!materia) {
    alert("Por favor, selecciona una materia.");
    return;
  }
  const notaVal = document.getElementById("inputNota").value.trim();
  const examenChk = document.getElementById("chkExamen").checked;

  if (notaVal !== "") {
    const notaNum = Number(notaVal);
    if (isNaN(notaNum) || notaNum < 0 || notaNum > 100) {
      alert("Ingrese una nota válida entre 0 y 100.");
      return;
    }
    notas[materia] = notaNum;
  } else {
    delete notas[materia];
  }

  if (examenChk) {
    examenes.add(materia);
  } else {
    examenes.delete(materia);
  }

  guardarProgreso();
  actualizarEstadoMaterias();

  alert("Nota y estado de examen guardados.");
  // Limpiar inputs
  document.getElementById("inputNota").value = "";
  document.getElementById("chkExamen").checked = false;
  document.getElementById("selectMateria").value = "";
}

// Agenda - Modal calendario

function abrirCalendario() {
  document.getElementById("modal-calendario").classList.remove("hidden");
}

function cerrarCalendario() {
  document.getElementById("modal-calendario").classList.add("hidden");
}

function agregarEvento() {
  const fechaInput = document.getElementById("fecha");
  const eventoInput = document.getElementById("evento");
  const fechaVal = fechaInput.value;
  const eventoVal = eventoInput.value.trim();

  if (!fechaVal || eventoVal === "") {
    alert("Por favor, ingrese fecha y descripción del evento.");
    return;
  }

  eventos.push({ fecha: fechaVal, texto: eventoVal });
  guardarProgreso();
  mostrarEventos();
  fechaInput.value = "";
  eventoInput.value = "";
}

function mostrarEventos() {
  const lista = document.getElementById("lista-eventos");
  lista.innerHTML = "";
  eventos.forEach((ev, i) => {
    const li = document.createElement("li");
    li.textContent = `${ev.fecha} - ${ev.texto}`;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "×";
    btnEliminar.setAttribute("aria-label", "Eliminar evento");
    btnEliminar.onclick = () => {
      eventos.splice(i, 1);
      guardarProgreso();
      mostrarEventos();
    };
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

// Confeti de corazones

function dispararConfeti() {
  const container = document.getElementById("confeti-container");
  const colors = ["#cc0000", "#ff4444", "#ff9999", "#cc6666"];
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("confeti-corazon");
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

// Init

window.onload = () => {
  cargarProgreso();
  crearMalla();
  actualizarCreditos();
  cargarModoOscuro();
  mostrarEventos();

  // Eventos barra de opciones
  document.getElementById("toggleModoOscuro").onclick = toggleModoOscuro;
  document.getElementById("guardarNotaExamen").onclick = guardarNotaExamen;
  document.getElementById("abrirAgendaBtn").onclick = abrirCalendario;
  document.getElementById("calendar-heart").onclick = abrirCalendario;

  // Modal calendario
  document.getElementById("cerrarCalendario").onclick = cerrarCalendario;
  document.getElementById("agregarEvento").onclick = agregarEvento;

  // Accesibilidad para abrir calendario con teclado
  document.getElementById("calendar-heart").addEventListener("keydown", e => {
    if(e.key === "Enter" || e.key === " ") abrirCalendario();
  });
};
