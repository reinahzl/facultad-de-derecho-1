// Datos completos con semestres y materias con sus créditos y previas
const materias = {
  "Constitucional": { creditos: 15, previas: [] },
  "Personas": { creditos: 6, previas: [] },
  "Ideas político jurídicas": { creditos: 8, previas: [] },
  "Sociedad y Derecho": { creditos: 7, previas: [] },
  "Historia del Derecho": { creditos: 6, previas: [] },

  "Taller de Lecto Escritura Universitaria": { creditos: 5, previas: [] },
  "Introducción al Fenómeno Jurídico": { creditos: 4, previas: [] },
  "Introducción al Derecho Penal": { creditos: 6, previas: ["Constitucional", "Personas"] },
  "Bienes": { creditos: 6, previas: [] },
  "Derecho Informático e Informática Jurídica 1": { creditos: 6, previas: ["Constitucional", "Personas"] },
  "Ciencia Política": { creditos: 7, previas: [] },
  "Sociedad y Derecho - Ciencia Política 2": { creditos: 2, previas: [] },
  "Derechos Humanos": { creditos: 10, previas: ["Constitucional"] },

  "Obligaciones y Contratos": { creditos: 14, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho"] },
  "Economía, Derecho e Instituciones": { creditos: 8, previas: [] },
  "Introducción a la Metodología de la Investigación": { creditos: 6, previas: [] },
  "Procesal 1": { creditos: 12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Derechos Humanos"] },
  "Derecho Informático e Informática Jurídica 2": { creditos: 4, previas: ["Bienes", "Derecho Informático e Informática Jurídica 1"] },

  "D. Penal - Parte General": { creditos: 7, previas: ["Bienes", "Introducción al Derecho Penal", "Derechos Humanos"] },
  "Teoría de la Responsabilidad Civil": { creditos: 10, previas: ["Obligaciones y Contratos"] },
  "Derecho Internacional Público": { creditos: 12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Introducción al Fenómeno Jurídico"] },
  "Trabajo y Seguridad Social 1": { creditos: 11, previas: ["Constitucional", "Obligaciones y Contratos", "Economía, Derecho e Instituciones"] },

  "Contratos Especiales": { creditos: 12, previas: ["Teoría de la Responsabilidad Civil", "Obligaciones y Contratos"] },
  "D. Penal - Parte Especial": { creditos: 10, previas: ["D. Penal - Parte General"] },
  "Administrativo 1": { creditos: 6, previas: ["Bienes", "Constitucional", "Personas"] },
  "Registral": { creditos: 4, previas: ["Bienes", "Personas"] },
  "Práctica Profesional 1": { creditos: 14, previas: [] },

  "Financiero 1": { creditos: 6, previas: ["Constitucional", "Administrativo 1", "Economía, Derecho e Instituciones", "D. Penal - Parte General"] },
  "Procesal 2": { creditos: 12, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "D. Penal - Parte General"] },
  "Comercial 1": { creditos: 14, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones"] },

  "Minoridad, Adolescencia y Familia": { creditos: 6, previas: ["Constitucional", "Contratos Especiales", "Procesal 1"] },
  "Comercial 2": { creditos: 12, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "Comercial 1"] },
  "Seminario del Área": { creditos: 2, previas: [] },
  "Familia Personal y Patrimonial": { creditos: 8, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "Comercial 1"] },
  "Derecho Agrario": { creditos: 10, previas: ["Administrativo 1", "Contratos Especiales"] },
  "Administrativo 2": { creditos: 0, previas: ["Administrativo 1"] },

  "Financiero 2": { creditos: 7, previas: ["Financiero 1", "Constitucional"] },
  "Sucesiones": { creditos: 6, previas: ["Contratos Especiales", "Procesal 1"] },

  "Teoría del Derecho": { creditos: 8, previas: ["Administrativo 1", "Contratos Especiales", "Procesal 1", "Introducción al Fenómeno Jurídico"] },
  "Trabajo y Seguridad Social 2": { creditos: 11, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones", "Trabajo y Seguridad Social 1"] },
  "Consultorio Jurídico 1": { creditos: 11, previas: [] },

  "Consultorio Jurídico 2": { creditos: 11, previas: [] },
  "Financiamiento Empresarial": { creditos: 4, previas: ["Contratos Especiales", "Comercial 1", "Comercial 2"] },
  "Derecho Internacional Privado": { creditos: 12, previas: ["Obligaciones y Contratos", "Comercial 1", "Comercial 2", "Familia Personal y Patrimonial", "Sucesiones", "Derecho Internacional Público", "Procesal 1", "Procesal 2"] },
  "Situaciones Jurídicas Subjetivas": { creditos: 12, previas: ["Administrativo 1", "Administrativo 2"] }
};

// Arreglo con semestres y materias para orden y división
const semestres = [
  {
    nombre: "1er Semestre",
    materias: ["Constitucional", "Personas", "Ideas político jurídicas", "Sociedad y Derecho", "Historia del Derecho"]
  },
  {
    nombre: "2do Semestre",
    materias: [
      "Taller de Lecto Escritura Universitaria",
      "Introducción al Fenómeno Jurídico",
      "Introducción al Derecho Penal",
      "Bienes",
      "Derecho Informático e Informática Jurídica 1",
      "Ciencia Política",
      "Sociedad y Derecho - Ciencia Política 2",
      "Derechos Humanos"
    ]
  },
  {
    nombre: "2do Año 1er Semestre",
    materias: [
      "Obligaciones y Contratos",
      "Economía, Derecho e Instituciones",
      "Introducción a la Metodología de la Investigación",
      "Procesal 1",
      "Derecho Informático e Informática Jurídica 2"
    ]
  },
  {
    nombre: "2do Año 2do Semestre",
    materias: [
      "D. Penal - Parte General",
      "Teoría de la Responsabilidad Civil",
      "Derecho Internacional Público",
      "Trabajo y Seguridad Social 1"
    ]
  },
  {
    nombre: "3er Año 1er Semestre",
    materias: [
      "Contratos Especiales",
      "D. Penal - Parte Especial",
      "Administrativo 1",
      "Registral",
      "Práctica Profesional 1"
    ]
  },
  {
    nombre: "3er Año 2do Semestre",
    materias: [
      "Financiero 1",
      "Procesal 2",
      "Comercial 1"
    ]
  },
  {
    nombre: "4to Año 1er Semestre",
    materias: [
      "Minoridad, Adolescencia y Familia",
      "Comercial 2",
      "Seminario del Área",
      "Familia Personal y Patrimonial",
      "Derecho Agrario",
      "Administrativo 2"
    ]
  },
  {
    nombre: "4to Año 2do Semestre",
    materias: [
      "Financiero 2",
      "Sucesiones"
    ]
  },
  {
    nombre: "5to Año 1er Semestre",
    materias: [
      "Teoría del Derecho",
      "Trabajo y Seguridad Social 2",
      "Consultorio Jurídico 1"
    ]
  },
  {
    nombre: "5to Año 2do Semestre",
    materias: [
      "Consultorio Jurídico 2",
      "Financiamiento Empresarial",
      "Derecho Internacional Privado",
      "Situaciones Jurídicas Subjetivas"
    ]
  }
];

// Variables globales
let aprobadas = {};
let notas = {};
let examenes = [];

const contenedorSemestres = document.getElementById("contenedor-semestres");
const creditosTotalesSpan = document.getElementById("creditos-totales");
const progresoCirc = document.getElementById("progreso-circ");
const progresoText = document.getElementById("progreso-text");
const toggleDarkBtn = document.getElementById("toggle-dark-mode");
const panelLateral = document.getElementById("panel-lateral");
const agendaDiv = document.getElementById("agenda");
const toggleCalendarioBtn = document.getElementById("toggle-calendario");
const cerrarCalendarioBtn = document.getElementById("cerrar-calendario");
const agregarExamenBtn = document.getElementById("agregar-examen-btn");
const listaExamenesUl = document.getElementById("lista-examenes");
const fechaInput = document.getElementById("fecha-examen");
const nombreMateriaInput = document.getElementById("nombre-materia");
const notasContainer = document.getElementById("notas-container");

// Inicializa
function inicializar() {
  cargarDatos();
  renderizarSemestres();
  renderizarNotas();
  actualizarEstadoMaterias();
  actualizarCreditos();
  agregarEventListeners();
  aplicarModoGuardado();
}

// Carga datos desde localStorage
function cargarDatos() {
  const dataAprobadas = localStorage.getItem("malla_aprobadas");
  const dataNotas = localStorage.getItem("malla_notas");
  const dataExamenes = localStorage.getItem("malla_examenes");
  const dataModo = localStorage.getItem("modo_oscuro");

  aprobadas = dataAprobadas ? JSON.parse(dataAprobadas) : {};
  notas = dataNotas ? JSON.parse(dataNotas) : {};
  examenes = dataExamenes ? JSON.parse(dataExamenes) : [];

  if(dataModo === "true") {
    document.body.classList.add("dark-mode");
  }
}

// Guarda datos en localStorage
function guardarDatos() {
  localStorage.setItem("malla_aprobadas", JSON.stringify(aprobadas));
  localStorage.setItem("malla_notas", JSON.stringify(notas));
  localStorage.setItem("malla_examenes", JSON.stringify(examenes));
}

// Renderiza semestres y materias
function renderizarSemestres() {
  contenedorSemestres.innerHTML = "";
  semestres.forEach((semestre) => {
    const divSem = document.createElement("div");
    divSem.classList.add("semestre");
    const h3 = document.createElement("h3");
    h3.textContent = semestre.nombre;
    divSem.appendChild(h3);

    semestre.materias.forEach((mat) => {
      const divMat = document.createElement("div");
      divMat.classList.add("materia");
      divMat.textContent = mat + ` (${materias[mat].creditos}cr)`;
      divMat.dataset.materia = mat;

      if (!puedeCursar(mat)) {
        divMat.classList.add("bloqueada");
      }
      if (aprobadas[mat]) {
        divMat.classList.add("aprobada");
      }
      divSem.appendChild(divMat);
    });

    contenedorSemestres.appendChild(divSem);
  });
}

// Actualiza estado de materias (bloqueadas/aprobadas)
function actualizarEstadoMaterias() {
  document.querySelectorAll(".materia").forEach((el) => {
    const mat = el.dataset.materia;
    if (!puedeCursar(mat)) {
      el.classList.add("bloqueada");
      el.classList.remove("aprobada");
    } else {
      el.classList.remove("bloqueada");
      if (aprobadas[mat]) el.classList.add("aprobada");
      else el.classList.remove("aprobada");
    }
  });
}

// Verifica si la materia puede ser cursada (previas aprobadas)
function puedeCursar(nombre) {
  const previas = materias[nombre].previas;
  if (!previas || previas.length === 0) return true;
  return previas.every((prev) => aprobadas[prev]);
}

// Maneja click en materia (aprobar o desaprobar)
function clickMateria(nombre, elemento) {
  if (!puedeCursar(nombre)) {
    Swal.fire({
      icon: "error",
      title: "No puedes aprobar esta materia",
      text: "Debes aprobar las materias previas primero.",
    });
    return;
  }

  if (aprobadas[nombre]) {
    // Desaprobar con confirmación
    Swal.fire({
      title: `¿Quieres desaprobar ${nombre}?`,
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        delete aprobadas[nombre];
        delete notas[nombre];
        guardarDatos();
        renderizarNotas();
        actualizarEstadoMaterias();
        actualizarCreditos();
      }
    });
  } else {
    aprobadas[nombre] = true;
    // Animación confeti al aprobar
    lanzarConfeti();
    guardarDatos();
    actualizarEstadoMaterias();
    actualizarCreditos();
  }
}

// Renderiza notas en panel lateral
function renderizarNotas() {
  notasContainer.innerHTML = "";
  Object.keys(materias).forEach((mat) => {
    const divNota = document.createElement("div");
    divNota.classList.add("nota-materia");
    const label = document.createElement("label");
    label.textContent = mat;
    label.htmlFor = `nota-${mat}`;

    const input = document.createElement("input");
    input.type = "number";
    input.min = 0;
    input.max = 100;
    input.id = `nota-${mat}`;
    input.value = notas[mat] ?? "";
    input.disabled = !aprobadas[mat];
    input.placeholder = "Nota";

    input.addEventListener("change", (e) => {
      const val = parseFloat(e.target.value);
      if (isNaN(val) || val < 0 || val > 100) {
        Swal.fire({
          icon: "warning",
          title: "Nota inválida",
          text: "Ingresa una nota entre 0 y 100",
        });
        e.target.value = notas[mat] ?? "";
        return;
      }
      notas[mat] = val;
      guardarDatos();
    });

    divNota.appendChild(label);
    divNota.appendChild(input);
    notasContainer.appendChild(divNota);
  });
}

// Actualiza créditos y rueda de progreso
function actualizarCreditos() {
  let totalCreditos = 0;
  let creditosAprobados = 0;

  for (const mat in materias) {
    totalCreditos += materias[mat].creditos;
    if (aprobadas[mat]) {
      creditosAprobados += materias[mat].creditos;
    }
  }

  creditosTotalesSpan.textContent = `Créditos Aprobados: ${creditosAprobados} / ${totalCreditos}`;

  const porcentaje = totalCreditos === 0 ? 0 : (creditosAprobados / totalCreditos) * 100;
  const circ = 2 * Math.PI * 70; // perímetro círculo (radio 70)
  const offset = circ - (circ * porcentaje) / 100;

  progresoCirc.style.strokeDashoffset = offset.toFixed(2);
  progresoText.textContent = `${porcentaje.toFixed(0)}%`;
}

// Animación confeti con corazones
function lanzarConfeti() {
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const colors = ["#ff3366", "#ff6699", "#ff99cc"];
  const confettiCount = 40;

  (function frame() {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return;
    for (let i = 0; i < confettiCount; i++) {
      crearCorazon(Math.random() * window.innerWidth, -10, colors[Math.floor(Math.random() * colors.length)]);
    }
    requestAnimationFrame(frame);
  })();

  function crearCorazon(x, y, color) {
    const corazon = document.createElement("div");
    corazon.innerHTML = "&#10084;"; // corazón
    corazon.style.position = "fixed";
    corazon.style.left = `${x}px`;
    corazon.style.top = `${y}px`;
    corazon.style.color = color;
    corazon.style.fontSize = "18px";
    corazon.style.pointerEvents = "none";
    corazon.style.opacity = "1";
    corazon.style.userSelect = "none";
    document.body.appendChild(corazon);

    let fallingDuration = 2000 + Math.random() * 2000;
    let start = null;
    function anim(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      if (progress > fallingDuration) {
        document.body.removeChild(corazon);
        return;
      }
      corazon.style.top = y + progress / 2 + "px";
      corazon.style.opacity = 1 - progress / fallingDuration;
      requestAnimationFrame(anim);
    }
    requestAnimationFrame(anim);
  }
}

// Barra modo oscuro
toggleDarkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("modo_oscuro", document.body.classList.contains("dark-mode"));
});

