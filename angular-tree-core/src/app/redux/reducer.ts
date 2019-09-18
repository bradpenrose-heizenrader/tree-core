import { combineReducers } from "redux";
import { nodeReducer } from "./node.reducer";

export const rootReducer = combineReducers({
  node: nodeReducer
});
