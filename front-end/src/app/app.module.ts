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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NewUserGuard } from 'src/components/guards/new-user.guard';
import { BuildYourPlanComponent } from 'src/components/build-your-plan/build-your-plan/build-your-plan.component';
import { SimSelectionComponent } from 'src/components/sim-selection/sim-selection.component';
import { MaterialModulesList } from './modules.import';
import { PlanSelectionComponent } from 'src/components/plan-selection/plan-selection.component';
import { TentiativeService } from 'src/services/tentiative.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NewUserFormComponent,
    AboutUsComponent,
    BranchesComponent,
    HeaderComponent,
    ChoosePhoneComponent,
    BuildYourPlanComponent,
    SimSelectionComponent,
    PlanSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MaterialModulesList,
  ],
  bootstrap: [AppComponent],
  providers: [
    EcomStateService,
    EcomApiService,
    NewUserGuard,
    TentiativeService,
  ],
})
export class AppModule {}
