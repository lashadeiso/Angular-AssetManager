import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { UserData } from 'src/app/core/models/users/userData.interface';
import { SelectBoxHttpService } from 'src/app/core/services/select-box-http.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import { UserHttpService } from 'src/app/core/services/user-http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss'],
})
export class SingleUserComponent implements OnInit {
  singleUser: UserData = {
    id: '',
    email: '',
    fullName: '',
    role: '',
    site: '',
    project: '',
    isActive: true,
    createdAt: '',
  };

  statusesDropDown: boolean[] = [true, false];
  rolesDropDown!: string[];
  sitesDropDown!: string[];
  projectsDropDowns!: string[];

  jwtToken = this._tokenDecoderValidatorService.isToken();
  userEmail = this._actvieRoute.snapshot.queryParamMap.get('email');

  constructor(
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _actvieRoute: ActivatedRoute,
    private _http: UserHttpService,
    private _router: Router,
    private _selectBoxHttpService: SelectBoxHttpService
  ) {}

  ngOnInit() {
    this.getSingleUser();
  }

  getSingleUser() {
    if (this.jwtToken != '' && this.userEmail) {
      this._http.getSingleUser(this.jwtToken, this.userEmail).subscribe(
        (res) => {
          if (res.statusCode === 200) {
            this.singleUser = res.content;
            this.getRoleAndSite();
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

  onFormSubmit(singleUserEditForm: NgForm) {
    if (this.jwtToken != '' && this.userEmail) {
      this._http
        .updateUserProfile(
          this.jwtToken,
          this.userEmail,
          singleUserEditForm.value
        )
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: `User has been updated`,
                showConfirmButton: false,
                timer: 1500,
              });

              timer(1500).subscribe(() => {
                this._router.navigate(['/main/users/all-user']);
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

  onResetPassword() {
    this._router.navigate(['main/users/reset-password'], {
      queryParams: { email: this.userEmail },
    });
  }

  getRoleAndSite() {
    if (this.jwtToken != '') {
      this._selectBoxHttpService
        .getRoleAndSiteSelectBox(this.jwtToken)
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.rolesDropDown = res.content.role;
              this.sitesDropDown = res.content.site;
              this.getProject(this.singleUser.site);
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
          (res) => {
            if (res.statusCode === 200) {
              this.projectsDropDowns = res.content.project;
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
