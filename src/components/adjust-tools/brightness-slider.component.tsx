import React, { useEffect } from "react";
import { Consumer } from "../../context";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { IAppStore } from "../../_store";
import { ADJUST_BRIGHTNESS } from "../../_action-types";

const Slider = styled.input.attrs({
    type: "range",
    min: 0,
    max: 200,
    step: 10 
})`
    margin: 0;
    width: 100%;
`;

const useAfterImageSelected = (cb: React.EffectCallback, deps: any[]) => {
    const isImageSelected = useSelector((state: IAppStore) => state.isImageSelected);

    useEffect(() => { 
        if(isImageSelected)
            cb() 
    }, [isImageSelected, ...deps]);
}

interface IBrightnessSliderCoreProps {
    ctx: CanvasRenderingContext2D
}

const BrightnessSliderCore = ({ ctx }: IBrightnessSliderCoreProps) => {
    const dispatch = useDispatch();
    const editor = useSelector((state: IAppStore) => state.imageEditor);
    const isImageSelected = useSelector((state: IAppStore) => state.isImageSelected);
    const brightness = editor.present.adjustImage.brightness;
    // const originalImage = 

    useAfterImageSelected(() => {
        if(!editor.past.length) {
            return;
        }
        console.log(`Brightness: ${brightness}`);
        const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

        const len = imageData.data.length;

        // for(let i = 0; i < len; i += 4) {
        //     imageData.data[i] = Math.min(255, );
        // }

    }, [brightness]);

    return (
        <div className="brightness-control-wrapper">
            <p className="text-center">Adjust Brightness</p>
            <Slider disabled={!isImageSelected} value={brightness} onChange={(e) => dispatch({ type: ADJUST_BRIGHTNESS, payload: { brightness: +e.target.value }})} />
        </div>
    );
}

export const BrightnessSlider = () => {
    return (
        <Consumer>
            {(props) => <BrightnessSliderCore ctx={props.ctx} />}
        </Consumer>
    );
}