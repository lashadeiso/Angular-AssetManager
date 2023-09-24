import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingEmitter = new EventEmitter<boolean>();

  private loadings = new Set<string>();

  handle(url: string, loadingStatus: boolean): void {
    if (loadingStatus) {
      this.loadings.add(url);
    } else {
      this.loadings.delete(url);
    }

    const isLoading = this.loadings.size > 0;
    this.loadingEmitter.emit(isLoading);
  }
}
