import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOwnersOfSelDevComponent } from './all-owners-of-sel-dev.component';

const routes: Routes = [
  {
    path: '',
    component: AllOwnersOfSelDevComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllOwnersOfSelDeviceRoutingModule {}
