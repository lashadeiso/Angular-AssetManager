import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedPageComponent } from './shared/pages/access-denied-page/access-denied-page.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LeaveToPageGuard } from './core/guards/leave-to-page.guard';
import { TokenDecoderValidatorService } from './core/services/token-decoder-validator.service';
import { DataComunicationService } from './core/services/data-comunication.service';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./pages/sign-in-page/sign-in-page.module').then(
        ({ SignInPageModule }) => SignInPageModule
      ),
  },

  {
    path: 'main',
    canActivate: [AuthGuard],
    canDeactivate: [LeaveToPageGuard],
    loadChildren: () =>
      import('./pages/admin-main-page/admin-main-page.module').then(
        ({ AdminMainPageModule }) => AdminMainPageModule
      ),

    canMatch: [
      () => {
        const _tokeDecoderValidatorService = inject(
          TokenDecoderValidatorService
        );
        return _tokeDecoderValidatorService.isAdminRole();
      },
    ],
  },

  {
    path: 'main',
    canActivate: [AuthGuard],
    canDeactivate: [LeaveToPageGuard],
    loadChildren: () =>
      import('./pages/user-main-page/user-main-page.module').then(
        ({ UserMainPageModule }) => UserMainPageModule
      ),
  },

  { path: 'access-denied', component: AccessDeniedPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private _dataComunicationService: DataComunicationService) {
    // აქ ჩეინჯპასვორდის დროს ვაუქმებ LeaveToPageGuard გარდს main ფეიჯზე
    this._dataComunicationService.leavePageGuardActiveOrDeactive.subscribe(
      (res: string) => {
        if (res === 'deactive') {
          routes.forEach((route) => {
            if (route.canDeactivate?.includes(LeaveToPageGuard)) {
              const index = route.canDeactivate.indexOf(LeaveToPageGuard);
              if (index !== -1) {
                route.canDeactivate.splice(index, 1);
              }
            }
          });
        } else if (res === 'active') {
          // აქ ისევ ვურთავ,sign-in ის დროს გაისვრის active ს
          routes.forEach((route) => {
            if (
              route.canDeactivate &&
              !route.canDeactivate?.includes(LeaveToPageGuard)
            ) {
              route.canDeactivate.push(LeaveToPageGuard);
            }
          });
        }
      }
    );
  }
}
