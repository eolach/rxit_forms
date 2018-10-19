import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../_services';
import { ParticipantApiService } from '../participants/participant-api.service';
import { User, Dispenser, Prescriber } from '../participants/participant.model';

import { WelcomeComponent } from '../welcome/welcome.component'
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['../participants/participant.component.css']
})
export class LoginComponent implements OnInit {
    @Input() dispenser: Dispenser;
    @Input() prescriber: Prescriber;
    @Input() user: User;

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: ParticipantApiService,
        private alertService: AlertService,
        private welcomeComponent: WelcomeComponent) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            // .pipe(first())
            .subscribe(
                user => {
                    this.user = user;
                    console.log('Hello ', user.username);
                    this.resolveUser(this.user);


                },
                // just a note
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            );
    }

    resolveUser( reporter: User) {
        console.log( 'resolving user ', reporter.username);
        if (reporter.prescriber) {
            this.alertService.success('participant' + reporter.prescriber.name, true);
            console.log( 'Participant in ', reporter.prescriber.city);
            this.welcomeComponent.setPrescriber(reporter.prescriber);
            this.loading = false;

        } else if (reporter.dispenser){
            this.alertService.success('participant is ' + reporter.dispenser.name, true);
            console.log( 'Participant in ', reporter.dispenser.city);
            this.loading = false;
        }
    }
}

