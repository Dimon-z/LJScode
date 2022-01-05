"use strict"
/* Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
Перепишите функцию, чтобы она делала то же самое, но без if, 
в одну строку.
Сделайте два варианта функции checkAge:

    Используя оператор ?
    Используя оператор ||
 */
/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  } */



function zadacha1 (){
let age=+prompt("enter age", 18);
let x=checkAge();
  /* function checkAge() {
      return (age>17)? true : (confirm("Parents agreed?"));
  } */
function checkAge(){
return (age>17)||confirm("Parents agreed?");
}
console.log(x);
}
/* Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b. */

function zadacha2 (){
let a=prompt("enter a", 2);
let b=prompt("enter b", -2);

function min(){
   return a<b? a : b;
 }
let minimum=min(a,b);

alert(minimum);
}

