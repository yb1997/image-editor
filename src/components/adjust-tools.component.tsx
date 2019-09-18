import React from "react";
import { ImageInvertToggle, BrightnessSlider, BlurSlider } from "./adjust-tools";


export const AdjustTools = () => {

  return (
    <>
      <ImageInvertToggle />
      <BrightnessSlider />
      <BlurSlider />
    </>
  );
};
