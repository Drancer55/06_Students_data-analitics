          //------------------------------------------------------------Tercera Pantalla----------------------//
          //---------------------------------------atraemos y exportamos los datos del json-------------------//
const Data = "../data/students.json";

         //-------------Se crean arreglos vacios para poder guuardar la informacion iterada del json---------//
let arrBruto = [];
let lugar = "";
let generacionPorSede = [];
let dataEstudiantes = [];
let estudiantesPorcentajes = [];
let studentsGen = [];

        //---------------------Se crea una funcion para limpiar el arreglo-----------------------------------//
const limpiarArray = () => {
    return generacionPorSede = [];
}

        //---------------------se crea una funcion para limpiar la consulta de generacion--------------------//
const limpiarGeneracion = () => {
  document.getElementById("generaciones").innerHTML = "";
};

        //---------------se crea una funcion para limpiar la consulta de los estudiantes----------------------//
const limpiarEstudiantes = () => {
    document.getElementById("estudiantes").innerHTML = "";
}

        //--------------------------Por medio del metodo fetch accedemos los datos del json-------------------//
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
            //---------------Funcion dinamica para atraer y pintar los datos de las sedes en pantalla dos--------------//
const mostrarSedes = (dataEscolar) => {
  // let grafica1 = document.getElementById('grafica1')
  // let grafica2 = document.getElementById('grafica2')
  // let grafica3 = document.getElementById('grafica3')
  let img;
  let map;
  let campus;
  let botn;
  for (const key in dataEscolar) {
    console.log(key);
    console.log(dataEscolar);
    if (key == "ajusco") {
      img = "../assets/LogoAjusco.jpeg";
      campus = "Ajusco";
      map =
        "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15069.378607057964!2d-99.19927516935243!3d19.223805575500283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x85cdfdf6a711c163%3A0xc02b29d16232aecf!2sAv.%20La%20Felicidad%20242%2C%20San%20Miguel%20Ajusco%2C%20Tlalpan%2C%2014700%20San%20Miguel%20Ajusco%2C%20CDMX!3m2!1d19.224214999999997!2d-99.194273!5e0!3m2!1ses-419!2smx!4v1637996084351!5m2!1ses-419!2smx";
      //grafica1.innerHTML = `<div class="graficar"><img class="grafica" src="../assets/graficaAjusco.png" /></div>`
 
        //botn = `<button onclick="dashBoard.traerGeneracion('${key}')"> ${key} </button>`
    } else if (key == "chapultepec") {
      img = "../assets/LogoChapultepec.jpeg";
      campus = "Chapultepec";
      map =
        "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15050.963273306652!2d-99.19941515547023!3d19.423601324983508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x85d201f8e7cbce13%3A0xf8bbfda793220ccc!2sCalle%20Julio%20Verne%2027%2C%20Polanco%2C%20Polanco%20IV%20Secc%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!3m2!1d19.427963899999998!2d-99.1969393!5e0!3m2!1ses-419!2smx!4v1637996847042!5m2!1ses-419!2smx";
        //grafica2.innerHTML = `<img src="../assets/graficaChapu.png"/>`
        //botn = `<button onclick="dashBoard.traerGeneracion('${key}')"> ${key} </button>`
    } else if (key == "iztapalapa") {
      img = "../assets/LogoIztapalapa.jpeg";
      campus = "Iztapalapa";
      map =
        "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d30115.851234696875!2d-99.08672062336888!3d19.348297199433908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x85d1fd88c97e8ce7%3A0x6978b1f508c61541!2sErmita%20Iztapalapa%202001%2C%20Los%20%C3%81ngeles%2C%20Iztapalapa%2C%2009830%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!3m2!1d19.347834499999998!2d-99.0698948!5e0!3m2!1ses-419!2smx!4v1637998520536!5m2!1ses-419!2smx";
        //grafica3.innerHTML = `<img src="../assets/graficaIzta.png"/>`
        //botn = `<button onclick="dashBoard.traerGeneracion('${key}')"> ${key} </button>`
    }
    document.getElementById("sedes").innerHTML += `
        <div id="${key}" class="sucursal">
            <center>
                <img onclick="dashBoard.traerSede('${key}')" id="image" src="${img}"><br>
                <h1 class="title">${campus}</h1><br>
                <iframe id="place" src="${map}" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe><br>
                <button class="botonazo" onclick="dashBoard.traerSede('${key}')"> ${key} </button>
            </center>
        </div>`;
  }
};

        //-------------------------------Funcion para entrar a los datos de cada sede--------------------------------//
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
        document.getElementById("sede").innerHTML = `
        <h1>Campus ${sede}</h1>
        <h2>Seleccione la generación: </h2>`
        generacionPorSede.push(arrBruto[0][sede].generacion)
    }

     //--------------Se imprime la generacion correspondiente para el campus seleccionado e imprime su nombre----------//
