var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        this.xEl = document.getElementById("x");
        this.yEl = document.getElementById("y");
        this.resultEl = document.getElementById("result");
        document.getElementById("add").addEventListener("click", function () {
            var sum = _this.add(_this.x, _this.y);
            _this.result(sum);
        });
        document.getElementById("subtract").addEventListener("click", function () {
            var difference = _this.subtract(_this.x, _this.y);
            _this.result(difference);
        });
    }
    Object.defineProperty(Calculator.prototype, "x", {
        get: function () {
            return +this.xEl.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calculator.prototype, "y", {
        get: function () {
            return +this.yEl.value;
        },
        enumerable: true,
        configurable: true
    });
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    Calculator.prototype.result = function (value) {
        this.resultEl.textContent = value.toString();
    };
    return Calculator;
}());
new Calculator();
