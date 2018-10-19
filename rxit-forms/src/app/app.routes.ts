import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrescribersComponent } from './participants/prescribers.component';
import { PrescriberComponent } from './participants/prescriber.component';
import { DispensersComponent } from './participants/dispensers.component';
import { DispenserComponent } from './participants/dispenser.component';
import { PhysicianComponent } from './participants/physician.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'prescribers', component: PrescribersComponent},
  {path: 'dispensers', component: DispensersComponent},
  {path: 'prescribers/:id', component: PrescriberComponent},
  {path: 'dispensers/:id', component: DispenserComponent},
  {path: 'physician/:id', component: PhysicianComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouters {
}

