import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Params, Router } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';
import { TokenDecoderValidatorService } from 'src/app/core/services/token-decoder-validator.service';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss'],
})
export class AdminMainPageComponent implements OnInit {
  loginUserFullName!: string;
  jwt!: string;
  queryParams!: Params;
  loadingStatus = false;
  isAdmin = true;
  dashboardVisible = true;

  constructor(
    private _tokenDecoderValidator: TokenDecoderValidatorService,
    private _LoadingService: LoadingService,
    private _cdRef: ChangeDetectorRef,
    private _router: Router
  ) {}
  ngOnInit() {
    this.getLoginUserName();
    this.getLoadingStatus();
    this.handleRouteChange();
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
      this._cdRef.detectChanges();
    });
  }

  handleRouteChange() {
    this.dashboardVisible = this._router.url === '/main';
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.dashboardVisible = event.url === '/main';
      }
    });
  }
}
