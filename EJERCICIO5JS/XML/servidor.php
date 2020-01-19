<?php

header('Content-Type: text/xml');
header('Cache-Control: no-cache, must-revalidate');
$conn = mysqli_connect( 'localhost', 'root', '', 'peliculas');
$sql = "SELECT director, duracion, genero, nombre FROM peliculas";
$result = mysqli_query($conn, $sql);

echo '<?xml version="1.0" encoding="utf-8"?>
    <juegosDePeliculas>';
    while($resultado = mysqli_fetch_array($result))
 {
    echo "<pelicula>";
    echo "<director>" . $resultado['director'] . "</director>";
    echo "<duracion>" . $resultado['duracion'] . "</duracion>";
    echo "<genero>" . $resultado['genero'] . "</genero>";
    echo "<nombre>" . $resultado['nombre'] . "</nombre>";
    echo "</pelicula>";
 }
echo "</juegosDePeliculas>";

?>