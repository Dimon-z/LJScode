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


/* Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
 */
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

/* Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1

Такой подход широко используется в библиотеках JavaScript. */