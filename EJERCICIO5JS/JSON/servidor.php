<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
$pelicula = $_POST["pelicula"];
$duracion = $_POST["duracion"];
$genero   = $_POST["genero"];
$nombre   = $_POST["nombre"];

$conn   = mysqli_connect('localhost', 'root', '', 'peliculas');
$sql    = "SELECT director, duracion, genero, nombre FROM peliculas WHERE pelicula=$pelicula AND duracion $duracion 'horas' AND genero='$genero' AND nombre='$nombre'";
$result = mysqli_query($conn, $sql);
if (empty($result) or $result == null or isset($result)) {
    echo "No existe resultado valido para esa consulta";
} else {
    while ($mostrar = mysqli_fetch_array($result)) {
        $resultado[] = $mostrar;
    }
    echo json_encode($resultado);
}
?>