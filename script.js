const materiasPorSemestre = {
  "Primer Semestre": [
    { nombre: "Constitucional", creditos: 15, previas: [] },
    { nombre: "Personas", creditos: 6, previas: [] },
    { nombre: "Ideas Jurídico-Políticas", creditos: 8, previas: [] },
    { nombre: "Sociedad y Derecho", creditos: 7, previas: [] },
    { nombre: "Historia del Derecho", creditos: 6, previas: [] },
  ],
  "Segundo Semestre": [
    { nombre: "Taller de Lecto Escritura Universitaria", creditos: 5, previas: [] },
    { nombre: "Introducción al Fenómeno Jurídico", creditos: 4, previas: [] },
    { nombre: "Introducción al D. Penal", creditos: 6, previas: [] },
    { nombre: "Bienes", creditos: 6, previas: [] },
    { nombre: "Derecho Informático e Informática Jurídica 1", creditos: 6, previas: ["Constitucional", "Personas"] },
    { nombre: "Ciencia Política", creditos: 7, previas: [] },
    { nombre: "Sociedad y Derecho - Ciencia Política", creditos: 2, previas: [] },
    { nombre: "Derechos Humanos", creditos: 10, previas: ["Constitucional"] },
  ],
  "Segundo Año - Primer Semestre": [
    { nombre: "Obligaciones y Contratos", creditos: 14, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho"] },
    { nombre: "Economía, Derecho e Instituciones", creditos: 8, previas: [] },
    { nombre: "Introducción a la Metodología de la Investigación", creditos: 6, previas: [] },
    { nombre: "Procesal 1", creditos: 12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Derechos Humanos"] },
    { nombre: "Derecho Informático e Informática Jurídica 2", creditos: 4, previas: ["Bienes", "Derecho Informático e Informática Jurídica 1"] },
  ],
  "Segundo Año - Segundo Semestre": [
    { nombre: "D. Penal - Parte General", creditos: 7, previas: ["Bienes", "Introducción al D. Penal", "Derechos Humanos"] },
    { nombre: "Teoría de la Responsabilidad Civil", creditos: 10, previas: ["Obligaciones y Contratos"] },
    { nombre: "Derecho Internacional Público", creditos: 12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Introducción al Fenómeno Jurídico"] },
    { nombre: "Trabajo y Seguridad Social 1", creditos: 11, previas: ["Constitucional", "Obligaciones y Contratos", "Economía, Derecho e Instituciones"] },
  ],
  "Tercer Año - Primer Semestre": [
    { nombre: "Contratos Especiales", creditos: 12, previas: ["Teoría de la Responsabilidad Civil", "Obligaciones y Contratos"] },
    { nombre: "D. Penal - Parte Especial", creditos: 10, previas: ["D. Penal - Parte General"] },
    { nombre: "Administrativo 1", creditos: 6, previas: ["Bienes", "Constitucional", "Personas"] },
    { nombre: "Registral", creditos: 4, previas: ["Bienes", "Personas"] },
    { nombre: "Práctica Profesional 1", creditos: 14, previas: [] },
  ],
  "Tercer Año - Segundo Semestre": [
    { nombre: "Financiero 1", creditos: 6, previas: ["Constitucional", "Administrativo 1", "Economía, Derecho e Instituciones", "D. Penal - Parte General"] },
    { nombre: "Procesal 2", creditos: 12, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "D. Penal - Parte General"] },
    { nombre: "Comercial 1", creditos: 14, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones"] },
  ],
  "Cuarto Año - Primer Semestre": [
    { nombre: "Minoridad, Adolescencia y Familia", creditos: 6, previas: ["Constitucional", "Contratos Especiales", "Procesal 1"] },
    { nombre: "Comercial 2", creditos: 12, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "Comercial 1"] },
    { nombre: "Seminario del Área", creditos: 2, previas: [] },
    { nombre: "Familia Personal y Patrimonial", creditos: 8, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "Comercial 1"] },
    { nombre: "Derecho Agrario", creditos: 10, previas: ["Administrativo 1", "Contratos Especiales"] },
    { nombre: "Administrativo 2", creditos: 0, previas: ["Administrativo 1"] },
  ],
  "Cuarto Año - Segundo Semestre": [
    { nombre: "Financiero 2", creditos: 7, previas: ["Financiero 1", "Constitucional"] },
    { nombre: "Sucesiones", creditos: 6, previas: ["Contratos Especiales", "Procesal 1"] },
  ],
  "Quinto Año - Primer Semestre": [
    { nombre: "Teoría del Derecho", creditos: 8, previas: ["Administrativo 1", "Contratos Especiales", "Procesal 1", "Introducción al Fenómeno Jurídico"] },
    { nombre: "Trabajo y Seguridad Social 2", creditos: 11, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones", "Trabajo y Seguridad Social 1"] },
    { nombre: "Consultorio Jurídico 1", creditos: 11, previas: [] },
  ],
  "Quinto Año - Segundo Semestre": [
    { nombre: "Consultorio Jurídico 2", creditos: 11, previas: [] },
    { nombre: "Financiamiento Empresarial", creditos: 4, previas: ["Contratos Especiales", "Comercial 1", "Comercial 2"] },
    { nombre: "Derecho Internacional Privado", creditos: 12, previas: ["Obligaciones y Contratos", "Comercial 1", "Comercial 2", "Familia Personal y Patrimonial", "Sucesiones", "Derecho Internacional Público", "Procesal 1", "Procesal 2"] },
    { nombre: "Situaciones Jurídicas Subjetivas", creditos: 12, previas: ["Administrativo 1", "Administrativo 2"] },
  ],
};

let aprobadas = new Set();
let notas = {};
let examenes = {};
let agenda = [];

function guardarEstado() {
  localStorage.setItem("aprobadas", JSON.stringify(Array.from(aprobadas)));
  localStorage.setItem("notas", JSON.stringify(notas));
  localStorage.setItem("examenes", JSON.stringify(examenes));
  localStorage.setItem("agenda", JSON.stringify(agenda));
}

function cargarEstado() {
  const apr = JSON.parse(localStorage.getItem("aprobadas"));
  const not = JSON.parse(localStorage.getItem("notas"));
  const exa = JSON.parse(localStorage.getItem("examenes"));
  const agd = JSON.parse(localStorage.getItem("agenda"));
  if (apr) aprobadas = new Set(apr);
  if (not) notas = not;
  if (exa) examenes = exa;
  if (agd) agenda = agd;
}

function puedeCursar(materia) {
  if (!materia.previas.length) return true;
  return materia.previas.every((prev) => aprobadas.has(prev));
}

function actualizarEstadoMateria(div, materia) {
  div.classList.remove("bloqueada", "aprobada");
  if (!puedeCursar(materia)) {
    div.classList.add("bloqueada");
    div.title = "Debes aprobar las materias previas: " + materia.previas.join(", ");
  } else {
    div.title = "";
  }
  if (aprobadas.has(materia.nombre)) {
    div.classList.add("aprobada");
  }
}

function renderizarMalla() {
  const mallaDiv = document.getElementById("malla");
  mallaDiv.innerHTML = "";

  for (const semestre in materiasPorSemestre) {
    const columna = document.createElement("div");
    columna.classList.add("semestre");
    const titulo = document.createElement("h3");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    materiasPorSemestre[semestre].forEach((mat) => {
      const matDiv = document.createElement("div");
      matDiv.classList.add("materia");
      matDiv.textContent = mat.nombre;

      const credSpan = document.createElement("span");
      credSpan.classList.add("creditos");
      credSpan.textContent = `Créditos: ${mat.creditos}`;
      matDiv.appendChild(credSpan);

      // Mostrar nota si existe
      if (notas[mat.nombre]) {
        const notaSpan = document.createElement("span");
        notaSpan.classList.add("nota");
        notaSpan.textContent = `Nota: ${notas[mat.nombre]}`;
        matDiv.appendChild(notaSpan);
      }
      // Mostrar examen si está marcado
      if (examenes[mat.nombre]) {
        const examSpan = document.createElement("span");
        examSpan.classList.add("examen");
        examSpan.textContent = `Examen`;
        matDiv.appendChild(examSpan);
      }

      actualizarEstadoMateria(matDiv, mat);

      matDiv.addEventListener("click", () => {
        if (!puedeCursar(mat)) return;
        if (aprobadas.has(mat.nombre)) {
          aprobadas.delete(mat.nombre);
          delete notas[mat.nombre];
          delete examenes[mat.nombre];
        } else {
          aprobadas.add(mat.nombre);
        }
        guardarEstado();
        actualizarProgreso();
        renderizarMalla();
        renderizarNotas();
        lanzarConfeti();
      });

      matDiv.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        if (!aprobadas.has(mat.nombre)) return alert("Aprueba la materia primero para agregar nota/examen.");
        // Preguntar nota
        const inputNota = prompt("Ingrese la nota para " + mat.nombre + " (deje vacío para borrar):", notas[mat.nombre] || "");
        if (inputNota === null) return;
        if (inputNota.trim() === "") {
          delete notas[mat.nombre];
        } else {
          notas[mat.nombre] = inputNota.trim();
        }
        // Preguntar si examen
        const quiereExamen = confirm("¿Marcar esta materia para examen?");
        if (quiereExamen) {
          examenes[mat.nombre] = true;
        } else {
          delete examenes[mat.nombre];
        }
        guardarEstado();
        renderizarMalla();
        renderizarNotas();
      });

      columna.appendChild(matDiv);
    });

    mallaDiv.appendChild(columna);
  }
}

