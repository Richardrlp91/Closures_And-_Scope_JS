//*?   BLOCK SCOPE
//**Es incluido con EcmaScript 6, junto con los terminos Let y const, significa que las variables declaradas en un bloque( los bloques son espacios entre handle bars {}), solo pueden ser usadas dentro de ese bloque {}*/

function fruits(){
    if(true){
        var fruit1='Apple'; //Function Scope.
        let fruit2='Kiwi'; // Block Scope.
        const fruit3 = 'Banana'; // Block Scope.
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();