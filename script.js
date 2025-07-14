const materias = {
  "Constitucional": { creditos: 15, previas: [] },
  "Personas": { creditos: 6, previas: [] },
  "Ideas Jurídico-Políticas": { creditos: 8, previas: [] },
  "Sociedad y Derecho": { creditos: 7, previas: [] },
  "Historia del Derecho": { creditos: 6, previas: [] },
  "Taller de Lectoescritura": { creditos: 5, previas: [] },
  "Intro Fenómeno Jurídico": { creditos: 4, previas: [] },
  "Intro Derecho Penal": { creditos: 6, previas: ["Constitucional", "Personas"] },
  "Bienes": { creditos: 6, previas: [] },
  "Informático Jurídico 1": { creditos: 6, previas: ["Constitucional", "Personas"] },
  "Ciencia Política": { creditos: 7, previas: [] },
  "Derechos Humanos": { creditos: 10, previas: ["Constitucional"] },

  "Obligaciones y Contratos": { creditos: 14, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho"] },
  "Economía, Derecho e Instituciones": { creditos: 8, previas: [] },
  "Intro Metodología Investigación": { creditos: 6, previas: [] },
  "Procesal 1": { creditos: 12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Derechos Humanos"] },
  "Informático Jurídico 2": { creditos: 4, previas: ["Bienes", "Informático Jurídico 1"] },

  "D. Penal - Parte General": { creditos: 7, previas: ["Bienes", "Intro Derecho Penal", "Derechos Humanos"] },
  "Teoría de la Responsabilidad Civil": { creditos: 10, previas: ["Obligaciones y Contratos"] },
  "Derecho Internacional Público": { creditos: 12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Intro Fenómeno Jurídico"] },
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

  "Teoría del Derecho": { creditos: 8, previas: ["Administrativo 1", "Contratos Especiales", "Procesal 1", "Intro Fenómeno Jurídico"] },
  "Trabajo y Seguridad Social 2": { creditos: 11, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones", "Trabajo y Seguridad Social 1"] },
  "Consultorio Jurídico 1": { creditos: 11, previas: [] },

  "Consultorio Jurídico 2": { creditos: 11, previas: [] },
  "Financiamiento Empresarial": { creditos: 4, previas: ["Contratos Especiales", "Comercial 1", "Comercial 2"] },
  "Derecho Internacional Privado": { creditos: 12, previas: ["Obligaciones y Contratos", "Comercial 1", "Comercial 2", "Familia Personal y Patrimonial", "Sucesiones", "Derecho Internacional Público", "Procesal 1", "Procesal 2"] },
  "Situaciones Jurídicas Subjetivas": { creditos: 12, previas: ["Administrativo 1", "Administrativo 2"] }
};

const semestres = {
  1: ["Constitucional", "Personas", "Ideas Jurídico-Políticas", "Sociedad y Derecho", "Historia del Derecho", "Taller de Lectoescritura", "Intro Fenómeno Jurídico"],
  2: ["Intro Derecho Penal", "Bienes", "Informático Jurídico 1", "Ciencia Política", "Derechos Humanos"],
  3: ["Obligaciones y Contratos", "Economía, Derecho e Instituciones", "Intro Metodología Investigación", "Procesal 1", "Informático Jurídico 2"],
  4: ["D. Penal - Parte General", "Teoría de la Responsabilidad Civil", "Derecho Internacional Público", "Trabajo y Seguridad Social 1"],
  5: ["Contratos Especiales", "D. Penal - Parte Especial", "Administrativo 1", "Registral", "Práctica Profesional 1"],
  6: ["Financiero 1", "Procesal 2", "Comercial 1"],
  7: ["Minoridad, Adolescencia y Familia", "Comercial 2", "Seminario del Área", "Familia Personal y Patrimonial", "Derecho Agrario", "Administrativo 2"],
  8: ["Financiero 2", "Sucesiones"],
  9: ["Teoría del Derecho", "Trabajo y Seguridad Social 2", "Consultorio Jurídico 1"],
  10: ["Consultorio Jurídico 2", "Financiamiento Empresarial", "Derecho Internacional Privado", "Situaciones Jurídicas Subjetivas"]
};

let aprobadas = new Set();
let notas = {};
let examen = new Set();

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  for (let semestre in semestres) {
    const col = document.createElement("div");
    col.className = "semestre-col";

    const titulo = document.createElement("h3");
    titulo.innerText = `Semestre ${semestre}`;
    col.appendChild(titulo);

    semestres[semestre].forEach(nombre => {
      const div = document.createElement("div");
      div.className = "materia bloqueada";
      div.dataset.nombre = nombre;

      const texto = document.createElement("div");
      texto.innerText = `${nombre}\n(${materias[nombre].creditos} créditos)`;
      texto.style.whiteSpace = "pre-line";
      div.appendChild(texto);

      // Click para aprobar/desaprobar
      div.onclick = (e) => {
        // Evitar click en inputs o botón
        if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") return;
        aprobarMateria(nombre);
      };

      // Input para nota
      const notaInput = document.createElement("input");
      notaInput.type = "number";
      notaInput.min = 0;
      notaInput.max = 100;
      notaInput.placeholder = "Nota";
      notaInput.value = notas[nombre] || "";
      notaInput.onclick = e => e.stopPropagation(); // que no active aprobar
      notaInput.onchange = () => {
        notas[nombre] = notaInput.value;
        guardarEstado();
      };
      div.appendChild(notaInput);

      // Botón para examen
      const examenBtn = document.createElement("button");
      examenBtn.className = "examen-btn";
      examenBtn.innerText = examen.has(nombre) ? "En examen ✔" : "En examen";
      examenBtn.onclick = (e) => {
        e.stopPropagation();
        if (examen.has(nombre)) {
          examen.delete(nombre);
          examenBtn.innerText = "En examen";
          examenBtn.classList.remove("active");
        } else {
          examen.add(nombre);
          examenBtn.innerText = "En examen ✔";
          examenBtn.classList.add("active");
        }
        guardarEstado();
      };
      if (examen.has(nombre)) examenBtn.classList.add("active");
      div.appendChild(examenBtn);

      col.appendChild(div);
    });

    malla.appendChild(col);
  }

  actualizarEstadoMaterias();
  actualizarProgressRing();
}

function aprobarMateria(nombre) {
  if (aprobadas.has(nombre)) {
    aprobadas.delete(nombre);
  } else {
    if (!puedeAprobar(nombre)) return;
    aprobadas.add(nombre);
  }
  actualizarEstadoMaterias();
  actualizarCreditos();
  actualizarProgressRing();
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

function actualizarCreditos() {
  const total = Array.from(aprobadas).reduce((sum, mat) => sum + materias[mat].creditos, 0);
  document.getElementById("creditos").innerText = `Créditos aprobados: ${total}`;
}

const totalCreditos = Object.values(materias).reduce((sum, m) => sum + m.creditos, 0);

function actualizarProgressRing() {
  const circle = document.querySelector('#progress-ring circle');
  const text = document.getElementById('progress-text');
  const radio = circle.r.baseVal.value;
  const perimetro = 2 * Math.PI * radio;

  const aprobados = Array.from(aprobadas).reduce((sum, mat) => sum + materias[mat].creditos, 0);
  const porcentaje = Math.round((aprobados / totalCreditos) * 100);

  const offset = perimetro - (porcentaje / 100) * perimetro;
  circle.style.strokeDashoffset = offset;
  text.innerText = `${porcentaje}%`;
}

function guardarEstado() {
  localStorage.setItem('materiasAprobadas', JSON.stringify(Array.from(aprobadas)));
  localStorage.setItem('notas', JSON.stringify(notas));
  localStorage.setItem('examen', JSON.stringify(Array.from(examen)));
}

window.onload = () => {
  const guardadas = localStorage.getItem('materiasAprobadas');
  const notasGuardadas = localStorage.getItem('notas
