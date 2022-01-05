"use strict"

/* Замените код стрелочной функцией:
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  ); */

  function zadacha4 (){
    let ask = (qustion,yes,no)=>(confirm(qustion))?yes():no();
  ask(
    "Вы согласны?",
    () => alert("Вы согласились.") ,
    () => alert("Вы отменили выполнение.")
    );
  }