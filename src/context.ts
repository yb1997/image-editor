import React, { Ref } from "react";

type contextType = { canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, originalImageData: HTMLImageElement };

export const appContext = React.createContext<contextType>({ canvas: null, ctx: null, originalImageData: null });

export const Provider = appContext.Provider;

export const Consumer = appContext.Consumer;

