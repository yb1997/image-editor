import { combineReducers } from "redux";
import {
  adjustReducer,
  drawerReducer,
  menuToolReducer as selectedMenu
} from "./index";

export const rootReducer = combineReducers({
  drawer: drawerReducer,
  adjust: adjustReducer,
  selectedMenu
});