const imprimirGen = (sede, gen) => {
  document.getElementById("generaciones").innerHTML += 
  `<button class="botonazo" onclick="dashBoard.traerGeneracion('${gen}')"> ${gen} </button>`;
};

        //--------------------------------------Se imprimen los datos de los estudiantes por generacion----------------//
export const iterarGen = (gen) => {
  console.log(gen);
  document.getElementById("estudiantes").innerHTML = 
  `<h3 onclick="dashBoard.traerEstudiantes('${gen}')">Estudiantes de ${gen} generación: </h3>`;
  datosEstudiantes(gen);
  limpiarEstudiantes();
};

       //---------------Se pinta dinamicamente el boton de regresar a la pantalla dos que nos muestra las sedes----------------//
export const botonAtras = () => {
    document.getElementById("back").innerHTML = 
    `<button class="return" onclick= "dashBoard.regresaraSedes("back")">&#171 Atrás</button>`
}
//------------Filtrar: -subtemas: completado y no completado 
// ----------Filtrar: subtemas: ejercicios, lectura, cuestionario 
// **Hacer una funcion con parametro**
//**Dentro de la funcion meter el filter con los variables**/
// **Dentro del filter meter los valores que se van a filtrar**/
//-------------------Funcion para pintar: Temas, subtemas, y lo que hay dentro de los subtemas--------------//

// Método sort que acomoda los resultados en orden alfabético
const sortStudents = (arrStudents) => {
  console.log(arrStudents);
    arrStudents.sort(
    function (a, b) {
    let nombreA = a.nombre.toLowerCase(); //ignora mayúsculas y minúsculas
    let nombreB = b.nombre.toLowerCase(); //ignora mayúsculas y minúsculas
    if (nombreA < nombreB) {
      return -1;
    } if (nombreA > nombreB) {
      return 1;
    } 
    return 0 
  })
}

//--------Función para buscar estudiantes---------------------
let formulario = document.querySelector('#formulario');
let boton = document.querySelector('#buscar')
let resultado = document.querySelector('#morros')
const buscarEstudiantes = (gen) => {
  console.log(formulario.value);
  resultado.innerHTML = '';
  const texto = formulario.value.toLowerCase();
  for (let i = 0; i < arrBruto[0][lugar].generacion[gen].estudiantes.length; i++) {
    const nombres = (arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre).toLowerCase()
    if (nombres.indexOf(texto) !== -1) { //indexOf retorna el primer indice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no está presente
      resultado.innerHTML += `
      <center>
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title"><b>${arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre}</b></h5>
                <h6 class="card-text"><b>E-mail:</b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].correo}</h6>
                <h6 class="card-text"><b>Duración:</b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.duracionPrograma}hrs.</h6>
                <h6 class="card-text"><b>Progreso completado:</b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.porcentajeCompletado}%</h6>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#id${i}>
                    Ver más...
                </button>
      </center>`
    }
    }
    if (resultado.innerHTML === '') {
      resultado.innerHTML += `<h2>Estudiante no registrada... </h2>`
    }
}
boton.addEventListener('click', buscarEstudiantes)
formulario.addEventListener('keyup', buscarEstudiantes)

