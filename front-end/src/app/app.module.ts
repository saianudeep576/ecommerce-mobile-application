import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EcomHomePageModule } from 'src/modules/ecom-module/ecom-home-page-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    CommonModule,
    EcomHomePageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
