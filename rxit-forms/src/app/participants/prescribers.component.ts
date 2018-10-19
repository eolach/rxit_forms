import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';

import { Prescriber } from './participant.model';
import { ParticipantApiService } from './participant-api.service';

@Component({
  selector: 'app-prescribers-component',
  templateUrl: './prescribers.component.html',
  styleUrls: ['participants.component.css'],
})

export class PrescribersComponent implements OnInit {
  prescribersSubs: Subscription;
  prescribers: Prescriber[];
  selectedPrescriber: Prescriber;

  constructor(
    private participantApi: ParticipantApiService,
    private prescriberService: ParticipantApiService) { }

  displayedColumns = ['id', 'name', 'street', 'city', 'province'];
  dataSource = new PrescriberDataSource(this.participantApi);

  // this version loads a subscription
  // tour of heroes defers that until the get() function
  // so this version, copied from the auth0 app budles it all into one function call
  ngOnInit() {
    this.prescribersSubs = this.participantApi
      .getPrescribers()
      .subscribe(res => {
        this.prescribers = res;
      },
        console.error
      );
  }

  selectPrescriber(id: number) {
    this.prescriberService.getPrescriber(id)
      .subscribe(prescriber => {
        console.log('participant is ' + prescriber.name); // do stuff with our data here.
        //     // ....
        //     // asign data to our class property in the end
        //     // so it will be available to our template
        this.selectedPrescriber = prescriber;
      });

    console.log('prescriber ' + id + ' chosen');
  }
}

// datasource for the prescribers
export class PrescriberDataSource extends DataSource<any> {
  constructor(private participantApiService: ParticipantApiService) {
    super();
  }

  connect(): Observable<Prescriber[]> {
    return this.participantApiService.getPrescribers();
  }

  disconnect() {
  }
}
