<?php
$opciones['Sugerencia'] = ['Mejoras', 'Bugs', 'Otas'];
$opciones['Queja'] = ['Grave', 'Muy Grave', 'Extremadamente Grave'];
$opciones['Informacion'] = ['Facturacion', 'Personal', 'Otro'];

$response = $_POST['titulo'];
$doc = json_decode($response, true);
$titulacion = $doc['opcion'];

$objeto_json = new stdClass();
$objeto_json->opciones = $opciones[$titulacion];
echo json_encode($objeto_json);