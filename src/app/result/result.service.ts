import { Injectable } from '@angular/core';

@Injectable()
export class ResultService {

  constructor() { }

  getTitel(): string {
    return 'Titel';
  }

  getTags(): string[] {
    // Rest call
    return ['a1', 'a2', 'a3'];
  }

}
