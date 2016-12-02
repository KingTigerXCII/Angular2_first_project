import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { RequestService } from './request-service/request.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { RequestFormComponent } from './request-form/request-form.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    AutoGrowDirective,
    RequestFormComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
