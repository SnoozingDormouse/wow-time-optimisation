import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { SideMenuNode, TREE_DATA } from './side-menu-nav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavTreeControlComponent {
  treeControl = new NestedTreeControl<SideMenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SideMenuNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: SideMenuNode) => !!node.children && node.children.length > 0;
}
