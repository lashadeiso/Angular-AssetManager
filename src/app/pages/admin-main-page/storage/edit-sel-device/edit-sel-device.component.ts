import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { SelDevFromStorage } from 'src/app/core/models/storage/selDevFromStorage.interface';
import { SelectBoxHttpService } from 'src/app/core/services/select-box-http.service';
import { StSelDeviceService } from 'src/app/core/services/storage/st-sel-device.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-sel-device',
  templateUrl: './edit-sel-device.component.html',
  styleUrls: ['./edit-sel-device.component.scss'],
})
export class EditSelDeviceComponent implements OnInit  {
  selDevice!: string;
  updatedSelectedDevice: SelDevFromStorage = {
    _id: '',
    brand: '',
    model: '',
    site: '',
    quantity: Number(''),
    createdAt: '',
    updatedAt: '',
  };

  sitesDropDown!: string[];

  jwtToken = this._tokenDecoderValidatorService.isToken();
  selectedDeviceId = this._actvieRoute.snapshot.fragment;

  constructor(
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _stSelDeviceService: StSelDeviceService,
    private _actvieRoute: ActivatedRoute,
    private _router: Router,
    private _selectBoxHttpService: SelectBoxHttpService
  ) {}

  ngOnInit() {
    this.handleRoute();
  }

  editSelectDevice() {
    if (this.jwtToken != '' && this.selectedDeviceId) {
      this._stSelDeviceService
        .editSelDeviceFromStorage(
          this.jwtToken,
          this.selDevice,
          this.selectedDeviceId
        )
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
              this.updatedSelectedDevice = res.content;
              this.getSite();
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

  onFormSubmit(upSeldDevice: NgForm) {
    if (this.jwtToken != '' && this.selectedDeviceId) {
      this._stSelDeviceService
        .updateSelDeviceFromStorage(
          this.jwtToken,
          this.selDevice,
          upSeldDevice.value,
          this.selectedDeviceId
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
                this._router.navigate(['main/storage/all-selected-devices'], {
                  queryParams: { selDev: this.selDevice + 's' },
                });
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

  getSite() {
    if (this.jwtToken != '') {
      this._selectBoxHttpService
        .getBrandAndSite(this.jwtToken, this.selDevice)
        .subscribe(
          (res) => {
            if (res.statusCode === 200) {
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

  handleRoute() {
    this._actvieRoute.queryParams.subscribe((queryParams) => {
      const selectedDevice = queryParams['selDev'];
      if (selectedDevice) {
        this.selDevice = selectedDevice;
        this.editSelectDevice();
      }
    });
  }
}
