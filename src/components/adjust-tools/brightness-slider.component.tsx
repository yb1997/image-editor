import React, { useState } from "react";
import { Consumer } from "../../context";
import styled from "styled-components";

const Slider = styled.input.attrs({
    type: "range",
    min: 0,
    max: 200,
    step: 10 
})`
    margin: 0;
    width: 100%;
`;

const BrightnessSliderCore = ({ ctx }) => {
    const [sliderValue, setSliderValue] = useState(100);

    return (
        <div className="brightness-control-wrapper">
            <p className="text-center">Adjust Brightness</p>
            <Slider value={sliderValue} onChange={(e) => setSliderValue(+e.target.value)} />
        </div>
    )
}

export const BrightnessSlider = () => {
    return (
        <Consumer>
            {(props) => <BrightnessSliderCore ctx={props.ctx} />}
        </Consumer>
    );
}