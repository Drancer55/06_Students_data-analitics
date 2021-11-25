fetch("../data/students.json") 
.then((response) => response.json())
.then((data) => iterarDataSedes(data, sede, generacion))
.catch((error) => console.log(error) )



var iterar = (data) => {
 console.log(data.ajusco)
 let sedes = document.getElementById("sedes")
for (let i = 0; i < data.ajusco.length; i++) {
    
    sedes.innerHTML += `<h1> ${data.ajusco[i].generacion} </h1>`
}
}
