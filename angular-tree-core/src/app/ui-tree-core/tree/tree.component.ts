import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef
} from "@angular/core";

import { CoreTree } from "../tree-core";

@Component({
  selector: "ui-tree-core",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.scss"]
})
export class TreeCoreComponent implements OnInit {
  @Input() nodeTemplate: TemplateRef<any>;
  @Input() treeLoadingTemplate: TemplateRef<any>;
  @Input() nodeLoadingTemplate: TemplateRef<any>;
  @Input() isLoading: boolean;
  @Input() set data(dataItems: any[]) {
    if (this.treeCore) {
      this.treeCore.update(dataItems);
    }
  }
  @Output() selected = new EventEmitter<any>();

  treeCore: CoreTree;
  rootIDs: any;
  nodes: any;

  constructor() {
    this.treeCore = new CoreTree(nodeID => {
      this.selected.emit(nodeID);
    });
  }

  ngOnInit() {
    this.rootIDs = this.treeCore.rootIDs;
    this.nodes = this.treeCore.nodes;
  }
}
