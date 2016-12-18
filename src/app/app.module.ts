import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResultListComponent } from './resultList/resultList.component';
import { RequestService } from './request.service/request.service';
import { ResultService } from './result.service/result.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { RequestFormComponent } from './request-form/request-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultListComponent,
    AutoGrowDirective,
    RequestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [RequestService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
