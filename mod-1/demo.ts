interface Person {
  name: string;
}

function print2(person: Person): void {
  console.log(person.name);
  return;
}

// print2(1);
var o = print2({ name: "Maurice" });
// if (o === void){

// }

var v: undefined;
var n: number = Number.NaN;

// n = ""

function subtract(x: number, y: number) {
  return x - y;
}

var z = subtract(10, 2);

interface Sleepable {
  sleep();
}

class Cat implements Sleepable, Person {
  // name: string
  // constructor(name: string){
  //   this.name = name;
  // }

  constructor(public readonly name: string) {}

  sleep() {}

  printFn() {
    console.log(this.name);
  }

  print = () => {
    console.log(this.name);
  };
}

var zorro = new Cat("Zorro");
console.log(zorro.name);

zorro.print();

var p = zorro.print;
p();

function doStuffWithCat(cat: Cat) {}

function doStuffWithName(cat: { name: string }) {
  console.log(cat.name);
}

doStuffWithCat({
  name: "",
  sleep: () => {},
  printFn: () => {},
  print: () => {}
});

doStuffWithName({ name: "" });
