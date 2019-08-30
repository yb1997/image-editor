import { store } from "../_store/store";
import { SELECT_MENU_TOOL_OPTION } from "../_action-types/menu-tool.action";
import { SelectedMenu } from "../constant";

export const selectMenuToolOption = (selectedMenu: SelectedMenu) => {
  store.dispatch({ type: SELECT_MENU_TOOL_OPTION, selectedMenu });
};
