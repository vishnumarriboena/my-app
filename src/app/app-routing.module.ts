import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartworksComponent } from './cartworks/cartworks.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],

    children: [
      { path: 'home', component: HomeComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'square', component: SquareComponent },
      { path: 'eventbinding', component: EventbindingComponent },
      { path: 'twowaybinding', component: TwowaybindingComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'event-registration', component: EventRegistrationComponent },
      { path: 'student-register', component: StudentRegisterComponent },
      { path: 'cartworks', component: CartworksComponent },
      { path: 'Employees', component: EmployeesComponent },
      { path: 'Pipes', component: PipesComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'item', component: Component },
      { path: 'mail', component: MailComponent },
      { path: 'admin', component: AdminComponent },
      {
        path: 'createvehicle',
        component: CreatevehicleComponent,
        canDeactivate: [NotifyGuard], },
      { path: 'createuser', component: CreateuserComponent },
    ],
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
