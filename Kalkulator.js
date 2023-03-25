//  PROSTY KALKULATOR

var input = document.getElementById("input");
var button = document.getElementById("button");
var result = document.getElementById("result");

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')




// Przypisane buttonów do ich funkcji 

var button1 = document.getElementById('(');
var button2 = document.getElementById(")");
var button3 = document.getElementById("%");
var button4 = document.getElementById("/");
var button5 = document.getElementById("7");
var button6 = document.getElementById("8");
var button7 = document.getElementById("9");
var button8 = document.getElementById("*");
var button9 = document.getElementById("4");
var button10 = document.getElementById("5");
var button11 = document.getElementById("6");
var button12 = document.getElementById("-");
var button13 = document.getElementById("1");
var button14 = document.getElementById("2");
var button15 = document.getElementById("3");
var button16 = document.getElementById("+");
var button17 = document.getElementById("0");
var button18 = document.getElementById(",");
var button19 = document.getElementById("DEL");
var button20 = document.getElementById("=");




class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
    }

    delete() {
        console.log("aaaaaa");
    }

    appendNumber(number) {
    }

    chooseOperation(operation) {
    }

    compute() {
    }

    updateDisplay() {
    }
}
/*button1.onclick = funkction() {
    alert("wcisniety wciskik");
};*/



//var value = Number(input.value); // sprawdzamy czy to liczba

