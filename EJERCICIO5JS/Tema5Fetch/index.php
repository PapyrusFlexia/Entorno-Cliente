<!DOCTYPE html>
<html lang="en">

<head lang="en">
    <meta charset="UTF-8">
    <title>FILTRAR Y ELIMINAR FETCH</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="funciones.js" defer></script>
    <link rel="stylesheet" href="css.css">
</head>

<body>

<?php
require_once 'servidor.php';
?>
   <div>
        <div>
            <form id="formulario">
                <div class="sk-chase">
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                </div>
        </div>
        <div class="container">
            <table class="table table-dark">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Desarrollador</th>
                    <th>Duracion</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                <?php
while ($juego = $juegos->fetch_assoc()) {
?>
               <tr data-nombreJuego="<?php
    echo $juego["nombre"];
?>">
                    <td><?php
    echo $juego["nombre"];
?></td>
                    <td><?php
    echo $juego["genero"];
?></td>
                    <td><?php
    echo $juego["desarrollador"];
?></td>
                    <td><?php
    echo $juego["duracion"];
?></td>
                    <td><button data-nombreJuego="<?php
    echo $juego["nombre"];
?>" data-accion="eliminar">Eliminar</button></td>
                </tr>    
                <?php
}
?>        
                </tbody>
              </table>
        </div>
    
    <div id="modalEliminar" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Eliminar Juego</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
        <h2>EDITAR FETCH</h2>
        <form>
            <h3>SELECCIONA EL NOMBRE</h3>
            <select name="" id="select" id="id" onchange="validarNombre()">
                <option value=""></option>
                <option value="sw">Star Wars</option>
                <option value="lotr">EL Señor de los Anillos</option>
            </select>
            <input type="text" placeholder="EDITAR NOMBRE" id="nombreEDIT" onchange="validarNombre()">
            <div class="error bg-danger"></div>
            <input type="submit" value="Enviar" onclick="editarJuego()">
            <div class="resultado">

            </div>
        </form>

    </div>

    <div>
        <div>
            <form id="formulario">
                <div class="sk-chase">
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                </div>
        </div>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" onchange="validarNombre()">
        <div class="error bg-danger"></div>
        <label for="genero">Genero</label>
        <input type="text" class="form-control" id="genero" onchange="validarGenero()">
        <div class="error bg-danger"></div>
        <label for="desarrollador">Desarrollador</label>
        <input type="text" class="form-control" id="desarrollador" onchange="validarDesarrollador()">
        <div class="error bg-danger"></div>
        <label>Duración: ¿es un juego completo? (Más de una hora)</label>
        <br>
        <input class="form-check-input" type="checkbox" id="duracion" onchange="validarDuracion()">
        <div class="error bg-danger"></div>
        <br>
        <button type="submit" class="btn btn-primary">Enviar</button>
        <div id="resultado"></div>
        </form>
    </div> 
</body>

</html>