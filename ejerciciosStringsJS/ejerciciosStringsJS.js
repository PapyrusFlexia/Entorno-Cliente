//Esta funcion devuelve una frase nueva que contenga
//Todas las palabras de la frase pasada por parámetro
//que contenga el trozo de palabra. 
//Pero no valdrán aquellas que tengan el trozo de la palabra
//Al principio o al final.

//Por ejemplo: obtenerNuevaFrase("Espero ir al cine a ver el joker","e") => "ver joker";
//Por ejemplo: obtenerNuevaFrase("Todo depende de si el raton si acaba pronto con el queso","to") => "raton";

function obtenerNuevaFrase(frase,trozoPalabra){
let palabras = frase.split(" ");
let resultado = "";

for(let i = 0; i < palabras.length; i++){
    if(palabras[i].includes(trozoPalabra) == true && palabras[i].startsWith(trozoPalabra) != true && palabras[i].endsWith(trozoPalabra) != true){
        resultado = resultado + palabras[i];
    }
}
return resultado;
}




//Función que devuelve la suma de todas las posiciones
//En la que se encuentra una palabra en una frase.
//Por ejemplo: sumaDePosiciones("Prueba de la rueda","ue") => 16
//Por ejemplo: sumaDePosiciones("Aclaremos el ejercicio","acl") => 0
function sumaDePosiciones(frase, trozoPalabra){ 
        let resultado = 0;
        
        for (let i = 0; i < frase.length && frase.includes(trozoPalabra); i++){
            resultado = resultado + frase.indexOf(trozoPalabra, i);
             i = i + frase.indexOf(trozoPalabra, i) + trozoPalabra.length;     
        }
        return resultado;
    }

//Función que valida el formato RGB de los colores
//Formato RGB solo acepta letras de la A-F y a-f, 
//y numeros de 0 a 9, además de empezar por #.
//Los ejemplos de colores RGB son:
//     #123ABC o #123abc
//     #BBB    o #333     
function esValidoFormatoRGB(color){
    let resultado;

    if(color.startsWith("#") == true){
        for(let i = 0; i < color.length && color.length <= 7 ; i++){
            if((color.charCodeAt(i) >= 48 && color.charCodeAt(i) <= 57)||(color.charCodeAt(i) >= 65 && color.charCodeAt(i) <= 70)||(color.charCodeAt(i) >= 97 && color.charCodeAt(i) <= 102)){
                resultado = true;
            }else{
                resultado = false;
               
            }
            if(color.length > 7){
                resultado = false;
            }
        }       
    } else if(color.startsWith("#")==false){
        resultado = false;

    }
    return resultado;
}




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
        var validacion = new RegExp('^(https?:\\/\\/)?'+ 
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
          '(\\#[-a-z\\d_]*)?$','i'); 
        return !!validacion.test(url);
        //por mas que lo intento no me sale con el codigo que vimos el otro dia, asi que te lo hago con regex
      

}