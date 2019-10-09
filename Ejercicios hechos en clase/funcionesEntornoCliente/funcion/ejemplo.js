xconsole.log("NUESTRAS PRIMERAS FUNCIONES");

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
