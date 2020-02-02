<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
$nombre        = $_POST["nombre"];
$genero        = $_POST["genero"];
$desarrollador = $_POST["desarrollador"];
$duracion      = $_POST["duracion"];
$conn          = mysqli_connect('localhost', 'root', '', 'juegosrol');
$sql           = "INSERT INTO `juegos`( `nombre`, `genero`,`desarrollador`, `duracion`) VALUES ('$nombre','$genero','$desarrollador,'$duracion')";
$result        = mysqli_query($conn, $sql);
?>