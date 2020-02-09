<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
$nombre = $_POST["nombre"];
$sql    = "DELETE FROM juegos where nombre='$nombre'";
$conexion->query($sql);
?>