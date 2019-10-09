console.log("NUESTRAS PRIMERAS FUNCIONES");

function prueba(){
	console.log("EJECUTANDO FUNCION PRUEBA");
	let a =1;
	if(a = 2){
		let a = 3;
		console.log(a);
	}
	return a;
}
	
function resta(num1, num2) {
	return num1 - num2;
	}
	
function divi(num1, num2) {
	return num1/num2;
	}
	
function corregirDeclaraciones(){
	var funcion = new Object();
	var ejemplo = "EJEMPLO";
	var prueba123 = 123;
	var prueba_ejemplo = "EJERCICIO";
	var prueba = "PRUEBA";
	var prueba = "PRUEBA";
	return true;
}
function declararExpresionRegular(){
	var expresion = new RegExp();
	var expresion = /Prueba/;
	return expresion  instanceof RegExp;

}

function declararFecha(){
	var hoy = new Date();
	console.log("ESTOY EJECUTANDO LA FUNCION FECHA");
	return hoy instanceof Date;
}

function declararFuncion(){
	var funcion = new Function();
	var funcion = declararFecha();
	console.log(funcion());
	return funcion instanceof Function;
}

function declararArray(){
	let lista = [1, 2, 3, 4, "Correcto"];
	
	return lista instanceof Array
	&& lista.length === 5
	&& lista[4] === "Correcto";
}

function declararArrayTipo(){
	let listaEnteros = new Int32Array([0,0,0,0,0,0,0,0,0,0]);
	return listaEnteros instanceof Int32Array
	&& listaEnteros.length === 10;

}

var x = "SOY GLOBAL";
function declararVariableGlobal(){
	
	return window.x
	&& x === "SOY GLOBAL"
}

function declararPrototipo(){
	function prototipo(nombre){
		this.nombre = nombre;
	}
	var objeto = new declararPrototipo("ejemplo");

	return objeto._proto_ === prototipo.prototype
}

function declaracionConRetraso(){

	 var resultado = y === 35;

    var y = 35;

    return resultado;
}

function declaracionLet(){
	let x = 0;
	let y = "bien";
	if(x > 1){
		let y = "bien";
		
	}
	return y === "bien";
}

function declararConst(){
	const valor = 30;
	return valor === 30;
}

function recorrerForIn(){
	let lista {"A","E","I","O","U"}
	console.log("BUCLE FOR NORMAL");
	for(let i=0; i< lista.length; i++){
		console.log(lista[i]);
	}

	console.log("BUCLE FOR IN");
	for(let pos in lista){
		console.log(lista[pos]);
	}

	console.log("BUCLE FOR OP")
	for(let nombre of lists){
		console.log(nombre);
	}

}

