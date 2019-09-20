import * as React from "react";
import { Slider } from ".";
import { useSelector } from "react-redux";
import { IAppStore } from "../../_store";

export const BlurSlider = () => {
    const isImageSelected = useSelector<IAppStore, boolean>(p => p.isImageSelected);
    const originalImage = useSelector<IAppStore, ImageData>(p => p.originalImageData);
    const ctx = useSelector<IAppStore, CanvasRenderingContext2D>(p => p.ctx);
    const [blur, setBlur] = React.useState<number>(0);

    const blurImage = (imageData: ImageData, blurLevel: number = 1) => {
        const width = imageData.width;
        const height = imageData.height;
        const data = imageData.data;
        const totalPixels = data.length;

        const imageMatrix: number[][][] = [];

        // #region create image matrix
        for(let y = 0; y < totalPixels; y += width * 4) {
            const row: number[][] = [];

            for(let x = 0; x < y + width; x += 4) {
                const pixel: number[] = []; 
                pixel.push(data[x + y]);
                pixel.push(data[x + y + 1]);
                pixel.push(data[x + y + 2]);
                pixel.push(data[x + y + 3]);
                row.push(pixel);
            }

            imageMatrix.push(row);
        }
        // #endregion

        // #region blur
        const visited = new Map<number[], boolean>();

        // #region old approach
        // for(let y = blurLevel; y < imageMatrix.length; y++) {
        //     for(let x = blurLevel; x < width; x += blurLevel * 2 + 1) {
        //         const pixel: number[] = imageMatrix[y][x];

        //         if(!visited.get(pixel)) {
        //             debugger;
        //             const leftPixel: number[] = x === 0 ? Array(4).fill(-1) : imageMatrix[y][x - 1];
        //             const rightPixel: number[] = x >= width - 1 ? Array(4).fill(-1) : imageMatrix[y][x + 1];
        //             const topPixel: number[] = y === 0 ? Array(4).fill(-1) : imageMatrix[y - 1][x];
        //             const bottomPixel: number[] = y >= height - 1 ? Array(4).fill(-1) : imageMatrix[y + 1][x];

        //             visited.set(pixel, true);
        //             if(leftPixel[0] !== -1) {
        //                 visited.set(leftPixel, true);
        //                 leftPixel.forEach((color, index) => {
        //                     leftPixel[index] = pixel[index];
        //                 });
        //             }
        //             if(rightPixel[0] !== -1)  {
        //                 visited.set(rightPixel, true);
        //                 rightPixel.forEach((color, index) => {
        //                     rightPixel[index] = pixel[index];
        //                 });
        //             }
        //             if(topPixel[0] !== -1)  {
        //                 visited.set(topPixel, true);
        //                 topPixel.forEach((color, index) => {
        //                     topPixel[index] = pixel[index];
        //                 });
        //             }
        //             if(bottomPixel[0] !== -1)  {
        //                 visited.set(bottomPixel, true);
        //                 bottomPixel.forEach((color, index) => {
        //                     bottomPixel[index] = pixel[index];
        //                 });
        //             }
        //         }
        //     }
        // }
        // #endregion

        // new approach
        for(let y = 0; y < height; y += blurLevel * 2 + 1) {
            for(let x = 0; x < width; x += blurLevel * 2 + 1) {
                
                const initY = y - blurLevel;
                const initX = x - blurLevel;
                const kernelHeight = initY + (blurLevel * 2 + 1);
                const kernelWidth = initX + (blurLevel * 2 + 1);

                const reds: number[] = [];
                const greens: number[] = [];
                const blues: number[] = [];

                debugger;

                for(let y2 = initY; y2 < kernelHeight; y2++) {
                    let rowSum = 0;
                    for(let x2 = initX; x2 < kernelWidth; x2++) {
                        if(imageMatrix[y2] && imageMatrix[y2][x2]) {
                            reds.push(imageMatrix[y2][x2][0]);
                            greens.push(imageMatrix[y2][x2][1]);
                            blues.push(imageMatrix[y2][x2][2]);
                        }
                    }
                }

                const red = reds.reduce((acc, color) => acc + color, 0) / reds.length;
                const blue = blues.reduce((acc, color) => acc + color, 0) / blues.length;
                const green = blues.reduce((acc, color) => acc + color, 0) / blues.length;

                for(let y2 = initY; y2 < kernelHeight; y2++) {
                    let rowSum = 0;
                    for(let x2 = initX; x2 < kernelWidth; x2++) {
                        const currentPixel = imageMatrix[y2][x2];
                        if(currentPixel) {
                            currentPixel[0] = red;
                            currentPixel[1] = green;
                            currentPixel[2] = blue;
                        }
                    }
                }

                console.log(imageMatrix);
            }
        }
        //#endregion

        const flattenedArray: number[] = [];
        // #region flat matrix to single dimension

        for(let i = 0; i < height; i++) {
            for(let j = 0; j < width; j++) {
                const pixel = imageMatrix[i][j];
                
                for(let k = 0; pixel.length; k++) {
                    flattenedArray[i + j + k] = pixel[k];
                }
            }
        }
        // #endregion
        
        // #region Generate ImageData
        const d = new Uint8ClampedArray(flattenedArray);
        const imgData = new ImageData(d, width, height);
        // #endregion

        ctx.putImageData(imgData, 0, 0);
    }

    React.useEffect(() => {
        if(isImageSelected && originalImage) {
            blurImage(originalImage);
        }
    }, [isImageSelected, originalImage]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setBlur(+e.target.value);

    return (
        <>
            <div className="blur-slider-wrapper">
                <p className="text-center">Blur Image</p>
                <Slider 
                    min={0}
                    max={10}
                    step={1}
                    value={blur}
                    onChange={handleChange}
                    disabled={!isImageSelected}  />
            </div>
        </>
    );
}