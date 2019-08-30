import React, { Ref } from "react";

type contextType = { canvas: HTMLCanvasElement | null, ctx: CanvasRenderingContext2D | null };

export const appContext = React.createContext<contextType>({ canvas: null, ctx: null });

export const Provider = appContext.Provider;

export const Consumer = appContext.Consumer;

