import { createStore } from "redux";
import { rootReducer } from "../_reducers/root.reducer";
import { SelectedMenu } from "../constant";

export type AppStore = {
    drawer: { isOpen: boolean },
    adjust: { invertImage: boolean },
    selectedMenu: SelectedMenu
}

export const store = createStore(rootReducer);
