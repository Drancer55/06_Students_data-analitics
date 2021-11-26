import {Data, alumnos} from "./data.js"

//alumosnFetch()

document.getElementById('pantalla-1').hidden = false;
document.getElementById('pantalla-2').hidden = true;
document.getElementById('pantalla-3').hidden = true;
document.getElementById('pantalla-4').hidden = true;

//Se crearan variables para obtener los valores del input de usuario y password
/*Se establecen las condiciones para dejar entrar al usuario, si son correctas se oculta la pantalla 
1 y se muestra la pantalla dos*/

let entrada = document.getElementById('entrar')
entrada.addEventListener('click', () => {
    let user = document.getElementById('email').value 
    let password = document.getElementById('contraseña').value
    if(user == 'usuario.name@bootCampSchool.com' && password == 12345) {
    document.getElementById('pantalla-1').hidden = true
    document.getElementById('pantalla-2').hidden = false
    }
})


/*const campus = (sede) => {
    console.log(sede)
    fetch("../data/students.json")
        .then((response) => response.json())
        .then((data) => iterarCampus(data, sede))
        .catch((error) => console.log(error));
    }
    const iterarCampus = (data, sede) => {
        console.log(data[sede])
    }*/