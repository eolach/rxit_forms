import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { catchError, map, tap } from 'rxjs/operators';

import { Prescriber } from './participant.model';
import { ParticipantApiService } from './participant-api.service';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./participants.component.css']
})
export class PhysicianComponent implements OnInit {

  // prescriber: Prescriber;
  prescriber = new Prescriber(
    '',
    '',
    '',
    '',
    3
  );

  constructor(
    private route: ActivatedRoute,
    private prescriberService: ParticipantApiService,
    private location: Location,

  ) { }

  onSubmitTemplateBased() {
    console.log(this.prescriber.name);
  }

  ngOnInit() {
    this.getPrescriber();
  }

  getPrescriber(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.prescriberService.getPrescriber(id)
      .subscribe((prescriber: Prescriber) => {

        console.log('participant name' + prescriber.name); // do stuff with our data here.
        // ....
        // asign data to our class property in the end
        // so it will be available to our template
        this.prescriber = prescriber;
    });
  }

  buildPrescriber() {
    const prescriber = new Prescriber(
      'New physician',
      'Dundas',
      'Hamilton',
      'ON',
      3
    );
    return prescriber;
  }

}
