import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/components/login-page/login-page.component';
import { HomeComponent } from 'src/components/home/home.component';
import { NewUserFormComponent } from 'src/components/new-user-form/new-user-form.component';
import { AboutUsComponent } from 'src/components/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
