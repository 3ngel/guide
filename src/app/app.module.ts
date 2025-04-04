import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
// import {Pipe}



@NgModule({
  declarations: [
    AppModule,
    HomePageComponent,
    PersonalPageComponent,    
    SearchPipe
  ],
  imports: [
    AppModule,
    HomePageComponent,
    PersonalPageComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[],
  bootstrap:[AppModule]
})
export class AppModule { }