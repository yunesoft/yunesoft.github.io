var READY_STATE_COMPLETE = 4;
var STATUS_RIGTH = 200;
var objetoXHR = null;

/**
 * Funcion que hace la peticion al servidor
 */
function obtenerDatosServidor(selectedItem, nomPost) {
    objetoXHR = new XMLHttpRequest();
    if (objetoXHR) {
        objetoXHR.onreadystatechange = respuesta; //funcion respuesta onready
        objetoXHR.open("POST", 'php/options.php', true); //conexion abierta con el servidor
        objetoXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //cabecera enviada al servidor, espera una cadena
         //item seleccionado por el usuario
        var data = JSON.stringify({opcion: selectedItem}); // string del objeto JSON
        var querystring = createQueryString(nomPost, data); // creacion del querystring
        objetoXHR.send(querystring); //envio de la peticion al servidor mediante querystring que recibira por post
    }
}
/**
 * Funcion que recibe la peticion del servidor
 */
function respuesta() {
    if (objetoXHR.readyState == READY_STATE_COMPLETE) {
        if (objetoXHR.status == STATUS_RIGTH) {
            var itemSalida = document.getElementById('options2');
            var json = objetoXHR.responseText; //respuesta json del servidor
            var obj = JSON.parse(json); //parse
            var opcion = obj.opciones; //array de opciones devueltas por el servidor
            clearItem(itemSalida);
            for (var i = 0; i < opcion.length; i++) {
                var option = document.createElement('option'); //se crea un objeto option
                option.appendChild(document.createTextNode(opcion[i]));
                itemSalida.appendChild(option); //añadimos texto de especialidades[i]
            }
        }
    }
}
/**
 *
 * @param nomPost Nombre del post que recibirá el servidor
 * @param string String que queremos enviar al servidor
 * @returns {string}
 */
function createQueryString(nomPost, string) {
    return nomPost + "=" + encodeURI(string);
}
/**
 * Funcion que selecciona el objeto seleccionado de un objeto opption
 * @param obj
 * @returns {*|string|string|string|string|string}
 */
function getSelectedItem(obj) {
    var select = document.getElementById(obj);
    return select.options[select.selectedIndex].value;
}
/**
 * Funcion que borra todos los nodos hijos de un nodo
 * @param item
 */
function clearItem(item) {
    while (item.hasChildNodes())
        item.removeChild(item.firstChild);
}
