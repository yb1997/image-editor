import { combineReducers, AnyAction } from "redux";
import {
  drawerReducer,
  menuToolReducer as selectedMenu
} from "./index";
import undoable from "redux-undo";
import { TOGGLE_INVERT_IMAGE } from "../_action-types";


const invertImageReducerCore = (state = false, action: AnyAction) => {
  if(action.type === TOGGLE_INVERT_IMAGE) {
    return !state;
  } else {
    return state;
  }
};

const invertImageReducer = undoable(invertImageReducerCore);


export const rootReducer = combineReducers({
  drawer: drawerReducer,
  selectedMenu,
  invertImage: invertImageReducer
});
