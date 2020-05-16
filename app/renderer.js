class Calculator {
    constructor(field1, field2, isSecondVal) {
        this.field1 = field1;
        this.field2 = field2;
		this.isSecondVal = isSecondVal;
		this.operation = '+';
    }
}
var isNumber = false;
const calculator = new Calculator(0, 0, false);
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.calculator_display');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    console.clear();
    console.log("You clicked:", this.innerHTML);
	checkNumber(this.innerHTML);
	console.log(isNumber);
	if(isNumber || ('.' === this.innerHTML)){
		if(calculator.isSecondVal === false){
			if(calculator.field1 === 0){
				calculator.field1 = ('.' === this.innerHTML) ? ('0' + this.innerHTML) : this.innerHTML;
			} else if(calculator.field1.length < 8){
				calculator.field1 = calculator.field1 + this.innerHTML;
			}
			display.innerText = calculator.field1;
		} else {
			if(calculator.field2 === 0) {
				calculator.field2 = this.innerHTML;
			}
			else if(calculator.field2.length < 8){
				calculator.field2 = calculator.field2 + this.innerHTML;
			}
			display.innerText = calculator.field2;
		}
	} else {
		switch(this.innerHTML) {
			case '+':
			case '-': 
			case 'x':
			case '/':
				calculator.operation = this.innerHTML;
				calculator.isSecondVal = true;
				break;
			case 'AC':
				clear();
				display.innerText = 0;
				break;
			default:
				calculate();
		}
	}
  });
}

function calculate(){
	var value1 = parseFloat(calculator.field1);
	var value2 = parseFloat(calculator.field2);
	var result;
	switch (calculator.operation){
		case '-':
			result = value1 - value2;
			break;
		case 'x':
			result = value1 * value2;
			break;
		case '/':
			result = value1 / value2;
			break;
		default:
			result = value1 + value2;
			break;
	}
	if(isInteger( result)){
		display.innerText = result;
	} else {
		display.innerText = result.toFixed(3);
	}
	clear();
}

function parseResult(){
	
}

function clear(){
	calculator.field1 = 0;
	calculator.field2 =0;
	calculator.isSecondVal =false;
}

function isInteger(value) {
  return /^\d+$/.test(value);
}

function checkNumber(number){
	var regex = /^\d+$/;
	isNumber = regex.test(number);
	console.log('inside check'+isNumber);
};