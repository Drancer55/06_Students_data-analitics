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
        //dataEstudiantes.push(arrBruto[0][gen].estudiantes)
    }
}
    // ;
    //     document.getElementById("estudiantes").innerHTML = ``
    //     
    //     console.log(dataEstudiantes);


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

    