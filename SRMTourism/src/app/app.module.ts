import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './homepage/about-us/about-us.component';
import { ContactUsComponent } from './homepage/contact-us/contact-us.component';
import { RegisterComponent } from './homepage/register/register.component';
import { LoginComponent } from './homepage/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminAddLocationPackageComponent } from './admin/admin-add-location-package/admin-add-location-package.component';
import { AdminViewReservationComponent } from './admin/admin-view-reservation/admin-view-reservation.component';
import { AdminViewUsersComponent } from './admin/admin-view-users/admin-view-users.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './user/history/history.component';
import { BookingComponent } from './user/booking/booking.component';
import { TypingAnimationDirective } from './typing-animation.directive';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    AdminAddLocationPackageComponent,
    AdminViewReservationComponent,
    AdminViewUsersComponent,
    HistoryComponent,
    BookingComponent,
    TypingAnimationDirective
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
