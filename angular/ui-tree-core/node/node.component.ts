import { Component, OnInit, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "ui-node-core",
  templateUrl: "./node.component.html",
  styleUrls: ["./node.component.scss"]
})
export class NodeCoreComponent implements OnInit {
  @Input() nodeTemplate: TemplateRef<any>;
  @Input() nodeLoadingTemplate: TemplateRef<any>;
  @Input() nodes: any[];
  @Input() nodeID: any;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.nodes[this.nodeID].toggleExpanded();
  }
}
