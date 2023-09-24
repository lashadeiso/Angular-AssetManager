import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataComunicationService } from '../services/data-comunication.service';

@Injectable({
  providedIn: 'root',
})
export class LeaveToPageGuard implements CanDeactivate<unknown> {
  constructor(private _dataComunicationService: DataComunicationService) {}
  canDeactivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const responce = confirm('Are you sure that you want to leave?');

    if (responce === true) {
      this._dataComunicationService.leaveToPageEmitter.emit(true);
      return true;
    } else {
      this._dataComunicationService.leaveToPageEmitter.emit(false);
      return false;
    }
  }
}
