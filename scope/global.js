//*?Variables

var a; //**Estamos declarando la variable a.
var b = 'b'; //**Declaramos y asignamos.
b = 'bb'; //**Reasignación
var a = 'aa'; //**Redeclaración.

//*?GLOBAL SCOPE
var fruit = 'apple'; //** Global.
console.log(fruit);
function bestFruit() {
    console.log(fruit);
}
bestFruit();

function countries() {
    country ='Colombia'; //** No declarar una variable, la crea y la convierte en Global. Pudiendo acceder a ella desde cualquier parte del documento.
    console.log(country);
}
countries();
console.log(country);