/*---------------------------------------------------------------------------
         File: print.js
         Date: 2022/nov/14
      Version: 1.1
  Description: Librería "print" para depuración de código
       Author: (C) Santiago Aréchaga Tarruell, 2022
  ---------------------------------------------------------------------------*/

var print_id_zona_print = "zona_print";

function _print_obtener_elemento() {
    let print_element = window.document.getElementById(print_id_zona_print);

    if (print_element === null) {
        print_element = window.document.createElement("code");
        print_element.id = print_id_zona_print;
        window.document.body.append(print_element);
    } // if

    return print_element;
} // _print_obtener_elemento

function _print_append(elemento) {
    let print = _print_obtener_elemento();
    print.append(elemento);
} // _print_append

// Este código está adaptado de MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
function _print_typeof(valor) {
    // null? Para JS typeof(null) es object siempre
    if (valor === null) {
         return "null";
    } // if

    const tipo_base = typeof valor;
    
    // tipos primitivos
    if (!["object", "function"].includes(tipo_base)) {
        return tipo_base;
    } // if

    // Symbol.toStringTag often specifies the "display name" of the
    // object's class. It's used in Object.prototype.toString().
    const tag = valor[Symbol.toStringTag];
    if (typeof tag === "string") {
        return `object: ${tag}`;
    } // if

    // If it's a function whose source code starts with the "class" keyword
    if ((tipo_base === "function") &&
        Function.prototype.toString.call(valor).startsWith("class")) {
        return "class";
    } // if

    // The name of the constructor; for example `Array`, `GeneratorFunction`,
    // `Number`, `String`, `Boolean` or `MyCustomClass`
    const className = valor.constructor.name;
    if (typeof className === "string" && className !== "") {
        return className;
    }

    // At this point there's no robust way to get the type of value,
    // so we use the base implementation.
    return tipo_base;
} // _print_typeof

function _print_append_valor(etiqueta, valor_variable) {
    if ((valor_variable !== null) && (valor_variable !== undefined)) {
        let valor = window.document.createElement("span");
        valor.className = "print print-valor";

        if (typeof valor_variable === "string") {
            valor.textContent = `"${String(valor_variable)}"`;
        } else        {
            valor.textContent = String(valor_variable);
        } // if-else
        etiqueta.append(valor);

        let espacio = window.document.createTextNode(" ");
        etiqueta.append(espacio);
    } // if

    let tipo = window.document.createElement("i");
    tipo.className = "print print-tipo";
    tipo.textContent = _print_typeof(valor_variable)
    etiqueta.append(tipo);

    return etiqueta;
} // _print_append_valor

function print(valor) {
    let texto = window.document.createElement("div");
    texto.textContent = String(valor);

    _print_append(texto);
} // print

function print_variable(variable, nombre_variable) {
    let div = window.document.createElement("div");
    div.className = "print print-variable";

    // mostrar el nombre de la variable, si se ha pasado como argumento
    if (nombre_variable !== undefined) {
        nombre = window.document.createElement("span");
        nombre.className = "print print-nombre-variable";
        nombre.textContent = String(nombre_variable);
        div.append(nombre);

        let igual = window.document.createElement("span");
        igual.className = "print print-igual";
        igual.textContent = " = ";
        div.append(igual);
    } // if

    // agregar el valor de la variable
    _print_append_valor(div, variable);

    _print_append(div);
} // print_variable

function print_array(array, nombre_array) {
    let div = window.document.createElement("div");
    div.className = "print print-array";

    // es un array?
    if (!Array.isArray(array)) {
        let error = window.document.createElement("strong");
        error.textContent = (nombre_array === undefined)? "no es un array" : `\`${nombre_array}\` no es un array`;
        div.append(error);

        _print_append(div);
        return;
    } // if

    // mostrar el nombre del array, si se ha pasado como argumento
    if (nombre_array !== undefined) {
        nombre = window.document.createElement("span");
        nombre.className = "print print-nombre-variable";
        nombre.textContent = String(nombre_array);
        div.append(nombre);

        let igual = window.document.createElement("span");
        igual.className = "print print-igual";
        igual.textContent = " = [";
        div.append(igual);
    }
    else {
        nombre = window.document.createElement("span");
        nombre.className = "print print-igual";
        nombre.textContent = "[";
        div.append(nombre);
    } // if-else

    let cuenta = 0;
    for (let indice in array) {
        let elemento = window.document.createElement("div");
        elemento.style = "text-indent: 1.5em";
        elemento.className = "print print-array-elemento";

        let indice_array = window.document.createElement("span");
        indice_array.className = "print print-indice-array";
        indice_array.textContent = String(indice);
        elemento.append(indice);

        let igual = window.document.createElement("span");
        igual.className = "print print-igual";
        igual.textContent = ": ";
        elemento.append(igual);

        _print_append_valor(elemento, array[indice]);
        div.append(elemento);
        cuenta++;
    } // for indice

    nombre = window.document.createElement("span");
    nombre.textContent = "]";
    div.append(nombre);

    let texto = window.document.createTextNode(" ");
    div.append(texto);

    let properties = window.document.createElement("span");
    properties.textContent = `{ length = ${array.length}, cuenta: ${cuenta} }`;
    div.append(properties);

    _print_append(div);
} // print_array

function print_objeto(objeto, nombre_objeto) {
    let div = window.document.createElement("div");
    div.className = "print print-objeto";

    // es un objeto?
    if (typeof objeto !== "object") {
        let error = window.document.createElement("strong");
        error.textContent = (nombre_objeto === undefined)? "no es un objeto" : `\`${nombre_objeto}\` no es un objeto`;
        div.append(error);

        _print_append(div);
        return;
    } // if

    // mostrar el nombre del objeto, si se ha pasado como argumento
    if (nombre_objeto !== undefined) {
        nombre = window.document.createElement("span");
        nombre.className = "print print-nombre-variable";
        nombre.textContent = String(nombre_objeto);
        div.append(nombre);

        let igual = window.document.createElement("span");
        igual.className = "print print-igual";
        igual.textContent = " = {";
        div.append(igual);
    }
    else {
        nombre = window.document.createElement("span");
        nombre.className = "print print-igual";
        nombre.textContent = "{";
        div.append(nombre);
    } // if-else

    for (let clave in objeto) {
        let elemento = window.document.createElement("div");
        elemento.style = "text-indent: 1.5em";
        elemento.className = "print print-array-elemento";

        let indice = window.document.createElement("span");
        indice.className = "print print-indice-array";
        if (typeof clave === "string") {
            indice.textContent = `"${String(clave)}"`;
        }
        else {
            indice.textContent = String(clave);
        } // if-else
        elemento.append(indice);

        let igual = window.document.createElement("span");
        igual.className = "print print-igual";
        igual.textContent = ": ";
        elemento.append(igual);

        _print_append_valor(elemento, objeto[clave]);
        div.append(elemento);
    } // for i

    nombre = window.document.createElement("span");
    nombre.textContent = "}";
    div.append(nombre);

    // añadimos el tipo a continuación
    let texto = window.document.createTextNode(" ");
    div.append(texto);

    let tipo = window.document.createElement("i");
    tipo.className = "print print-tipo";
    tipo.textContent = _print_typeof(objeto)
    div.append(tipo);

    _print_append(div);
} // print_objeto
