import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllSelDevFromStorageRFAPI } from '../../models/storage/rfapi/allSelDevFromStorage-RFAPI.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EditSelDevFromStorageRFAPI } from '../../models/storage/rfapi/editSelDevFromStorage-RFAPI.interface';
import { SelDevFromStorage } from '../../models/storage/selDevFromStorage.interface';
import { UpdateSelDevFromStorageRFAPI } from '../../models/storage/rfapi/updateSelDevFromStorage-RFAPI.interface';
import { NewSelDevFromStorage } from '../../models/storage/rfapi/newSelDevFromStorage-RFAPI.interface';

@Injectable({
  providedIn: 'root',
})
export class StSelDeviceService {
  constructor(private _http: HttpClient) {}

  getAllSelDeviceFromStorage(
    jwt: string,
    selDevice: string
  ): Observable<AllSelDevFromStorageRFAPI> {
    const path = `${environment.baseURL}/${selDevice}/all/storage`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.get(path, {
      headers,
    }) as Observable<AllSelDevFromStorageRFAPI>;
  }

  deleteSelDeviceFromStorage(
    jwt: string,
    selDevice: string,
    id: string
  ): Observable<EditSelDevFromStorageRFAPI> {
    const path = `${environment.baseURL}/${selDevice}/storage/${id}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.delete(path, {
      headers,
    }) as Observable<EditSelDevFromStorageRFAPI>;
  }

  editSelDeviceFromStorage(
    jwt: string,
    selDevice: string,
    id: string
  ): Observable<EditSelDevFromStorageRFAPI> {
    const path = `${environment.baseURL}/${selDevice}/storage/${id}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.get(path, {
      headers,
    }) as Observable<EditSelDevFromStorageRFAPI>;
  }

  updateSelDeviceFromStorage(
    jwt: string,
    selDevice: string,
    updatedSelDevice: SelDevFromStorage,
    updatedSelDeviceId: string
  ): Observable<UpdateSelDevFromStorageRFAPI> {
    const path = `${environment.baseURL}/${selDevice}/storage/${updatedSelDeviceId}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.patch(path, updatedSelDevice, {
      headers,
    }) as Observable<UpdateSelDevFromStorageRFAPI>;
  }

  addNewSelDeviceFromStorage(
    jwt: string,
    selDevice: string,
    newSelDevice: string
  ): Observable<NewSelDevFromStorage> {
    const path = `${environment.baseURL}/${selDevice}/storage`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.post(path, newSelDevice, {
      headers,
    }) as Observable<NewSelDevFromStorage>;
  }
}
