import { createStore, AnyAction, applyMiddleware } from "redux";
import { rootReducer, IAdjustImage } from "../_reducers/root.reducer";
import { SelectedMenu } from "../constant";
import { StateWithHistory } from "redux-undo";

interface IImageEditor {
    adjustImage: IAdjustImage
}

export interface IAppStore {
    isImageSelected: boolean,
    drawer: { isOpen: boolean },
    selectedMenu: SelectedMenu,
    imageEditor: StateWithHistory<IImageEditor>
}

export const store = createStore<IAppStore, AnyAction, unknown, unknown>(rootReducer, applyMiddleware());
