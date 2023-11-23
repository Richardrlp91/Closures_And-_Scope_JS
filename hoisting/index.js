//*? HOISTING O ELEVACIÓN.
//** Es importante entender como lee nuestro codigo el motor de JS. hay elementos que pueden ser llamados antes de inicializarlos:

console.log(nameOfDog); //** El motor inicializa la la variable(VAR) y le asigna valor undefined.
var nameOfDog = 'Elmo'; //** Aquí se estaría reasignando el valor de la variable.
console.log(nameOfDog);
/* //todo- Elementos afectados por el Hoisting.
        * var: Solo se eleva la declaración, no el valor.
        * function: Se eleva por completo.
        * import: Se eleva por completo.
        * class: No es afectada por el Hoisting.

*/

//todo --Cuando se ejecuta funciones en JavaScript, se crea un contexto de ejecución y pasa por dos fases: Fase de creación y fase de ejecución.

//todo -- Fasse de Creación:
/*
     this        arguments       nombre      saludo
    undefined   {0:'Sasha'}     'Sasha'     undefined

    * Se crea el objeto this: siempre es el objeto que lo ejecuta, window normalmente o undefined si estamos en modo estricto. 
    * Se crea un espacio de memoria para arguments, donde se crea un array con todos los argumentos.
    * Se crea un espacio en memoria para las variables creadas por var donde incluso, pueden ser accedidas desde fuera de la función.
    * Se asigna valores a las variables según se declare.

*/
saludarA('Sasha'); // Puede ser nombrada porque el motor de busqueda ya cargó la función.
function saludarA(nombre){
    console.log(saludo);
    var saludo='Hola '+nombre;
}
saludarA('Sasha'); // Devolverá error porque lo que se inicializó fue la variable con valor undefined.
var saludar= function saludarA(nombre){
    console.log(saludo);
    var saludo='Hola '+nombre;
}