// -------Funcion para pintar Cars y modales
export const datosEstudiantes = (gen) => {
  console.log(lugar)
  document.getElementById('morros').innerHTML = '';
  studentsGen = [];
  studentsGen.push(arrBruto[0][lugar].generacion[gen].estudiantes);
  sortStudents(studentsGen[0]);
  //buscarEstudiantes();
  console.log(studentsGen[0]);
  for (let i = 0; i < arrBruto[0][lugar].generacion[gen].estudiantes.length; i++) {
    console.log(arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre); 
    document.getElementById("morros").innerHTML += `
        <center>
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title"><b>${arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre}</b></h5>
                <h6 class="card-text"><b>E-mail:</b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].correo}</h6>
                <h6 class="card-text"><b>Duración:</b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.duracionPrograma}hrs.</h6>
                <h6 class="card-text"><b>Progreso completado:</b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.porcentajeCompletado}%</h6>
                <img id="avatar" src="../assets/ImagenCard.jpeg"></img>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#id${i}>
                    Ver más...
                </button>
        </center>
        <!-- Modal -->
            <div class="modal fade" id=id`+ `${i}`+ ` tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title"><b>${arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre}:</b></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table">
                    <thead>
                      <tr>
                        <th scope="col"><center><h6>Registro académico</h6></center></th>
                      </tr>
                      <tr>
                        <th scope="col"><h6 class="card-text"><b>E-mail:<br></b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].correo}</h6></th>
                        <th scope="col"><h6 class="card-text"><b>Duración:<br> </b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.duracionPrograma}hrs.</h6></th>
                        <th scope="col"><h6 class="card-text"><b>Progreso completado:<br></b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.porcentajeCompletado}%</h6></th>
                      </tr>
                      </thead>
                    <tbody
                      <tr>
                        <td scope="col"><h6><center><b> Filtro: </b></center><h6></td>
                        <td scope="col"><h6><b> Temario: </b></h6></td>
                      </tr>
                      <tr>
                      
                      <td id="${i}completados"></td>
                      <td id="${i}tipo"></td>
                        <td class="temazo" id="${i}temas"></td>
                        <td class="subtemazo" id="${i}subtemas"></td>
                      </tr>
                    </tbody>
                </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Regresar a los resultados</button>
                </div>
                </div>
                </div>
            </div>
            </center>
`
        // Prendemos la funcion para pintar los temas y los subtemas dentro del modal
        tTemas(sede, gen, `${i}temas`, arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.temas)
        tTemas(sede, gen, `${i}subtemas`, arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.temas.subtemas)
        pCompletados(sede, gen, `${i}completados`, arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.temas)
        pTipos(sede, gen, `${i}tipo`, arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.temas)

        dataEstudiantes.push(arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre)
        estudiantesPorcentajes.push(arrBruto[0][lugar].generacion[gen].estudiantes[i])
        porcentajesCompletados(estudiantesPorcentajes);
        
         //Se prende la funcion de porcentajes de alumnos
  }


              
        // -------------Pintamos las cards--------
      

  }


function tTemas(sede, gen, id, temas) {
    
    let subTemA = document.getElementById(id)
    let pDesplegar= ''
    
   
    // Iteracion para pintar los temas
    for (const tema in temas) {
        pDesplegar += ` <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Tema</th>
      <th scope="col">Subtema</th>
    </tr>
    </thead>
  <tbody>
    <tr>
      <td >${tema}</td>

    `
    let values = Object.values(temas[tema].subtemas)
    let keys = Object.keys(temas[tema].subtemas)

    //------------Iteracion para lo que hay dentro de los subtemas
     
  
    for (let i = 0; i < values.length; i++) {
        
        pDesplegar += `
          <tr>
            <th><strong>${keys[i]}</strong><th>
          </tr>
          <tr>
            <td>

                <td><em>Completado: </em>${values[i].completado}</td>
                <td><em>Duracion de los Subtemas: </em>${values[i].duracionSubtema}</td>
                <td><em>Tipo: </em>${values[i].tipo}</td>
                </tr>

        `
        console.log(values[i].completado) 
    }
    pDesplegar += `</tbody>
</table>`
    
  }
//  Nos traemos la variable subtemas que es igual a pDesplegar para lo que se encuentra a dentro de los subtemas
subTemA.innerHTML = pDesplegar


}