function actualizarProgreso() {
  const totalCreditos = Object.values(materiasPorSemestre).flat().reduce((a, b) => a + b.creditos, 0);
  const aprobCreditos = Object.values(materiasPorSemestre)
    .flat()
    .filter((m) => aprobadas.has(m.nombre))
    .reduce((a, b) => a + b.creditos, 0);

  const porcentaje = Math.round((aprobCreditos / totalCreditos) * 100);

  const textoCreditos = document.getElementById("creditos-text");
  textoCreditos.textContent = `Créditos aprobados: ${aprobCreditos} / ${totalCreditos}`;

  const progresoCircle = document.getElementById("progreso-circle");
  const progresoPorcentaje = document.getElementById("progreso-porcentaje");
  const circunferencia = 2 * Math.PI * 70;

  const offset = circunferencia - (porcentaje / 100) * circunferencia;
  progresoCircle.style.strokeDashoffset = offset;
  progresoPorcentaje.textContent = `${porcentaje}%`;
}

function renderizarNotas() {
  const notasList = document.getElementById("notas-list");
  notasList.innerHTML = "";

  for (const mat in notas) {
    if (aprobadas.has(mat)) {
      const li = document.createElement("div");
      li.textContent = `${mat}: Nota ${notas[mat]}${examenes[mat] ? " (Examen)" : ""}`;
      notasList.appendChild(li);
    }
  }
}

