import { createStore } from "redux";
import { rootReducer } from "../_reducers/root.reducer";
import { SelectedMenu } from "../constant";
import { StateWithHistory } from "redux-undo";

export type AppStore = {
    drawer: { isOpen: boolean },
    // adjust: { invertImage: { past: boolean[], present: boolean, future: boolean[] } },
    selectedMenu: SelectedMenu,
    invertImage: StateWithHistory<boolean>
}

export const store = createStore(rootReducer);