function pCompletados(sede,gen, id, temas) {
    let completadosnocompletados = document.getElementById(id)
    let completado = ''
    let noCompletado = ''
    for (const tema in temas) {
        let values = Object.values(temas[tema].subtemas)
    let keys = Object.keys(temas[tema].subtemas)
    for (let i = 0; i < values.length; i++) {
        if (values[i].completado == 1) {
            completado += keys[i]
        } else {
            noCompletado += keys[i]
        }
        
    }
            
        }
        completadosnocompletados.innerHTML += `
                  <div class="accordion" id="accordionCompletadono${id}">
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour${id}" aria-expanded="false" aria-controls="collapseFour${id}">
        Completados
      </button>
    </h2>
    <div id="collapseFour${id}" class="accordion-collapse collapse" aria-labelledby="headingTwo${id}" data-bs-parent="#accordionCompletadono${id}">
      <div class="accordion-body">
        ${completado}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive${id}" aria-expanded="false" aria-controls="collapseFive${id}">
        No completados
      </button>
    </h2>
    <div id="collapseFive${id}" class="accordion-collapse collapse" aria-labelledby="headingFour${id}" data-bs-parent="#accordionCompletadoYNo${id}">
      <div class="accordion-body">
        ${noCompletado}
      </div>
    </div>
  </div>
</div>`

    }
                  


    function pTipos(sede,gen, id, temas) {
    let tipos = document.getElementById(id)
    let ejercicios = ''
    let lecturas = ''
    let cuestionarios = ''
    for (const tema in temas) {

    let values = Object.values(temas[tema].subtemas)
    let keys = Object.keys(temas[tema].subtemas)

    for (let i = 0; i < values.length; i++) {
        if (values[i].tipo == 'lectura' ) {
            lecturas += keys[i]
        } else {
            if(values[i].tipo == 'ejercicio'){
                ejercicios += keys[i]            
            } else {
                cuestionarios += keys[i] 
            }
        } 
      }
    }
        tipos.innerHTML += `<div class="accordion" id="accordionExample${id}">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingUno${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUno${id}" aria-expanded="false" aria-controls="collapseUno${id}">
       Lecturas 
      </button>
    </h2>
    <div id="collapseUno${id}" class="accordion-collapse collapse" aria-labelledby="headingUno${id}" data-bs-parent="#accordionExample${id}">
      <div class="accordion-body">
      ${lecturas}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingDos${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDos${id}" aria-expanded="false" aria-controls="collapseDos${id}">
        Ejercicios
      </button>
    </h2>
    <div id="collapseDos${id}" class="accordion-collapse collapse" aria-labelledby="headingDos${id}" data-bs-parent="#accordionExample${id}">
      <div class="accordion-body">
      ${ejercicios}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTres${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTres${id}" aria-expanded="false" aria-controls="collapseTres${id}">
        Quizzes
      </button>
    </h2>
    <div id="collapseTres${id}" class="accordion-collapse collapse" aria-labelledby="headingTres${id}" data-bs-parent="#accordionExample${id}">
      <div class="accordion-body">
      ${cuestionarios}
      </div>
    </div>
  </div>
</div>`
    }




// ------------------------Porcentajes de alumnos----------------------------------------//
const porcentajesCompletados = (estudiantesPorcentajes) => {
//console.log(estudiantesPorcentajes); 
     //Se utilizará el método forEach para seleccionar a los alumnos con porcentajes debajo de 60 y arriba de 90 
      estudiantesPorcentajes.forEach(function(element){
     //Se declarán dos variables para atraer los ID en donde se pintarán los resultados 
      let sesentaMenos = document.getElementById('sesenta')
      let masNoventa = document.getElementById('noventa')
      //console.log(element.nombre);
        //console.log(element.progreso.porcentajeCompletado);
      //Se declarán las condicionales de <60 y >90 respectivamente
      if (element.progreso.porcentajeCompletado < 60 ) {
        //console.log("Alumnos debajo del 60%: " + element.nombre );
      //Se atrae la variable antes declarada y se utliza un innerHTML para pintar resultados
        sesentaMenos.innerHTML = `<h3 class="debajo60">Alumnos debajo de el 60%: ${element.nombre} ${element.progreso.porcentajeCompletado}</h3>`
      }else if (element.progreso.porcentajeCompletado > 90){
        //console.log("Alumnos arriba del 90%: " + element.nombre );
        //Se atrae la variable antes declarada y se utliza un innerHTML para pintar resultados
        masNoventa.innerHTML = `<h3 class="debajo90">Alumnos arriba del 90%: ${element.nombre}${element.progreso.porcentajeCompletado}</h3>`
        estudiantesPorcentajes = [];
      }
    })
  }
