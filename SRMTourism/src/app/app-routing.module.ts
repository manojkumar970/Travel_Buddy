import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './homepage/contact-us/contact-us.component';
import { AboutUsComponent } from './homepage/about-us/about-us.component';
import { RegisterComponent } from './homepage/register/register.component';
import { LoginComponent } from './homepage/login/login.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminAddLocationPackageComponent } from './admin/admin-add-location-package/admin-add-location-package.component';
import { AdminViewReservationComponent } from './admin/admin-view-reservation/admin-view-reservation.component';
import { AdminViewUsersComponent } from './admin/admin-view-users/admin-view-users.component';
import { HistoryComponent } from './user/history/history.component';
import { BookingComponent } from './user/booking/booking.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component:AdminComponent,
  canActivate:[AuthGuardGuard]},
  { path: 'user', component:UserComponent,
    canActivate:[AuthGuardGuard]},
  { path: 'admin-add-location', component:AdminAddLocationPackageComponent,
  canActivate:[AuthGuardGuard]},
  { path: 'admin-view-reservation',component:AdminViewReservationComponent,
  canActivate:[AuthGuardGuard]},
  { path: 'admin-view-users',component:AdminViewUsersComponent,
  canActivate:[AuthGuardGuard]},
  { path: 'login',component: LoginComponent},
  { path: 'history',component:HistoryComponent,
  canActivate:[AuthGuardGuard]},
  { path: 'booking',component:BookingComponent,
  canActivate:[AuthGuardGuard]},
  {path:"**",
  redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
