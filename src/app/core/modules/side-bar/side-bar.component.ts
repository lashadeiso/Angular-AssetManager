import { Component, Input } from '@angular/core';
import { TokenDecoderValidatorService } from '../../services/token-decoder-validator.service';
import { Router } from '@angular/router';
import { TreeBtn } from '../../models/treeBtn.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input() userRole!: boolean;

  usersTreeBtn: TreeBtn = {
    name: 'Users',
  };
  assigneToTreeBtn: TreeBtn = {
    name: 'Production',
    children: [
      { name: 'Headsets' },
      { name: 'Laptops' },
      { name: 'Monitors' },
      { name: 'Windows-PCs' },
    ],
  };

  storageTreeBtn: TreeBtn = {
    name: 'Storage',
    children: [
      { name: 'Headsets' },
      { name: 'Laptops' },
      { name: 'Monitors' },
      { name: 'Windows-PCs' },
    ],
  };

  constructor(
    private _tokeDecoderValidatorService: TokenDecoderValidatorService,
    private _router: Router
  ) {}

  loadUsers() {
    const isAdmin = this._tokeDecoderValidatorService.isAdminRole();
    if (isAdmin) {
      this._router.navigate(['main/users/all-user']);
    }
  }
}
