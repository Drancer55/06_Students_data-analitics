/*//atraemos y exportamos los datos del json
export const Data = "../data/students.json"
console.log(Data);

//Por medio del metodo fetch accedemos los datos del json
export let alumnos = (Data, sede) => {
fetch(Data) //Se atraen los datos del json guardados en la constante Data
.then((response)=> response.json())
.then((data) => DataSedes(data, sede))
.catch((error) => console.log(error))
}

//Se crea una funcion pura para iterar datos 
let DataSedes = (data, sede) => {
    console.log(data[sede])
}


//Datos Ajusco, al dar click en el boton de entrada se atraen los datos de esta sede
let ajusco = document.getElementById('ajusco')
ajusco.addEventListener('click', function (){
    console.log("click en: ", ajusco)
    alumnos(Data, "ajusco") //prendemos la funcion y con ayuda de ella atraemos los datos de esta sede

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


// Pintar en tercera pantalla 
let estudiantes = document.getElementById("estudiantes")

for (let i = 0; i < Data.length; i++) {
    const students = Data[i];
    // console.log(Data)

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
    
    
}  */

//se crea una funcion para atraer el numero de estudiantes //Por medio del metodo fetch atraemos los datos del json
export function studentsNumber (data, ajusco) {
    //console.log(sede, generacion)
fetch("../data/students.json")
.then((response)=> response.json())
.then((data) => console.log(data))
.then((data)=> studentsCantidad(data, ajusco))
.catch((error)=> console.log(error))
}

function studentsCantidad (data, ajusco){
    console.log(data[ajusco])
}