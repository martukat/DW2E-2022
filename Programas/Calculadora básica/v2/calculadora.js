// --@ts-check
"use strict";

var lista_operadores = [];
var inicializado = false;

function objeto_operador(funcion, texto, ayuda, operandos) {
    this.funcion = funcion;
    this.texto = texto;
    this.ayuda = ayuda;
    this.operandos = (operandos === undefined) ? 2 : operandos;
};

class Operador {
    constructor(funcion, texto, ayuda) {
        this.funcion = funcion;
        this.texto = texto;
        this.ayuda = ayuda;
    }
};

class OperadorExtendido extends Operador {
    constructor(funcion, texto, ayuda, operandos) {
        super(funcion, texto, ayuda);
        this.operandos = (operandos === undefined) ? 2 : operandos;
    }
};

function inicializar_operadores() {
    let operador = new Object();
    operador.funcion = (op1, op2) => op1 + op2;
    operador.texto = "+";
    lista_operadores.push(operador);

    operador = new objeto_operador(
        (op1, op2) => op1 - op2,
        "-", "Diferencia de los dos números");
    lista_operadores.push(operador);

    operador = {
        funcion: (op1) => -op1,
        texto: "neg",
        ayuda: "Cambio de signo",
        operandos: 1,
    };
    lista_operadores.push(operador);

    operador = new Operador((op1, op2) => op1 * op2, "*");
    lista_operadores.push(operador);

    operador = new OperadorExtendido(Math.random, "0-1", "Obtiene un número aleatorio entre 0 y 1", 0);
    lista_operadores.push(operador);
}

function on_combo_change_mostrar_ayuda() {
    let combo = (window.document.getElementById("combo_operador"));
    let indice = Number(combo.value);

    let operador = lista_operadores[indice];

    let ayuda = window.document.getElementById("ayuda");
    let texto_ayuda = operador.ayuda;
    ayuda.textContent = (texto_ayuda === undefined) ? "No hay ayuda disponible" : texto_ayuda;
} // on_combo_change_mostrar_ayuda

function on_combo_change_habilitar_operandos() {
    let combo = (window.document.getElementById("combo_operador"));
    let indice = Number(combo.value);
    let operador = lista_operadores[indice];

    let operandos = operador.operandos;
    if (operandos === undefined) operandos = 2;

    let input1 = window.document.getElementById("input_operando_1");
    input1.disabled = (operandos < 1);

    let input2 = window.document.getElementById("input_operando_2");
    input2.disabled = (operandos < 2);
} // on_combo_change_habilitar_operandos

function inicializar_calculadora() {
    if (inicializado) return;

    inicializar_operadores();

    // inicializar el combo
    let combo = (window.document.getElementById("combo_operador"));
    for (let i = 0 ; i<lista_operadores.length ; i++) {
        let option = window.document.createElement("option");
        option["value"] = String(i);
        option.textContent = lista_operadores[i].texto;

        combo.append(option);
    } // for i

    combo.addEventListener("change", on_combo_change_mostrar_ayuda);
    combo.addEventListener("change", on_combo_change_habilitar_operandos);

    on_combo_change_mostrar_ayuda();
    on_combo_change_habilitar_operandos();

    inicializado = true;
} // inicializar_calculadora

function calcular() {
    let operando1 = (/** @type {HTMLInputElement} */ (window.document.getElementById("input_operando_1"))).value;
    let operando2 = window.document.getElementById("input_operando_2").value;

    operando1 = Number(operando1);
    operando2 = Number(operando2);

    let indice_combo = window.document.getElementById("combo_operador").value;
    let operador = lista_operadores[indice_combo].funcion;

    let resultado = operador(operando1, operando2);

    let span_resultado = window.document.getElementById("input_resultado");
    span_resultado.value = `${resultado}`;
} // calcular

window.onload = inicializar_calculadora;