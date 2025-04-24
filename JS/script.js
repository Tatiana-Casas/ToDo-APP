// Obtenemos los elementos del DOM
const input = document.getElementById('tarea-input'); // Campo de texto donde el usuario escribe la tarea
const botonAgregar = document.getElementById('agregar-btn'); // Botón para agregar tareas
const lista = document.getElementById('lista-tareas'); // Lista donde se mostrarán las tareas

// Evento que se ejecuta cuando el usuario hace clic en "Agregar"
botonAgregar.addEventListener('click', () => {
  const textoTarea = input.value.trim(); // Obtiene el texto y elimina espacios en blanco al inicio/final

  // Validamos si el campo está vacío
  if (textoTarea === '') {
    alert('Por favor escribe una tarea'); //mensaje que se muestra si no hay nada escrito
    return; // Salimos de la función
  }

  // Creamos un nuevo elemento <li> para la tarea
  const nuevaTarea = document.createElement('li');
  nuevaTarea.classList.add('fade-in'); // Le aplicamos clase para animación de entrada

  // Creamos un <span> que contendrá el texto de la tarea
  const spanTarea = document.createElement('span');
  spanTarea.textContent = textoTarea; // Le asignamos el texto del input

  // Evento para marcar/desmarcar una tarea como completada
  spanTarea.addEventListener('click', () => {
    spanTarea.classList.toggle('tarea-completada'); // Cambia el estilo (tachado, gris, etc.)
  });

  // Creamos el botón para eliminar la tarea
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';

  // Evento para eliminar la tarea con animación
  botonEliminar.addEventListener('click', () => {
    nuevaTarea.classList.add('fade-out'); // Aplicamos clase de salida
    setTimeout(() => {
      lista.removeChild(nuevaTarea); // Eliminamos la tarea después de la animación
    }, 400); // El tiempo debe coincidir con la duración de la animación en CSS
  });

  // Agregamos el texto (span) y el botón (eliminar) dentro del <li>
  nuevaTarea.appendChild(spanTarea);
  nuevaTarea.appendChild(botonEliminar);

  // Agregamos el <li> a la lista de tareas en el DOM
  lista.appendChild(nuevaTarea);

  // Limpiamos el campo de entrada para poder escribir una nueva tarea
  input.value = '';
});