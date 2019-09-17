import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppStore } from "../../_store";
import { TOGGLE_INVERT_IMAGE } from "../../_action-types";


export const ImageInvertToggle = () => {
    const isImageSelected = useSelector<IAppStore, boolean>(p => p.isImageSelected);
    const ctx = useSelector<IAppStore, CanvasRenderingContext2D>(props => props.ctx);
    const imageEditorState = useSelector((p: IAppStore) => p.imageEditor);
    const dispatch = useDispatch();
    const [isFirstTime, setIsFirstTime] = useState(true);
    const isImageInverted = imageEditorState.present.adjustImage.invertImage;

    useEffect(() => {
        if (!isFirstTime) {
            invertImage();
        } else {
            setIsFirstTime(false);
        }
    }, [isImageInverted]);

    const handleChange = () => {
        dispatch({ type: TOGGLE_INVERT_IMAGE });
    }

    const invertImage = () => {
        const actualData = ctx.getImageData(
            0,
            0,
            ctx.canvas.width,
            ctx.canvas.height
        );

        const newImageData = new ImageData(
            actualData.data,
            actualData.width,
            actualData.height
        );

        const data = newImageData.data;
        const size = data.length;

        // invert color of each pixel
        for (let i = 0; i < size; i++) {
            if ((i + 1) % 4 === 0) {
                continue;
            }
            data[i] = 255 - data[i];
        }

        ctx.putImageData(newImageData, 0, 0);

        ctx.save();
    }



    return (
        <div className="image-invert">
            <div className="toggle-wrapper">
                <input
                    id="image-invert-control"
                    name="image-invert-control"
                    type="checkbox"
                    className="toggle material-toggle"
                    onChange={handleChange}
                    checked={isImageInverted}
                    disabled={!isImageSelected}
                />
            </div>
            <label htmlFor="image-invert-control">Invert Color</label>
        </div>
    );
};

