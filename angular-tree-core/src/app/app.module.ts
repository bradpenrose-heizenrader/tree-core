import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { UiTreeCoreModule } from "./ui-tree-core/ui-tree-core.module";

import { IAppState } from "./redux/store";
import { rootReducer } from "./redux/reducer";
import { NodeActions } from "./redux/node.actions";

import { NgReduxModule, NgRedux } from "@angular-redux/store";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgReduxModule, UiTreeCoreModule],
  providers: [NodeActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    const initialState: IAppState = {
      node: {
        data: []
      }
    };

    ngRedux.configureStore(rootReducer, initialState);
  }
}
