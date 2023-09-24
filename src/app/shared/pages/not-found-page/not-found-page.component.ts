import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent {
  constructor(private _router: Router) {}

  redirctSignIn() {
    this._router.navigate(['sign-in']);
  }
}
