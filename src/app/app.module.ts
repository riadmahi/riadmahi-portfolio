import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import { LandingComponent } from './presentation/home/landing/landing.component';
import { AboutWorkComponent } from './presentation/home/about-work/about-work.component';
import { WorkComponent } from './presentation/home/work/work.component';
import { WorksComponent } from './presentation/home/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LandingComponent,
    AboutWorkComponent,
    WorkComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
