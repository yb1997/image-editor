import { createStore } from "redux";
import { rootReducer, IAdjustImage } from "../_reducers/root.reducer";
import { SelectedMenu } from "../constant";
import { StateWithHistory } from "redux-undo";

interface IImageEditor {
    adjustImage: IAdjustImage
}

export type AppStore = {
    drawer: { isOpen: boolean },
    selectedMenu: SelectedMenu,
    imageEditor: StateWithHistory<IImageEditor>
}

export const store = createStore(rootReducer);
