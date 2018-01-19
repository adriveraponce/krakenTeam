import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,  
        MatSidenavModule, MatMenuModule,
        MatFormFieldModule, MatOptionModule,
        MatSelectModule, MatCardModule, 
        MatFormFieldControl, MatInputModule, MatRadioModule } from '@angular/material';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyInformationComponent } from './my-information/my-information.component';


@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    LoginComponent,
    HomeComponent,
    MyInformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatOptionModule, 
    MatSelectModule,
    MatCardModule, 
    MatInputModule,
    Ng4TwitterTimelineModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
