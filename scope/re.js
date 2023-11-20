//*? REASIGNACIÓN Y REDECLARACIÓN.

//** */

var firstName; // Declarar = Valor Undefined
firstName = 'Richard' // Asignar
console.log(firstName);
var lastName = 'Leal'; //Declarar y Asignar
lastName = 'Laura'; // Reasignar
console.log(lastName);

var secondName = 'Maxi'; //declarar y asignar.
var secondName = 'Mini'; //Reasignar.
console.log(secondName);

//*? LET
//** Se puede reasinar pero no redeclarar.
let fruit = 'Apple'; //Declarar y asignar.
fruit = 'Kiwi'; //Reasignar

let fruit = 'Banana'; //** No podemos redeclarar una variable let dentro del mismo bloque.

//*? CONST
//** No se puede reasignar ni redeclarar.
const animal = 'Dog'; // Declarar y Asignar.
animal = 'Cat'; // No podemos reasignar una variable const.
const animal = 'Snake';  // No podemos redeclarar una variable const

    //*? EXCEPCIÓN DENTRO DE LOS ARRAYS Y OBJETOS.
    //** Se puede agregar, modificar y eliminar elementos, pero no se pueden redeclarar.
    const vehicles = [];
    vehicles.push('🚗');
    console.log(vehicles);
    vehicles.pop();
    console.log(vehicles);
