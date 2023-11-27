//*?   BLOCK SCOPE
//**Es incluido con EcmaScript 6, junto con los terminos Let y const, significa que las variables declaradas en un bloque( los bloques son espacios entre handle bars {}), solo pueden ser usadas dentro de ese bloque {}*/

function fruits(){
    if(true){
        var fruit1='Apple'; //Function Scope.
        let fruit2='Kiwi'; // Block Scope.
        const fruit3 = 'Banana'; // Block Scope.
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1); //* Si la imprime, por ser Function Scope.

    //*Desde aquí no son accesibles al ser Block Scope */
    /*
    console.log(fruit2); 
    console.log(fruit3);
    */
}
fruits();
const frutitas = () => { if (true) { var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; } }
console.log(frutitas);