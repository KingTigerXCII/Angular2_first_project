import { Component, OnInit, Input } from '@angular/core';
import { ResultService } from '../result.service/result.service';
import { PageResult } from '../shared/pageResult';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(resultService: ResultService) {

  }

  ngOnInit() {
  }

}
