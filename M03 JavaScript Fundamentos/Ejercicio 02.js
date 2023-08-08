/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}
devolverString('hola');

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var s= x+y;
   return s;
}
suma(100,50);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var r=x-y;
   return r;
}
resta(10,5);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var d= x/y;
   return d;
}
divide(20,5);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var m=x*y;
   return m;
}
multiplica(9,3);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var obtrest=x%y;
   return obtrest; 
}
obtenerResto(21, 5);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
