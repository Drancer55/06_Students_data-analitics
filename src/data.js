fetch("../data/students.json") 
.then((response) => response.json())
.then((data) => iterarDataSedes(data))
.catch((error) => console.log(error) )

