import { validate } from 'codelyzer/walkerFactory/walkerFn';
import { factoryOrValue } from 'rxjs/operator/multicast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date, args?: string): any {
    if (args === 'locale'){
    return value.toLocaleTimeString();
    }
return value.toTimeString();
  }

}



// var person = {
//   name : 'Maurice'
// }

// fn(person)

// // person.name = 'dssdc'
// person = Object.assign({}, person, {name:'aaaa'})
// person = {...person, name:'aaaa'};

// fn(person)

