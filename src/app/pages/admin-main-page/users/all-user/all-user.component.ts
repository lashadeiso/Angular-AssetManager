import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EquipmentData } from 'src/app/core/models/unions/equipmentData';
import { DeleteUserResponceRFAPI } from 'src/app/core/models/users/rfapi/deleteUser-RFAPI.interface';
import { GetAllUsersResponceRFAPI } from 'src/app/core/models/users/rfapi/getAllUsers-RFAPI.interface';
import { TableColumnLabels } from 'src/app/core/models/users/tableColumnLabels.interface';
import { UserData } from 'src/app/core/models/users/userData.interface';

import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';
import { UserHttpService } from 'src/app/core/services/user-http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss'],
})
export class AllUserComponent {
  displayedColumns: string[] = [
    'fullName',
    'email',
    'role',
    'site',
    'project',
    'createdAt',
    'isActive',
    'edit',
    'delete',
  ];

  columnLabels: TableColumnLabels = {
    fullName: 'Full Name',
    email: 'E-mail',
    role: 'Role',
    site: 'Site',
    project: 'Project',
    createdAt: 'Created At',
    isActive: 'Active',
    edit: 'Edit',
    delete: 'Delete',
  };

  allUsers: UserData[] = [];

  dataSource = new MatTableDataSource<EquipmentData>();

  jwtToken = this._tokenDecoderValidatorService.isToken();

  constructor(
    private _tokenDecoderValidatorService: TokenDecoderValidatorService,
    private _userHttpService: UserHttpService,
    private _router: Router,
    private _http: UserHttpService
  ) {
    this.getAllUsers();
  }

  getAllUsers() {
    if (this.jwtToken != '') {
      this._userHttpService.getAllUSers(this.jwtToken).subscribe(
        (res: GetAllUsersResponceRFAPI) => {
          if (res.statusCode === 200) {
            this.allUsers = res.content;
            this.dataSource.data = this.allUsers;
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
  addNewUser() {
    this._router.navigate(['main/users/user-registration']);
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
      if (result.isConfirmed && this.jwtToken != '' && 'email' in item) {
        this._http.deleteUser(this.jwtToken, item.email).subscribe(
          (res: DeleteUserResponceRFAPI) => {
            if (res.statusCode === 200) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.message,
                showConfirmButton: false,
                timer: 1500,
              });
              this.getAllUsers();
            }
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.error.message,
            }).then((result) => {
              if (result.isConfirmed) {
                if (localStorage.getItem('authorization')) {
                  localStorage.removeItem('authorization');
                }
                this._router.navigate(['/sign-in']);
              }
            });
          }
        );
      }
    });
  }

  editItem(item: EquipmentData) {
    if ('email' in item) {
      this._router.navigate(['main/users/single-user'], {
        queryParams: { email: item.email },
      });
    }
  }
}
