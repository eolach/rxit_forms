import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

import { DispenserService } from '../data/dispenser.service';
import { Dispenser } from '../data/data-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// The component that displays a dashboard
export class DashboardComponent {

  constructor(private dispenserService: DispenserService) { }

  displayedColumns = ['name', 'city'];
  dataSource = new DispenserDataSource(this.dispenserService);
}

// Construct a datasource for use in material design of the dashboard
// It is built using the appropriate service, in this case DispenserService
export class DispenserDataSource extends DataSource<any> {
  constructor(private dispenserService: DispenserService) {
    super();
  }

  connect(): Observable<Dispenser[]> {
    return this.dispenserService.getDispensers();
  }

  disconnect() {
  }
}

