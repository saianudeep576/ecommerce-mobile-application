import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/components/login-page/login-page.component';
import { NewUserFormComponent } from 'src/components/new-user-form/new-user-form.component';
import { AboutUsComponent } from 'src/components/about-us/about-us.component';
import { BranchesComponent } from 'src/components/branches/branches.component';
import { ChoosePhoneComponent } from 'src/components/choose-phone/choose-phone.component';
import { NewUserGuard } from 'src/components/guards/new-user.guard';
import { BuildYourPlanComponent } from 'src/components/build-your-plan/build-your-plan/build-your-plan.component';

const routes: Routes = [
  {
    path: '',
    component: ChoosePhoneComponent,
  },
  {
    path: 'choose-phone',
    component: ChoosePhoneComponent,
  },
  {
    path: 'login-page',
    component: LoginPageComponent,
  },
  {
    path: 'build-your-plan',
    component: BuildYourPlanComponent,
  },
  {
    path: 'new-user',
    component: NewUserFormComponent,
    canActivate: [NewUserGuard],
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'branches',
    component: BranchesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
