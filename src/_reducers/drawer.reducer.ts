import {
  OPEN_TOOL_DRAWER,
  CLOSE_TOOL_DRAWER,
  TOGGLE_TOOL_DRAWER
} from "../_action-types";
import { Action } from "redux";

export const drawerReducer = (state = { isOpen: false }, action: Action<string>) => {
  switch (action.type) {
    case OPEN_TOOL_DRAWER:
      return { ...state, isOpen: true };
    case CLOSE_TOOL_DRAWER:
      return { ...state, isOpen: false };
    case TOGGLE_TOOL_DRAWER:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
