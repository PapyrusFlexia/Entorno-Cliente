<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
$nombreFiltro = $_POST["nombre"];
$conn         = mysqli_connect('localhost', 'root', '', 'juegosrol');
$sql          = "SELECT `nombre`, `genero`, `desarrollador`, `duracion` FROM `juegos` WHERE nombre=$nombreFiltro";
$juegos       = array();
$result       = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                $juegos[] = $row;
}
echo json_encode($juegos);
?>