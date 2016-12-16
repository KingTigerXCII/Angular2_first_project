import { Injectable } from '@angular/core';
import { PageResult } from '../shared/pageResult';
import { PAGERESULT } from './mock-request';

@Injectable()
export class RequestService {

  private pageUrl: string;

  constructor() { }

  getPageResultFromServer(pageUrl: string): Promise<PageResult> {
    console.log('getPageResultFromServer');
    return this.getSlowlyResult(pageUrl);
  }

  getSlowlyResult(pageUrl: string): Promise<PageResult> {
    console.log('getSlowlyResult');
    return new Promise<PageResult>(resolve =>
    setTimeout(resolve, 5000))
    .then(() => this.getPageResult(pageUrl)); 
  }

  getPageResult(pageUrl: string): Promise<PageResult> {
    console.log('getPageResult');
    this.pageUrl = pageUrl;
    // get result from database or run the python script on server
    return Promise.resolve(PAGERESULT);
  }

}
