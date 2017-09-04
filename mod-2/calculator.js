var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
function log(param) {
  return function(target, propertyKey) {
    var fn = target[propertyKey];
    target[propertyKey] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      console.time(propertyKey);
      var result = fn.apply(void 0, args);
      console.timeEnd(propertyKey);
      return result;
    };
    return target;
  };
}
var Calculator = /** @class */ (function() {
  function Calculator() {
    var _this = this;
    this.xEl = document.getElementById("x");
    this.yEl = document.getElementById("y");
    this.resultEl = document.getElementById("result");
    var add = document.getElementById("add");
    if (add) {
      add.addEventListener("click", function() {
        var sum = _this.add(_this.x, _this.y);
        _this.result(sum);
      });
    }
    var subtract = document.getElementById("subtract");
    if (subtract) {
      subtract.addEventListener("click", function() {
        var difference = _this.subtract(_this.x, _this.y);
        _this.result(difference);
      });
    }
  }
  Object.defineProperty(Calculator.prototype, "x", {
    get: function() {
      return +this.xEl.value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Calculator.prototype, "y", {
    get: function() {
      return +this.yEl.value;
    },
    enumerable: true,
    configurable: true
  });
  Calculator.prototype.add = function(x, y) {
    return x + y;
  };
  Calculator.prototype.subtract = function(x, y) {
    return x - y;
  };
  Calculator.prototype.result = function(value) {
    if (this.resultEl) {
      this.resultEl.textContent = value.toString();
    }
  };
  __decorate([log("prefix")], Calculator.prototype, "add", null);
  return Calculator;
})();
new Calculator();
