//------------------------------------------------------------Tercera Pantalla----------------------//
//atraemos y exportamos los datos del json
const Data = "../data/students.json";
let arrBruto = [];
let lugar = ""; 
let generacionPorSede = [];
let dataEstudiantes = [];
//limpiar el array
const limpiarArray = () => {
    return generacionPorSede = [];
}
//limpiar la consulta de generacion
const limpiarGeneracion = () => {
    document.getElementById("generaciones").innerHTML = "";
}

const limpiarEstudiantes = () => {
    document.getElementById("estudiantes").innerHTML = "";
}


//Por medio del metodo fetch accedemos los datos del json
export const traerData = () => {
fetch(Data)
.then((response)=> response.json())
.then((data) => {
    mostrarSedes(data)
    arrBruto.push(data)
    console.log(mostrarSedes)})
.catch((error) => console.log(error))
}
//Se crea una funcion pura para iterar datos por sede
const mostrarSedes = (dataEscolar) => {
    for (const key in dataEscolar) {
        console.log(key);
        document.getElementById("sedes").innerHTML += `<button onclick="dashBoard.traerSede('${key}')"> ${key} </button>`
    }
}

export const iterarSede = (sede) => {
    lugar = sede
    limpiarArray(); //limpiar para comenzar una nueva iteración
    limpiarGeneracion();
    console.log(sede);//muestra la sede correspondiente al dar click
    for (const gen in arrBruto[0][sede].generacion) {
        imprimirGen(sede, gen)
        botonAtras()            
        console.log(sede); //muestra las generaciones al dar click
        }
        document.getElementById("sede").innerHTML = `<h1>Campus ${sede}</h1> </h2>Generaciones: </h2>`
        generacionPorSede.push(arrBruto[0][sede].generacion)
    }
//Se imprime la generacion correspondiente para el campus seleccionado e imprime su nombre
const imprimirGen = (sede, gen) => {
    document.getElementById("generaciones").innerHTML += `<button onclick="dashBoard.traerGeneracion('${gen}')"> ${gen} </button>`
}

export const iterarGen = (gen) => {
    console.log(gen);
    document.getElementById("estudiantes").innerHTML = `<h3 onclick="dashBoard.traerEstudiantes('${gen}')">Estudiantes de: ${gen} generación</h3>`;
    datosEstudiantes(gen);
}

export const botonAtras = () => {
    document.getElementById("back").innerHTML = `<button onclick= "dashBoard.regresaraSedes("back")">Atrás</button>`
}




export const datosEstudiantes = (gen) => {
    document.getElementById("morros").innerHTML = ''
    console.log(lugar)
    //console.log(arrBruto[0][lugar].generacion[gen].estudiantes.length);
    for (let i = 0; i < arrBruto[0][lugar].generacion[gen].estudiantes.length; i++) {
        console.log(arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre);
        //console.log(datosEstudiantes);
        document.getElementById("morros").innerHTML += `<h1> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre}</h1>`
    }
}



export const tableStudents = () => {
    document.getElementById("tabla-estudiantes").innerHTML += `
           <table class="table table-success table-striped">
                <thead>
                <tr>
                <th scope="row">#</th>
                <td colspan="2">Larry the Bird</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th scope="row">1</th>
                <td colspan="2">Larry the Bird</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td colspan="2">Larry the Bird</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                </tr>
                </tbody>
            </table>`
}

//Se crea una constante para atraer con querySelector el id del input buscador y del boton de busqueda
const formulario = document.querySelector('#buscador')
const botonBuscador = document.querySelector('#boton')
const resultado = document.querySelector('#resultado')
//Se crear una función para filtar los datos de busqueda que se pintarán
const filtrar = () => {
    // console.log(formulario.value);
    const texto = formulario.value;
    //aqui va el for para atraer e iterar los nombres de las estudiantes
    for (const estudiante in arrBruto[0]) {
        let busqueda = estudiante.arrBruto; 
        console.log(busqueda);
        //if(busqueda.indexOf(texto) !== -1){} // en caso de que la busqueda no sea encontrada
        resultado.innerHTML += `<li>${estudiante.nombre}</li>` //se pinta el resultado de la busqueda en forma de lista
        }
    }

//Se activa el boton con un addeventListtener para que al dar click se active la funcion filtrar
botonBuscador.addEventListener('click', filtrar)

//Se crea una funcion para sacar los porcentajes de los estudiantes
export let porcentajes = (gen) => {
    let porciento = 0;
    for (let i = 0; i < arrBruto[0][lugar].generacion[gen].estudiantes.length; i++){
        porciento += arrBruto[0][lugar].generacion[gen].estudiantes.progreso.porcentajeCompletado
    }
    //porciento =  porcentajes / (arrBruto[0][lugar].generacion[gen].estudiantes.length)
    console.log(porciento)
    let porcentaje = document.getElementById('porcentajes')
    porcentaje.innerHTML = `<h3>Porcentaje promedio completado: </h3>`
    porcentaje.innerHTML += porciento
}