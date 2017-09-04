function print2(person) {
    console.log(person.name);
    return;
}
// print2(1);
var o = print2({ name: "Maurice" });
// if (o === void){
// }
var v;
var n = Number.NaN;
// n = ""
function subtract(x, y) {
    return x - y;
}
var z = subtract(10, 2);
var Cat = /** @class */ (function () {
    // name: string
    // constructor(name: string){
    //   this.name = name;
    // }
    function Cat(name) {
        var _this = this;
        this.name = name;
        this.print = function () {
            console.log(_this.name);
        };
    }
    Cat.prototype.sleep = function () { };
    Cat.prototype.printFn = function () {
        console.log(this.name);
    };
    return Cat;
}());
var zorro = new Cat("Zorro");
console.log(zorro.name);
zorro.print();
var p = zorro.print;
p();
