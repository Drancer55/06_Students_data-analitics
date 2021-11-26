<<<<<<< HEAD

=======
export let alumosnFetch = (sede) => {
fetch("../data/students.json") 
.then((response) => response.json())
.then((data) => iterarDataSedes(data,sede))
.catch((error) => console.log(error) )


let sedes = document.getElementById("sedes")

 var iterarDataSedes = (data, sede) => {
    console.log(data.ajusco)
    for (let i= 0; i< data.ajusco.length; i++) {
        const sede = sede[i];
        

        sedes.innerHTML+= `<h1> ${data.sedes.generacion} </h1>`
    }
    
}
}
// var iterar = (data) => {
//  console.log(data.ajusco)   
 
// for (let i = 0; i < data.ajusco.length; i++) {
//     let sedes = document.getElementById("sedes")
//     sedes.innerHTML += `<h1> ${data.ajusco[i].generacion} </h1>`
// }
// }
>>>>>>> 7d5346d7f8429bcecab6cd4e9784518ad324025b
