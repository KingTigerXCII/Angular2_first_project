import { Component, OnInit, Input } from '@angular/core';
import { PageResultService } from '../pageResult.service/pageResult.service';
import { PageResult } from '../model/pageResult';

@Component({
  selector: 'app-resultList',
  templateUrl: './resultList.component.html',
  styleUrls: ['./resultList.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(pageResultService: PageResultService) {

  }

  ngOnInit() {
  }

}
