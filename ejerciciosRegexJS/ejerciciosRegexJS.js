//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(url){
    let expresion = /^https?:\/\/?www\.+[A-Za-z0-9]{2,}\.+(com|es)\?+([A-Za-z0-9]+\=+[0-9]+([&])){1,}([A-Za-z0-9]+\=+[0-9])$/g;
    let resultado = false;
    if(expresion.test(url)){
        resultado = true;
    }
    return resultado;
}



//Función que valia un password con las siguientes características
//Al menos existan 4 letras
//Al menos existan 4 numeros
//Tiene que haber un carácter !,?,-,$ o _
//Tiene que tener al menos una letra Mayúscula
//Ayuda: Pueden usarse varias expresiones regulares para validar el password
function esValidaPassword(password){
    let expresion = /^(?=.*[a-z]+.*){4,}(?=.*[A-Z])(?=.*[0-9]+.*){4,}(?=.*[\!|\?|\-|\$|\_])[A-Za-z\d\!|\?|\-|\$|\_]{9,}$/g;
    let resultado = false;
    if(expresion.test(password)){
        resultado = true;
    }
    return resultado;
}



//Función que elimina todos los caracterés que no sean letras y
//números de una texto
function eliminaCaracteresRaros(texto){
    var resultado = texto.replace(/[\W_]+/g, ' ');
    return resultado;
}
    

