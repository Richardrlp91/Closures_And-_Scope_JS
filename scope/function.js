//*? FUNCTION SCOPE
//** Las variables declaradas dentro de una función, tienen el alcance limitado a la misma función o sus funciones anidadas. */

function greeting(){
    let userName='Ana';
    console.log(userName);

    if(userName==='Ana'){
        console.log(`Hello ${userName}`); // Es posible llamarla.
    }
}

greeting(); // Llama a la variable y la imprime.
console.log(userName); //** Da error porque es llamada fuera de la función. */