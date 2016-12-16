import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  private pageResult: PageResult;

  constructor(private fb: FormBuilder, private requestService: RequestService) {
    this.requestForm = fb.group({
      url: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  request(): void {
    this.getPageResultFromServer(this.requestForm.get('url').value);
    
    //this.form.find().setErrors({
    //  invalidUrl:
    //})
  }

  getPageResultFromServer(pageUrl: string): void {
    this.requestService.getPageResultFromServer(pageUrl).then(pageResult => this.pageResult = pageResult);
  }

}
