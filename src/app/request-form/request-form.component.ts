import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

import { RequestService } from '../request.service/request.service';
import { PageResult } from '../shared/pageResult';
import { UrlValidators } from './urlValidators';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  private requestForm: FormGroup;
  private url: AbstractControl;

  private pageResult: PageResult;

  constructor(private fb: FormBuilder, private requestService: RequestService) {
    this.requestForm = fb.group({
      url: ['', Validators.required]
    });

    this.url = this.requestForm.controls['url'];

   }

  ngOnInit() {
  }

  request(): void {
    this.getPageResultFromServer(this.requestForm.get('url').value);
  }

  getPageResultFromServer(pageUrl: string): void {
    this.requestService.getPageResultFromServer(pageUrl).then(pageResult => this.pageResult = pageResult);
  }

}
