import { Component, Input } from '@angular/core';
import { UserHttpService } from '../../services/user-http.service';
import { TokenDecoderValidatorService } from '../../services/token-decoder-validator.service';
import { Router } from '@angular/router';
import { DataComunicationService } from '../../services/data-comunication.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() loginUserFullName!: string;
  @Input() userRole!: boolean;

  constructor(
    private _http: UserHttpService,
    private _tokeDecoderValidatorService: TokenDecoderValidatorService,
    private _router: Router,
    private _dataComunicationService: DataComunicationService // private _renderer: Renderer2
  ) {}

  signOut() {
    this._router.navigate(['/sign-in']);
    this._dataComunicationService.leaveToPageEmitter
      .pipe(take(1)) // Automatically unsubscribes after the first emitted value
      .subscribe((res: boolean) => {
        if (res) {
          const isToken = this._tokeDecoderValidatorService.isToken();
          if (isToken != '') {
            this._http.signOut(isToken).subscribe((res) => {
              if (res.statusCode === 200) {
                localStorage.removeItem('authorization');
                if (!localStorage.getItem('authorization')) {
                  this._router.navigate(['/sign-in']);
                }
              }
            });
          }
        }
      });
  }
  loadMainPage() {
    this._router.navigate(['/main']);

    // ყველა active-child-btn ის წაშლა tree ბათონებზე
    // const buttons = document.querySelectorAll('.active-child-btn');
    // buttons.forEach((button) => {
    //   this._renderer.removeClass(button, 'active-child-btn');
    // });
  }
  loadChangePassword() {
    this._router.navigate(['/main/change-password']);
  }
}
