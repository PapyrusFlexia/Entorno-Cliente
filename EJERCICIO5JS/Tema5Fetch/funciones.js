function incluirskchase(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".sk-chase").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}

function objetoXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0', 'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}
$(function() {
    $("button[data-accion='eliminar']").on("click", function(event) {
        let boton = $(event.target);
        mostrarModalEliminar(boton.attr("data-nombreeliminar"));
    });
});

function mostrarModalEliminar(nombreeliminar) {
    $("#modalEliminar").modal("show");
}

function eliminarJuego(nombreeliminar) {
    let form = new FormData();
    form.append("nombre", nombreeliminar);
    fetch("borrar.php", {
        method: "POST",
        body: form
    }).then(function() {
        $("#modalEliminar").modal("hide");
        $("tr[data-nombreJuego='" + nombreeliminar + "']").remove();
    });
}

function editarJuego(nombreeditar) {
    let form = new FormData();
    form.append("nombreEDIT", nombreeditar);
    fetch("editar.php", {
        method: "POST",
        body: form
    });
}

function filtrar() {
    let input = $("#nombre").val();
    $.ajax({
        url: "servidor.php",
        data: {
            nombre: input
        },
        method: "POST",
        dataType: "JSON",
        beforeSend: function() {
            $("#sk-chase").css("display", "block");
        },
    }).done(escribirResultado).fail(function() {
        alert("ERROR");
        $("#resultado").html("ERROR EN LA PETICION, INTENTALO MAS TARDE");
    }).always(function() {
        $("#sk-chase").css("display", "none");
    });
}

function escribirResultado(respuesta) {
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados = respuesta;
    let salida = "<table border='1'><tr><th>NOMBRE</th><th>GENERO</th><th>DESARROLLADOR</th><th>DURACION</th></tr>";
    for (let i = 0; i < resultados.length; i++) {
        let objeto = resultados[i];
        salida += "<tr><td>" + objeto.nombre + "</td><td>" + objeto.genero + "</td><td>" + objeto.desarrollador + "</td><td>" + objeto.duracion + "</td></tr>";
    }
    salida += "</table>";
    divResultado.innerHTML = salida;
}

function validarNombre() {
    let nombreInput = $("#nombre").val();
    let input = $("#nombre");
    $.ajax({
        url: "validacion.php",
        data: {
            nombre: nombreInput
        },
        method: "POST",
        dataType: "JSON",
        beforeSend: function() {
            $("#sk-chase").css("display", "block");
        },
        success: function(text) {
            gestionarErrores(input, text.nombre);
        }
    }).fail(function() {
        alert("ERROR EN LA PETICION");
        $("#error").html("ERROR");
    }).always(function() {
        $("#sk-chase").css("display", "none");
    });
}

function validarGenero() {
    let inputgenero = $("#genero").val();
    let inputnombre = $("#nombre").val();
    let Input = $("#genero");
    $.ajax({
        url: "validacion.php",
        data: {
            genero: inputgenero,
            nombre: inputnombre
        },
        method: "POST",
        dataType: "JSON",
        beforeSend: function() {
            $("#sk-chase").css("display", "block");
        },
        success: function(text) {
            gestionarErrores(Input, text.genero);
        }
    }).fail(function() {
        alert("ERROR");
        $("#resultado").html("ERROR EN LA PETICION");
    }).always(function() {
        $("#sk-chase").css("display", "none");
    });
}

function validarDesarrollador() {
    let inputdesarrollador = $("#desarrollador").val();
    let Input = $("#desarrollador");
    $.ajax({
        url: "validacion.php",
        data: {
            desarrollador: inputdesarrollador
        },
        method: "POST",
        dataType: "JSON",
        beforeSend: function() {
            $("#sk-chase").css("display", "block");
        },
        success: function(text) {
            gestionarErrores(Input, text.desarrollador);
        }
    }).fail(function() {
        alert("ERROR");
        $("#resultado").html("ERROR EN LA PETICION");
    }).always(function() {
        $("#sk-chase").css("display", "none");
    });
}

function validarDuracion() {
    let inputduracion = $("#duracion:checked").val();
    let Input = $("#duracion") 
    $.ajax({
        url: "validacion.php",
        data: {
            duracion: inputduracion
        },
        method: "POST",
        dataType: "JSON",
        beforeSend: function() {
            $("#sk-chase").css("display", "block");
        },
        success: function(text) {
            gestionarErrores(Input, text.duracion);
        }
    }).fail(function() {
        alert("ERROR");
        $("#resultado").html("ERROR EN LA PETICION");
    }).always(function() {
        $("#sk-chase").css("display", "none");
    });
}

function gestionarErrores(input, errores) {
    var siErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (Object.keys(errores).length === 0) {
        input.addClass("bg-success");
    } else {
        siErrores = true;
        input.addClass("bg-danger");
        for (let i = 0; Object.keys(errores).length > i; i++) {
            divErrores.append("<div>" + errores[i] + "</div>");
        }
    }
    input.parent().next().remove();
    return siErrores;
}