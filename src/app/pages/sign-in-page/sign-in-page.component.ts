import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInRFAPI } from 'src/app/core/models/users/rfapi/signIn-RFAPI.interface';
import { DataComunicationService } from 'src/app/core/services/data-comunication.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { UserHttpService } from 'src/app/core/services/user-http.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent implements OnInit {
  loadingStatus = false;
  signIn!: FormGroup;
  invalidUser = false;
  errorMessage!: string;
  hide = true;

  constructor(
    private _LoadingService: LoadingService,
    private _http: UserHttpService,
    private _router: Router,
    private _dataComunicationService: DataComunicationService
  ) {}

  ngOnInit() {
    this.getLoadingStatus();
    this.initForm();
  }

  getLoadingStatus() {
    this._LoadingService.loadingEmitter.subscribe((res: boolean) => {
      this.loadingStatus = res;
    });
  }

  initForm() {
    this.signIn = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onFormSubmit() {
    if (this.signIn.status == 'VALID') {
      const authUser = this.signIn.value;
      this._http.signIn(authUser).subscribe(
        (res: SignInRFAPI) => {
          if (res.statusCode == 201) {
            localStorage.setItem('authorization', res.content.accessToken);
            if (localStorage.getItem('authorization')) {
              this._router.navigate(['main']);
              this._dataComunicationService.leavePageGuardActiveOrDeactive.emit(
                'active'
              );
            }
          }
        },
        (err) => {
          this.invalidUser = true;
          this.errorMessage = err.error.message;
        }
      );
    }
  }
}
