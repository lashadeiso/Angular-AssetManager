import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllOwnerOfSelDev } from '../../models/selected-device/rfapi/allOwnerOfSelDev.interface';
import { environment } from 'src/environments/environment';
import { NewOwnerOfSelDev } from '../../models/selected-device/rfapi/newOwnerOfSelDev.interface';
import { DeleteOwnerOfSelDev } from '../../models/selected-device/rfapi/deleteOwnerOfSelDev.interface';
import { OwnerOfSelDev } from '../../models/selected-device/rfapi/ownerOfSelDev.interface';
import { SelDeviceData } from '../../models/selected-device/selDeviceData.interface';
import { UpdateOwnerOfSelDev } from '../../models/selected-device/rfapi/updateOwnerOfSelDev.interface';

@Injectable({
  providedIn: 'root',
})
export class PrSelDeviceService {
  constructor(private _http: HttpClient) {}

  getAllOwnerOfSelDevice(
    jwt: string,
    selDevice: string
  ): Observable<AllOwnerOfSelDev> {
    const path = `${environment.baseURL}/${selDevice}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.get(path, {
      headers,
    }) as Observable<AllOwnerOfSelDev>;
  }

  addNewOwnerOfSelDevice(
    jwt: string,
    selDevice: string,
    headsetOWner: string
  ): Observable<NewOwnerOfSelDev> {
    const path = `${environment.baseURL}/${selDevice}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.post(path, headsetOWner, {
      headers,
    }) as Observable<NewOwnerOfSelDev>;
  }

  deleteOwnerOfSelDevice(
    jwt: string,
    selDevice: string,
    serialNumber: string
  ): Observable<DeleteOwnerOfSelDev> {
    const path = `${environment.baseURL}/${selDevice}/${serialNumber}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.delete(path, {
      headers,
    }) as unknown as Observable<DeleteOwnerOfSelDev>;
  }

  OwnerOfSelDevice(
    jwt: string,
    selDevice: string,
    serialNumber: string
  ): Observable<OwnerOfSelDev> {
    const path = `${environment.baseURL}/${selDevice}/${serialNumber}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.get(path, {
      headers,
    }) as Observable<OwnerOfSelDev>;
  }

  UpdateOwnerOfSelDevice(
    jwt: string,
    selDevice: string,
    serialNumber: string,
    updateItem: SelDeviceData
  ): Observable<UpdateOwnerOfSelDev> {
    const path = `${environment.baseURL}/${selDevice}/${serialNumber}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.patch(path, updateItem, {
      headers,
    }) as Observable<UpdateOwnerOfSelDev>;
  }
}
