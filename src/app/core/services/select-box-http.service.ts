import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProjectRFAPI } from '../models/select-box/project-RFAPI.interface';
import { environment } from 'src/environments/environment';
import { RoleAndSiteRFAPI } from '../models/select-box/roleAndSite-RFAPI.interface';
import { BrandAndSiteRFAPI } from '../models/select-box/brandAndSite-RFAPI.interface';
import { ModelRFAPI } from '../models/select-box/model-RFAPI.interface';
import { UserRFAPI } from '../models/select-box/user-RFAPI.interface';

@Injectable({
  providedIn: 'root',
})
export class SelectBoxHttpService {
  constructor(private _http: HttpClient) {}

  getRoleAndSiteSelectBox(jwt: string): Observable<RoleAndSiteRFAPI> {
    const path = `${environment.baseURL}/user/form`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.get(path, {
      headers,
    }) as Observable<RoleAndSiteRFAPI>;
  }

  getProjectSelectBox(jwt: string, site: string): Observable<ProjectRFAPI> {
    const path = `${environment.baseURL}/user/form`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.get(path, {
      headers,
      params: {
        site: site,
      },
    }) as Observable<ProjectRFAPI>;
  }

  getBrandAndSite(
    jwt: string,
    selDevice: string
  ): Observable<BrandAndSiteRFAPI> {
    const path = `${environment.baseURL}/${selDevice}/form`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });

    return this._http.get(path, {
      headers,
    }) as Observable<BrandAndSiteRFAPI>;
  }

  getModelSelectBox(
    jwt: string,
    selDevice: string,
    brand: string
  ): Observable<ModelRFAPI> {
    const path = `${environment.baseURL}/${selDevice}/form/params`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.get(path, {
      headers,
      params: {
        brand: brand,
      },
    }) as Observable<ModelRFAPI>;
  }

  getUserSelectBox(
    jwt: string,
    selDevice: string,
    project: string
  ): Observable<UserRFAPI> {
    const path = `${environment.baseURL}/${selDevice}/form/params`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.get(path, {
      headers,
      params: {
        project: project,
      },
    }) as Observable<UserRFAPI>;
  }
}
