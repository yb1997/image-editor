import { createStore, AnyAction, applyMiddleware } from "redux";
import { rootReducer, IAdjustImage } from "../_reducers/root.reducer";
import { SelectedMenu } from "../constant";
import { StateWithHistory } from "redux-undo";
import logger from "redux-logger";

export interface IImageEditor {
    adjustImage: IAdjustImage
}

export interface IAppStore {
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    originalImageData: ImageData,
    isImageSelected: boolean,
    drawer: { isOpen: boolean },
    selectedMenu: SelectedMenu,
    imageEditor: StateWithHistory<IImageEditor>
}

export const store = createStore<IAppStore, AnyAction, unknown, unknown>(rootReducer, applyMiddleware());

window["getState"] = store.getState;
