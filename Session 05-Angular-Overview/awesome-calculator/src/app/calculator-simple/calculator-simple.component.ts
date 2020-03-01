import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator-simple',
  templateUrl: './calculator-simple.component.html',
  styleUrls: ['./calculator-simple.component.css']
})
export class CalculatorSimpleComponent implements OnInit {

  number1 = 0;
  number2 = 0;
  operator = '+';
  result = 0;

  setValueNumber1(num1){
    this.number1 = Number.parseFloat(num1);
  }

  setValueNumber2(num2){
    this.number2 = Number.parseFloat(num2);
  }

  setOperator(operator){
    this.operator = operator;
  }
  cal(){
    switch (this.operator) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1/this.number2;
        break;
      default:
        this.result = NaN;
    }
  }


  constructor() {
  }

  ngOnInit() {
  }

}
