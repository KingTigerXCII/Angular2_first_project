import { Injectable } from '@angular/core';

@Injectable()
export class RequestService {

  constructor() { }

  getTitel(): string {
    // Rest call --> check if data is in database
    return 'Titel';
  }

  getTags(): string[] {
    // Rest call --> check if data is in database
    return ['a1', 'a2', 'a3'];
  }

}
