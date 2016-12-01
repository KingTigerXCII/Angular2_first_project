import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private htmlInputValue: String = '';
  private isActive: boolean = false;

  onRequestBtnClick() {
    this.htmlInputValue = '';
    this.isActive = false;
    
    // Call rest webservice
  }

  isHtmlInputValid() {
    if (this.htmlInputValue.length > 0) {
      return false;
    }
    return true;
  }

}
