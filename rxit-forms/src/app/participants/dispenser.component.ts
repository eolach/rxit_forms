import { Component, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { Dispenser } from './participant.model';
import { ParticipantApiService } from './participant-api.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dispenser-component',
  templateUrl: './dispenser.component.html',
  styleUrls: ['./participant.component.css']
})

export class DispenserComponent implements OnChanges {
  @Input()
  dispenser: Dispenser;
  dispenserSubs: Subscription;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(
    private route: ActivatedRoute,
    private dispenserService: ParticipantApiService,
    private location: Location
  ) { }

  ngOnChanges(): void {
    this.getDispenser();
  }

  getDispenser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dispenserService.getDispenser(id)
        .subscribe(dispenser => this.dispenser = dispenser);
  }

  updateDispenser(): void {}

  goBack(): void {
    this.location.back();
  }

}
