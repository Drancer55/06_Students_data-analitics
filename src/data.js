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
    let img;
    let map;
    let campus;
    let botn;
    for (const key in dataEscolar) {
        console.log(key);
        console.log(dataEscolar);
    if (key == "ajusco") {
        img = "../assets/LogoAjusco.jpeg"
        campus = "Ajusco"
        map = "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15069.378607057964!2d-99.19927516935243!3d19.223805575500283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x85cdfdf6a711c163%3A0xc02b29d16232aecf!2sAv.%20La%20Felicidad%20242%2C%20San%20Miguel%20Ajusco%2C%20Tlalpan%2C%2014700%20San%20Miguel%20Ajusco%2C%20CDMX!3m2!1d19.224214999999997!2d-99.194273!5e0!3m2!1ses-419!2smx!4v1637996084351!5m2!1ses-419!2smx"
        //botn = `<button onclick="dashBoard.traerGeneracion('${key}')"> ${key} </button>`
    } else if (key == "chapultepec") {
        img = "../assets/LogoChapultepec.jpeg"
        campus = "Chapultepec"
        map = "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15050.963273306652!2d-99.19941515547023!3d19.423601324983508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x85d201f8e7cbce13%3A0xf8bbfda793220ccc!2sCalle%20Julio%20Verne%2027%2C%20Polanco%2C%20Polanco%20IV%20Secc%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!3m2!1d19.427963899999998!2d-99.1969393!5e0!3m2!1ses-419!2smx!4v1637996847042!5m2!1ses-419!2smx"
        //botn = `<button onclick="dashBoard.traerGeneracion('${key}')"> ${key} </button>`
    } else if (key == "iztapalapa") {
        img = "../assets/LogoIztapalapa.jpeg"
        campus = "Iztapalapa"
        map = "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d30115.851234696875!2d-99.08672062336888!3d19.348297199433908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x85d1fd88c97e8ce7%3A0x6978b1f508c61541!2sErmita%20Iztapalapa%202001%2C%20Los%20%C3%81ngeles%2C%20Iztapalapa%2C%2009830%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!3m2!1d19.347834499999998!2d-99.0698948!5e0!3m2!1ses-419!2smx!4v1637998520536!5m2!1ses-419!2smx"
        //botn = `<button onclick="dashBoard.traerGeneracion('${key}')"> ${key} </button>`
    }
        document.getElementById("sedes").innerHTML += `<center><div class="sucursal" id="${key}">
        <img onclick="dashBoard.traerSede('${key}')" id="image" src="${img}" alt="Chapultepec">
        <h1 class="title">${campus}</h1>
        <iframe id="place" src="${map}" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <button onclick="dashBoard.traerSede('${key}')"> ${key} </button>
        </div></center>`
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
                <table class="table table-success table-striped">
                <thead>
                <tr>
                <td colspan="2">${arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre}</td>
                </tr>
                </thead>
            </table>`
        //dataEstudiantes.push(arrBruto[0][gen].estudiantes)
    }
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
    
