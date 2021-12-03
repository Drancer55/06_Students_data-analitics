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
    console.log(data)
    console.log(mostrarSedes)})
.catch((error) => console.log(error))
}
//Se crea una funcion pura para iterar datos por sede
const mostrarSedes = (dataEscolar) => {
    for (const key in dataEscolar) {
        console.log(key);
        document.getElementById("sedes").innerHTML += 
        `<li class="nav-item">
            <a class="nav-link active" aria-current="page" onclick="dashBoard.traerSede('${key}')"> ${key}</a>
        </li>`;
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
        
        document.getElementById("morros").innerHTML += `
        <div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">${arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre}</h5>
    <h6 class="card-text">${arrBruto[0][lugar].generacion[gen].estudiantes[i].correo}</h6>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
`
        dataEstudiantes.push(arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre)
        // console.log(dataEstudiantes);
    }
}


//Se crea una constante para atraer con querySelector el id del input buscador y del boton de busqueda
// const formulario = document.querySelector('#formulario')
const botonBuscador = document.querySelector('#buscar')
const resultado = document.querySelector('#resultado')
resultado.innerHTML = '';


//Se crear una función para filtar los datos de busqueda que se pintarán
const filtrar = (sede, gen) => {
    // console.log(formulario.value);
    const busqueda = document.getElementById('formulario').value.toLowerCase()
    // for (let i = 0; < arrBruto[sede].generacion[gen].estudiantes.length; i++) {      
    //     let alumnos = (arrBruto[sede].generacion[gen].estudiantes[i].nombre).toLowerCase()
    //     console.log(alumnos.indexOf(busqueda));
    // }
    const buscarAlumnos = busqueda.value.toLowerCase();
    for(let alumnos of dataEstudiantes){
        let texto = alumnos.nombre.toLowerCase();
        console.log(texto);
        if(texto.indexOf(texto1) !== -1){
            resultado.innerHTML += `<li>${alumn.nombre}</li>`
        }
    // }
        if (resultado.innerHTML == ''){
            resultado.innerHTML += `<li>Morro no encontrado</li>`
        }
    }}

//Se activa el boton con un addeventListtener para que al dar click se active la funcion filtrar
botonBuscador.addEventListener('click', filtrar)

//Se crea una funcion para sacar los porcentajes de los estudiantes
// export let porcentajes = (gen) => {
//     let porciento = 0;
//     for (let i = 0; i < arrBruto[0][lugar].generacion[gen].estudiantes.length; i++){
//         porciento += arrBruto[0][lugar].generacion[gen].estudiantes.progreso.porcentajeCompletado
//     }
//     //porciento =  porcentajes / (arrBruto[0][lugar].generacion[gen].estudiantes.length)
//     console.log(porciento)
//     let porcentaje = document.getElementById('porcentajes')
//     porcentaje.innerHTML = `<h3>Porcentaje promedio completado: </h3>`
//     porcentaje.innerHTML += porciento
// }
    
