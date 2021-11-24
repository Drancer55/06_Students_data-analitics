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
    if(user == 'usuario.name@bootCampSchool.com' && password == 12345) {
    document.getElementById('pantalla-1').hidden = true
    document.getElementById('pantalla-2').hidden = false
    }
})