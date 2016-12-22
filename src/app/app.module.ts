import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResultListComponent } from './resultList/resultList.component';
import { PageResultService } from './pageResult.service/pageResult.service';
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
  providers: [PageResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
