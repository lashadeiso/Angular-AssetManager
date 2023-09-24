import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelDevFromStorage } from 'src/app/core/models/storage/selDevFromStorage.interface';
import { AllSelDevFromStorageRFAPI } from 'src/app/core/models/storage/rfapi/allSelDevFromStorage-RFAPI.interface';
import { EquipmentData } from 'src/app/core/models/unions/equipmentData';
import { TableColumnLabels } from 'src/app/core/models/users/tableColumnLabels.interface';
import { StSelDeviceService } from 'src/app/core/services/storage/st-sel-device.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { EditSelDevFromStorageRFAPI } from 'src/app/core/models/storage/rfapi/editSelDevFromStorage-RFAPI.interface';

@Component({
  selector: 'app-all-sel-devices',
  templateUrl: './all-sel-devices.component.html',
  styleUrls: ['./all-sel-devices.component.scss'],
})
export class AllSelDevicesComponent implements OnInit {
  selDevice!: string;
  displayedColumns: string[] = [
    'brand',
    'model',
    'site',
    'quantity',
    'updatedAt',
    'edit',
    'delete',
  ];

  columnLabels: TableColumnLabels = {
    brand: 'Brand',
    model: 'Model',
    site: 'Site',
    quantity: 'Quantity',
    updatedAt: 'Created At',
    edit: 'Edit',
    delete: 'Delete',
  };

  jwtToken = this._tokenDecoderValidatorService.isToken();
  allSelDevFromStorage: SelDevFromStorage[] = [];
  dataSource = new MatTableDataSource<EquipmentData>();

  constructor(
    private _stSelDeviceService: StSelDeviceService,
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _router: Router,
    private _actvieRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.handleRoute();
  }

  allSelectedDeviceFromSorage() {
    if (this.jwtToken != '') {
      this._stSelDeviceService
        .getAllSelDeviceFromStorage(this.jwtToken, this.selDevice)
        .subscribe(
          (res: AllSelDevFromStorageRFAPI) => {
            if (res.statusCode === 200) {
              this.allSelDevFromStorage = res.content;
              this.dataSource.data = this.allSelDevFromStorage;
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

  deleteItem(item: EquipmentData) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#b168a7',
      cancelButtonColor: '#689ab1',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed && '_id' in item) {
        this._stSelDeviceService
          .deleteSelDeviceFromStorage(this.jwtToken, this.selDevice, item._id)
          .subscribe(
            (res: EditSelDevFromStorageRFAPI) => {
              if (res.statusCode === 200) {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: res.message,
                  showConfirmButton: false,
                  timer: 1500,
                });
                this.allSelectedDeviceFromSorage();
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
    });
  }

  editItem(item: EquipmentData) {
    if ('_id' in item) {
      const queryParams = { selDev: this.selDevice };
      const fragment = item._id;

      this._router.navigate(['main/storage/edit-selected-devices'], {
        queryParams,
        fragment,
      });
    }
  }

  navigateAddNewDevice() {
    this._router.navigate(['main/storage/new-selected-devices'], {
      queryParams: { selDev: this.selDevice },
    });
  }

  handleRoute() {
    this._actvieRoute.queryParams.subscribe((queryParams) => {
      const selectedDevice = queryParams['selDev'];
      if (selectedDevice) {
        this.selDevice = selectedDevice.slice(0, -1);
        this.allSelectedDeviceFromSorage();
      }
    });
  }
}
