import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.scss'],
})
export class UserMainPageComponent implements OnInit {
  loginUserFullName!: string;
  jwt!: string;
  loadingStatus = false;
  isAdmin = false;

  constructor(
    private _tokenDecoderValidator: TokenDecoderValidatorService,
    private _LoadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getLoginUserName();
    this.getLoadingStatus();
  }

  getLoginUserName() {
    if (this._tokenDecoderValidator.isUserSignIn()) {
      this.jwt = this._tokenDecoderValidator.isToken();
      this.loginUserFullName = this._tokenDecoderValidator
        .parseToken(this.jwt)
        .fullName.split(' ')[0];
    }
  }

  getLoadingStatus() {
    this._LoadingService.loadingEmitter.subscribe((res: boolean) => {
      this.loadingStatus = res;
    });
  }
}
