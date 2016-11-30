import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: String = 'HTML Analyser';
  isActive: boolean = false;

  onRequestBtnClick() {
    console.log('Button clicked');
  }

}
