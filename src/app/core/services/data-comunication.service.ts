import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataComunicationService {
  leaveToPageEmitter = new EventEmitter<boolean>();
  leavePageGuardActiveOrDeactive = new EventEmitter<string>();
}
