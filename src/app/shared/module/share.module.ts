import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { LoaderComponent } from '../components/loader/loader.component';

@NgModule({
  declarations: [CapitalizePipe, LoaderComponent],
  imports: [CommonModule],
  exports: [CapitalizePipe, LoaderComponent],
})
export class ShareModule {}
