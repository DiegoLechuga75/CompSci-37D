let myObject = {
    atributo: "Diego",
    metodo: function(){
        console.log(this.atributo);
    }
}

let newObject = Object.create(myObject);
let newObject2 = Object.create(newObject);

console.log(newObject.atributo);
newObject.metodo();
console.log(newObject);
console.log(newObject2);


