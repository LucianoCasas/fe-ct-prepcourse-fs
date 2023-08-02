/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
      if(x==y){
         return 'Si son iguales:'+x;
      }else{
         return 'No son iguales';
      }
}
sonIguales(5,6);

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   var str1= 'hola';
   var str2= 'Holaa';
   var longitud1 = console.log(str1.length);
   var longitud2 = console.log(str2.length);
      if(longitud1==longitud2){
         return true;
      }else {
         return false;
      }
}
tienenMismaLongitud('hola', 'Holaa');

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   var x=90;
   if(num<x){
      return true;
   }else{
      return false;
   }
}
menosQueNoventa(100);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   var x=50;
   if(num>x){
      return true;
   }else{
      return false;
   }
}
mayorQueCincuenta(100);

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
