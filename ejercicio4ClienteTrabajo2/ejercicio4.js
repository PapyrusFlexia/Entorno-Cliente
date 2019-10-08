//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a,b){
	let resultado;
	
	if ( a > b ){
		resultado = 1;
	}else if ( a < b ){
		resultado = -1;
	}else if ( a = b){
		resultado = 0;
	}
		
		
	
	return resultado;

}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elemetos){
	let lista = elemetos.length;
	let resultado = 0;
	
	for (let i = 0; i < lista; i++){
		if(elemetos[i]%2 == 0){
			resultado += elemetos[i];
		}
	}
	console.log(elemetos + " el resultado es: " + resultado);
	return resultado;
	

}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elemetos){
	let lista = elemetos.length;
	let resultado = 0;
	
	for (let i = lista; i >= 0; i--){
		if(resultado < elemetos[i]){
			resultado = elemetos[i];
		}
	}
	console.log("el numero mayor es: " + resultado);
	return resultado;
}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(String){
	
	var cadenainvertida = "";
   

	for(let i = String.length-1; i>=0; i--){
     cadenainvertida += String[i];
	}
	 console.log(cadenainvertida);

}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(String){
	let lista = String.length;
	let resultado = 0;
	
	for (let i = 0; i < lista; i++){
		if(String[i]%2 == 1){
			resultado ++;
		}
	}
	console.log(" el resultado es: " + resultado);
	return resultado;

}
