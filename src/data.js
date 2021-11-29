//Funcion del fetch para traer data
//sede: para determinar a cual campus nos referimos
//gen: para iterar la generación de cada sede
export const traerData = (sede, gen) => {
    fetch ("../data/students.json")
    .then((response) => response.json())
    .then((data) => iterarData(sede, gen, data))
    .catch((error) => console.log(error));
}
const iterarData = (sede, gen, data) => { 
    console.log(sede, gen, data) 
    for (let i = 0; i < data.lenght; i++) {
        console.log(lenght);
    }
} 
