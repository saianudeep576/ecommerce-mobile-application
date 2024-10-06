import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from 'src/components/about-us/about-us.component';
import { BranchesComponent } from 'src/components/branches/branches.component';
import { LoginPageComponent } from 'src/components/login-page/login-page.component';
import { NewUserFormComponent } from 'src/components/new-user-form/new-user-form.component';
import { EcomStateService } from 'src/services/ecom-state.service';
import { EcomApiService } from 'src/services/ecom-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/components/header/header.component';
import { ChoosePhoneComponent } from 'src/components/choose-phone/choose-phone.component';
import { reducerFunction } from 'src/store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NewUserGuard } from 'src/components/guards/new-user.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NewUserFormComponent,
    AboutUsComponent,
    BranchesComponent,
    HeaderComponent,
    ChoosePhoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ selector: reducerFunction }),
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  bootstrap: [AppComponent],
  providers: [EcomStateService, EcomApiService, NewUserGuard],
})
export class AppModule {}
