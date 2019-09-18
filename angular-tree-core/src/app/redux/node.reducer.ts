import { AnyAction } from "redux";
import { NodeActions } from "./node.actions";

export function nodeReducer(lastState = null, action: AnyAction): any {
  switch (action.type) {
    case NodeActions.NODE_INSERT:
      return Object.assign({}, lastState, {
        data: [...lastState.data, ...action.payload]
      });
  }

  return lastState;
}
