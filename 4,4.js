"use strict"

/* Создайте объект calculator (калькулятор) с тремя методами:

    read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.
 */


let calculator = {
    read(){
     this.first=+prompt("enter first",0);
     this.second=+prompt("enter second",0)
    },
    sum(){
      return this.first+this.second;
    },
    mul(){
      return this.first*this.second;
    },
  };

function calc(){ calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
}