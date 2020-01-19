function resultadoXML(respuestaXML) {
    let datos = respuestaXML;
    let pelicula = datos.documentElement.getElementsByTagName("pelicula");
    let resultado = "<table border='1'><tr><th>ID</th><th>JUEGOS DE PELICULAS</th><th>TIPO</th><th>Precio</th></tr>";

    for (let i = 0; i < pelicula.length; i++) {
        resultado += "<tr>";
        let director = pelicula[i].getElementsByTagName("director");
        resultado += "<td>" + director[0].firstChild.nodeValue + "</td>";
        let duracion = pelicula[i].getElementsByTagName("duracion");
        resultado += "<td>" + duracion[0].firstChild.nodeValue + "</td>";
        let genero = pelicula[i].getElementsByTagName("genero");
        resultado += "<td>" + genero[0].firstChild.nodeValue + "</td>";
        let nombre = pelicula[i].getElementsByTagName("nombre");
        resultado += "<td>" + nombre[0].firstChild.nodeValue + "</td>";

        resultado += "</tr>";
    }

    resultado += "</table>";
    document.getElementById("sincronaXML").innerHTML = resultado;
}

function funcionAjaxSincronaXML() {
    llamadaSincrona2("servidor.php", "GET", null, "XML", resultadoXML);
}

function objetoXHR() {
    if (window.XMLHttpRequest) { 
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
     
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
        

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {} 
        }
    }
    
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}


function llamadaSincrona(elementoDOM, url) {
    if (miXHR) {
        miXHR.open('GET', url, false); 
        miXHR.send(null);
        elementoDOM.appendChild(document.createTextNode(resultadoXML(miXHR.responseText)));

    }
}

function funcionAjaxSincrona() {

    miXHR = new objetoXHR();
    llamadaSincrona(document.getElementById("resultadoSincronoXML"), "servidor.php");
}

function llamadaSincrona(url) {
    if (miXHR) {
        alert("Comenzamos la peticion AJAX");
        document.getElementById('estado').innerHTML = "";
        document.getElementById('resultadoSincrono').innerHTML = "";
        miXHR.open('GET', url, true); 
        miXHR.onreadystatechange = comprobarEstadoPeticion;
        miXHR.send(null);
    }
}

function llamadaSincrona2(url, tipo, datos, tipoRespuesta, funcionCallback) {
    miXHR = new objetoXHR();
    if (miXHR) {
        document.getElementById("spinner").style = "display:block";
        miXHR.open(tipo, url, false);
        miXHR.onreadystatechange = ejecutarFuncionAjax(tipoRespuesta, funcionCallback);
        miXHR.send(datos);
    }
}

function ejecutarFuncionAjax(tipoRespuesta, funcion) {
    return function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = "";
            switch (tipoRespuesta) {
                case "XML":
                    respuesta = this.responseXML;
                    break;
                default:
                    respuesta = this.responseText;
                    break;
            }
            funcion(respuesta);

            document.getElementById("spinner").style = "display:none";
        }
    }
}

