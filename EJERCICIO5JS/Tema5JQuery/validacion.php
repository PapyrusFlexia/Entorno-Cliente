<?php
function validarNombre($nombre)
{
                $errores = array();
                if ($nombre === "") {
                                $errores[] = "Rellena el nombre";
                } else {
                                if (!preg_match("/[a-zA-Z]{3,}$/", $nombre)) {
                                                $errores[] = "El nombre debe tener 3 o más letras";
                                }
                }
                return $errores;
}
function validarGenero($genero)
{
                $errores = array();
                if ($genero === "") {
                                $errores[] = "Rellena el genero";
                } else {
                                if (!preg_match("/[a-zA-Z]{3,}$/", $genero)) {
                                                $errores[] = "El género debe tener 3 o más letras";
                                }
                }
                return $errores;
}
function validarDesarrollador($desarrollador)
{
                $errores = array();
                if ($desarrollador === "") {
                                $errores[] = "Rellena el desarrollador";
                } else {
                                if (!preg_match("/[a-zA-Z]{3,}$/", $desarrollador)) {
                                                $errores[] = "El desarrollador debe tener 3 o más letras";
                                }
                }
                return $errores;
}
function validarDuracion($duracion)
{
                $errores = array();
                if ($duracion !== "on") {
                                $errores[] = "Para poder añadir, el juego debe estar completo";
                }
                return $errores;
}
$errores                  = array();
$errores["nombre"]        = array();
$errores["genero"]        = array();
$errores["desarrollador"] = array();
$errores["duracion"]      = array();
if (isset($_POST["nombre"])) {
                $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}
if (isset($_POST["genero"])) {
                $errores["genero"] = validarGenero(trim($_POST["genero"]), trim($_POST["genero"]));
}
if (isset($_POST["desarrollador"])) {
                $errores["desarrollador"] = validarDesarrollador(trim($_POST["desarrollador"]));
}
if (isset($_POST["duracion"])) {
                $errores["duracion"] = validarDuracion(trim($_POST["duracion"]));
}
echo json_encode($errores, JSON_FORCE_OBJECT);