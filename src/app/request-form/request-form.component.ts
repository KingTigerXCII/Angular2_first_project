import { Component, OnInit, Output } from '@angular/core';
import { PageResult } from '../shared/pageResult';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  @Output() isActive: boolean = false;
  @Output() pageResult = new PageResult();

  private urlInputValue: String;
  private errorMessage: String = '';

  constructor() { }

  ngOnInit() {
  }

  onRequestBtnClick(): void {

    let temp = this.urlInputValue.substr(0, 3);

    if (!(temp === 'www')) {
      this.errorMessage = 'Invalid url';
      return;
    }

    // do something in the backend and validate data(db or new dataset)
    this.pageResult = { id: 1, title: 'www.Test.de', tags: ['li', 'div', 'a'] };

    this.urlInputValue = '';
    this.errorMessage = '';
    this.isActive = true;
  }

  isUrlInputEmpty(): boolean {
    if (this.urlInputValue.length > 0) {
      return false;
    }
    return true;
  }

}
