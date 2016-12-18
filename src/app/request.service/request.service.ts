import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { PageResult } from '../shared/pageResult';
import { PAGERESULT } from './mock-request';

@Injectable()
export class RequestService {

  private backendUrl = 'app/pageResult';
  private pageUrl: string;

  constructor(private http: Http) { }

  public getPageResultFromServer(pageUrl: string): Observable<PageResult> {
    return this.getSlowlyResult(pageUrl) // invoke http.get
            .map(this.extractData) // map json to object PageResult
            .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    return Observable.throw(errMsg);
  }

  getSlowlyResult(pageUrl: string) {
    let obj: any = {
      'id' : 1,
      'url' : pageUrl,
      'title' : 'Test',
      'tags' : ['li', 'div', 'h1', 'a']
    };

    return <JSON>obj;
  }

}
