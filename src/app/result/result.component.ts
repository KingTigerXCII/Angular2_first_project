import { Component, OnInit } from '@angular/core';
import { ResultService } from './result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  titel;
  tags;

  constructor(resultService: ResultService) {
    this.titel = resultService.getTitel(); 
    this.tags = resultService.getTags();    
  }

  ngOnInit() {
  }

}
