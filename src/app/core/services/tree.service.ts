import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  private nodeStates: { [nodeName: string]: boolean } = {};

  toggleChildren(nodeName: string, showChildren: boolean) {
    this.nodeStates[nodeName] = showChildren;
  }

  isChildrenShown(nodeName: string): boolean {
    return this.nodeStates[nodeName] || false;
  }
}
