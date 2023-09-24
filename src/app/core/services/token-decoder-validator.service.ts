import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenDecoderValidatorService {
  public isUserSignIn(): boolean {
    const userLog = localStorage.getItem('authorization');
    return !!userLog;
  }

  public isToken(): string {
    const jwtToken = localStorage.getItem('authorization');
    if (jwtToken) {
      return jwtToken;
    } else return '';
  }

  public parseToken(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  // app-.routing.module.ts ში canMatch გარდი / main ფეიჯის ჩასატვირთად Admin ისთვის
  public isAdminRole(): Observable<boolean> {
    const isUserSignIn: boolean = this.isUserSignIn();
    const isToken: string = this.isToken();
    if (isUserSignIn) {
      const userRole = this.parseToken(isToken).role.toLowerCase();
      if (userRole === 'admin') {
        return of(true);
      }
    }
    return of(false);
  }
}
