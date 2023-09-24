import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenDecoderValidatorService } from '../services/token-decoder-validator.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _tokeDecoderValidatorService: TokenDecoderValidatorService,
    private _router: Router
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userStatus = this._tokeDecoderValidatorService.isUserSignIn();
    if (!userStatus) {
      this._router.navigate(['access-denied']);
    }
    return userStatus;
  }
}
