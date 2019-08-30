import { SelectedMenu } from "../constant";
import { SELECT_MENU_TOOL_OPTION } from "../_action-types/menu-tool.action";
import { Action } from "redux";

export function menuToolReducer(
  state = SelectedMenu.NONE,
  action: Action<string> & { selectedMenu: SelectedMenu }
): SelectedMenu {
  console.log(action.type);
  if (action.type === SELECT_MENU_TOOL_OPTION) {
    return action.selectedMenu;
  }

  return state;
}
