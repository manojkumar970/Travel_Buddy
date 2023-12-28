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
import { UserComponent } from './user/user.component';
import { AdminAddLocationPackageComponent } from './admin/admin-add-location-package/admin-add-location-package.component';
import { AdminViewReservationComponent } from './admin/admin-view-reservation/admin-view-reservation.component';
import { AdminViewUsersComponent } from './admin/admin-view-users/admin-view-users.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login/admin-login/admin', component:AdminComponent},
  { path: 'user', component:UserComponent},
  { path: 'admin-add-location', component:AdminAddLocationPackageComponent},
  { path: 'admin-view-reservation',component:AdminViewReservationComponent},
  { path: 'admin-view-users',component:AdminViewUsersComponent},
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: 'user-login', component: UserLoginComponent },
      { path: 'admin-login', component: AdminLoginComponent },
      // Add other child routes as needed
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
