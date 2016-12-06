import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  private htmlInputValue: String = '';
  private isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onRequestBtnClick() {
    this.htmlInputValue = '';
    this.isActive = false;
    
    // request.service and @Output the result
  }

  isHtmlInputValid() {
    if (this.htmlInputValue.length > 0) {
      return false;
    }
    return true;
  }

}
