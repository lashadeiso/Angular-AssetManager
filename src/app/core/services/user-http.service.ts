import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignIn } from '../models/users/signIn.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignUpOutRFAPI } from '../models/users/rfapi/signUpOut-RFAPI.interface';
import { SignInRFAPI } from '../models/users/rfapi/signIn-RFAPI.interface';
import { SignUp } from '../models/users/signUp.interface';
import { ChangePass } from '../models/users/changePass.interface';
import { ChangePasswordRFAPI } from '../models/users/rfapi/changePassword-RFAPI .interface';
import { DeleteUserResponceRFAPI } from '../models/users/rfapi/deleteUser-RFAPI.interface';
import { GetAllUsersResponceRFAPI } from '../models/users/rfapi/getAllUsers-RFAPI.interface';
import { SingleUserRFAPI } from '../models/users/rfapi/singleUser-RFAPI.interface';
import { UpdateUserData } from '../models/users/updateUserData.interface';
import { UpdateUserDataRFAPI } from '../models/users/rfapi/updateUserData-RFAPI.interface';
import { resetPasswordRFAPI } from '../models/users/rfapi/resetPassword-RFAPI.interface';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  constructor(private _http: HttpClient) {}

  signIn(logInUser: SignIn): Observable<SignInRFAPI> {
    const path = `${environment.userBaseURL}/sign-in`;
    return this._http.post(path, logInUser) as Observable<SignInRFAPI>;
  }

  signOut(jwt: string): Observable<SignUpOutRFAPI> {
    const path = `${environment.userBaseURL}/sign-out`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.post(path, null, {
      headers,
    }) as Observable<SignUpOutRFAPI>;
  }

  signUp(jwt: string, signUpUser: SignUp): Observable<SignUpOutRFAPI> {
    const path = `${environment.userBaseURL}/sign-up`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.post(path, signUpUser, {
      headers,
    }) as Observable<SignUpOutRFAPI>;
  }

  changePassword(
    jwt: string,
    ChangePassword: ChangePass
  ): Observable<ChangePasswordRFAPI> {
    const path = `${environment.userBaseURL}/password/change`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.post(path, ChangePassword, {
      headers,
    }) as Observable<ChangePasswordRFAPI>;
  }

  deleteUser(
    jwt: string,
    userEmail: string
  ): Observable<DeleteUserResponceRFAPI> {
    const path = `${environment.userBaseURL}/profile/${userEmail}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.delete(path, {
      headers,
    }) as unknown as Observable<DeleteUserResponceRFAPI>;
  }

  getAllUSers(jwt: string): Observable<GetAllUsersResponceRFAPI> {
    const path = `${environment.userBaseURL}/profile/`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.get(path, {
      headers,
    }) as Observable<GetAllUsersResponceRFAPI>;
  }

  getSingleUser(jwt: string, userEmail: string): Observable<SingleUserRFAPI> {
    const path = `${environment.userBaseURL}/profile/${userEmail}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.get(path, {
      headers,
    }) as Observable<SingleUserRFAPI>;
  }

  updateUserProfile(
    jwt: string,
    userEmail: string,
    updateUserData: UpdateUserData
  ): Observable<UpdateUserDataRFAPI> {
    const path = `${environment.userBaseURL}/profile/${userEmail}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.patch(path, updateUserData, {
      headers,
    }) as Observable<UpdateUserDataRFAPI>;
  }

  resetUserPassword(
    jwt: string,
    userEmail: string,
    newPassword: { newPassword: string }
  ): Observable<resetPasswordRFAPI> {
    const path = `${environment.userBaseURL}/password/set/${userEmail}`;
    const headers = new HttpHeaders({
      Authorization: jwt,
    });
    return this._http.post(path, newPassword, {
      headers,
    }) as Observable<resetPasswordRFAPI>;
  }
}
