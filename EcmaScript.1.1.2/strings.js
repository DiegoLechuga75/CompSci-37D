let myName = "Diego";

console.log(myName.substring(0,4));

let saludo = "Hola Mundo!";

console.log(saludo.startsWith("Hola"));
console.log(saludo.endsWith("!"));

console.log(saludo.includes("Mundo!"));

let star = "*";

console.log(star.repeat(5));


console.log(saludo.padEnd(30, "*"))

let phoneNumber = "5623434243";
let last4Numbers = phoneNumber.slice(-4);
let maskedNumber = last4Numbers.padStart(phoneNumber.length, "*");

console.log(maskedNumber);
