import React, { useEffect } from "react";
import { Consumer, appContext } from "../../context";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { IAppStore, IImageEditor } from "../../_store";
import { ADJUST_BRIGHTNESS } from "../../_action-types";
import { StateWithHistory } from "redux-undo";

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

export const BrightnessSlider = () => {
    const ctx = useSelector<IAppStore, CanvasRenderingContext2D>(state => state.ctx);
    const editor = useSelector<IAppStore, StateWithHistory<IImageEditor>>(state => state.imageEditor);
    const isImageSelected = useSelector<IAppStore, boolean>(state => state.isImageSelected);
    // const originalImageData = useSelector<IAppStore, ImageData>(state => state.originalImageData);
    
    const dispatch = useDispatch();
    const brightness = editor.present.adjustImage.brightness;
    // const originalImage = 

    useAfterImageSelected(() => {
        if(!editor.past.length) return;

        console.log(`Brightness: ${brightness}`);

        const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

        const len = imageData.data.length;

        for(let i = 0; i < len; i += 4) {
            imageData.data[i] = Math.min(255, Math.floor(imageData.data[i] * (brightness / 100)) );
            imageData.data[i + 1] = Math.min(255, Math.floor(imageData.data[i + 1] * (brightness / 100)) );
            imageData.data[i + 2] = Math.min(255, Math.floor(imageData.data[i + 2] * (brightness / 100)) );
        }

        ctx.putImageData(imageData, 0, 0);

    }, [brightness]);

    return (
        <div className="brightness-control-wrapper">
            <p className="text-center">Adjust Brightness</p>
            <Slider disabled={!isImageSelected} value={brightness} onChange={(e) => dispatch({ type: ADJUST_BRIGHTNESS, payload: { brightness: +e.target.value }})} />
        </div>
    );
}
