import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ChangePasswordRFAPI } from 'src/app/core/models/users/rfapi/changePassword-RFAPI .interface';
import { ChangePass } from 'src/app/core/models/users/changePass.interface';
import { UserHttpService } from 'src/app/core/services/user-http.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { DataComunicationService } from 'src/app/core/services/data-comunication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  passwordHide = true;
  newPasswordHide = true;
  confirmPasswordHide = true;

  changePassword!: FormGroup;
  userID!: string;

  jwtToken: string = this._tokenDecoderValidatorService.isToken();

  constructor(
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _http: UserHttpService,
    private _router: Router,
    private _dataComunicationService: DataComunicationService,
    private _tokenDecoderValidator: TokenDecoderValidatorService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getUserId();
  }

  initForm() {
    this.changePassword = new FormGroup(
      {
        password: new FormControl(null, [Validators.required]),
        newPassword: new FormControl(null, [Validators.required]),
        confirmPassword: new FormControl(null, [Validators.required]),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  onFormSubmit() {
    if (this.changePassword.status == 'VALID') {
      const { ...updatedObject } = this.changePassword.value; //const {changePassword, ...updatedObject } = this.changePassword.value;
      const ChangePassword: ChangePass = updatedObject;
      if (this.jwtToken != '') {
        this._http.changePassword(this.jwtToken, ChangePassword).subscribe(
          (res: ChangePasswordRFAPI) => {
            if (res.statusCode === 200) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Password has been changed<br>Please Sign in again`,
                showConfirmButton: false,
                timer: 2000,
              });
              this._dataComunicationService.leavePageGuardActiveOrDeactive.emit(
                'deactive'
              );
              timer(2000).subscribe(() => {
                localStorage.removeItem('authorization');
                this._router.navigate(['/sign-in']);
              });
            }
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.error.message,
            });
          }
        );
      }
    }
  }

  // Custom validator function
  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    if (newPassword?.value !== confirmPassword?.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  getUserId() {
    this.userID = this._tokenDecoderValidator.parseToken(this.jwtToken).email;
  }
}
