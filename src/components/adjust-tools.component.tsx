import React from "react";
import { Consumer } from "../context";
import { ImageInvertToggle, BrightnessSlider } from "./adjust-tools";


type propType = { ctx: CanvasRenderingContext2D | null }

export const AdjustToolsCore = (props: propType) => {

  return (
    <>
      <ImageInvertToggle />
      <BrightnessSlider />
    </>
  );
};


export const AdjustTools = () => {
  return (
    <Consumer>
      {(props) => <AdjustToolsCore ctx={props.ctx} />}
    </Consumer>
  );
}
