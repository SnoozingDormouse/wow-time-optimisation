import { Component } from '@angular/core';
import { ExpansionPanelNode, TREE_DATA } from './data-source';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-nested-expansion-panels-with-tables',
  templateUrl: './nested-expansion-panels-with-tables.component.html',
  styleUrls: ['./nested-expansion-panels-with-tables.component.css']
})
export class NestedExpansionPanelsWithTablesComponent {
    treeControl = new NestedTreeControl<ExpansionPanelNode>(node => node.children);
    dataSource = new MatTreeNestedDataSource<ExpansionPanelNode>();

    constructor() {
      this.dataSource.data = TREE_DATA;
    }

    hasChild = (_: number, node: ExpansionPanelNode) => !!node.children && node.children.length > 0;
}
