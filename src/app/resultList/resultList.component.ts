import { Component, OnInit, Input } from '@angular/core';
import { ResultService } from '../result.service/result.service';
import { PageResult } from '../shared/pageResult';

@Component({
  selector: 'app-resultList',
  templateUrl: './resultList.component.html',
  styleUrls: ['./resultList.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(resultService: ResultService) {

  }

  ngOnInit() {
  }

}
