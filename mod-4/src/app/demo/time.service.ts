import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  constructor() { }


  getTime() {
    return new Date()
  }
}
