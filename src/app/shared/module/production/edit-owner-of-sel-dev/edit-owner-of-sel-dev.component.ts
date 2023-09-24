import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { SelDeviceData } from 'src/app/core/models/selected-device/selDeviceData.interface';
import { PrSelDeviceService } from 'src/app/core/services/production/pr-sel-device.service';
import { SelectBoxHttpService } from 'src/app/core/services/select-box-http.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-owner-of-sel-dev',
  templateUrl: './edit-owner-of-sel-dev.component.html',
  styleUrls: ['./edit-owner-of-sel-dev.component.scss'],
})
export class EditOwnerOfSelDevComponent implements OnInit {
  selDevice!: string;
  OwnerOfSelDev: SelDeviceData = this.initializeOwnerOfSelDev();
  brandsDropDown!: string[];
  modelsDropDown!: string[];
  sitesDropDown!: string[];
  projectsDropDowns!: string[];
  usersDropDowns!: string[];
  jwtToken = this._tokenDecoderValidatorService.isToken();
  serialNumber = this._actvieRoute.snapshot.fragment;

  constructor(
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _actvieRoute: ActivatedRoute,
    private _prSelDeviceService: PrSelDeviceService,
    private _selectBoxHttpService: SelectBoxHttpService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.handleRoute();
  }

  initializeOwnerOfSelDev(): SelDeviceData {
    const commonFields: SelDeviceData = {
      _id: '',
      serialNumber: '',
      brand: '',
      model: '',
      user: '',
      project: '',
      site: '',
      comment: '',
      author: '',
      createdAt: '',
      updatedAt: '',
    };

    return this.selDevice === 'laptop' || this.selDevice === 'windows-pc'
      ? commonFields
      : {
          ...commonFields,
          hostname: '',
          macAddress: '',
          assetNumber: '',
        };
  }

  editOwnerOfSelDev() {
    if (this.jwtToken && this.serialNumber) {
      this._prSelDeviceService
        .OwnerOfSelDevice(this.jwtToken, this.selDevice, this.serialNumber)
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.OwnerOfSelDev = res.content;
              this.getBrandAndSite();
            }
          },
          (err) => this.showError(err.error.message)
        );
    }
  }

  onFormSubmit(selDevEditForm: NgForm) {
    if (this.jwtToken && this.serialNumber) {
      this._prSelDeviceService
        .UpdateOwnerOfSelDevice(
          this.jwtToken,
          this.selDevice,
          this.serialNumber,
          selDevEditForm.value
        )
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.showSuccessMessage('User has been updated');
              timer(1500).subscribe(() => {
                this.navigateToOwnersList();
              });
            }
          },
          (err) => this.showError(err.error.message)
        );
    }
  }

  getBrandAndSite() {
    if (this.jwtToken) {
      this._selectBoxHttpService
        .getBrandAndSite(this.jwtToken, this.selDevice)
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.brandsDropDown = res.content.brand;
              this.sitesDropDown = res.content.site;
              this.getProject(this.OwnerOfSelDev.site);
              this.getModelSelectBox(this.OwnerOfSelDev.brand);
            }
          },
          (err) => this.showError(err.error.message)
        );
    }
  }

  getProject(site: string) {
    if (this.jwtToken) {
      this._selectBoxHttpService
        .getProjectSelectBox(this.jwtToken, site)
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.projectsDropDowns = res.content.project;
              this.getUserSelectBox(this.OwnerOfSelDev.project);
            }
          },
          (err) => this.showError(err.error.message)
        );
    }
  }

  getModelSelectBox(brand: string) {
    if (this.jwtToken) {
      this._selectBoxHttpService
        .getModelSelectBox(this.jwtToken, this.selDevice, brand)
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.modelsDropDown = res.content.model;
            }
          },
          (err) => this.showError(err.error.message)
        );
    }
  }

  getUserSelectBox(project: string) {
    if (this.jwtToken) {
      this._selectBoxHttpService
        .getUserSelectBox(this.jwtToken, this.selDevice, project)
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.usersDropDowns = res.content.user;
            }
          },
          (err) => this.showError(err.error.message)
        );
    }
  }

  handleRoute() {
    this._actvieRoute.queryParams.subscribe((queryParams) => {
      const selectedDevice = queryParams['selDev'];
      if (selectedDevice) {
        this.selDevice = selectedDevice;
        this.editOwnerOfSelDev();
      }
    });
  }

  navigateToOwnersList() {
    this._router.navigate(['main/production/all-owners-of-sel-device'], {
      queryParams: { selDev: this.selDevice + 's' },
    });
  }

  showSuccessMessage(message: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  showError(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    });
  }
}
