# EJERCICIOS OPCIONALES PARA NAVIDAD

- [De las pirámides a Cleopatra](#de-las-piramides-a-cleopatra)
    - [Versión 2](#de-las-piramides-a-cleopatra-version-2)
- [Número jeroglíficos](#numeros-jeroglificos)
    - [Versión 2](#numeros-jeroglificos-version-2)
    - [Versión 3](#numeros-jeroglificos-version-3)
- [La altura de la pirámide](#la-altura-de-la-piramide)
- [Los tesoros de la tumba de Tutankamón](#los-tesoros-de-la-tumba-de-tutankamon)
    - [Versión 2](#los-tesoros-de-la-tumba-de-tutankamon-version-2)
- [Tabla Rosetta (Champollion)](#tabla-rosetta-champollion)
    - [Versión 2](#tabla-rosetta-champollion-version-2)
    - [Versión 3](#tabla-rosetta-champollion-version-3)
- [El tarot egipcio](#el-tarot-egipcio)
    - [Versión 2](#el-tarot-egipcio-version-2)

Los ejercicios se entregarán todos juntos como archivos sueltos en la misma carpeta.
**NO SE ADMITEN** archivos comprimidos o en carpetas

-----------------------------------------------------------------------------
## De las pirámides a Cleopatra

### Descripción general
https://www.aceptaelreto.com/problem/statement.php?id=657&cat=154

### Adaptación a JavaScript y DWEC
En lugar de leer de la entrada estándar (stdin) y utilizar la consola, escribir únicamente una función,
```
/**
 * @param {any} numA
 * @param {any} numB
 * @param {any} numC
 * @return {number}
 */
function fecha_mas_cercana(numA, numB, numC)
```
donde `numA`, `numB` y `numC` hacen referencia a los números A, B y C del enunciado.

Esta función:
- Deberá validar la entrada
    - Se asegurará de que los parámetros sean números y que sean válidos
    - Que ninguno sea 0 o esté fuera de rango
    - Que se cumpla que A < B < C
    - Si no valida, devolverá NaN
- Devolverá
    - El número que cumple lo pedido en el enunciado
    - En caso de empate, devolverá 0

### Recomendación

Escribe una función auxiliar que calcula la "distancia" entre dos fechas.
**Recuerda:** El año 0 no existe

### Entrega
- Un único archivo .js con el código, llamado `de-las-piramides-a-cleopatra.js`

-----------------------------------------------------------------------------
## De las pirámides a Cleopatra, versión 2

Se trata de una ampliación del anterior programa, haciendo una página web que utilice la función anterior.

En particular, dispondrá de 3 campos `input` de tipo texto, correspondientes a los números A, B y C
con sus correspondientes `<label>` y un botón de "calcular".

Al pulsar dicho botón, mostrará en una tabla a continuación el resultado de la ejecución del modo siguiente:
- La tabla tendrá una cabecera `<thead>` con las columnas "A", "B", "C" y "Resultado"
- Dicha tabla no debe mostrarse hasta que se ejecute por lo menos una vez la función de cálculo
- Se añadirá al final de la tabla los 3 valores introducidos por el usuario para A, B y C, junto con el resultado de ejecutar la función
- Se podrá utilizar el botón de "calcular" tantas veces como se quiera

### Entrega
- Un único archivo .js con el código estrictamente necesario para la versión 2, llamado `de-las-piramides-a-cleopatra-parte-2.js`
    - No debe incluir el código de la función de cálculo
- Un único archivo .html con el código web, llamado `de-las-piramides-a-cleopatra.html`
    - Deberá, obviamente, referenciar `de-las-piramides-a-cleopatra.js`

-----------------------------------------------------------------------------
## Números jeroglíficos

### Descripción general
https://www.aceptaelreto.com/problem/statement.php?id=659&cat=154

### Adaptación a JavaScript y DWEC
En lugar de leer de la entrada estándar (stdin) y utilizar la consola, escribir únicamente una función,
```
/**
 * @param {number} numero 
 * @returns {string}
 */
function numeros_jeroglificos(numero)
```
que tome como entrada un número y devuelva la cadena de texto correspondiente.

La función recibe un parámetro que se garantiza que sea de tipo numérico entero (sin decimales), pero deberá validar la entrada,
no admitiendo números NaN o menores de 1, devolviendo la cadena vacía en este caso

### Enlaces de utilidad
- Número egipcios: https://en.wikipedia.org/wiki/Egyptian_numerals

### Entrega
- Un único archivo .js con el código, llamado "numeros-jeroglificos.js"

-----------------------------------------------------------------------------
## Números jeroglíficos, versión 2

Una ampliación del anterior.

La función tendrá la siguiente signatura:
```
/**
 * @param {number} numero 
 * @returns {{numero: number, simbolico: string, jeroglifico: string}}
 */
 function numeros_jeroglificos_v2(numero)
```
y devuelve un objeto con 3 propiedades con los tipos indicados en la anotación _typescript_, donde
- `numero` es el número introducido,
- `simbolico` es la representación del número en texto
- `jeroglífico` es la representación del número utilizando jeroglíficos (utilizando los códigos Unicode estandarizados para jeroglíficos)

### Enlaces de utilidad
- Lista de jeroglíficos egipcios: https://en.wikipedia.org/wiki/List_of_Egyptian_hieroglyphs
- Correspondencia con la lista de signos de Gardiner y Unicode: https://en.wikipedia.org/wiki/List_of_Egyptian_hieroglyphs#List_of_hieroglyphs
- Uso de Unicode en cadenas de texto en JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences

### Recomendación
Crea internamente un array de objetos con una estructura similar al objeto de salida, pero únicamente para las
potencias de 10

### Entrega
- Un único archivo .js con el código, llamado "numeros-jeroglificos-v2.js"

-----------------------------------------------------------------------------
## Números jeroglíficos, versión 3

Escribir una página sencilla HTML que utilice las funciones de la versión 2
La página tendrá un INPUT de tipo numérico y un botón de "convertir"

Al pulsar el botón, se convertirá el número a "egipcio" y se añadirá a una tabla a continuación del formulario
Esta tabla tendrá 3 columnas: número, representación simbólica, representación en jeroglífico
Cada cálculo nuevo se añadirá al _principio_ de la tabla (`element.prepend()`)

Para la celda con el texto "jeroglífico" utiliza una clase CSS llamada "jeroglifico", cuya definición se añadirá directamente
en el `<head>` como `.jeroglifico { font-family: sans-serif ; font-size: 3em; }`.

En Windows 10 con Edge se ven correctamente los jeroglíficos utilizando este CSS (ver archivos adjuntos 'jeroglificos.html' y 'jeroglificos.png')

### Entrega
- Un único archivo .js con el código estrictamente necesario para la versión 3, llamado "numeros-jeroglificos-parte-3.js"
    - No debe incluir el código de la versión 2
- Un único archivo .html con el código web, llamado "numeros-jeroglificos.html"
    - Deberá, obviamente, referenciar "numeros-jeroglificos-parte-2.js"
- No habrá archivo de CSS

-----------------------------------------------------------------------------
## La altura de la pirámide

### Descripción general
https://www.aceptaelreto.com/problem/statement.php?id=658&cat=154

La descripción del enunciado es muy ambigua cuando habla de "huecos".
Para evitar esta ambigüedad, se modifica el ejercicio como se indica a continuación

### Adaptación a JavaScript y DWEC
Escribir una función JS con la siguiente signatura, que calcula la áltura máxima de la pirámide
```
/**
 * @param {number} bloques
 * @param {number} huecos
 * @returns {number}
 */
function altura_maxima_piramide(bloques, huecos)
```
Donde
- `bloques` es un número entero válido garantizado con la cantidad de bloques de piedra utilizados
para la construcción de una pirámide siguiendo la disposición descrita
- `huecos` es un número con decimales válido entre `0.0` y `50.0` que indica que un porcentaje de huecos máximos por nivel

### Aclaraciones
- Para no andar con complicados cálculos matemáticos de arquitectura de cómo podrían estar dispuestos los huecos dentro de la pirámide,
vamos "a tirar por la calle de en medio" asumiendo que en cada nivel puede haber un número máximo de huecos.
- Este número de huecos vendrá dado por el porcentaje `huecos` y variará, obviamente, en función de la altura.
El número de huecos tendrá que ser un número entero a la baja calculado sobre el número de bloques necesarios para cada nivel
- Puede suceder que falten bloques de piedra para construir el "último" nivel.
Si no hay suficientes bloques para el nivel, éste no se puede construir y, por tanto, la pirámide no tendrá esa altura máxima
- Recuerda: se trata de calcular la altura máxima

### Entrega
- Un único archivo .js con el código, llamado `la-altura-de-la-piramide.js`

### Variante 2 (opcional)
```
/**
 * @param {number} bloques
 * @param {number} huecos
 * @returns {{altura: number, sobran: number, faltan: number}}
 */
function altura_maxima_piramide_v2(bloques, huecos)
```
Es básicamente la misma función, pero devolviendo un objeto con tres propiedades de tipo number:
- `altura`: la altura máxima de la pirámide dados los bloques y el porcentaje de huecos
- `sobran`: el número de bloques (o 0) que sobran
- `faltan`: el número de bloques (o 0) que faltan para poder construir un nivel más en la pirámide

-----------------------------------------------------------------------------
## Los tesoros de la tumba de Tutankamón

### Descripción general
https://www.aceptaelreto.com/problem/statement.php?id=661&cat=154

### Adaptación a JavaScript y DWEC
Se creará una función
```
/**
 * @param {string | string[] | {nombre: string, valor: number, peso: number}[]} inventario
 * @returns {string[]}
 */
function ordenar_inventario(inventario)
```
que devuelva un array con los nombres de los objetos del inventario ordenado conforme a las reglas

`inventario` podrá ser:
- una cadena de texto, con múltiples líneas, una por elemento del inventario
- un array de cadenas de texto con la descripción de un objeto del inventario
- un array de objetos con las propiedades indicadas en la anotación _typescript_

La función deberá validar la entrada, devolviendo un array vacío en caso de error

### Recomendación
Crea dos funciones auxiliares para realizar el 'parseo' de `inventario`, cuando sea una cadena de texto
o un array de cadenas de texto

### Entrega
- Un único archivo .js con el código, llamado `los-tesoros-de-la-tumba-de-tutankamon.js`

-----------------------------------------------------------------------------
## Los tesoros de la tumba de Tutankamón, versión 2

Una página HTML sencilla para probar el código anterior.
Tendrá un `<textarea>` para indicar el inventario (un elemento por línea) y un botón de "ordenar"

Al pulsar el botón, mostrará, en una tabla, el resultado de la ordenación. La tabla tendrá tres columnas
(crear el correspondiente `<thead>`) "Objeto", "Valor", "Peso" y para cada objeto
se mostrará su nombre, valor y peso

Cada vez que se pase un inventario nuevo, la tabla ya existente se borrará

### Entrega
- Un único archivo .js con el código estrictamente necesario para la versión 2, llamado `los-tesoros-de-la-tumba-de-tutankamon-v2.js`
    - No debe incluir el código de la función de cálculo
- Un único archivo .html con el código web, llamado `los-tesoros-de-la-tumba-de-tutankamon.html`
    - Deberá, obviamente, referenciar `los-tesoros-de-la-tumba-de-tutankamon.js`

-----------------------------------------------------------------------------
## Tabla Rosetta (Champollion)

### Descripción general
https://www.aceptaelreto.com/problem/statement.php?id=660&cat=154

### Adaptación a JavaScript y DWEC
Escribiremos una primera versión que 'calcule' las sílabas de una palabra.

En concreto, una función que devuelva un array con las sílabas, entendiendo
por sílaba la definición dada en la descripción general. Si la cadena está en blanco, devolverá un array vacío
```
/**
 * @param {string} palabra
 * @returns {string[]}
 */
function descomponer_silabas(palabra)
```

Por ejemplo, `"Nefertari"` -> `["Ne", "fer", "ta", "ri"]`.

Contrariamente a la descripción general, nuestra función en JS deberá aceptar palabras con un número arbitrario de sílabas

### Aclaración importante
La definición de sílaba no es ciertamente válida en todos los casos para español. Por ejemplo, la palabra "quicio"
está formada por las sílabas "qui" y "cio". Sin embargo, con la definición de sílaba dada, tendríamos
`"Quicio"` -> `["Qu", "i", "ci", "o"]`. La implementación debe seguir la definición de sílaba que se ha dado, y no la definición de sílaba en español.

### Entrega
- Un único archivo .js con el código, llamado `tabla-rosetta-champollion.js`

-----------------------------------------------------------------------------
## Tabla Rosetta (Champollion), versión 2

Ampliaremos a calcular sílabas de una frase, mediante una función
```
/**
 * @param {string} frase
 * @returns {string[]}
 */
function descomponer_frase_silabas(frase)
```

Devolverá un array con las sílabas de la frase, insertando un string vacío entre palabras
Por ejemplo `"mi mama me mima"` -> `["mi", "", "ma", "ma", "", "me", "", "mi", "ma"]`

Contrariamente a la descripción general, nuestra función en JS deberá aceptar frases con un número arbitrario de palabras.
Así mismo, deberá aceptar que haya más de un espacio entre palabras o espacios al principio o al final.
Si `frase` está "en blanco" (cadena vacía o solo espacios), devolverá un array vacío.

### Entrega
- Un único archivo .js con el código, llamado `tabla-rosetta-champollion-version-2.js`

-----------------------------------------------------------------------------
## Tabla Rosetta (Champollion), versión 3

Implementaremos el problema completo, es decir, dada una frase calcular el número de jeroglíficos (sílabas)
únicos necesarios para escribirla, mediante una función
```
/**
 * @param {string} frase
 * @returns {number}
 */
function contar_silabas_unicas(frase)
```
Donde `frase` seguirá las normas que hemos indicado en la versión 2 para la función `descomponer_frase_silabas`

_Aclaración:_
- La separación entre palabras NO cuenta como una sílaba
- La comparación de sílabas única ignorará mayúsculas y minúsculas. Así "Ram" y "ram" son la misma sílaba

### Entrega
- Un único archivo .js con el código, llamado `tabla-rosetta-champollion-version-3.js`

-----------------------------------------------------------------------------
## El tarot egipcio

### Descripción general
https://es.wikipedia.org/wiki/Tarot_Egipcio

Obviando el tema esotérico, un problema muy interesante desde el punto de vista informático es el de "barajar" o "desordenar" una baraja de cartas o un conjunto de datos.
Más en concreto, la generación de una permutación al azar de un conjunto de datos (normalmente guardados en un array)

Se trata de escribir una función que "baraje" un array.

La restricción principal que se solicita es que no debe devolver un nuevo array; debe manipular directamente el array que se le ha pasado.
Idealmente, tampoco debiera utilizar arrays auxiliares o precisar memoria extra mientras se "baraja" el array.

Así, la signatura de la función será
```
/**
 * @param {any[]} array
 * @returns {void}
 */
function barajar(array)
```

Si `array` no es un array o si está vacío, la función terminará inmediatamente

### Entrega
- Un único archivo .js con el código, llamado `tarot-egipcio.js`


-----------------------------------------------------------------------------
## El tarot egipcio, versión 2

### Descripción general
Otra actividad que se suele hacer en el tarot es sacar una o más cartas "al azar". Se pide implementar una función
que devuelva "al azar" 'n' elementos de un array dado. Así, la función sería
```
/**
 * @param {any[]} array
 * @param {number} numero
 * @returns {any[]}
 */
function sacar_al_azar(array, numero)
```

- Si `array` no es un array, está vacío, o 'numero' es menor de 1, devolverá un array vacío
- Si `numero` es mayor o igual que la longitud del array, devolverá el array "barajado"
- Si `numero` es menor de la longitud del array, devolverá un array de longitud 'numero' con los elementos extraídos "al azar" de `array`

Se valorará positivamente hacer un uso óptimo de la memoria y del número de pasos necesarios para obtener el array de resultado

### Entrega
- Un único archivo .js con el código, llamado `tarot-egipcio-parte-2.js`
    - Este código será **independiente** del código entregado en `tarot-egipcio.js`
