import { printCat } from "./lib.ts";

class Cat {
  constructor(public name: string) {
  }
}

const zorro = new Cat("Zorro");

printCat(zorro);
printCat(null);


function getData() {
  return new Promise(res => {
    setTimeout(() => res(123), 2000);

  })
}


function oldStyle(){
  getData()
  .then(d => console.log(d), err => console.error(err))
  .then(() =>  console.log('Klaar'))
}

async function  newStyle(){
  var result = await getData();
  console.log(result)
  console.log('Klaar')
}

// oldStyle();

newStyle();
