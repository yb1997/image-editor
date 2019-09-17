import { combineReducers, AnyAction, Action } from "redux";
import {
  isImageSelected,
  drawerReducer,
  menuToolReducer as selectedMenu
} from "./index";
import undoable from "redux-undo";
import { TOGGLE_INVERT_IMAGE, ADJUST_BRIGHTNESS, ADJUST_CONTRAST, SET_CANVAS, SET_CANVAS_CONTEXT, SET_ORIGINAL_IMAGE_DATA } from "../_action-types";



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

// #region Canvas Reducer
export interface ISetCanvasAction extends Action<string> { payload: { canvas: HTMLCanvasElement } }

const canvas = (state = null, action: ISetCanvasAction) => {
  if(action.type === SET_CANVAS) {
    return action.payload.canvas;
  }
  return state;
}
// #endregion

// #region Canvas Context Reducer
export interface ISetCanvasContextAction extends Action<string> { payload: { ctx: CanvasRenderingContext2D } }

const ctx = (state = null, action: ISetCanvasContextAction) => {
  if(action.type === SET_CANVAS_CONTEXT) {
    return action.payload.ctx;
  }
  return state;
}
// #endregion

// #region Original Image Data Reducer
export interface ISetOriginalImage extends Action<string> { payload: { originalImageData: ImageData } }

const originalImageData = (state = null, action: ISetOriginalImage) => {
  if(action.type === SET_ORIGINAL_IMAGE_DATA) {
    return action.payload.originalImageData;
  }
  return state;
}
// #endregion


export const rootReducer = combineReducers({
  canvas,
  ctx,
  originalImageData,
  isImageSelected,
  drawer: drawerReducer,
  selectedMenu,
  imageEditor
});
