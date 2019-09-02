import * as React from "react";
import { ActionCreators as UndoActionCreators } from "redux-undo";

import { AdjustMenuOption, OverlayMenuOption, TransformMenuOption } from "./menubar-options";
import { Consumer } from "../context";
import { useDispatch } from "react-redux";


export type propType = { ctx: CanvasRenderingContext2D | null };

export const MenuBarCore = (props: propType) => {
  const dispatch = useDispatch();

  return (
    <div className="menu-bar">
      <button onClick={() => dispatch(UndoActionCreators.undo())}>
        <i className="fa fa-2x fa-undo" title="undo"></i>
      </button>
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
      <button onClick={() => dispatch(UndoActionCreators.undo())}>
        <i className="fa fa-2x fa-repeat" title="redo"></i>
      </button>
    </div>
  );
};

export const MenuBar = () => {
  return (
    <Consumer>
      {(props) => <MenuBarCore ctx={props.ctx} /> }
    </Consumer>
  );
}
