import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  constructor() { }

  getDate(){
    return new Date()
  }
}
