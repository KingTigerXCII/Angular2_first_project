import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { PageResult } from '../model/pageResult';

@Injectable()
export class PageResultService {

  private pageResultsUrl = 'app/pageResult.service/pageResult.json';

  constructor(private http: Http) { }

  public getPageResult(pageUrl: string): Observable<PageResult> {
    return this.http.get(this.pageResultsUrl)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getAllPageResults(): Observable<PageResult[]> {
    return;
  }

  public addPageResult(pageUrl: string): Observable<PageResult> {
    return;
  }

  public updatePageResult(pageUrl: string): Observable<PageResult> {
    return;
  }

  public removePageResult(pageUrl: string): Observable<PageResult> {
    return;
  }

}
