import { Component, OnInit } from '@angular/core';
import { PageResultService } from '../pageResult.service/pageResult.service';
import { PageResult } from '../model/pageResult';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(pageResultService: PageResultService) {

  }

  ngOnInit() {
  }

}
