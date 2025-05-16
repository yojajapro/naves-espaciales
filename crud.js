let postulantes = JSON.parse(localStorage.getItem('postulantes')) || [];
function guardarPostulantes() {
    localStorage.setItem('postulantes', JSON.stringify(postulantes));
}

function mostrarPostulantes() {
    const lista = document.getElementById('listaPostulantes');
    lista.innerHTML = '';

     postulantes.forEach((persona, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <span>${persona.nombre} - Edad: ${persona.edad} - Género: ${persona.genero} - Tel: ${persona.telefono} - Estado: ${persona.estado}</span>
            <div class="actions">
                <button onclick="editarDatos(${index})">✏️</button>
                <button onclick="eliminarDatos(${index})">🗑️</button>
                <button onclick="cambiarEstado(${index})">🔁</button>
            </div>
        `;
        lista.appendChild(div);
    });
}

function agregarDatos() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre && edad && genero && telefono) {
        postulantes.push({ nombre, edad, genero, telefono, estado: 'Pendiente' });
        guardarPostulantes();
        mostrarPostulantes();

        document.getElementById('nombre').value = '';
        document.getElementById('edad').value = '';
        document.getElementById('genero').value = '';
        document.getElementById('telefono').value = '';
    }
}

function editarDatos(index) {
    const persona = postulantes[index];
    const nuevoNombre = prompt('Nuevo nombre:', persona.nombre);
    const nuevaEdad = prompt('Nueva edad:', persona.edad);
    const nuevoGenero = prompt('Nuevo género:', persona.genero);
    const nuevoTelefono = prompt('Nuevo teléfono:', persona.telefono);

    if (nuevoNombre && nuevaEdad && nuevoGenero && nuevoTelefono) {
        postulantes[index].nombre = nuevoNombre;
        postulantes[index].edad = nuevaEdad;
        postulantes[index].genero = nuevoGenero;
        postulantes[index].telefono = nuevoTelefono;
        guardarPostulantes();
        mostrarPostulantes();
    }
}

function eliminarDatos(index) {
    if (confirm('¿Desea eliminar esta solicitud?')) {
        postulantes.splice(index, 1);
        guardarPostulantes();
        mostrarPostulantes();
    }
}

function cambiarEstado(index) {
    const estados = ['Pendiente', 'Aceptado', 'Rechazado'];
    let estadoActual = postulantes[index].estado;
    let nuevoEstado = estados[(estados.indexOf(estadoActual) + 1) % estados.length];
    postulantes[index].estado = nuevoEstado;
    guardarPostulantes();
    mostrarPostulantes();
}