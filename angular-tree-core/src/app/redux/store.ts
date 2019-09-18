import { Store, createStore } from "redux";
import { rootReducer } from "./reducer";

export interface IAppState {
  node: {
    data: any[];
  };
}

export const appStore: Store<IAppState> = createStore(rootReducer);
