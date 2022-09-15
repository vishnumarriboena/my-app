import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { SquareComponent } from './square/square.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { CartworksComponent } from './cartworks/cartworks.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { CarsComponent } from './cars/cars.component';
import { HighlightDirective } from './highlight.directive';
import{ HttpClientModule} from'@angular/common/http';
import { ServiceComponent } from './service/service.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ItemComponent } from './item/item.component';
import { MailComponent } from './mail/mail.component';
import { AdminComponent } from './admin/admin.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateuserComponent } from './createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    SquareComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    CalculatorComponent,
    RectangleComponent,
    EventRegistrationComponent,
    StudentRegisterComponent,
    CartworksComponent,
    EmployeesComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    CarsComponent,
    HighlightDirective,
    ServiceComponent,
    VehicleComponent,
    AccountsComponent,
    ItemComponent,
    MailComponent,
    AdminComponent,
    CreatevehicleComponent,
    CreateuserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule {}
