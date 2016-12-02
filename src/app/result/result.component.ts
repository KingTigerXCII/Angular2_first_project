import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request-service/request.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private titel: String;
  private tags: String[];

  constructor(requestService: RequestService) {
    this.titel = requestService.getTitel(); 
    this.tags = requestService.getTags();    
  }

  ngOnInit() {
  }

}
