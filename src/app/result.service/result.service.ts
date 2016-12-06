import { Injectable } from '@angular/core';

@Injectable()
export class ResultService {

  constructor() { }

  getTitle(): string {
    return 'www.test.com';
  }

  getTags(): string[] {
    // key / value?
    return ['a', 'h1'];
  }

  // get object from db
  //getWebsiteResult(): Website {
  //
  //}

}
