// script.js completo con materias ordenadas por semestre y columnas visibles

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

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";
  const columnas = {};
  for (let nombre in materias) {
    const mat = materias[nombre];
    if (!columnas[mat.semestre]) {
      const col = document.createElement("div");
      col.className = "semestre-columna";
      col.dataset.semestre = mat.semestre;
      col.innerHTML = `<h2>Semestre ${mat.semestre}</h2>`;
      columnas[mat.semestre] = col;
    }
    const div = document.createElement("div");
    div.className = "materia bloqueada";
    div.innerText = `${nombre}\n(${mat.creditos} créditos)`;
    div.dataset.nombre = nombre;
    div.onclick = () => aprobarMateria(nombre);
    columnas[mat.semestre].appendChild(div);
  }
  const semestresOrdenados = Object.keys(columnas).sort((a, b) => a - b);
  semestresOrdenados.forEach(s => malla.appendChild(columnas[s]));
  actualizarEstadoMaterias();
}

function aprobarMateria(nombre) {
  if (!puedeAprobar(nombre)) return;
  aprobadas.add(nombre);
  actualizarEstadoMaterias();
  actualizarCreditos();
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

function actualizarCreditos() {
  const total = Array.from(aprobadas).reduce((sum, mat) => sum + materias[mat].creditos, 0);
  document.getElementById("creditos").innerText = `Créditos aprobados: ${total}`;
}

window.onload = () => {
  crearMalla();
  actualizarCreditos();
};
