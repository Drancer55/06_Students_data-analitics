import {traerData, iterarSede, iterarGen, datosEstudiantes, botonAtras} from "./data.js"
const Data = "../data/students.json";
console.log("ventana actual: ", window);
traerData(Data);
window.dashBoard = {
        traerSede: (key) => {
            iterarSede(key)
        },
        traerGeneracion: (gen) => {
            iterarGen(gen)
        },
        traerEstudiantes: (alumnos) => {
            datosEstudiantes (alumnos)
        }, 
        regresaraSedes: () => {
            botonAtras()
        }
        
    }

document.getElementById('pantalla-1').hidden = false;
document.getElementById('pantalla-2').hidden = true;
document.getElementById('pantalla-3').hidden = true;


//Se crearan variables para obtener los valores del input de usuario y password
/*Se establecen las condiciones para dejar entrar al usuario, si son correctas se oculta la pantalla 
1 y se muestra la pantalla dos*/
let entrada = document.getElementById('entrar')
entrada.addEventListener('click', () => {
    let user = document.getElementById('email').value 
    let password = document.getElementById('contraseña').value
    if(user == 'usuario.name@bootCampSchool.com' && password == 1) {
    document.getElementById('pantalla-1').hidden = true
    document.getElementById('pantalla-2').hidden = false
    } else {
        alert ("Usuario y/o contraseña inválida, intentelo de nuevo")
    }
})
//Boton de regresar de la pantalla 3 a la 2
let comeBack = document.getElementById('back')
    comeBack.addEventListener ('click', function(){
        document.getElementById('pantalla-2').hidden = false;
        document.getElementById('pantalla-3').hidden = true;
        // document.getElementById('back').hidden = true;

        //document.getElementById('pantalla-3').innerHTML = "";
    })

//Se activa el boton de entrada a tercera pantalla para pintar datos de sede ajusco 
let sedesEntrada = document.getElementById('sedes')
sedesEntrada.addEventListener('click', () => {
    document.getElementById('pantalla-2').hidden = true
    document.getElementById('pantalla-3').hidden = false
})

