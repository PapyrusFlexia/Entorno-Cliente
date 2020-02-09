<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
$nombre = $_POST["nombre"];
$sql    = "UPDATE juegos SET nombre='$nombre' where nombre='$nombre'";
$conexion->query($sql);
?>