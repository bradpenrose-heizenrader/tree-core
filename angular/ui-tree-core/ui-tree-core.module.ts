import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TreeCoreComponent } from "./tree/tree.component";
import { NodeCoreComponent } from "./node/node.component";

@NgModule({
  declarations: [TreeCoreComponent, NodeCoreComponent],
  imports: [CommonModule],
  exports: [TreeCoreComponent, NodeCoreComponent]
})
export class UiTreeCoreModule {}
