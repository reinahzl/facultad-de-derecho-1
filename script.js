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
  "Sucesiones": { creditos: 6, previas: ["Contratos Especiales", "Procesal 1"], semestre: 8 },

  "Teoría del Derecho": { creditos: 8, previas: ["Administrativo 1", "Contratos Especiales", "Procesal 1", "Intro Fenómeno Jurídico"], semestre: 9 },
  "Trabajo y Seguridad Social 2": { creditos: 11, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones", "Trabajo y Seguridad Social 1"], semestre: 9 },
  "Consultorio Jurídico 1": { creditos: 11, previas: [], semestre: 9 },

  "Consultorio Jurídico 2": { creditos: 11, previas: [], semestre: 9 },
  "Financiamiento Empresarial": { creditos: 4, previas: ["Contratos Especiales", "Comercial 1", "Comercial 2"], semestre: 9 },
  "Derecho Internacional Privado": { creditos: 12, previas: ["Obligaciones y Contratos", "Comercial 1", "Comercial 2", "Familia Personal y Patrimonial", "Sucesiones", "Derecho Internacional Público", "Procesal 1", "Procesal 2"], semestre: 9 },
  "Situaciones Jurídicas Subjetivas": { creditos: 12, previas: ["Administrativo 1", "Administrativo 2"], semestre: 9 }
};

let aprobadas = new Set();
let notas = {};
let examenes = [];
let modoOscuro = false;

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";
  // Agrupar materias por semestre
  const semestres = {};
  for (const nombre in materias) {
    const sem = materias[nombre].semestre || 0;
    if (!semestres[sem]) semestres[sem] = [];
    semestres[sem].push(nombre);
  }

  // Ordenar semestres
  const sortedSemestres = Object.keys(semestres).sort((a,b) => a-b);

  // Crear columnas por semestre
  sortedSemestres.forEach(sem => {
    const col = document.createElement("div");
    col.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem}`;
    col.appendChild(titulo);

    semestres[sem].forEach(nombre => {
      const div = document.createElement("div");
      div.className = "materia bloqueada";
      div.innerText = `${nombre}\n(${materias[nombre].creditos} créditos)`;
      div.dataset.nombre = nombre;
      div.onclick = () => toggleAprobarMateria(nombre);
      col.appendChild(div);
    });

    malla.appendChild(col);
  });
  actualizarEstadoMaterias();
  actualizarCreditos();
  crearGrafico();
}

function toggleAprobarMateria(nombre) {
  if (aprobadas.has(nombre)) {
    aprobadas.delete(nombre);
  } else {
    if (!puedeAprobar(nombre)) return;
    aprobadas.add(nombre);
    lanzarConfeti();
  }
  actualizarEstadoMaterias();
  actualizarCreditos();
  crearGrafico();
  guardarEstado();
}

function puedeAprobar(nombre) {
  return materias[nombre].previas.every(pr => aprobadas.has(pr));
}

function actualizarEstadoMaterias() {
  const divs = document.querySelectorAll(".materia");
  divs.forEach(div => {
    const nombre = div.dataset.nombre;
    div.classList.remove("bloqueada", "aprobada");
    if (aprobadas.has(nombre)) {
      div.classList.add("aprobada");
    } else if (!puedeAprobar(nombre)) {
      div.classList.add("bloqueada");
    }
  });
}

// Creditos y grafico
function actualizarCreditos() {
  const total = Array.from(aprobadas).reduce((sum, mat) => sum + materias[mat].creditos, 0);
  document.getElementById("creditos").innerText = `Créditos aprobados: ${total}`;
  actualizarGrafico(total);
}

function crearGrafico() {
  const canvas = document.getElementById("grafico");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width, canvas.height);
  actualizarGrafico();
}

function actualizarGrafico(valor) {
  const canvas = document.getElementById("grafico");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const totalCreditos = Object.values(materias).reduce((acc,m) => acc + m.creditos, 0);
  const porcentaje = valor / totalCreditos;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 70;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Fondo gris
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#eee";
  ctx.fill();

  // Arco rojo (progreso)
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, -0.5 * Math.PI, (-0.5 + 2 * porcentaje) * Math.PI);
  ctx.fillStyle = "#cc0000";
  ctx.fill();

  // Texto porcentaje
  ctx.fillStyle = "#660000";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`${Math.round(porcentaje * 100)}%`, centerX, centerY);
}

// Confeti de corazones
function lanzarConfeti() {
  const confetiContainer = document.createElement("div");
  confetiContainer.style.position = "fixed";
  confetiContainer.style.left = 0;
  confetiContainer.style.top = 0;
  confetiContainer.style.width = "100%";
  confetiContainer.style.height = "100%";
  confetiContainer.style.pointerEvents = "none";
  confetiContainer.style.zIndex = 9999;
  document.body.appendChild(confetiContainer);

  const colores = ["#ff6666", "#ff0000", "#cc0000"];
  const corazonUnicode = "❤️";

  for (let i = 0; i < 30; i++) {
    const span = document.createElement("span");
    span.innerText = corazonUnicode;
    span.style.position = "absolute";
    span.style.fontSize = `${Math.random() * 20 + 10}px`;
    span.style.color = colores[Math.floor(Math.random() * colores.length)];
    span.style.left = `${Math.random() * 100}%`;
    span.style.top = `100%`;
    span.style.opacity = 1;
    span.style.userSelect = "none";
    confetiContainer.appendChild(span);

    let fallDuration = 3000 + Math.random() * 2000;

    span.animate([
      { transform: `translateY(0)` },
      { transform: `translateY(-120vh)` }
    ], {
      duration: fallDuration,
      easing: "linear",
      fill: "forwards"
    });

    setTimeout(() => {
      span.remove();
      if (confetiContainer.childElementCount === 0) {
        confetiContainer.remove();
      }
    }, fallDuration);
  }
}

// Guardar y cargar estado con localStorage
function guardarEstado() {
  localStorage.setItem("aprobadas", JSON.stringify(Array.from(aprobadas)));
  localStorage.setItem("notas", JSON.stringify(notas));
  localStorage.setItem("examenes", JSON.stringify(examenes));
  localStorage.setItem("modoOscuro", modoOscuro);
}

function cargarEstado() {
  const a = JSON.parse(localStorage.getItem("aprobadas") || "[]");
  aprobadas = new Set(a);
  notas = JSON.parse(localStorage.getItem("notas") || "{}");
  examenes = JSON.parse(localStorage.getItem("examenes") || "[]");
  modoOscuro = localStorage.getItem("modoOscuro") === "true";
  if (modoOscuro) document.body.classList.add("modo-oscuro");
}

// El resto del código para manejo de notas, exámenes, modales y barra de opciones 
// (te lo dejo igual que antes para que todo funcione bien; avísame si querés que te lo arme acá también)

// On load
window.onload = () => {
  cargarEstado();
  crearMalla();
  actualizarCreditos();
};
