import * as React from "react";
import { useDispatch } from "react-redux";

import { OPEN_TOOL_DRAWER } from "../_action-types";
import { MenuOption, AdjustMenuOption } from "./menubar-options";


export const OverlayMenuOption = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log("Overlay option clicked");
    dispatch({ type: OPEN_TOOL_DRAWER });
  }

  return (
    <MenuOption onClick={onClick} title="Overlay" icon="window-restore"/>
  )
}

export const TransformMenuOption = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log("transform option clicked");
    dispatch({ type: OPEN_TOOL_DRAWER });
  }

  return (
    <MenuOption onClick={onClick} title="Transform" icon="arrows" />
  )
}

export const MenuBar = () => {

  return (
    <div className="menu-bar">
      <button> <i className="fa fa-2x fa-undo" title="Revert" ></i></button>
      <div className="tool-menu">
        <ul>
          <li>
            <AdjustMenuOption />
          </li>
          <li>
            <OverlayMenuOption />
          </li>
          <li>
            <TransformMenuOption />
          </li>
        </ul>
      </div>
      <button>Reapply</button>
    </div>
  );
};
