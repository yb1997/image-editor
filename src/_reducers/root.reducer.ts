import { combineReducers, AnyAction } from "redux";
import {
  drawerReducer,
  menuToolReducer as selectedMenu
} from "./index";
import undoable, { FilterFunction, StateWithHistory } from "redux-undo";
import { TOGGLE_INVERT_IMAGE, ADJUST_BRIGHTNESS, ADJUST_CONTRAST } from "../_action-types";


// #region Adjust Image Reducer
export interface IAdjustImage {
  invertImage: boolean,
  brightness: number,
  contrast: number
}

const defaultAdjustImageState = { invertImage: false, brightness: 100, contrast: 100 };

const adjustImage = (state: IAdjustImage = defaultAdjustImageState, action: AnyAction): IAdjustImage => {
  switch(action.type) {
    case TOGGLE_INVERT_IMAGE:
      return { ...state, invertImage: !state.invertImage };
    case ADJUST_BRIGHTNESS:
      return { ...state, brightness: action.payload.brightness };
    case ADJUST_CONTRAST:
      return { ...state, contrast: action.payload.contrast };
    default:
      return state;
  }
}
// #endregion

// #region Image Editing
interface IImageEditor {
  adjustImage: IAdjustImage
}

const editorStateDiff = (action, state, prevHis) => {
  // return Object.keys(prevHis.present.adjustImage).map((key) => s[key]).some()
  const adjImg = (state.adjustImage as IAdjustImage);
  const s = prevHis.present.adjustImage as IAdjustImage;
  return (
    s.invertImage !== adjImg.invertImage ||
    s.brightness !== adjImg.brightness ||
    s.contrast !== adjImg.contrast
  );
}

const imageEditorCore = (state: IImageEditor = { adjustImage: defaultAdjustImageState }, action: AnyAction) => {
  return {
    adjustImage: adjustImage(state.adjustImage, action)
  }
}

const imageEditor = undoable(imageEditorCore, { filter: editorStateDiff });
// #endregion

export const rootReducer = combineReducers({
  drawer: drawerReducer,
  selectedMenu,
  imageEditor
});
