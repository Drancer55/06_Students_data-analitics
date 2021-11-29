//atraemos y exportamos los datos del json
export const Data = "../data/students.json"

//Por medio del metodo fetch accedemos los datos del json
export let alumnos = (Data, sede, generacion) => {
fetch(Data) //Se atraen los datos del json guardados en la constante Data
.then((response)=> response.json())
.then((data) => DataSedes(data, sede, generacion))
.catch((error) => console.log(error))
}

//Se crea una funcion pura para iterar datos por sede
let DataSedes = (data, sede) => {
    console.log(data[sede].generacion.primera)
    //prender aqui pintar generaciones
    generaciones()
}

//Se crea una funcion para iterar la generacion
let generaciones = (data, sede) => {
    console.log(data[sede].generacion.primera)
}

//se crea una funcion para ingresar a los datos
let studentsCantidad = (sede, gen, data) => {
    console.log(sede, gen)
    console.log(data[sede].generacion[gen].estudiantes.length)
}

//Datos Ajusco, al dar click en el boton de entrada se atraen los datos de esta sede
let ajusco = document.getElementById('ajusco')
ajusco.addEventListener('click', function (){
    console.log("click en: ", ajusco)
    alumnos(Data, "ajusco") //prendemos la funcion y con ayuda de ella atraemos los datos de esta sede
})
//prendido para boton de primera generacion// sirve para iterar y atraer los datos de las generaciones
let primeraGen = document.getElementById('primera')
primeraGen.addEventListener('click', function(){
    console.log('click en: ', primeraGen)
})
//prendido para boton de segunda generacion// sirve para iterar y atraer los datos de las generaciones
let segundaGen = document.getElementById('segunda')
segundaGen.addEventListener('click', function(){
    console.log('click en: ', segundaGen)
})
//prendido para boton de tercera generacion// sirve para iterar y atraer los datos de las generaciones
let terceraGen = document.getElementById('tercera')
terceraGen.addEventListener('click', function(){
    console.log('click en: ', terceraGen)
})

//Datos Chapultepec, al dar click en el boton de entrada se atraen los datos de esta sede
let chapultepec = document.getElementById('chapultepec')
chapultepec.addEventListener('click', function(){
    console.log("click en: ", chapultepec)
    alumnos(Data, "chapultepec")//prendemos la funcion y con ayuda de ella atraemos los datos de esta sede
})

//Datos para iztapalapa, al dar click en el boton de entrada se atraen los datos de esta sede
let iztapalapa= document.getElementById('iztapalapa')
iztapalapa.addEventListener('click', function(){
    console.log("click en: ", "iztapalapa")
    alumnos(Data, "iztapalapa")//prendemos la funcion y con ayuda de ella atraemos los datos de esta sede
})

/*//meter dentro de una funcion
export let pintarEstudiantes = (sede, generacion) => {
// Pintar en tercera pantalla 
let estudiantes = document.getElementById("estudiantes")
for (let i = 0; i < Data.length; i++) { //aqui se debe de iterar sede.generacion.length
    const students = Data[i];


    estudiantes.innerHTML = `<h2>15 Estudiantes, ${Data}</h2>
                <div class="btn-group">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        1ra Generación
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
                <h2>14 estudiantes</h2>
                <div class="btn-group">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        2da Generación
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
                <h2>15 estudiantes</h2>
                <div class="btn-group">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        3ra Generación
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
`  
} }  
*/



