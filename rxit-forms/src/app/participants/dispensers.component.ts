import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';

import { Dispenser } from './participant.model';
import { ParticipantApiService } from './participant-api.service';

@Component({
    selector: 'app-dispensers-component',
    templateUrl: './dispensers.component.html',
    styleUrls: ['participants.component.css'],
})

export class DispensersComponent implements OnInit {
  dispensersSubs: Subscription;
  dispensers: Dispenser[];

  constructor(private participantApi: ParticipantApiService) {
  }

  displayedColumns = ['name', 'street', 'city', 'province'];
  dataSource = new DispenserDataSource(this.participantApi);

  // this version loads a subscription
  // tour of heroes defers that until the get() function
  // so this version, copied from the auth0 app budles it all into one function call
  ngOnInit() {
    this.dispensersSubs = this.participantApi
        .getDispensers()
        .subscribe(res => {
          this.dispensers = res;
        },
        console.error
      );
  }
}

// datasource for the prescribers
export class DispenserDataSource extends DataSource<any> {
  constructor(private participantApiService: ParticipantApiService ) {
    super();
  }

  connect(): Observable<Dispenser[]> {
    return this.participantApiService.getDispensers();
  }

  disconnect() {
  }
}