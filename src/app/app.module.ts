import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ResultListComponent } from './result-list/result-list.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageResultService } from './pageResult.service/pageResult.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultListComponent,
    RequestFormComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/aboutMe',
        pathMatch: 'full'
      },
      {
        path: 'aboutMe',
        component: AboutMeComponent
      },
      {
        path: 'htmlAnalyser',
        component: RequestFormComponent
      },
      {
        path: 'htmlAnalyserResults',
        component: ResultListComponent
      }
    ]),
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [PageResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
