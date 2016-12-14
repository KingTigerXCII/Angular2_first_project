import { Component, OnInit, Output } from '@angular/core';
import { RequestService } from '../request.service/request.service';
import { PageResult } from '../shared/pageResult';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  private isActive: boolean = false;
  private pageResult: PageResult;
  private pageUrl: string = '';
  private errorMessage: string;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  onRequestBtnClick(): void {
    this.getPageResultFromServer(this.pageUrl);

    this.pageUrl = '';
    this.errorMessage = '';
    this.isActive = true;
  }

  urlHasErrors(): boolean {
    if (!(this.pageUrl.length > 0)) {
      this.errorMessage = 'Url is required';     
      return true;
    }
    return false;
  }

  getPageResultFromServer(pageUrl: string): void {
    this.requestService.getPageResultFromServer(pageUrl).then(pageResult => this.pageResult = pageResult);
  }

}
