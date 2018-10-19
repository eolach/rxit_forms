import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRouters } from './app.routes';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlertComponent } from './_directives';
import { PrescribersComponent } from './participants/prescribers.component';
import { ParticipantApiService } from './participants/participant-api.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PrescriberComponent } from './participants/prescriber.component';
import { MessagesComponent } from './messages/messages.component';
import { DispenserComponent } from './participants/dispenser.component';
import { DispensersComponent } from './participants/dispensers.component';
import { CallbackComponent } from './callback.component';
import { LoginComponent } from './login/login.component';
import { PhysicianComponent } from './participants/physician.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AlertComponent,
    DashboardComponent,
    PrescriberComponent,
    PrescribersComponent,
    PhysicianComponent,
    MessagesComponent,
    DispenserComponent,
    DispensersComponent,
    CallbackComponent,
    LoginComponent
  ],
  exports: [
    AppComponent,
    PrescribersComponent,
    PrescriberComponent,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatExpansionModule,
    FlexLayoutModule,
    AppRouters,
    HttpClientModule,
  ],
  providers: [ParticipantApiService, AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
