"use strict"
function summa() {
let a=+prompt("enter first number",0);
let b=+prompt("enter second number",0);
let summa=a+b;
 alert(summa);
}

function enterNumber(){
let number;
function readNumber () {
    do {
       number=prompt("enter number",0 );
       if (number===""||number===null) {
           return null;
       }
    } while ( (isFinite(+number))!==true);
    return ("Number" + number);
}
alert(readNumber());
}


function randomMinMax (min,max){
    return Math.random()*(max-min)+min;
}

function randomMinMaxInteger(min,max){
    return Math.floor(Math.random()*(max+1-min));
}