//------------------------------------------------------------Tercera Pantalla----------------------//
//atraemos y exportamos los datos del json
const Data = "../data/students.json";
let arrBruto = []; 
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
<<<<<<< HEAD
let iterarData = (data) => {
    console.log(data);
    arrBruto.push(data)
    console.log(arrBruto);
}
//arr = rreglo en bruto
const traerGeneracion = (arrBruto, sede) => {
    console.log(arrBruto[0][sede])   
    //pintar generaciones por cada una de las sedes
    for (const key in arrBruto) {
            const element = arrBruto[key];
            console.log(arrBruto[0][sede].generacion);
            
            
        }
    }

//Datos Ajusco, al dar click en el boton de entrada se atraen los datos de esta sede
let ajusco = document.getElementById('ajusco')
ajusco.addEventListener('click', function (){
    console.log("click en: ", ajusco)
    traerGeneracion(arrBruto, "ajusco") //prendemos la funcion y con ayuda de ella atraemos los datos de esta sede
})


//Datos Chapultepec, al dar click en el boton de entrada se atraen los datos de esta sede
let chapultepec = document.getElementById('chapultepec')
chapultepec.addEventListener('click', function(){
    console.log("click en: ", chapultepec)
    traerGeneracion(arrBruto, "chapultepec")//prendemos la funcion y con ayuda de ella atraemos los datos de esta sede
})

//Datos para iztapalapa, al dar click en el boton de entrada se atraen los datos de esta sede
let iztapalapa= document.getElementById('iztapalapa')
iztapalapa.addEventListener('click', function(){
    console.log("click en: ", iztapalapa)
    traerGeneracion(arrBruto, "iztapalapa")//prendemos la funcion y con ayuda de ella atraemos los datos de esta sede
})


const traerGeneracion1 = (arrBruto, sede) => {
    console.log(arrBruto[0][sede].generacion.primera);
    
    for (const key1 in arrBruto[0]) {
=======
const mostrarSedes = (dataEscolar) => {
    for (const key in dataEscolar) {
        console.log(key);
        document.getElementById("sedes").innerHTML += `<button onclick="dashBoard.traerSede('${key}')"> ${key} </button>`
>>>>>>> 1cdc3373bd9c92b8286a00bca46eea880bcbf5f4
    }
}

export const iterarSede = (sede) => {
    limpiarArray(); //limpiar para comenzar una nueva iteración
    limpiarGeneracion();
    console.log(sede);//muestra la sede correspondiente al dar click
    for (const gen in arrBruto[0][sede].generacion) {
        imprimirGen(sede, gen)            
        console.log(gen); //muestra las generaciones al dar click
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

export const datosEstudiantes = (alumno) => {
    limpiarEstudiantes()
    console.log(alumno);
    for (const alumnos in estudiantes[0]) {
    console.log(estudiantes[0]);
    console.log(datosEstudiantes);
        
        document.getElementById("morros").innerHTML += `<h1> ${alumnos}</h1>`
        dataEstudiantes.push(arrBruto[0][gen].estudiantes)
    }
    }
    // ;
    //     document.getElementById("estudiantes").innerHTML = ``
    //     
    //     console.log(dataEstudiantes);
