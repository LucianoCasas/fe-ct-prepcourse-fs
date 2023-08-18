/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
devolverPrimerElemento('pizza');

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1]
}
devolverUltimoElemento('pizza');

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}
obtenerLargoDelArray('pizza');

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray=[];
   for(var i=0 ; i< array.length ; i++){
     nuevoArray.push(array[i]+1);
   }
   return nuevoArray;
}
incrementarPorUno(8, 5);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
    array.push(elemento);
    return array;
}
agregarItemAlFinalDelArray([8,4],5);
//console.log(agregarItemAlFinalDelArray([8,4],5));

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array;
}
agregarItemAlComienzoDelArray([8,4],5);
//console.log(agregarItemAlComienzoDelArray([8,4],5));

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ')
}
dePalabrasAFrase(['Hello', 'world!'])
console.log(dePalabrasAFrase(['Hello', 'world!']));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   verifica= array.includes(elemento);
   return verifica;
}
arrayContiene([5, 9], 5);
//console.log(arrayContiene([5,9], 5));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce(function(suma, elemento){
      return suma+elemento
   })
}
agregarNumeros([1,2,3,4,5,6]);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   return agregarNumeros(resultadosTest)/resultadosTest.length
}
promedioResultadosTest([9,9,7]);
//console.log(promedioResultadosTest([9,9,7]));

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   //return Math.max(...arrayOfNums)
   for(var i=0;i<arrayOfNums.length;i++){
      if(arrayOfNums[i]>arrayOfNums[i+1]){
         return arrayOfNums[i]
      }
   }
}
numeroMasGrande([2,5,8]);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length===0) return 0;
   var multiplicar = 1;
   for(var i=0;i<arguments.length;i++){
      multiplicar = multiplicar*arguments[i]
   }
   return multiplicar;
}
multiplicarArgumentos(2,2,2);

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador=0
   for(var i=0;i<array.length;i++){
      if(array[i]>18){
         contador++
      }
   }
   return contador;
}
cuentoElementos([19,2,3,4]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia==1||numeroDeDia==7){
      return "Es fin de semana"
   }else{
      return "Es dia laboral"
   }
}
diaDeLaSemana(7);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   num=num.toString()
   if(num.charAt(0)==='9'){
      return true;
   }else{
      return false;
   }
}
empiezaConNueve('908');
//console.log(empiezaConNueve('908'));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for(var i=0;i<array.length;i++){
      if(array[i]===array[i+1]) return true;
      else return false;
      }
   }
todosIguales([5,5,5,5]);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArray= []
   for(var i=0;i<array.length;i++){
      if(array[i]==='Enero'||array[i]==='Marzo'||array[i]==='Noviembre'){
         nuevoArray.push(array[i])
      }
   }
      if(nuevoArray.length===3){
         return nuevoArray;
      }else{
         return "No se encontraron los meses pedidos"
      }
}
mesesDelAño(['Noviembre','Enero', 'Marzo']);
//console.log(mesesDelAño(['Noviembre', 'Enero', 'Marzo']));

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaDelSeis=[];
   var numMultiplicar=0;
   while(numMultiplicar<=10){
      var producto=6*numMultiplicar;
      tablaDelSeis.push(producto);
      numMultiplicar++
   }
   return tablaDelSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevoArray = [];
   for(var i=0;i<array.length;i++){
      if(array[i]>100){
         nuevoArray.push(array[i])
   }
}
return nuevoArray
}
mayorACien([5,6,100,110,225,160]);
//console.log(mayorACien([5,6,100,110,225,160]));

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array=[];
   var iterador=0;
   while(iterador<10){
      num=num+2;
      if(num===iterador) break;         //5+2=7 7+2=9 9+2=11 11+2=13 15 17 19 21 23 25
      array.push(num);
      iterador++;
      }
      if(iterador<10){
         return 'Se interrumpió la ejecución'
      
      }
   return array
   }
breakStatement(5);
//console.log(breakStatement(5));

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var nuevoArray = [];
   var iterador=0;
   while(iterador<10){
      iterador++;
      if(iterador===5) continue;
      num=num+2;
      nuevoArray.push(num);
   }
   return nuevoArray;
}
continueStatement(5);
//console.log(continueStatement(5));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
