/************ EXPRESIONES REGULARES ************/

/************ expresion regular sting con espacio ************/
var regexString = /^[a-záéíóúÁÉÍÓÚ]+$/i;
/************ expresion regular email ************/
var regexEmail = /^\w+@\w+?\.*\w{2,3}$/;
/************ expresion regular telefono movil ************/
var regexTelefonoMovil = /^6\d{8}$/;
/************ expresion regular telefono Fijo ************/
var regexTelefonoFijo = /^9\d{8}$/;

/**
 * funcion que comprueba si todos los campos estan rellenados y su longitud no es nula
 * de ser asi habilita el campo de terminos y condiciones
 */
function habilitar() {
    var array = new Array();
    array.push(document.getElementById("name").value.length);
    array.push(document.getElementById("surname1").value.length);
    array.push(document.getElementById("surname2").value.length);
    array.push(document.getElementById("email").value.length);
    array.push(document.getElementById("mobil").value.length);
    array.push(document.getElementById("texto").value.length);

    var camposRellenados = true;
    for (var i = 0; i < array.length; i++) {
        if (Number(array[i]) <= 0) {
            camposRellenados = false;
            break;
        }
    }
    if (camposRellenados) {
        document.getElementById("conditions").disabled = false;

    } else {
        document.getElementById("conditions").disabled = true;
        document.getElementById("conditions").checked = false;
        document.getElementById("submit").disabled = true;
    }

}
/**
 * funcion que habilita o deshabilita el boton de submit segun se pulse en el campo checkbox condiciones
 */
function habilitarchk() {
    document.getElementById("submit").disabled = (document.getElementById("conditions").checked) ? false : true;

}
/**
 * Funcion que comprueba si el parametro imput introducido cumple el parametro patron
 * @param regexp
 * @param input
 * @returns {boolean}
 */
function chk(regexp, input) {
    return regexp.test(input);
}
function validar() {
    /************ CAMPOS A COMPROBAR ************/
    var nombre = document.getElementById("name").value;
    var apellido1 = document.getElementById("surname1").value;
    var apellido2 = document.getElementById("surname2").value;
    var email = document.getElementById("email").value;
    var telefonoMovil = document.getElementById("mobil").value;

    /* Opciones del select*/
    var auxCont = document.getElementById("options");
    var opcionSeleccionada = auxCont.selectedIndex;
    /* Opcione seleccionada*/
    var opcion = auxCont.options[opcionSeleccionada].text;

    switch (true) {
        case (!chk(regexString, nombre)):
            alert('Nombre erroneo');
            return false;
        case (!chk(regexString, apellido1)):
            alert('Primer apellido erroneo');
            return false;
        case (!chk(regexString, apellido2)):
            alert('Segundo apellido erroneo');
            return false;
        case (!chk(regexEmail, email)):
            alert('Email erroneo');
            return false;
        case (!chk(regexTelefonoMovil, telefonoMovil)):
            alert('Telefono movil erroneo');
            return false;
        case (opcion == 'Ninguna'):
            alert('Seleccione una opcion');
            return false;
    }
    /** CREAMOS LAS COOKIES **/
    createCookie('name', nombre, 7);
    createCookie('surname1', apellido1, 7);
    createCookie('surname2', apellido2, 7);
    createCookie('email', email, 7);

    return true
}
function seleccionaOpcion() {
    var auxOpcion = document.getElementById("options2");
    auxOpcion.disabled = false;
    var itemSeleccionado = getSelectedItem('options');
    if (itemSeleccionado != 'Ninguna') {
        obtenerDatosServidor(itemSeleccionado, 'titulo');
    } else {
        auxOpcion.disabled = true;
    }
}
/**
 * Funcion que comprueba si un campo tiene un error y si lo tiene genera un div debajo
 * indicando con un mensaje como debe rellenarse el campo
 * @param field
 * @param id
 */
function onError(field, id) {
    var mensaje = '';
    switch (id) {
        case 'name':
        case 'surname1':
        case 'surname2':
            mensaje = (!chk(regexString, field.value)) ? 'Introduce solo letras, por favor' : '';
            break;
        case 'email':
            mensaje = (!chk(regexEmail, field.value)) ? 'Introduce el email correcamente, por favor' : '';
            break;
        case 'phone':
            mensaje = (!chk(regexTelefonoFijo, field.value)) ? 'El teléfono fijo debe empezar por 9 y tener 9 cifras ' : '';
            break;
        case 'mobil':
            mensaje = (!chk(regexTelefonoMovil, field.value)) ? 'El teléfono móvil debe empezar por 6 y tener 9 cifras ' : '';
            break;
    }
    var div = field.nextElementSibling;
    div.classList.add('help-block');
    div.innerHTML = mensaje;

    if (field.value == '') {
        div = field.nextElementSibling;
        div.innerHTML = 'Rellene el campo, por favor';
    }

}
/**
 * funcion que llamamos con un envento onblur para que si el campo se deja vacio sin rellenar borre el mensaje
 * de error.
 * @param field
 */
function vaciarError(field) {
    if (field.value == '') {
        var div = field.nextElementSibling;
        div.innerHTML = '';

    }
}