// Eventos click en materias
function agregarEventListeners() {
  contenedorSemestres.addEventListener("click", (e) => {
    if (e.target.classList.contains("materia")) {
      const mat = e.target.dataset.materia;
      clickMateria(mat, e.target);
      renderizarNotas();
    }
  });

  toggleCalendarioBtn.addEventListener("click", () => {
    agendaDiv.classList.toggle("oculto");
  });

  cerrarCalendarioBtn.addEventListener("click", () => {
    agendaDiv.classList.add("oculto");
  });

  agregarExamenBtn.addEventListener("click", () => {
    const fecha = fechaInput.value;
    const nombreMat = nombreMateriaInput.value.trim();

    if (!fecha || !nombreMat) {
      Swal.fire({
        icon: "warning",
        title: "Datos incompletos",
        text: "Por favor ingresa fecha y nombre de materia",
      });
      return;
    }
    examenes.push({ fecha, materia: nombreMat });
    guardarDatos();
    renderizarExamenes();
    fechaInput.value = "";
    nombreMateriaInput.value = "";
  });
}

// Renderiza lista de exámenes
function renderizarExamenes() {
  listaExamenesUl.innerHTML = "";
  examenes.forEach((ex, idx) => {
    const li = document.createElement("li");
    li.textContent = `${ex.fecha} - ${ex.materia}`;

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "X";
    btnBorrar.style.marginLeft = "10px";
    btnBorrar.style.backgroundColor = "#cc0000";
    btnBorrar.style.color = "#fff";
    btnBorrar.style.border = "none";
    btnBorrar.style.borderRadius = "3px";
    btnBorrar.style.cursor = "pointer";

    btnBorrar.addEventListener("click", () => {
      examenes.splice(idx, 1);
      guardarDatos();
      renderizarExamenes();
    });

    li.appendChild(btnBorrar);
    listaExamenesUl.appendChild(li);
  });
}

// Aplicar modo guardado en carga
function aplicarModoGuardado() {
  if (localStorage.getItem("modo_oscuro") === "true") {
    document.body.classList.add("dark-mode");
  }
}

// Inicializar todo
inicializar();
renderizarExamenes();
