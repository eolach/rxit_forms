import { Component, OnInit, Input } from '@angular/core';
import {Prescriber, Dispenser } from '../participants/participant.model';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  selectedPrescriber: Prescriber;
  selectedDispenser: Dispenser;
  login: Boolean;

  @Input() prescriber: Prescriber;

  constructor() {}

  ngOnInit() {
    this.login = true;
  }

  setPrescriber(prescriber: Prescriber) {
    this.login = false;
    this.selectedPrescriber = prescriber;
    this.selectedDispenser = null;
  }

  setDispenser(dispenser: Dispenser) {
    this.login = false;
    this.selectedDispenser = dispenser;
    this.selectedPrescriber = null;
  }


}
