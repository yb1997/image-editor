import { SelectedMenu } from "../constant";
import { SELECT_MENU_TOOL_OPTION } from "../_action-types/menu-tool.action";
import { Reducer, AnyAction } from "redux";

export const menuToolReducer: Reducer<SelectedMenu, AnyAction> = (state = SelectedMenu.NONE, action) => {
  
  if (action.type === SELECT_MENU_TOOL_OPTION) {
    return action.selectedMenu;
  }

  return state;
}
