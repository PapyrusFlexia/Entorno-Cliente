document.addEventListener("DOMContentLoaded", function() {
    let formularioAjax = document.getElementById("formulario");
    formularioAjax.addEventListener("submit", function(event) {
        event.preventDefault();
        asincrona();
    });
})

function objetoXHR() {
    if (window.XMLHttpRequest) { 
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {} //Capturamos el error,
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function estado() {
    switch (this.readyState) {
        case 4:
            if (this.status == 200) {
                let divRespuesta = document.getElementById("respuesta");
                divRespuesta.innerHTML = this.responseText;
                resultadoJSON(this.responseText);
            } else {}
            break;
    }
}

function asincrona() {
    let director = document.getElementById("director").value;
    let duracion = document.getElementById("duracion").checked;
    let genero = document.getElementById("genero").value;
    let nombre = document.getElementById("nombre").value;

    document.getElementById("spinner").style = "display:block";
    if (duracion) {
        duracion = ">"
    } else {
        duracion = "<="
    }

    miXHR = new objetoXHR();
    miXHR.open("POST", "servidor.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = estado;

    let datos = "&genero=" + genero + "&nombre=" + nombre + "&director=" + director + "duracion=" + duracion;
    miXHR.send(datos);
    document.getElementById("spinner").style = "display:none";
}

function resultadoJSON(respuesta) {
    var resultados = JSON.parse(respuesta)
    let salida = "<table border='1'><tr><th> DIRECTOR </th><th> GENERO </th><th> NOMBRE </th><th> DURACION </th></tr>";

    for (let i = 0; i < resultados.length; i++) {
        let resultado = resultados[i];
        salida += "<tr><td>" + resultado.director + "</td><td>" + resultado.genero + "</td><td>" + resultado.nombre + "</td><td>" +
            resultado.duracion + "</td></tr>";
    }
    salida += "</table>";
    document.getElementById("respuesta").innerHTML = salida;
}