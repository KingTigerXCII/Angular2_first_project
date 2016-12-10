import { Component, OnInit, Input } from '@angular/core';
import { ResultService } from '../result.service/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  // change the string to an object
  @Input() pageResult: any;
  @Input() isActive: boolean;

  constructor(resultService: ResultService) {

  }

  ngOnInit() {
  }

}
