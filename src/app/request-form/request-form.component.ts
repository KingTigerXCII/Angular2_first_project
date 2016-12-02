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
    
    // create result component with parameter url
  }

  isHtmlInputValid() {
    if (this.htmlInputValue.length > 0) {
      return false;
    }
    return true;
  }

}
