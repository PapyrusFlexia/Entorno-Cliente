let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("nombre");
let inputApellidos = document.getElementById("apellidos");
let inputEdad = document.getElementById("edad");
let inputProfesion = document.getElementById("profesion");
let inputTerminos = document.getElementById("terminos");


document.addEventListener("DOMContentLoaded", function(event) {
    inputNombre.addEventListener("keydown", function(event){
        comprobarCampo(event,comprobarNombre);  
    });

    inputApellidos.addEventListener("keydown", function(event){
        comprobarCampo(event,comprobarApellidos);
    })

    inputEdad.addEventListener("keydown", function(event){
        comprobarCampo(event,comprobarEdad);
    })

    inputProfesion.addEventListener("change", function(event){
        validarCampo(event.target,comprobarProfesion);
    })

    inputTerminos.addEventListener("change", function(event){
        validarCampo(event.target,comprobarTerminos);
    })

    formulario.addEventListener("submit",function(event){
        comprobarFormulario(event);
    });
});

let timeout = null;

function comprobarCampo(event,funcionComprobar){
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        validarCampo(event.target,funcionComprobar);
    }, 500);
};

function validarCampo(input,funcionValidacion){
    let correcto = false;
    let errores = funcionValidacion();
    if(input.nextSibling !== undefined && input.nextSibling !== null ){
        input.nextSibling.remove();
    }
    if(errores.length > 0){
        marcarInputErroneo(input,errores);
    }else{
        correcto = true;
        marcarInputCorrecto(input);
    }
    return correcto;
}

function marcarInputErroneo(input,errores){
    input.classList.remove("valido");
    input.classList.add("invalido");
    let padre = input.parentNode;

    let divErrores = document.createElement("div");
    divErrores.classList.add("error");
    padre.appendChild(divErrores);

    errores.forEach( error => {
        let divError = document.createElement("div");
        divError.innerHTML = error;
        divErrores.appendChild(divError);
    });
}

function marcarInputCorrecto(input){
    input.classList.remove("invalido");
    input.classList.add("valido");
}

function comprobarNombre(){
    let errores = [];
    let expresion = /^(?!.*?\s$).+(?:\w{2,}|[\$\@()+.;])+[a-zA-z]+$/g;
    if(!expresion.test(inputNombre.value)){
        errores.push("No puede estar vacío, más de tres letras y sólo puede tener letras y espacios.");
    }
    return errores;
}

function comprobarApellidos(){
let errores = [];
    let expresion = /^(?!.*?\s$).+(?:\w{2,}|[\$\@()+.;])+[a-zA-z]+$/g;

    if(expresion.test(inputApellidos.value) 
    ){
       if(inputNombre.value === inputApellidos.value){
            errores.push("No puede estar vacío, más de tres letras y sólo puede tener letras y espacios.El apellido no puede ser igual al nombre.")
       }
    }else{
        errores.push("No puede estar vacío, más de tres letras y sólo puede tener letras y espacios.El apellido no puede ser igual al nombre.");
    }
    return errores;
}

function comprobarEdad(){
    let errores = [];    
    let expresion = /^[0-9]+$/g;
    if(expresion.test(inputEdad.value) 
    ){
        let valor = parseInt(inputEdad.value);
        if( valor < 18){
            errores.push("Sólo número y mayor que 18.");
        }
    }else{
       errores.push("Sólo número y mayor que 18.");
    }
    return errores;

}

function comprobarProfesion(){
    let errores = [];
    if(inputProfesion.value === ""){
        errores.push("Selecciona una profesion");
    }
    return errores;
}


function comprobarTerminos(){
    let errores = [];
    if(!inputTerminos.checked){
        errores.push("Acepta los Términos y Condiciones");
    }
    return errores;
}

function comprobarFormulario(event){
    event.preventDefault();
    let errores = []
    errores.push(validarCampo(inputNombre,comprobarNombre));
    errores.push(validarCampo(inputApellidos,comprobarApellidos));
    errores.push(validarCampo(inputEdad,comprobarEdad));
    errores.push(validarCampo(inputProfesion,comprobarProfesion));
    errores.push(validarCampo(inputTerminos,comprobarTerminos));

    if(errores.some(x => !x)){
        alert("ERROR EN EL FORMULARIO");
    }else{
        let prueba = [];
        let show = document.getElementById("formulario");
        let showValidar = [inputNombre, inputApellidos, inputEdad, inputProfesion];
        prueba.push(showValidar);
        var node = document.getElementById('divid');
        var newNode = document.createElement('p');
        newNode.appendChild(document.createTextNode('Nombre:' + inputNombre));
        newNode.appendChild(document.createTextNode('Apellidos:'+ inputApellidos));
        newNode.appendChild(document.createTextNode('Edad:'+ inputEdad));
        newNode.appendChild(document.createTextNode('Profesion:'+ inputProfesion));
        newNode.appendChild(document.createTextNode('Terminos:'+ inputTerminos));
        node.appendChild(newNode);
    }
}