// @ts-check
"use strict"

/*---------------------------------------------------------------------------
         File: ej3.js
         Date: 2022/dec/19
      Version: 1.1
  Description: Evaluación 1, ejercicio 3
       Author: (C) Santiago Aréchaga Tarruell, 2022
  ---------------------------------------------------------------------------*/

/*
Escribe las siguientes funciones para manipular arrays. Todas las funciones operan sobre el array indicado (no crean ni devuelven un nuevo array) y no utilizan arrays intermedios, realizando todas las manipulaciones necesarias directamente sobre el array:

1. array_eliminar_elemento(array, indice)
Elimina el elemento del array en la posición indicada por índice, "moviendo" el resto de índices para no dejar "hueco"

2. array_eliminar_elementos(array, indice, numero)
Elimina tantos elementos del array como indique numero empezando en la posición indicada por índice, "moviendo" el resto de índices para no dejar "huecos"

3. array_insertar_elemento(array, indice, elemento)
Inserta el elemento en la posición indicada en indice, "moviendo" previamente el resto de los elementos para hacer "hueco"

4. array_insertar_elementos(array, indice, array_elementos)
Inserta los elementos del array_elementos en la posición indicada en indice, "moviendo" previamente el resto de los elementos para hacer "hueco"

Todas las funciones deben comprobar que los parámetros son válidos y no están fuera de rango.
*/

/*
Historial de revisiones:
v1.1: añadidos comentarios y "tipado" @ts-check
v1.0: versión incial
*/

/**
 * Elimina el elemento del array en la posición indicada por `indice`, "moviendo" el resto de índices para no dejar "hueco"
 * @param {any[]} array
 * @param {number} indice
 * @returns {void}
 */
function array_eliminar_elemento(array, indice) {
    array_eliminar_elementos(array, indice, 1);
}

/**
 * Elimina tantos elementos del array como indique `numero` empezando en la posición indicada por `indice`, "moviendo" el resto de índices para no dejar "huecos"
 * @param {any[]} array
 * @param {number} indice
 * @param {number} numero
 * @returns {void}
 */
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

/**
 * Inserta el elemento pasada en `elemento` en la posición indicada en `indice`, "moviendo" previamente el resto de los elementos para hacer "hueco"
 * @param {any[]} array
 * @param {number} indice
 * @param {any} elemento
 * @returns {void}
 */
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

/**
 * Inserta los elementos del array `elementos` en la posición indicada en `indice`, "moviendo" previamente el resto de los elementos para hacer "hueco"
 * @param {any[]} array
 * @param {number} indice
 * @param {any[]} elementos
 * @returns {void}
 */
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
