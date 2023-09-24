import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { PrSelDeviceService } from 'src/app/core/services/production/pr-sel-device.service';
import { SelectBoxHttpService } from 'src/app/core/services/select-box-http.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-owner-of-sel-dev',
  templateUrl: './new-owner-of-sel-dev.component.html',
  styleUrls: ['./new-owner-of-sel-dev.component.scss'],
})
export class NewOwnerOfSelDevComponent implements OnInit {
  selDevice!: string;

  brandsDropDown: string[] = [];
  modelsDropDown: string[] = [];
  sitesDropDown: string[] = [];
  projectsDropDown: string[] = [];
  usersFullNamesDropDown!: string[];
  newOwnerOfSelDev!: FormGroup;

  jwtToken: string = this._tokenDecoderValidatorService.isToken();

  constructor(
    private _selectBoxHttpService: SelectBoxHttpService,
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _prSelDeviceService: PrSelDeviceService,
    private _router: Router,
    private _actvieRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.handleRoute();
  }

  initForm() {
    this.newOwnerOfSelDev = new FormGroup({
      serialNumber: new FormControl(null, [Validators.required]),
      brand: new FormControl(null, [Validators.required]),
      model: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
      site: new FormControl(null, [Validators.required]),
      project: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
      user: new FormControl({ value: null, disabled: true }, [
        Validators.required,
      ]),
      comment: new FormControl(),
    });

    if (this.selDevice === 'laptop' || this.selDevice === 'windows-pc') {
      this.newOwnerOfSelDev.addControl('hostname', new FormControl(null));
      this.newOwnerOfSelDev.addControl('macAddress', new FormControl(null));
      this.newOwnerOfSelDev.addControl('assetNumber', new FormControl(null));
    }

    if (this.selDevice === 'monitor') {
      this.newOwnerOfSelDev.addControl('assetNumber', new FormControl(null));
    }

    this.getBrandAndSite();
    this.dependerValidator('brand', 'model');
    this.dependerValidator('site', 'project');
    this.dependerValidator('project', 'user');
  }

  onFormSubmit() {
    if (this.newOwnerOfSelDev.valid) {
      console.log(this.newOwnerOfSelDev.value);
      if (this.jwtToken != '') {
        this._prSelDeviceService
          .addNewOwnerOfSelDevice(
            this.jwtToken,
            this.selDevice,
            this.newOwnerOfSelDev.value
          )
          .subscribe(
            (res) => {
              if (res.statusCode == 201) {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `User has been added`,
                  showConfirmButton: false,
                  timer: 1000,
                });
                timer(1000).subscribe(() => {
                  this._router.navigate(
                    ['/main/production/all-owners-of-sel-device'],
                    {
                      queryParams: { selDev: this.selDevice + 's' },
                    }
                  );
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
    this.newOwnerOfSelDev
      .get(mainValue)
      ?.valueChanges.subscribe((changeValue) => {
        if (changeValue) {
          this.newOwnerOfSelDev.get(dependentValue)?.enable();
        } else {
          this.newOwnerOfSelDev.get(dependentValue)?.disable();
        }
      });
  }

  getBrandAndSite() {
    if (this.jwtToken != '') {
      this._selectBoxHttpService
        .getBrandAndSite(this.jwtToken, this.selDevice)
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.brandsDropDown = res.content.brand;
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

  getModelSelectBox(brand: string) {
    if (this.jwtToken != '') {
      this._selectBoxHttpService
        .getModelSelectBox(this.jwtToken, this.selDevice, brand)
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.modelsDropDown = res.content.model;
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

  getProjectSelectBox(site: string) {
    if (this.jwtToken != '') {
      this._selectBoxHttpService
        .getProjectSelectBox(this.jwtToken, site)
        .subscribe(
          (res) => {
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

  getUserSelectBox(project: string) {
    if (this.jwtToken != '') {
      this._selectBoxHttpService
        .getUserSelectBox(this.jwtToken, this.selDevice, project)
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.usersFullNamesDropDown = res.content.user;
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

  handleRoute() {
    this._actvieRoute.queryParams.subscribe((queryParams) => {
      const selectedDevice = queryParams['selDev'];
      if (selectedDevice) {
        this.selDevice = selectedDevice;
        this.initForm();
      }
    });
  }
}
