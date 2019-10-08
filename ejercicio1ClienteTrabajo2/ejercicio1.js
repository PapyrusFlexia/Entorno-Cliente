// El OBJETIVO DE ESTE EJERCICIO ES DECLARAR LAS VARIABLES
// CORRESPONDIENTES PARA QUE LAS FUNCIONES SIEMPRE DEVUELVAN TRUE
// SIEMPRE HAY QUE DEJAR EL CÓDGIO DE LAS FUNCIONES IGUAL
// SALVO QUE SE ESPECIFIQUE EN LA PROPIA FUNCÍON QUE PODÉIS MODIFICARLO


//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRITP ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder probar las demas
function corregirDeclaraciones(){
    var funcion = new Object();
	var ejemplo = "EJEMPLO";
	var prueba123 = 123;
	var prueba_ejemplo = "EJERCICIO";
	var prueba = "PRUEBA";
	var prueba = "PRUEBA";
	return true;
}

function declararNumeros(){
	var numA = 5;  // SIMPLEMENTE DEBEMOS DECLARAR LAS VARIABLES numA Y numB, SI PONEMOS QUE numA SEA UN NÚMERO MÁS ALTO QUE numB LA FUNCIÓN NOS SALDRÁ TRUE.
	var numB = 1;
    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}

function declararString(){
	var cadena = "PRuEbA";  //DECLARAMOS EL STRING CADENA AL QUE LE VAMOS A PONER "PRuEbA" PARA QUE EN EL RETURN NOS DE TRUE
	
    return cadena === "PRuEbA"
        && typeof cadena === "string";
}

function noDefinido(){
    var x = undefined; //SIMPLEMENTE CAMBIAMOS QUE LA X SEA LA QUE TENGA UNDEFINED E Y LA QUE TENGA EL NULL PARA QUE EL RETURN SEA CORRECTO
    var y = null;
    return x === undefined
        && y === null;
}

function declararSymbol(){ 
	var x = Symbol("simbolo"); //DECLARAMOS EL SÍMBOLO, NO SE PONE NEW PORQUE NO ES UN OBJETO
    return typeof x === "symbol";
}

function declararFecha(){
	
	var hoy = new Date(); //DEBEMOS DECLARAR UN NEW DATE() CON EL NOMBRE DE"HOY"

    return hoy instanceof Date;

}

function declararExpresionRegular(){
	
	var expresion = new RegExp(); //DEBEMOS DECLARAR UNA NUEVA EXPRESIÓN REGULAR CON EL NOMBRE DE "EXPRESIÓN"

    return expresion instanceof RegExp;
}

function declararFuncion(){
	
	var funcion = new Function(); //DEBEMOS DECLARAR UNA NUEVA FUNCIÓN CON EL NOMBRE DE "FUNCION"

    return funcion instanceof Function;
}



function declararObjeto(){
	

    class ObjetoPrueba{};
	
	let objeto = new ObjetoPrueba(); //DEBEMOS CREAR UN OBJETO DESPUÉS DE LA CLASE

    return objeto instanceof ObjetoPrueba;
}

function declararArray(){ 

	let lista = [1, 2, 3, 4, "Correcto"]; //CREAMOS EL ARRAY QUE EMPIEZA EN LA POSICIÓN 0, POR ESO AUNQUE PONGAMOS "Correcto" COMO EL QUINTO NÚMERO, REALMENTE LO ESTAMOS PONIENDO EN LA CUARTA POSICIÓN
    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";

}


function declararArrayTipo(){

	let listaEnteros = new Int32Array([0,0,0,0,0,0,0,0,0,0]); //DECLARAMOS EL ARRAY TIPO INT32ARRAY Y DENTRO LE PONEMOS 10 POSICIONES
    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;

}

var x = "SOY gLOBAL";
function declararVariableGlobal(){ //CREAMOS LA VARIABLE GLOBAL FUERA DE LA FUNCIÓN

	
    return window.x
            && x === "SOY gLOBAL"
        ;

}

function declararPrototipo(){
	
	function prototipo(nombre){ //DECLARAMOS EL PROTOTIPO
		this.nombre = nombre;
	}

    var objeto = new prototipo("ejemplo");


    return objeto.__proto__ === prototipo.prototype

}

//ESTA FUNCION DEBÉIS MODIFICAR EL CÓDIGO PARA QUE FUNCIONE
function declaracionConRetraso(){

    
	var y = 35; //DEBEMOS PONER LA DECLARACIÓN Y ANTES QUE LA DE RESULTADO PARA QUE SE CUMPLA LO PUESTO EN RESULTADO
	var resultado = y === 35;

    

    return resultado;
}


function declaracionLet(){
    let x = 0;
	let y = "bien"; // DEBEMOS CREAR EL STRING Y, YA QUE ES CON EL QUE TRABAJA LA FUNCIÓN
    if(x > 1){
        let y = "bien";
    }
    return y === "bien";
}

//ESTA FUNCIÓN DEBÉIS MODIFICAR EL CÓDIGO PARA QUE FUNCIONE
function declaracionConst(){
    const valor = 30;  //AL SER UNA CONSTANTE NO SE PUEDE MODIFICAR FUERA DE LA DECLARACIÓN DE LA PROPIA ASÍ QUE PARA QUE NOS SLAGA TRUE DEBEMOS PONER EL VALOR DE LA CONSTANTE EN 30
    //valor += 20;
   // valor = 30;
    return valor === 30;
}