import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { PageResultService } from '../pageResult.service/pageResult.service';
import { PageResult } from '../model/pageResult';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  private requestForm: FormGroup;
  private url: AbstractControl;

  private pageResult: PageResult;
  private errorMessage: string;

  constructor(private fb: FormBuilder, private pageResultService: PageResultService) {
    this.requestForm = fb.group({
      url: ['', Validators.required]
    });

    this.url = this.requestForm.controls['url'];

   }

  ngOnInit() {
  }

  request(): void {
    this.getPageResult(this.requestForm.get('url').value);
  }

  private getPageResult(pageUrl: string): void {
    this.pageResultService.getPageResult(pageUrl)
                         .subscribe(
                           pageResult => this.pageResult = pageResult,
                           error => this.errorMessage = <any>error);
    console.log(this.pageResult);
  }

}
