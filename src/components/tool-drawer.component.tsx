import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { IAppStore } from "../_store";
import { CLOSE_TOOL_DRAWER } from "../_action-types";
import { AdjustTools } from "./adjust-tools.component";

export const ToolDrawer = () => {
  const openDrawer = useSelector((s: IAppStore) => s.drawer.isOpen);
  const dispatch = useDispatch();
  
  return (
    <div className={`tool-drawer ${openDrawer ? 'active': ''}`}>
      <div className="close-drawer clear">
        <i onClick={() => dispatch({ type: CLOSE_TOOL_DRAWER })} className="fa fa-2x fa-times float-right" aria-hidden="true"></i>
      </div>
      <div className="drawer-body">
        <AdjustTools />
      </div>
    </div>
  );
};
