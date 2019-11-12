  
let animal1 = {nombre:"Thor",especie:"Perro",raza:"caniche",vida:5};
let animal2 = {nombre:"Capitan America",especie:"Gato",raza:"siames",vida:8};
let animal3 = {nombre:"Viuda Negra",especie:"Perro",raza:"bulldog",vida:15};
let animal4 = {nombre:"Hulk",especie:"Perro",raza:"pastor aleman",vida:12};
let animal5 = {nombre:"Ojo de Halcon",especie:"Perro",raza:"san bernardo",vida:9};
let animal6 = {nombre:"Loky",especie:"Perro",raza:"salchicha",vida:4};
let animal7 = {nombre:"Iron Man",especie:"Conejo",raza:"pascuas",vida:9};
let animal8 = {nombre:"WarMachine",especie:"Perro",raza:"raton de praga",vida:20};
let animal9 = {nombre:"Vision",especie:"Perro",raza:"pastor belga",vida:12};
let animal10 = {nombre:"Mercurio",especie:"Pajaro",raza:"loro",vida:15};

let listadoAnimales = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];

// Dada la lista de animales, habría que implementar las siguientes funciones (2 puntos)

function existeAlgunaEspeciePerroConVidaPares(){   

    let resultado = listadoAnimales.filter( contador => contador.vida % 2 == 0).some(contador => contador.especie == "Perro");

    return resultado;
}


// Dada una especie, sumar las vidas de todas los animales con
// más de una palabra en su nombre y que sea de esa especie (2 puntos)
// Esta función debe ejecutarse cada 10 segundos.

function sumarVidas(especie){
    let resultado = listadoAnimales.filter(contador => contador.especie == especie && contador.nombre.split(" ").length>1).map(contador => contador.vida).reduce((contador, y) => contador + y);
    
    return console.log(resultado);
}
setInterval(function(){sumarVidas("Perro");}, 10000);
// Obtener una lista de todos los animales dada una especie y una raza
// Ordenados por nombre de forma descendente (2 puntos)
// Esta función debe ejecutarse 10 segundos después de ejecutarse.

function dameAnimales(especie,raza){

    let resultado = listadoAnimales.filter(contador => contador.especie == especie && contador.raza == raza).sort((a, b) => a.nombre.localeCompare(b.nombre));
    
    return console.log(resultado);
}
setTimeout(function(){dameAnimales("Perro","caniche");}, 10000);
// Crear una funcíon, que añada un animal más a lista cumpliendo los siguientes requisitos: 
// Nombre del animal con más vida de la lista
// Especie con menos letras de las especies que hay en la lista
// Raza del animal con el nombre más alto en orden ascdente
// Vida es el número de la posición del primer animal con vida par 
// 4 puntos

function incluirAnimal(){
    
    let nombre = listadoAnimales[0].nombre;
    let especie = listadoAnimales[0].especie;
    let raza = listadoAnimales[0].raza;
    let vida = listadoAnimales.findIndex(contador => contador.vida % 2 === 0);
    
    listadoAnimales.sort((contador, y) => contador.vida - y.vida);
    
    listadoAnimales.sort((contador, y) => contador.especie.length - y.especie.length);
    
    listadoAnimales.sort((contador, y) => contador.nombre - y.nombre);
    
    console.log(nombre);
    console.log(especie);
    console.log(raza);
    console.log(vida);
    
    let animalAdd = {nombre, especie, raza, vida};
    
    listadoAnimales.push(animalAdd);
    console.log(listadoAnimales)

}
