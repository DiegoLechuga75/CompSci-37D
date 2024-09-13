const firstName = "Diego";

function first(){
    var age = 20;
    if(age >= 18){
        var decade = 2;
        var underAge = false;
        console.log(decade);
    }

    function second(){
        const job = "sensei";
        console.log(`Hello my name is ${firstName}, I'm working as ${job}, and I'm ${age}`);
        console.log(underAge, decade);
    }
    second();
}
first();


if(20>10){
    var myName = "Diego";
}

console.log(myName);
