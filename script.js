const materias = {
  "1": [
    { id: "Constitucional", nombre:"Constitucional", creditos: 15, previas: [] },
    { id: "Personas", nombre:"Personas", creditos: 6, previas: [] },
    { id: "Ideas Politico Jurídicas", nombre:"Ideas Politico Jurídicas", creditos: 8, previas: [] },
    { id: "Sociedad y Derecho", nombre:"Sociedad y Derecho", creditos: 7, previas: [] },
    { id: "Historia del Derecho", nombre:"Historia del Derecho", creditos: 6, previas: [] }
  ],
  "2": [
    { id: "Taller de Lecto Escritura Universitaria", nombre:"Taller de Lecto Escritura Universitaria", creditos: 5, previas: [] },
    { id: "Introducción al Fenómeno Jurídico", nombre:"Introducción al Fenómeno Jurídico", creditos: 4, previas: [] },
    { id: "Introducción al Derecho Penal", nombre:"Introducción al Derecho Penal", creditos: 6, previas: [] },
    { id: "Bienes", nombre:"Bienes", creditos: 6, previas: [] },
    { id: "Derecho Informático e Informática Jurídica 1", nombre:"Derecho Informático e Informática Jurídica 1", creditos: 6, previas: ["Constitucional", "Personas"] },
    { id: "Ciencia Política", nombre:"Ciencia Política", creditos: 7, previas: [] },
    { id: "Sociedad y Derecho - Ciencia Política", nombre:"Sociedad y Derecho - Ciencia Política", creditos: 2, previas: [] },
    { id: "Derechos Humanos", nombre:"Derechos Humanos", creditos: 10, previas: ["Constitucional"] }
  ],
  "3": [
    { id: "Obligaciones y Contratos", nombre:"Obligaciones y Contratos", creditos: 14, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho"] },
    { id: "Economía, Derecho e Instituciones", nombre:"Economía, Derecho e Instituciones", creditos: 8, previas: [] },
    { id: "Introducción a la Metodología de la Investigación", nombre:"Introducción a la Metodología de la Investigación", creditos: 6, previas: [] },
    { id: "Procesal 1", nombre:"Procesal 1", creditos: 12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Derechos Humanos"] },
    { id: "Derecho Informático e Informática Jurídica 2", nombre:"Derecho Informático e Informática Jurídica 2", creditos: 4, previas: ["Bienes", "Derecho Informático e Informática Jurídica 1"] }
  ],
  "4": [
    { id: "D. Penal - Parte General", nombre:"D. Penal - Parte General", creditos: 7, previas: ["Bienes", "Introducción al Derecho Penal", "Derechos Humanos"] },
    { id: "Teoría de la Responsabilidad Civil", nombre:"Teoría de la Responsabilidad Civil", creditos: 10, previas: ["Obligaciones y Contratos"] },
    { id: "Derecho Internacional Público", nombre:"Derecho Internacional Público", creditos: 12, previas: ["Bienes", "Constitucional", "Personas", "Historia del Derecho", "Introducción al Fenómeno Jurídico"] },
    { id: "Trabajo y Seguridad Social 1", nombre:"Trabajo y Seguridad Social 1", creditos: 11, previas: ["Constitucional", "Obligaciones y Contratos", "Economía, Derecho e Instituciones"] }
  ],
  "5": [
    { id: "Contratos Especiales", nombre:"Contratos Especiales", creditos: 12, previas: ["Teoría de la Responsabilidad Civil", "Obligaciones y Contratos"] },
    { id: "D. Penal - Parte Especial", nombre:"D. Penal - Parte Especial", creditos: 10, previas: ["D. Penal - Parte General"] },
    { id: "Administrativo 1", nombre:"Administrativo 1", creditos: 6, previas: ["Bienes", "Constitucional", "Personas"] },
    { id: "Registral", nombre:"Registral", creditos: 4, previas: ["Bienes", "Personas"] },
    { id: "Práctica Profesional 1", nombre:"Práctica Profesional 1", creditos: 14, previas: [] }
  ],
  "6": [
    { id: "Financiero 1", nombre:"Financiero 1", creditos: 6, previas: ["Constitucional", "Administrativo 1", "Economía, Derecho e Instituciones", "D. Penal - Parte General"] },
    { id: "Procesal 2", nombre:"Procesal 2", creditos: 12, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "D. Penal - Parte General"] },
    { id: "Comercial 1", nombre:"Comercial 1", creditos: 14, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones"] }
  ],
  "7": [
    { id: "Minoridad, Adolescencia y Familia", nombre:"Minoridad, Adolescencia y Familia", creditos: 6, previas: ["Constitucional", "Contratos Especiales", "Procesal 1"] },
    { id: "Comercial 2", nombre:"Comercial 2", creditos: 12, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "Comercial 1"] },
    { id: "Seminario del Área", nombre:"Seminario del Área", creditos: 2, previas: [] },
    { id: "Familia Personal y Patrimonial", nombre:"Familia Personal y Patrimonial", creditos: 8, previas: ["Constitucional", "Contratos Especiales", "Procesal 1", "Comercial 1"] },
    { id: "Derecho Agrario", nombre:"Derecho Agrario", creditos: 10, previas: ["Administrativo 1", "Contratos Especiales"] },
    { id: "Administrativo 2", nombre:"Administrativo 2", creditos: 0, previas: ["Administrativo 1"] }
  ],
  "8": [
    { id: "Financiero 2", nombre:"Financiero 2", creditos: 7, previas: ["Financiero 1", "Constitucional"] },
    { id: "Sucesiones", nombre:"Sucesiones", creditos: 6, previas: ["Contratos Especiales", "Procesal 1"] }
  ],
  "9": [
    { id: "Teoría del Derecho", nombre:"Teoría del Derecho", creditos: 8, previas: ["Administrativo 1", "Contratos Especiales", "Procesal 1", "Introducción al Fenómeno Jurídico"] },
    { id: "Trabajo y Seguridad Social 2", nombre:"Trabajo y Seguridad Social 2", creditos: 11, previas: ["Obligaciones y Contratos", "Teoría de la Responsabilidad Civil", "Economía, Derecho e Instituciones", "Trabajo y Seguridad Social 1"] },
    { id: "Consultorio Jurídico 1", nombre:"Consultorio Jurídico 1", creditos: 11, previas: [] }
  ],
  "10": [
    { id: "Consultorio Jurídico 2", nombre:"Consultorio Jurídico 2", creditos: 11, previas: [] },
    { id: "Financiamiento Empresarial", nombre:"Financiamiento Empresarial", creditos: 4, previas: ["Contratos Especiales", "Comercial 1", "Comercial 2"] },
    { id: "Derecho Internacional Privado", nombre:"Derecho Internacional Privado", creditos: 12, previas: ["Obligaciones y Contratos", "Comercial 1", "Comercial 2", "Familia Personal y Patrimonial", "Sucesiones", "Derecho Internacional Público", "Procesal 1", "Procesal 2"] },
    { id: "Situaciones Jurídicas Subjetiva", nombre:"Situaciones Jurídicas Subjetiva", creditos: 12, previas: ["Administrativo 1", "Administrativo 2"] }
  ]
};

// Guardado localStorage claves: 'materiasAprobadas', 'notasMaterias', 'examenesMarcados', 'examNotes'

const mallaDiv = document.getElementById("malla");
const creditosDiv = document.getElementById("creditos");
const progresoCircle = document.getElementById("progreso-circle");
const progresoText = document.getElementById("progreso-text");
const toggleCalendarBtn = document.getElementById("toggle-calendar");
const calendarPopup = document.getElementById("calendar-popup");
const examDateInput = document.getElementById("exam-date");
const examNoteInput = document.getElementById("exam-note");
const addExamNoteBtn = document.getElementById("add-exam-note");
const examNotesList = document.getElementById("exam-notes-list");

let materiasAprobadas = JSON.parse(localStorage.getItem("materiasAprobadas")) || {};
let notasMaterias = JSON.parse(localStorage.getItem("notasMaterias")) || {};
let examenesMarcados = JSON.parse(localStorage.getItem("examenesMarcados")) || {};
let examNotes = JSON.parse(localStorage.getItem("examNotes")) || [];

function puedeCursar(materia){
  return materia.previas.every(id => materiasAprobadas[id]);
}

function actualizarEstadoMaterias(){
  // Recorremos materias y actualizamos clase bloqueada/aprobada y habilitamos botones
  for(let semestre in materias){
    materias[semestre].forEach(mat => {
      const elem = document.getElementById("mat-" + mat.id);
      const aprobarBtn = elem.querySelector(".btn-aprobar");
      const examenBtn = elem.querySelector(".btn-examen");

      if(puedeCursar(mat)){
        elem.classList.remove("bloqueada");
        aprobarBtn.disabled = false;
        examenBtn.disabled = false;
      } else {
        elem.classList.add("bloqueada");
        aprobarBtn.disabled = true;
        examenBtn.disabled = true;
        // Si está aprobada pero ya no cumple previas, desaprobarla:
        if(materiasAprobadas[mat.id]){
          materiasAprobadas[mat.id] = false;
          delete notasMaterias[mat.id];
          delete examenesMarcados[mat.id];
          guardarEstado();
          actualizarEstadoMaterias();
        }
      }
    });
  }
}

function guardarEstado(){
  localStorage.setItem("materiasAprobadas", JSON.stringify(materiasAprobadas));
  localStorage.setItem("notasMaterias", JSON.stringify(notasMaterias));
  localStorage.setItem("examenesMarcados", JSON.stringify(examenesMarcados));
  localStorage.setItem("examNotes", JSON.stringify(examNotes));
}

function calcularCreditosAprobados(){
  let suma = 0;
  for(let matId in materiasAprobadas){
    if(materiasAprobadas[matId]){
      for(let semestre in materias){
        let mat = materias[semestre].find(m => m.id === matId);
        if(mat) suma += mat.creditos;
      }
    }
  }
  return suma;
}

function totalCreditos(){
  let total = 0;
  for(let semestre in materias){
    materias[semestre].forEach(mat => total += mat.creditos);
  }
  return total;
}

function actualizarProgreso(){
  const aprobados = calcularCreditosAprobados();
  const total = totalCreditos();
  creditosDiv.textContent = `Créditos aprobados: ${aprobados} / ${total}`;

  const circumference = 2 * Math.PI * 70;
  let offset = circumference * (1 - aprobados / total);
  progresoCircle.style.strokeDashoffset = offset;

  progresoText.textContent = `${((aprobados / total)*100).toFixed(1)}%`;
}

function crearMateriaElemento(materia){
  const div = document.createElement("div");
  div.classList.add("materia");
  div.id = "mat-" + materia.id;

  // Si no puede cursar está bloqueada
  if(!puedeCursar(materia)) div.classList.add("bloqueada");
  // Si aprobada, marca clase aprobada
  if(materiasAprobadas[materia.id]) div.classList.add("aprobada");

  const nombre = document.createElement("div");
  nombre.classList.add("nombre");
  nombre.textContent = materia.nombre;
  div.appendChild(nombre);

  const creditos = document.createElement("div");
  creditos.classList.add("creditos");
  creditos.textContent = `${materia.creditos} créditos`;
  div.appendChild(creditos);

  const nota = document.createElement("div");
  nota.classList.add("nota");
  nota.textContent = notasMaterias[materia.id] || "-";
  nota.title = "Doble clic para editar nota";
  div.appendChild(nota);

  // Botones aprobar / examen
  const acciones = document.createElement("div");
  acciones.classList.add("acciones");

  const btnAprobar = document.createElement("button");
  btnAprobar.textContent = materiasAprobadas[materia.id] ? "Anular" : "Aprobar";
  btnAprobar.classList.add("btn-aprobar");
  btnAprobar.disabled = !puedeCursar(materia);
  acciones.appendChild(btnAprobar);

  const btnExamen = document.createElement("button");
  btnExamen.textContent = examenesMarcados[materia.id] ? "Quitar Examen" : "Examen";
  btnExamen.classList.add("btn-examen");
  btnExamen.disabled = !puedeCursar(materia);
  acciones.appendChild(btnExamen);

  div.appendChild(acciones);

  // Eventos
  btnAprobar.addEventListener("click", () => {
    if(materiasAprobadas[materia.id]){
      // Anular
      materiasAprobadas[materia.id] = false;
      delete notasMaterias[materia.id];
      delete examenesMarcados[materia.id];
      div.classList.remove("aprobada");
      btnAprobar.textContent = "Aprobar";
      btnExamen.textContent = "Examen";
    } else {
      // Aprobar
      materiasAprobadas[materia.id] = true;
      notasMaterias[materia.id] = notasMaterias[materia.id] || "P";
      div.classList.add("aprobada");
      btnAprobar.textContent = "Anular";
      btnExamen.textContent = examenesMarcados[materia.id] ? "Quitar Examen" : "Examen";
      lanzarConfeti();
    }
    nota.textContent = notasMaterias[materia.id] || "-";
    guardarEstado();
    actualizarEstadoMaterias();
    actualizarProgreso();
  });

  btnExamen.addEventListener("click", () => {
    if(!materiasAprobadas[materia.id]) return;
    if(examenesMarcados[materia.id]){
      delete examenesMarcados[materia.id];
      btnExamen.textContent = "Examen";
    } else {
      examenesMarcados[materia.id] = true;
      btnExamen.textContent = "Quitar Examen";
    }
    guardarEstado();
  });

  // Editar nota con doble clic
  nota.addEventListener("dblclick", () => {
    if(!materiasAprobadas[materia.id]) return;
    const nuevo = prompt("Ingrese nota para " + materia.nombre, notasMaterias[materia.id] || "");
    if(nuevo !== null){
      notasMaterias[materia.id] = nuevo.trim() === "" ? "P" : nuevo.trim();
      nota.textContent = notasMaterias[materia.id];
      guardarEstado();
    }
  });

  return div;
}

function renderizarMalla(){
  mallaDiv.innerHTML = "";
  for(let semestre in materias){
    const semDiv = document.createElement("div");
    semDiv.classList.add("semestre");
    const h2 = document.createElement("h2");
    h2.textContent = `Semestre ${semestre}`;
    semDiv.appendChild(h2);

    materias[semestre].forEach(mat => {
      const matElem = crearMateriaElemento(mat);
      semDiv.appendChild(matElem);
    });
    mallaDiv.appendChild(semDiv);
  }
}

function lanzarConfeti(){
  const cantidad = 30;
  const confetiContainer = document.createElement("div");
  confetiContainer.classList.add("confeti");
  document.body.appendChild(confetiContainer);

  for(let i = 0; i < cantidad; i++){
    const corazon = document.createElement("div");
    corazon.classList.add("corazon-confeti");
    corazon.textContent = "❤️";
    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.animationDuration = (3 + Math.random() * 2) + "s";
    corazon.style.fontSize = (12 + Math.random()*18) + "px";
    confetiContainer.appendChild(corazon);
    setTimeout(() => {
      corazon.remove();
      if(confetiContainer.childElementCount === 0) confetiContainer.remove();
    }, 5000);
  }
}

// Calendario simple
toggleCalendarBtn.addEventListener("click", () => {
  calendarPopup.classList.toggle("hidden");
  cargarNotasCalendario();
});

addExamNoteBtn.addEventListener("click", () => {
  const fecha = examDateInput.value;
  const nota = examNoteInput.value.trim();
  if(!fecha){
    alert("Por favor selecciona una fecha.");
    return;
  }
  if(nota === ""){
    alert("Por favor escribe una descripción para la nota.");
    return;
  }
  examNotes.push({fecha, nota});
  guardarEstado();
  cargarNotasCalendario();
  examDateInput.value = "";
  examNoteInput.value = "";
});

function cargarNotasCalendario(){
  examNotesList.innerHTML = "";
  if(examNotes.length === 0){
    examNotesList.innerHTML = "<li>No hay notas agregadas.</li>";
    return;
  }
  examNotes.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.fecha}: ${item.nota} `;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.style.marginLeft = "8px";
    btnEliminar.style.color = "#cc0000";
    btnEliminar.style.border = "none";
    btnEliminar.style.background = "transparent";
    btnEliminar.style.cursor = "pointer";
    btnEliminar.title = "Eliminar nota";
    btnEliminar.addEventListener("click", () => {
      examNotes.splice(i,1);
      guardarEstado();
      cargarNotasCalendario();
    });
    li.appendChild(btnEliminar);
    examNotesList.appendChild(li);
  });
}

// Al cargar página
renderizarMalla();
actualizarEstadoMaterias();
actualizarProgreso();
cargarNotasCalendario();
