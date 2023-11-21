//*? USANDO EL MODO ESTRICTO.
//** Cuando usamos el modo estricto, obligamos a que el codigo se escriba correctamente sin hacer uso del hoisting(elevación de las variables) y el tiempo de compilación.


'use strict'; // Se puede usar al inicio del documento o dentro de una función para activar el modo estricto.

pi = 3.1416;
console.log(pi); // Es posible, pero sin usar el modo estricto.

function myFunction(){
    'use strict';
    return pi = 3.1416;
}
console.log(myFunction()); // Devolverá error por no haber declarado la variable primero, sin el 'use strict' si devolvería el valor.