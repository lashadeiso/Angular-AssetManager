import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import { UserHttpService } from 'src/app/core/services/user-http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPassword!: FormGroup;
  newPasswordHide = true;
  confirmPasswordHide = true;
  eMail!: string | null;

  jwtToken = this._tokenDecoderValidatorService.isToken();

  constructor(
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _actvieRoute: ActivatedRoute,
    private _router: Router,
    private _http: UserHttpService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getQueryParam();
  }

  onSingleUser() {
    const userEmail = this._actvieRoute.snapshot.queryParamMap.get('email');
    this._router.navigate(['main/users/single-user'], {
      queryParams: { email: userEmail },
    });
  }

  getQueryParam() {
    this.eMail = this._actvieRoute.snapshot.queryParamMap.get('email');
  }

  initForm() {
    this.resetPassword = new FormGroup(
      {
        newPassword: new FormControl(null, [Validators.required]),
        confirmPassword: new FormControl(null, [Validators.required]),
      },
      { validators: this.passwordMatchValidator }
    );
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

  onGeneratePass() {
    this.resetPassword.patchValue({
      newPassword: 'Qwerty123',
      confirmPassword: 'Qwerty123',
    });
  }

  onFormSubmit() {
    const userEmail = this._actvieRoute.snapshot.queryParamMap.get('email');
    if (this.jwtToken != '' && userEmail) {
      this._http
        .resetUserPassword(this.jwtToken, userEmail, {
          newPassword: this.resetPassword.value.newPassword,
        })
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.message,
                showConfirmButton: false,
                timer: 1500,
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
