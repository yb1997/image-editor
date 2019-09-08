import * as React from "react";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { AdjustMenuOption, OverlayMenuOption, TransformMenuOption } from "./menubar-options";
import { Consumer } from "../context";
import { AppStore } from "../_store";


export type propType = { ctx: CanvasRenderingContext2D | null };


const HistoryButton = styled.button`
  background-color: var(--DARK_THEME_BACKGROUND);
  color: white;
  border: none;
  cursor: pointer;
  padding: 0 1em;

  &:disabled {
    background: rgba(255,255,255,0.6);
    color: #333;
    cursor: not-allowed;
  }
`;

const UndoButton = styled(HistoryButton)``;

const RedoButton = styled(HistoryButton)``;

export const MenuBarCore = (props: propType) => {
  const dispatch = useDispatch();
  const editorState = useSelector((p: AppStore) => p.imageEditor);

  return (
    <div className="menu-bar">
      <UndoButton disabled={editorState.past.length < 1} className="undo-btn" onClick={() => dispatch(UndoActionCreators.undo())}>
        <i className="fa fa-2x fa-undo" title="undo"></i>
      </UndoButton>
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
      <RedoButton disabled={editorState.future.length < 1} className="redo-btn" onClick={() => dispatch(UndoActionCreators.redo())}>
        <i className="fa fa-2x fa-repeat" title="redo"></i>
      </RedoButton>
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
