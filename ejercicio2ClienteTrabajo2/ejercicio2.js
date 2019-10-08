// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE

function asignacionDeValoresSumar(){

    let x = 1;
    let y = 2;
	
	x = y + x;

    return x === 3;
}


function asignacionDeValoresRestar(){

    let x = 10;
    let y = 5;
	
	x = x - y;

    return x === 5;
}

function asignacionDeValoresMultiplicacion(){

    let x = 7;
    let y = 5;
	
	x = x*y;

    return x === 35;
}

function asignacionDeValoresResto(){

    let x = 3;
    let y = 2;
	
	x = x%y;

    return x === 1;
}

function comparacionIgualdad(){ 

    let x = 5;
    let y = 5;
	let resultado;
	if ( x === y ){
		resultado = true;
	}
    return resultado;
	
}

function comparacionIgualdadEstricto(){

   let x = 5;
    let y = 5;
	let resultado;
	if ( x == y ){
		resultado = true;
	}
    return resultado;
}

function compararcionMayorIgual(){

    let x = 5;
    let y = 2;
	
	let resultado;
	if ( x >= y ){
		resultado = true;
	}
	
    return resultado;
}


function incremento(){

    let x = 0;
	while(x<5){
		x++
	}

    return x === 5;
}


function decremento(){

    let x = 10;
	while(x>5){
		x--
	}

    return x === 5;
}


function igualdadIncremento(){

    let x = 0;
	
	while(x != 5){
		x++;
	}

    return x++ === 5;
}

function comparacionAND(){
    var x = "igual";
    var y = "igual";
	if (x=== "igual" && y == "igual"){
		resultado = true;
	}

    return resultado;
}

function comparacionOR(){
    var x = "igual";
    var y = "noigual";
	if(x==="igual" || y==="igual" ){
		resultado = true;
	}
		

    return resultado;
}

function comparacionNOT(){
    var x = "no";
	if( x != "si"){
		resultado = true;
	}

    return resultado;
}