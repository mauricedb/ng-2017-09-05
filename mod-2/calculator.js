var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(param) {
    return function (target, propertyKey) {
        const fn = target[propertyKey];
        target[propertyKey] = function (...args) {
            console.time(propertyKey);
            fn(...args);
            console.timeEnd(propertyKey);
        };
    };
}
class Calculator {
    constructor() {
        this.xEl = document.getElementById("x");
        this.yEl = document.getElementById("y");
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
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
    result(value) {
        if (this.resultEl) {
            this.resultEl.textContent = value.toString();
        }
    }
}
__decorate([
    log("prefix")
], Calculator.prototype, "add", null);
new Calculator();
