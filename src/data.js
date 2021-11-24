fetch("../data/students.json") 
.then((response) => response.json())
.then((data) => iterarDataSedes(data))
.catch((error) => console.log(error) )

let sedes = document.getElementById("sedes")

let iterarDataSedes = (data) => {
    console.log(data.ajusco)

    for (const sede of data.ajusco) {
        console.log(data.ajusco)

        
    }

}