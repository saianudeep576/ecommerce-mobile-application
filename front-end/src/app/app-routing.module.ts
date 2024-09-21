import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/components/login-page/login-page.component';
import { NewUserFormComponent } from 'src/components/new-user-form/new-user-form.component';
import { AboutUsComponent } from 'src/components/about-us/about-us.component';
import { BranchesComponent } from 'src/components/branches/branches.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { ChoosePhoneComponent } from 'src/components/choose-phone/choose-phone.component';

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
    path: 'new-user',
    component: NewUserFormComponent,
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
