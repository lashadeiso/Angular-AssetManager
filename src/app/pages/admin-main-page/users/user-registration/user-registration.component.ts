import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { ProjectRFAPI } from 'src/app/core/models/select-box/project-RFAPI.interface';
import { RoleAndSiteRFAPI } from 'src/app/core/models/select-box/roleAndSite-RFAPI.interface';
import { SignUpOutRFAPI } from 'src/app/core/models/users/rfapi/signUpOut-RFAPI.interface';
import { SelectBoxHttpService } from 'src/app/core/services/select-box-http.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import { UserHttpService } from 'src/app/core/services/user-http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  hide = true;
  signUp!: FormGroup;
  rolesDropDown!: string[];
  sitesDropDown!: string[];
  projectsDropDown!: string[];

  userRole = 'agent';

  jwtToken: string = this._tokenDecoderValidatorService.isToken();

  constructor(
    private _http: UserHttpService,
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _router: Router,
    private _selectBoxHttpService: SelectBoxHttpService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUp = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
      site: new FormControl(null, [Validators.required]),
      project: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
    });

    this.dependerValidator('site', 'project');
    this.getRoleAndSite();
  }

  onFormSubmit() {
    if (this.signUp.status == 'VALID') {
      const signUpUser = this.signUp.value;
      if (this.jwtToken != '') {
        this._http.signUp(this.jwtToken, signUpUser).subscribe(
          (res: SignUpOutRFAPI) => {
            if (res.statusCode == 201) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: `User has been added`,
                showConfirmButton: false,
                timer: 1000,
              });
              timer(1000).subscribe(() => {
                this._router.navigate(['main/users/all-user']);
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

  dependerValidator(mainValue: string, dependentValue: string) {
    this.signUp.get(mainValue)?.valueChanges.subscribe((changeValue) => {
      if (changeValue) {
        this.signUp.get(dependentValue)?.enable();
      } else {
        this.signUp.get(dependentValue)?.disable();
      }
    });
  }

  getRoleAndSite() {
    if (this.jwtToken != '') {
      this._selectBoxHttpService
        .getRoleAndSiteSelectBox(this.jwtToken)
        .subscribe(
          (res: RoleAndSiteRFAPI) => {
            if (res.statusCode === 200) {
              this.rolesDropDown = res.content.role;
              this.sitesDropDown = res.content.site;
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

  getProject(site: string) {
    if (this.jwtToken != '') {
      this._selectBoxHttpService
        .getProjectSelectBox(this.jwtToken, site)
        .subscribe(
          (res: ProjectRFAPI) => {
            if (res.statusCode === 200) {
              this.projectsDropDown = res.content.project;
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

  getUserRole(role: string) {
    this.userRole = role;
    if (this.userRole !== 'agent') {
      this.signUp.addControl(
        'email',
        new FormControl(null, [Validators.required, Validators.email])
      );
      this.signUp.addControl(
        'password',
        new FormControl(null, [Validators.required])
      );
    }
  }
}
