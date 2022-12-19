"use strict"

function array_eliminar_elemento(array, indice) {
    array_eliminar_elementos(array, indice, 1);
}

function array_eliminar_elementos(array, indice, numero) {
    if (!Array.isArray(array)) return;
    if ((indice < 0) || (indice >= array.length)) return;

    let final = array.length - 1;
    numero = Math.min(numero, array.length - indice);

    // desplazamos los elementos
    for (let i = indice; i <= final; i++) {
        array[i] = array[i + numero];
    } // for i

    // "reducimos" el array
    array.length -= numero;
} // array_eliminar_elementos

function array_insertar_elemento(array, indice, elemento) {
    if (!Array.isArray(array)) return;
    if (indice < 0) return;

    let final = array.length - 1;

    // "ampliamos" el array
    array.length += 1;

    // desplazamos los elementos
    for (let i = final; i >= indice; i--) {
        array[i + 1] = array[i];
    } // for i

    // "insertamos" el elemento
    array[indice] = elemento;
} // array_insertar_elemento

function array_insertar_elementos(array, indice, elementos) {
    if (!Array.isArray(array)) return;
    if (!Array.isArray(elementos)) return;
    if ((indice < 0) || (elementos.length == 0)) return;

    let final = array.length - 1;

    // "ampliamos" el array
    let hueco = elementos.length;
    array.length += hueco;

    // desplazamos los elementos
    for (let i = final; i >= indice; i--) {
        array[i + hueco] = array[i];
    } // for i

    // "insertamos" los elementos
    for (let i = 0; i < elementos.length; i++) {
        array[i + indice] = elementos[i];
    } // for i
} // array_insertar_elementos
