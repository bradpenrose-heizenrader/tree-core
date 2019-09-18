import { Component, OnInit, ViewChild } from "@angular/core";
import { select } from "@angular-redux/store";
import { Observable } from "rxjs";
import { NodeActions } from "./redux/node.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @select(["node", "data"]) data$: Observable<any>;

  @ViewChild("appTree", { static: false }) appTree;

  nodeID: number;

  isLoading: boolean = true;

  nodeCount = 1;

  constructor(private _nodeActions: NodeActions) {}

  async ngOnInit() {
    // let data = this.generateTree(10);
    let data = this.generateRandomData(10, undefined);

    this.isLoading = true;
    await this._nodeActions.insert(data);
    this.isLoading = false;
  }

  async selected(nodeID) {
    this.nodeID = nodeID;

    let data = this.generateRandomData(10, this.nodeID);
    this.appTree.nodes[nodeID].loading = true;
    await this._nodeActions.insert(data);
    this.appTree.nodes[nodeID].loading = false;
  }

  generateTree(size: number) {
    let data = [];
    for (let i = 0; i < size; i++) {
      let parentID = data.length
        ? data[this.getRandom(data.length)].id
        : undefined;
      let hold = this.generateRandomData(size, parentID);
      data = [...data, ...hold];
    }
    return data;
  }

  generateRandomData(size: number, parentID: any): any[] {
    let data = Array(size);
    for (let i = 0; i < size; i++) {
      let id = this.randomID();
      data[i] = {
        id: id,
        parentID: parentID,
        name: `node:${this.nodeCount++}`
      };
    }
    return data;
  }

  randomID(): string {
    return Math.random()
      .toString(36)
      .substr(2, 5);
  }

  getRandom(max: number) {
    let hold1 = Math.random();
    let hold2 = hold1 * max;
    let hold3 = Math.floor(hold2);
    return hold3;
  }
}
