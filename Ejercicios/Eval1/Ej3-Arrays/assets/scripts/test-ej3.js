// @ts-check

window.addEventListener("load", ejecutar_tests_ejercio3);

function ejecutar_tests_ejercio3() {
    test_array_eliminar_elemento();
    test_array_eliminar_elementos();
    test_array_insertar_elemento();
    test_array_insertar_elementos();
} // ejecutar_tests_ejercio3

function test_array_eliminar_elemento() {
    print_id_zona_print = "zona_array_eliminar_elemento";

    let array = [0, 1, 2, 3, 4, 5];
    print_array(array, "original");

    array_eliminar_elemento(array, 3);
    print_array(array, "eliminar(3)");
} // test_array_eliminar_elemento

function test_array_eliminar_elementos() {
    print_id_zona_print = "zona_array_eliminar_elementos";

    let array = [0, 1, 2, 3, 4, 5];
    print_array(array, "original");

    array_eliminar_elementos(array, 1, 3);
    print_array(array, "eliminar(1,3)");

    array = [0, 1, 2, 3, 4, 5];
    array_eliminar_elementos(array, 5, 1);
    print_array(array, "eliminar(5,1)");

    array = [0, 1, 2, 3, 4, 5];
    array_eliminar_elementos(array, 0, 5);
    print_array(array, "eliminar(0,5)");

    array = [0, 1, 2, 3, 4, 5];
    array_eliminar_elementos(array, 0, 10);
    print_array(array, "eliminar(0,10)");

    array = [0, 1, 2, 3, 4, 5];
    array_eliminar_elementos(array, 4, 10);
    print_array(array, "eliminar(4,10)");
} // test_array_eliminar_elementos

function test_array_insertar_elemento() {
    print_id_zona_print = "zona_array_insertar_elemento";

    let array = [0, 1, 2, 3, 4, 5];
    print_array(array, "original");

    array_insertar_elemento(array, 4, "A");
    print_array(array, "insertar(4,'A')");

    array = [0, 1, 2, 3, 4, 5];
    array_insertar_elemento(array, 9, "B");
    print_array(array, "insertar(9,'B')");
} // test_array_insertar_elemento

function test_array_insertar_elementos() {
    print_id_zona_print = "zona_array_insertar_elementos";

    let array = [0, 1, 2, 3, 4, 5];
    print_array(array, "original");

    array_insertar_elementos(array, 2, ["A", "B", "C"]);
    print_array(array, "insertar(2,['A','B','C'])");

    array = [0, 1, 2, 3, 4, 5];
    array_insertar_elementos(array, 7, ["D"]);
    print_array(array, "insertar(7,['D'])");
} // test_array_insertar_elementos
