// task 1

function printName() {


    console.log("jessica da coolset")
}

printName();

// task 2

function printAge(birthyear) {
    let age = 2024 - birthyear
    console.log(age)
    

}
let birthyear = 2007

printAge(birthyear);

// task 3

function printAgeAndName(birthyear2, name){

    let age = 2024 - birthyear2
    console.log(`hello ${name} you are ${age} years old`);
    

}

let birthyear2 = 2007


printAgeAndName(birthyear2, "shaikha");

// task 4

function printHello(name1, language) {
    if(language == "en"){
        console.log(`hello ${name1}`)
    }else if(language == "es"){
        console.log(`hola ${name1}`)
    }else if(language == "fr"){
        console.log(`bounjor ${name1}`)
    }else if(language == "tr"){
        console.log(`merhaba ${name1}`)
    }else{
        console.log("pick one of these: en, es, fr, tr")
    }
  
}
let language = "fr"
printHello("shaikha", language);

// task 5

function printMax(number1, number2){

    if(number1 > number2){
        console.log(`${number1} is bigger`)
    }else {
        console.log(`${number2} is bigger`)
    }

}

printMax(36215, 58436);
