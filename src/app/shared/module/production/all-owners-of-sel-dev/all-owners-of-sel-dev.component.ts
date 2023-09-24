import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { PrSelDeviceService } from 'src/app/core/services/production/pr-sel-device.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import { AllOwnerOfSelDev } from 'src/app/core/models/selected-device/rfapi/allOwnerOfSelDev.interface';
import { DeleteOwnerOfSelDev } from 'src/app/core/models/selected-device/rfapi/deleteOwnerOfSelDev.interface';
import { SelDeviceData } from 'src/app/core/models/selected-device/selDeviceData.interface';
import { EquipmentData } from 'src/app/core/models/unions/equipmentData';
import { TableColumnLabels } from 'src/app/core/models/users/tableColumnLabels.interface';

@Component({
  selector: 'app-all-owners-of-sel-dev',
  templateUrl: './all-owners-of-sel-dev.component.html',
  styleUrls: ['./all-owners-of-sel-dev.component.scss'],
})
export class AllOwnersOfSelDevComponent implements OnInit {
  selDevice!: string;
  displayedColumns: string[] = [];
  columnLabels: TableColumnLabels = {};
  ownersOfSelDev: SelDeviceData[] = [];
  dataSource = new MatTableDataSource<EquipmentData>();
  jwtToken = this._tokenDecoderValidatorService.isToken();

  constructor(
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _prSelDeviceService: PrSelDeviceService,
    private _router: Router,
    private _actvieRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.handleRoute();
  }

  navigateNewOwner() {
    this._router.navigate([`main/production/new-owner-of-sel-device`], {
      queryParams: { selDev: this.selDevice },
    });
  }

  getAllOwnerOfSelDevice() {
    if (this.jwtToken !== '') {
      this._prSelDeviceService
        .getAllOwnerOfSelDevice(this.jwtToken, this.selDevice)
        .subscribe(
          (res: AllOwnerOfSelDev) => {
            if (res.statusCode === 200) {
              this.ownersOfSelDev = res.content;
              this.dataSource.data = this.ownersOfSelDev;
            }
          },
          (err) => this.showError(err.error.message)
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
      if (result.isConfirmed && 'serialNumber' in item) {
        this._prSelDeviceService
          .deleteOwnerOfSelDevice(
            this.jwtToken,
            this.selDevice,
            item.serialNumber
          )
          .subscribe(
            (res: DeleteOwnerOfSelDev) => {
              if (res.statusCode === 200) {
                this.showSuccessMessage(res.message);
                this.getAllOwnerOfSelDevice();
              }
            },
            (err) => this.showError(err.error.message)
          );
      }
    });
  }

  editItem(item: EquipmentData) {
    if ('serialNumber' in item) {
      const queryParams = { selDev: this.selDevice };
      const fragment = item.serialNumber;

      this._router.navigate(['main/production/edit-owner-of-sel-device'], {
        queryParams,
        fragment,
      });
    }
  }

  handleRoute() {
    this._actvieRoute.queryParams.subscribe((queryParams) => {
      const selectedDevice = queryParams['selDev'];
      if (selectedDevice) {
        this.selDevice = selectedDevice.slice(0, -1);
        this.getAllOwnerOfSelDevice();
        this.getDisplayColumnsAndLabels();
      }
    });
  }

  getDisplayColumnsAndLabels() {
    const laptopColumns = [
      'brand',
      'model',
      'serialNumber',
      'assetNumber',
      'hostname',
      'macAddress',
      'site',
      'project',
      'user',
      'author',
      'updatedAt',
      'edit',
      'delete',
    ];
    const monitorColumns = [
      'brand',
      'model',
      'serialNumber',
      'assetNumber',
      'site',
      'project',
      'user',
      'author',
      'updatedAt',
      'edit',
      'delete',
    ];
    const commonColumns = [
      'brand',
      'model',
      'serialNumber',
      'site',
      'project',
      'user',
      'author',
      'updatedAt',
      'edit',
      'delete',
    ];

    if (this.selDevice === 'laptop' || this.selDevice === 'windows-pc') {
      this.displayedColumns = laptopColumns;
    } else if (this.selDevice === 'monitor') {
      this.displayedColumns = monitorColumns;
    } else {
      this.displayedColumns = commonColumns;
    }

    this.columnLabels = {
      brand: 'Brand',
      model: 'Model',
      hostname: 'Host Name',
      macAddress: 'Mac Address',
      assetNumber: 'Asset Number',
      serialNumber: 'Serial Number',
      site: 'Site',
      project: 'Project',
      user: 'Owner',
      author: 'Created-By',
      updatedAt: 'Updated At',
      edit: 'Edit',
      delete: 'Delete',
    };
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
