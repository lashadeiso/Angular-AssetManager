import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { SelectBoxHttpService } from 'src/app/core/services/select-box-http.service';
import { StSelDeviceService } from 'src/app/core/services/storage/st-sel-device.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-sel-device',
  templateUrl: './new-sel-device.component.html',
  styleUrls: ['./new-sel-device.component.scss'],
})
export class NewSelDeviceComponent implements OnInit {
  selDevice!: string;

  addNewSelDevice!: FormGroup;
  sitesDropDown: string[] = [];
  jwtToken: string = this._tokenDecoderValidatorService.isToken();

  constructor(
    private _selectBoxHttpService: SelectBoxHttpService,
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _stSelDeviceService: StSelDeviceService,
    private _router: Router,
    private _actvieRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.handleRoute();
  }

  initForm() {
    this.addNewSelDevice = new FormGroup({
      brand: new FormControl(null, [Validators.required]),
      model: new FormControl(null, [Validators.required]),
      site: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
    });
    this.getSite();
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

  onFormSubmit() {
    if (this.addNewSelDevice.valid) {
      if (this.jwtToken != '') {
        this._stSelDeviceService
          .addNewSelDeviceFromStorage(
            this.jwtToken,
            this.selDevice,
            this.addNewSelDevice.value
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
