// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE


function concatenarCadenas(){

    let clase = 0;
    let x = "ALUMNO_DAW";
    let y = "_2017";
	
	let resultado = x + y;

    return resultado === "ALUMNO_DAW_2017";
}

function operadorTernario(){
	
    let x = 10;
    let y = 5;
	
	
	let resultado = (y < x) ? true : false

    return resultado;

}

function deleteArray(){

    let array = [1,2,3,4,5,6,7,8,9]; //BORRAMOS LA ÚLTIMA POSICIÓN

    return array[9] === undefined;

}

function crearArray(){
	let hoy = new Date();
	var numero = Number("number");
	var objeto = Object("object");
	
	
	
    let x = [1.5, "ALUMNOS", hoy, numero, objeto, undefined, null ];

    

    return  x[0] ===  1.5
        && x[1] ===  "ALUMNOS"
        && x[2] instanceof Date
        && typeof x[3] === "number"
        && typeof x[4] === "object"
        && x[5] === undefined
        && x[6] === null;

}

function existeElemento(){

	let prueba1 = "hola";
	let prueba2 = "adios";
    let x = {prueba1, prueba2};

    return "prueba1" in x && "prueba2" in x;

}