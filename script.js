// script.js

const materias = {
  "Constitucional": { creditos: 15, previas: [], semestre: 1 },
  "Personas": { creditos: 6, previas: [], semestre: 1 },
  "Ideas Jurídico-Políticas": { creditos: 8, previas: [], semestre: 1 },
  // ... Agrega el resto de las materias siguiendo el formato
};

let aprobadas = new Set(JSON.parse(localStorage.getItem("aprobadas")) || []);
let notas = JSON.parse(localStorage.getItem("notas")) || {};
let examenes = new Set(JSON.parse(localStorage.getItem("examenes")) || []);
let totalCreditos = Object.values(materias).reduce((sum, m) => sum + m.creditos, 0);

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";
  const semestres = {};

  for (let nombre in materias) {
    const { semestre } = materias[nombre];
    if (!semestres[semestre]) {
      semestres[semestre] = document.createElement("div");
      semestres[semestre].className = "semestre-col";
      semestres[semestre].innerHTML = `<h3>Semestre ${semestre}</h3>`;
      malla.appendChild(semestres[semestre]);
    }

    const div = document.createElement("div");
    div.className = "materia bloqueada";
    div.dataset.nombre = nombre;

    const info = document.createElement("div");
    info.className = "info";
    info.innerText = `${nombre}\n(${materias[nombre].creditos} créditos)`;
    div.appendChild(info);

    const notaInput = document.createElement("input");
    notaInput.type = "number";
    notaInput.min = 0;
    notaInput.max = 12;
    notaInput.placeholder = "Nota";
    notaInput.value = notas[nombre] || "";
    notaInput.addEventListener("click", e => e.stopPropagation());
    notaInput.addEventListener("input", () => {
      notas[nombre] = notaInput.value;
      guardarEstado();
    });

    const examenBtn = document.createElement("button");
    examenBtn.className = "examen-btn";
    examenBtn.innerText = "Examen";
    if (examenes.has(nombre)) examenBtn.classList.add("active");
    examenBtn.onclick = (e) => {
      e.stopPropagation();
      if (examenes.has(nombre)) {
        examenes.delete(nombre);
      } else {
        examenes.add(nombre);
      }
      examenBtn.classList.toggle("active");
      guardarEstado();
    };

    const actions = document.createElement("div");
    actions.className = "actions";
    actions.appendChild(notaInput);
    actions.appendChild(examenBtn);

    div.onclick = () => aprobarMateria(nombre);
    div.appendChild(actions);
    semestres[semestre].appendChild(div);
  }
  actualizarEstadoMaterias();
  actualizarCreditos();
}

function aprobarMateria(nombre) {
  if (!puedeAprobar(nombre)) return;
  if (aprobadas.has(nombre)) {
    aprobadas.delete(nombre);
  } else {
    aprobadas.add(nombre);
    lanzarConfeti();
  }
  guardarEstado();
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
  actualizarGrafico(total);
}

function guardarEstado() {
  localStorage.setItem("aprobadas", JSON.stringify([...aprobadas]));
  localStorage.setItem("notas", JSON.stringify(notas));
  localStorage.setItem("examenes", JSON.stringify([...examenes]));
}

// GRÁFICO
let chart;
function crearGrafico() {
  const ctx = document.getElementById("progressChart").getContext("2d");
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Aprobado", "Pendiente"],
      datasets: [{
        data: [0, totalCreditos],
        backgroundColor: ["#cc0000", "#f2f2f2"],
        borderWidth: 2,
      }]
    },
    options: {
      cutout: "70%",
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
  });
}

function actualizarGrafico(aprobados) {
  const pendientes = totalCreditos - aprobados;
  chart.data.datasets[0].data = [aprobados, pendientes];
  chart.update();
  const porcentaje = ((aprobados / totalCreditos) * 100).toFixed(1);
  document.getElementById("progress-text").innerText = `${porcentaje}%`;
}

// MODO OSCURO
const body = document.body;
document.getElementById("modoOscuroBtn").onclick = () => {
  body.classList.toggle("modo-oscuro");
};

// NOTAS
const notasModal = document.getElementById("notasModal");
document.getElementById("abrirNotasBtn").onclick = () => {
  notasModal.classList.remove("hidden");
  document.getElementById("notasTexto").value = localStorage.getItem("anotaciones") || "";
};
function cerrarNotas() {
  notasModal.classList.add("hidden");
  localStorage.setItem("anotaciones", document.getElementById("notasTexto").value);
}

// AGENDA
const agendaModal = document.getElementById("agendaModal");
document.getElementById("abrirAgendaBtn").onclick = () => {
  agendaModal.classList.remove("hidden");
  cargarAgenda();
};
function cerrarAgenda() {
  agendaModal.classList.add("hidden");
}
function agendarExamen() {
  const fecha = document.getElementById("fechaExamen").value;
  const materia = document.getElementById("materiaExamen").value;
  if (!fecha || !materia) return;
  const agenda = JSON.parse(localStorage.getItem("agenda") || "[]");
  agenda.push({ fecha, materia });
  localStorage.setItem("agenda", JSON.stringify(agenda));
  cargarAgenda();
}
function cargarAgenda() {
  const lista = document.getElementById("listaAgenda");
  lista.innerHTML = "";
  const agenda = JSON.parse(localStorage.getItem("agenda") || "[]");
  agenda.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.fecha} - ${item.materia}`;
    lista.appendChild(li);
  });
}

// CONFETI
function lanzarConfeti() {
  const canvas = document.getElementById("confetiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const corazones = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    size: Math.random() * 24 + 12,
    speed: Math.random() * 3 + 2,
    opacity: Math.random() * 0.6 + 0.4,
  }));
  let frame = 0;
  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    corazones.forEach(corazon => {
      ctx.globalAlpha = corazon.opacity;
      ctx.font = `${corazon.size}px serif`;
      ctx.fillStyle = "#cc0000";
      ctx.fillText("❤️", corazon.x, corazon.y);
      corazon.y += corazon.speed;
    });
    ctx.globalAlpha = 1;
    if (frame++ < 60) requestAnimationFrame(animar);
  }
  animar();
}

window.onload = () => {
  crearMalla();
  crearGrafico();
  actualizarCreditos();
};
