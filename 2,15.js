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

  /* function checkAge() {
      return (age>17)? true : (confirm("Parents agreed?"));
  } */

let age=+prompt("enter age", 18);
let x=checkAge();

function checkAge(){
return (age>17)||confirm("Parents agreed?");
}
console.log(x);