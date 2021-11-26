//atraemos y exportamos los datos del json
export const Data = "../data/students.json"


let sedes = document.getElementById("sedes")

    var iterarDataSedes = (data, sede) => {
        console.log(data.ajusco)
        for (let i= 0; i< data.ajusco.length; i++) {
            const sede = sede[i];
            
            sedes.innerHTML+= `<h1> ${data.sedes.generacion} </h1>`
        }
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
