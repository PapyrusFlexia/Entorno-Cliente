<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
$servidor  = "localhost";
$usuario   = "root";
$password  = "";
$baseDatos = "juegosrol";
$conexion  = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql    = "SELECT nombre,genero,desarrollador,duracion FROM juegos";
$juegos = $conexion->query($sql);
?>