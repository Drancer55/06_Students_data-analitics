//------------------------------------------------------------Tercera Pantalla----------------------//
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

// 
//Se crea una funcion para iterar la generacion
// *Funcion con parametros para iterar la generacion*
let generaciones = (data, sede, generacion) => {
    // iterar con un for las generaciones
    for (let index = 0; index < data[sede].generacion[generacion].length; index++) {
        const element = data[index];
        console.log(element);
        
    }
    // console.log(data[sede].generacion[generacion])

    
}

//se crea una funcion para ingresar a los datos
//Sacar la cantidad de alumnos y pintarlos dinamicamente en tercera pantalla
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
//Crear Botones dinamicos de 1ra,2da,3ra generación para que pinten en la tercera pantalla por cada sede
//**Hacer una funcion para traernos los botones y hacerlo dinamicamente**
let estudiantes = document.getElementById("estudiantes")
let students = () => {

    estudiantes.innerHTML += ` 
                    <div class="dropdown" id="primera">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        1ra Generación
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    </div>
                    
                    <div class="dropdown" id="segunda">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        2da Generación
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    </div>

                    <div class="dropdown" id="tercera">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            3ra Generación
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    `


}
students()

//-------Al darle click a cada botón debe desplegar información de cada generación
// *Funcion con un addEventListener para que al hecer click, desplegue y se traiga los datos en la consola*
let primerBoton = document.getElementById("primera") 
primerBoton.addEventListener('click', () => {
    // Ya que se trajo la informacion dentro del boton, con un click se desplegara la informacion de los alumnos


    console.log("click en: ", primerBoton )
    // Prender la funcion de generaciones
    generaciones(Data, "primera")
})


//-Al darle click al nombre de cada alumno te mandara a la cuarta pantalla
// **Hacer una fucnion para que al darle click al nombre se oculten las pantallas anteriores y aparezca la cuarta pantalla**



// Buscador para buscar por nombre a los alumnos
// **Utizaremos metodos como filter entre otros para iterarlos**



// Habra una card con la cantidad de alumnos por generacion pintada dinamicamente
//*Pintar con una funcion la card dinamicamente, añadiendo el INNERHTML*



//-----Cada generación debe mostrar la lista de alumnos 
//---Utilizando el metodo Sort() se ordenaran la lista de alumnos alfabeticamente 



// Pocentajes de 90% y 60%
// **Hacer una variable que empezaria en 0 y hacer un for que se itere. Con menor o igual <=60 y mayor igual >= 90**





//--------------------------------------------Cuarta Pantalla----------------------------------//


// Traer el nombre y el porcentaje del alumnos seleccionado  
// **Hacemos una funcion que guarde el nombre y lo pinte en la cuarta pantalla**



//Dentro de la cuarta pantalla aparecerean los datos de las mataerias y submaterias con sus porcentajes
// **Traer la informacion del JSON desde una funcion con parametros y pintar las materias** 



//Por cada materia debe de haber un filtro con cinco selecciones para filtrarse  -->
// ---> 1. Subtemas completados, 2. No completados. 3. Ejercicios 4. Cuestionarios
// **Funcion para que al darle click se despliegue y pueda seleccionar alguna de esas 4**


// Boton para regresar a la tercera pantalla 
// **funcion con un addEvenListener se oculte la pantalla 4 y te mande a la 3**





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


