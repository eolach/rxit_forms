import { Component, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { Prescriber } from './participant.model';
import { ParticipantApiService } from './participant-api.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

export interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-prescriber-component',
  templateUrl: './prescriber.component.html',
  styleUrls: ['./participant.component.css']
})
export class PrescriberComponent implements OnChanges {
  @Input() prescriber: Prescriber;
  panelOpenState = false;

  prescriberForm: FormGroup;

  prescriberSubs: Subscription;
  roles: Role[] = [
    { value: 'physician', viewValue: 'Physician' },
    { value: 'assistant', viewValue: 'Assistant' },
    { value: 'other', viewValue: 'Other' }
  ];
 
 /*  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  } */

  constructor(
    private route: ActivatedRoute,
    private prescriberService: ParticipantApiService,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  // invoked in constructor
  createForm() {
    this.prescriberForm = this.fb.group({
      name: '',
      street: '',
      city: '',
      province: '',
      statisticsForm: this.fb.group({
        total_pt_daily: '',
        total_pt_weekly: '',
        std_pt_daily: '',
        std_pt_weekly: '',
        ext_pt_daily: '',
        ext_pt_weekly: '',
        prop_ongoing_daily: '',
        prop_ongoing_weekly: '',
        total_rx_daily: '',
        total_rx_weekly: '',
        new_rx_daily: '',
        new_rx_weekly: '',
        renew_rx_daily: '',
        renew_rx_weekly: '',
        auth_rx_daily: '',
        auth_rx_weekly: '',
        multi_rx_daily: '',
        multi_rx_weekly: '',
        clarify_rx_daily: '',
        clarify_rx_weekly: '',
        request_rx_daily: '',
        request_rx_weekly: '',
        other_rx_daily: '',
        other_rx_weekly: '',
        other_rx_note: ''
      }),
      deliveryForm: this.fb.group({
        print: new FormControl(false),
        fax: new FormControl(false),
        phone: new FormControl(false),
        e_rx: new FormControl(false)
      }),
      adminForm: this.fb.group({
        pharmacy_msgs_freq: '',
        pharmacy_msgs_role: this.roles,
        pharmacy_msgs_num: '',
        pharmacy_msgs_percent: '',
        pharmacy_msgs_time: '',
        physician_msgs_freq: '',
        physician_msgs_role: this.roles,
        physician_msgs_num: '',
        physician_msgs_percent: '',
        physician_msgs_time: '',
      }),
      preparationForm: this.fb.group({
        pt_hx_freq: '',
        pt_hx_time: '',
        pt_hx_in_emr: new FormControl(false),
        pt_hx_linked_emr: new FormControl(false),
        pt_hx_desktop: new FormControl(false),
        pt_hx_mobile: new FormControl(false),
        cds_hx_freq: '',
        cds_hx_time: '',
        cds_hx_in_emr: new FormControl(false),
        cds_hx_linked_emr: new FormControl(false),
        cds_hx_desktop: new FormControl(false),
        cds_hx_mobile: new FormControl(false),
        frmlry_hx_freq: '',
        frmlry_hx_time: '',
        cfrmlry_hx_in_emr: new FormControl(false),
        frmlry_hx_linked_emr: new FormControl(false),
        frmlry_hx_desktop: new FormControl(false),
        frmlry_hx_mobile: new FormControl(false),
        dis_hx_freq: '',
        dis_hx_time: '',
        dis_hx_in_emr: new FormControl(false),
        dis_hx_linked_emr: new FormControl(false),
        dis_hx_desktop: new FormControl(false),
        dis_hx_mobile: new FormControl(false)
      }),
      specificationForm: this.fb.group({
        name_time: '',
        name_hand: new FormControl(false),
        name_freetext: new FormControl(false),
        name_menu: new FormControl(false),
        name_checkbox: new FormControl(false),
        name_search: new FormControl(false),
        dosage_time: '',
        dosage_hand: new FormControl(false),
        dosage_freetext: new FormControl(false),
        dosage_menu: new FormControl(false),
        dosage_checkbox: new FormControl(false),
        dosage_search: new FormControl(false),
        refills_time: '',
        refills_hand: new FormControl(false),
        refills_freetext: new FormControl(false),
        refills_menu: new FormControl(false),
        refills_checkbox: new FormControl(false),
        refills_search: new FormControl(false),
        route_time: '',
        route_hand: new FormControl(false),
        route_freetext: new FormControl(false),
        route_menu: new FormControl(false),
        route_checkbox: new FormControl(false),
        route_search: new FormControl(false),
        instruction_time: '',
        instruction_hand: new FormControl(false),
        instruction_freetext: new FormControl(false),
        instruction_menu: new FormControl(false),
        instruction_checkbox: new FormControl(false),
        instruction_search: new FormControl(false)
      }),
    });
  }

  // invoked when called on initialization

  ngOnChanges(): void {
    this.rebuildForm();
  }


  // This takes whatever values are in the template form
  // and adds that back into the form model
  rebuildForm() {
    // const temp_controls = this.prescriberForm['statisticsForm'].controls;
    // for (const field in temp_controls) { // 'field' is a string
    //   if (temp_controls.hasOwnProperty(field)) {
    //     temp_controls.key(field).value = prscbr.demographics[field]; // 'control' is a FormControl
    //   }
    // }
    this.prescriberForm.reset({
      name: this.prescriber.name,
      street: this.prescriber.street,
      city: this.prescriber.city,
      province: this.prescriber.province
    });
  }


  // set the prescriber for teh first time
  setPrescriber(prescriber: Prescriber) {
    this.prescriber = prescriber;
    this.rebuildForm();
  }
// Retrieves data from the server side database
  getPrescriber(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = 8;
    this.prescriberService.getPrescriber(id)
      .subscribe(prescriber => {

        console.log('participant is ' + prescriber.name); // do stuff with our data here.
        // ....
        // asign data to our class property in the end
        // so it will be available to our template
        this.prescriber = prescriber;
    });
  }

  // Updates the database with the latest values from the form model
  onSubmit() {
    this. updatePrescriber();
    this.rebuildForm();
  }


  updatePrescriber(): void {
    this.prescriberService.updatePrescriber(this.prescriber).subscribe(/* error handling */);
  }

  goBack(): void {
    this.location.back();
  }

}
