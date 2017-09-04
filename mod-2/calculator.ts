function log(param: string) {
  return function(target: any, propertyKey: string) {
    const fn = target[propertyKey];
    target[propertyKey] = function(...args: any[]) {
      console.time(propertyKey);
      var result = fn(...args);
      console.timeEnd(propertyKey);
      return result;
    };

    return target;
  };
}

class Calculator {
  resultEl: HTMLElement | null;
  xEl: HTMLInputElement;
  yEl: HTMLInputElement;

  constructor() {
    this.xEl = <HTMLInputElement>document.getElementById("x");
    this.yEl = <HTMLInputElement>document.getElementById("y");
    this.resultEl = document.getElementById("result");

    var add = document.getElementById("add");
    if (add) {
      add.addEventListener("click", () => {
        var sum = this.add(this.x, this.y);
        this.result(sum);
      });
    }
    var subtract = document.getElementById("subtract");
    if (subtract) {
      subtract.addEventListener("click", () => {
        var difference = this.subtract(this.x, this.y);
        this.result(difference);
      });
    }
  }

  get x() {
    return +this.xEl.value;
  }

  get y() {
    return +this.yEl.value;
  }

  @log("prefix")
  add(x: number, y: number) {
    return x + y;
  }

  subtract(x: number, y: number) {
    return x - y;
  }

  result(value: number) {
    if (this.resultEl){
    this.resultEl.textContent = value.toString();
  }
}
}

new Calculator();