function renderizarAgenda() {
  const agendaList = document.getElementById("agenda-list");
  agendaList.innerHTML = "";
  agenda.forEach(({ fecha, descripcion }, i) => {
    const li = document.createElement("li");
    li.textContent = `${fecha}: ${descripcion}`;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.style.backgroundColor = "#cc0000";
    btnEliminar.style.color = "white";
    btnEliminar.style.border = "none";
    btnEliminar.style.borderRadius = "3px";
    btnEliminar.style.cursor = "pointer";
    btnEliminar.addEventListener("click", () => {
      agenda.splice(i, 1);
      guardarEstado();
      renderizarAgenda();
    });
    li.appendChild(btnEliminar);
    agendaList.appendChild(li);
  });
}

function agregarFecha() {
  const fechaInput = document.getElementById("fechaInput");
  const notaInput = document.getElementById("notaInput");

  if (!fechaInput.value || !notaInput.value.trim()) {
    alert("Complete fecha y descripción.");
    return;
  }

  agenda.push({ fecha: fechaInput.value, descripcion: notaInput.value.trim() });
  fechaInput.value = "";
  notaInput.value = "";

  guardarEstado();
  renderizarAgenda();
}

function toggleModoOscuro() {
  document.body.classList.toggle("dark-mode");
  const modoBtn = document.getElementById("modoOscuroBtn");
  if (document.body.classList.contains("dark-mode")) {
    modoBtn.textContent = "Modo Claro";
  } else {
    modoBtn.textContent = "Modo Oscuro";
  }
}

// Animación confeti corazones simple
function lanzarConfeti() {
  const duration = 1500;
  const animationEnd = Date.now() + duration;
  const colors = ["#ff6699", "#ff3366", "#ff99cc", "#ff4d88"];

  function confetiFrame() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) return;

    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = "50%";
    confetti.style.zIndex = 9999;
    confetti.style.pointerEvents = "none";
    document.body.appendChild(confetti);

    let fallDuration = Math.random() * 1000 + 800;

    confetti.animate(
      [
        { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
        { transform: `translateY(100vh) rotate(360deg)`, opacity: 0 },
      ],
      {
        duration: fallDuration,
        easing: "ease-out",
      }
    );

    setTimeout(() => {
      confetti.remove();
    }, fallDuration);

    requestAnimationFrame(confetiFrame);
  }

  confetiFrame();
}

function setup() {
  cargarEstado();
  renderizarMalla();
  actualizarProgreso();
  renderizarNotas();
  renderizarAgenda();

  document.getElementById("agregarFechaBtn").addEventListener("click", agregarFecha);
  document.getElementById("modoOscuroBtn").addEventListener("click", toggleModoOscuro);
  document.getElementById("toggleAgendaBtn").addEventListener("click", () => {
    const agendaCont = document.getElementById("agenda-container");
    if (agendaCont.style.display === "none") {
      agendaCont.style.display = "block";
      document.getElementById("toggleAgendaBtn").textContent = "Cerrar";
    } else {
      agendaCont.style.display = "none";
      document.getElementById("toggleAgendaBtn").textContent = "Abrir";
    }
  });
}

window.onload = setup;
