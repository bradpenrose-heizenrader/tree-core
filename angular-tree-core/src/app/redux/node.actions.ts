import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "./store";
import { timeout } from "q";

@Injectable()
export class NodeActions {
  static NODE_INSERT = "node/insert";

  constructor(private _ngRedux: NgRedux<IAppState>) {}

  insert(nodes: any[]) {
    let action = { type: NodeActions.NODE_INSERT, payload: nodes };

    return new Promise(resolve => {
      setTimeout(() => {
        this._ngRedux.dispatch(action);
        resolve();
      }, 1000);
    });
  }
}
