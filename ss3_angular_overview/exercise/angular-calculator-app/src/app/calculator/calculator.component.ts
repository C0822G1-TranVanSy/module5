import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: string;

  constructor() {
  }

  ngOnInit(): void {
  }


  calculate(element1: string, element2: string, element3: string) {
    this.result = '';
    switch (element2) {
      case '+':
        this.result = String(parseFloat(element1) + parseFloat(element3));
        break;
      case '-':
        this.result = String(parseFloat(element1) - parseFloat(element3));
        break;
      case '*':
        this.result = String(parseFloat(element1) * parseFloat(element3));
        break;
      case '/':
        // tslint:disable-next-line:triple-equals
        if (element3 == '0') {
          this.result = `chia được cức`;
          break;
        }
        this.result = String(parseFloat(element1) / parseFloat(element3));
        break;
    }
    // tslint:disable-next-line:use-isnan triple-equals
    if (isNaN(parseFloat(this.result))) {
      return this.result = `Chữ ko tính được`;
    }
    return this.result;
  }
}
