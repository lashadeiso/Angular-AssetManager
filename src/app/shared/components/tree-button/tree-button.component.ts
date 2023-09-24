import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TreeBtn } from 'src/app/core/models/treeBtn.interface';
import { TreeService } from 'src/app/core/services/tree.service';

@Component({
  selector: 'app-tree-button',
  templateUrl: './tree-button.component.html',
  styleUrls: ['./tree-button.component.scss'],
})
export class TreeButtonComponent {
  @Input() node!: TreeBtn;
  showChildren = false;

  nodeName!: string;
  childName!: string;

  constructor(
    private _treeService: TreeService,
    private _router: Router
  ) // private _renderer: Renderer2
  {}

  toggleChildren() {
    this.showChildren = !this.showChildren;
    this._treeService.toggleChildren(this.node.name, this.showChildren);
  }

  getIconClass(name: string): string {
    switch (name.toLowerCase()) {
      case 'users':
        return 'fa-solid fa-people-group';
      case 'production':
        return 'fa-solid fa-address-card';
      case 'storage':
        return 'fa-solid fa-warehouse';
      default:
        return '';
    }
  }

  navigateToRoute(node: TreeBtn, child: TreeBtn) {
    const nodeName = node.name.toLowerCase();
    const childName = child.name.toLowerCase();
    if (nodeName === 'production') {
      this._router.navigate([`main/${nodeName}/all-owners-of-sel-device`], {
        queryParams: { selDev: childName },
      });
    } else if (nodeName === 'storage') {
      this._router.navigate([`main/${nodeName}/all-selected-devices`], {
        queryParams: { selDev: childName },
      });
    }

    // Tree ბათონებზე რაზეც ვდაგავრ ბექრაუნდი რო დარჩეს მუქი ფერის
    // this.nodeName = node.name;
    // this.childName = child.name;
    // const buttons = document.querySelectorAll('.active-child-btn');
    // buttons.forEach((button) => {
    //   this._renderer.removeClass(button, 'active-child-btn');
    // });
  }
}
