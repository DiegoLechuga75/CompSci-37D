const saludo = (nombre = "Usuario") => {
    console.log(`Holaaa ${nombre}`);
}

saludo("Diego")

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}
    
console.log(sum(1, 2, 3));
    
console.log(sum(1, 2, 3, 4));

const suma = (a, b) => a + b;


console.log(suma(5,3));
