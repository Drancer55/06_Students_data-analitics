          //------------------------------------------------------------Tercera Pantalla----------------------//

          //---------------------------------------atraemos y exportamos los datos del json-------------------//
const Data = "../data/students.json";

         //-------------Se crean arreglos vacios para poder guuardar la informacion iterada del json---------//
let arrBruto = [];
let lugar = "";
let generacionPorSede = [];
let dataEstudiantes = [];

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
      //botn = `<button onclick="dashBoard.traerGeneracion('${key}')"> ${key} </button>`
    } else if (key == "chapultepec") {
      img = "../assets/LogoChapultepec.jpeg";
      campus = "Chapultepec";
      map =
        "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15050.963273306652!2d-99.19941515547023!3d19.423601324983508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x85d201f8e7cbce13%3A0xf8bbfda793220ccc!2sCalle%20Julio%20Verne%2027%2C%20Polanco%2C%20Polanco%20IV%20Secc%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!3m2!1d19.427963899999998!2d-99.1969393!5e0!3m2!1ses-419!2smx!4v1637996847042!5m2!1ses-419!2smx";
      //botn = `<button onclick="dashBoard.traerGeneracion('${key}')"> ${key} </button>`
    } else if (key == "iztapalapa") {
      img = "../assets/LogoIztapalapa.jpeg";
      campus = "Iztapalapa";
      map =
        "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d30115.851234696875!2d-99.08672062336888!3d19.348297199433908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x85d1fd88c97e8ce7%3A0x6978b1f508c61541!2sErmita%20Iztapalapa%202001%2C%20Los%20%C3%81ngeles%2C%20Iztapalapa%2C%2009830%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!3m2!1d19.347834499999998!2d-99.0698948!5e0!3m2!1ses-419!2smx!4v1637998520536!5m2!1ses-419!2smx";
      //botn = `<button onclick="dashBoard.traerGeneracion('${key}')"> ${key} </button>`
    }
    document.getElementById("sedes").innerHTML += `
        <div id="${key}" class="sucursal">
            <center>
                <img onclick="dashBoard.traerSede('${key}')" id="image" src="${img}"><br>
                <h1 class="title">${campus}</h1><br>
                <iframe id="place" src="${map}" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe><br>
                <button onclick="dashBoard.traerSede('${key}')"> ${key} </button>
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
  `<button onclick="dashBoard.traerGeneracion('${gen}')"> ${gen} </button>`;
};

        //--------------------------------------Se imprimen los datos de los estudiantes por generacion----------------//
export const iterarGen = (gen) => {
  console.log(gen);
  document.getElementById("estudiantes").innerHTML = 
  `<h3 onclick="dashBoard.traerEstudiantes('${gen}')">Estudiantes de ${gen} generación: </h3>`;
  datosEstudiantes(gen);
};

//---------------Se pinta dinamicamente el boton de regresar a la pantalla dos ue ns muestra las sedes----------------//
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
        <center>
        <div class="card w-100">
           <div class="card-body">
                <h5 class="card-title"><b>${arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre}</b></h5>
                <h6 class="card-text"><b>E-mail:</b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].correo}</h6>
                <h6 class="card-text"><b>Créditos:</b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.duracionPrograma}</h6>
                <h6 class="card-text"><b>Progreso completado:</b> ${arrBruto[0][lugar].generacion[gen].estudiantes[i].progreso.porcentajeCompletado}%</h6>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#id${i}>
                    Ver mas
                </button>
        </center>
      <!-- Modal -->
          <div class="modal fade" id=id`+ `${i}`+ ` tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">`+ `${arrBruto[0][lugar].generacion[gen].estudiantes[i].nombre}` + `</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <table class="table">
                    <thead>
                      <tr>
                    <th scope="col">#</th>
                      <div id="${i}temas">
                        <th scope="col">Temas</th>
                      </div>
                        <th scope="col">Subtemas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>`+ `${arrBruto[0][lugar].generacion[gen].estudiantes[i].temas}` + `</td>
                        <td>${i}</td>
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
botonBuscador.addEventListener("click", filtrar);

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
    
