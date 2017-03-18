/**
 * Crea una cookie a pasándole por parametros un nombre, un valor y un tiempo de expiracion en dias
 * @param name
 * @param value
 * @param days
 */
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toUTCString();
    }
    else  expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
/**
 * funcion que retorna el valor de una cookie
 * @param c_name : cookie name
 * @returns {*}
 */
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return decodeURI(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
/**
 * Funcion que borra las cookies de usuario;
 */
function userlogout() {
    eraseCookie('name');
    eraseCookie('surname1');
    eraseCookie('surname2');
    eraseCookie('email');

}
/**
 * funcion que borra una cookie
 * @param name
 */
function eraseCookie(name) {
    createCookie(name, "", -1);
}
/**
 * Obtiene el valor de las cookies de usuario y las muestra en el formulario
 */
function getCookies() {
    document.getElementById('name').value = getCookie('name');
    document.getElementById('surname1').value = getCookie('surname1');
    document.getElementById('surname2').value = getCookie('surname2');
    document.getElementById('email').value = getCookie('email');
}
/**
 * Cambia el nombre de usuario si existe la cookie
 */
function setNameCookie() {
        if (getCookie('name').length)
            document.getElementById("user-span").innerText = getCookie('name');

}