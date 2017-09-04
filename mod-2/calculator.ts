class Calculator {
  resultEl: HTMLElement;
  xEl: HTMLInputElement;
  yEl: HTMLInputElement;

  constructor() {
    this.xEl = <HTMLInputElement>document.getElementById("x");
    this.yEl = <HTMLInputElement>document.getElementById("y");
    this.resultEl = document.getElementById("result");

    document.getElementById("add").addEventListener("click", () => {
      var sum = this.add(this.x, this.y);
      this.result(sum);
    });

    document.getElementById("subtract").addEventListener("click", () => {
      var difference = this.subtract(this.x, this.y);
      this.result(difference);
    });
  }

  get x() {
    return +this.xEl.value;
  }

  get y() {
    return +this.yEl.value;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  result(value: number) {
    this.resultEl.textContent = value.toString();
  }
}

new Calculator();
