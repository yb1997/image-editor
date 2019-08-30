import { store } from "../_store/store";
import {
  OPEN_TOOL_DRAWER,
  CLOSE_TOOL_DRAWER,
  TOGGLE_TOOL_DRAWER
} from "../_action-types";

export const openToolDrawer = () => store.dispatch({ type: OPEN_TOOL_DRAWER });

export const closeToolDrawer = () =>
  store.dispatch({ type: CLOSE_TOOL_DRAWER });

export const toggleToolDrawer = () =>
  store.dispatch({ type: TOGGLE_TOOL_DRAWER });
