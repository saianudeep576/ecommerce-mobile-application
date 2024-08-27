import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from 'src/components/login-page/login-page.component';
import { HomeComponent } from 'src/components/home/home.component';
import { EcomApiService } from 'src/services/ecom-api.service';
import { EcomStateService } from 'src/services/ecom-state.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginPageComponent, HomeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [EcomApiService, EcomStateService],
})
export class EcomHomePageModule {}
