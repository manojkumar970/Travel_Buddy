import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './homepage/contact-us/contact-us.component';
import { AboutUsComponent } from './homepage/about-us/about-us.component';
import { RegisterComponent } from './homepage/register/register.component';
import { LoginComponent } from './homepage/login/login.component';
import { AdminLoginComponent } from './homepage/login/admin-login/admin-login.component';
import { UserLoginComponent } from './homepage/login/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component:AdminComponent},
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: 'user', component: UserLoginComponent },
      { path: 'admin', component: AdminLoginComponent },
      // Add other child routes as needed
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
