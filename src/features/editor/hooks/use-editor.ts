import {fabric} from "fabric";
import { useCallback } from "react";

export const useEditor = () => {
    // Add your editor logic here
    const init = useCallback(({
        initialCanvas,
        initialContainer,
    }: {

        initialCanvas: fabric.Canvas;
        initialContainer: HTMLDivElement | null;
    }
) => {
        console.log("Initializing the editor...");
        
    }, []);

    return { init };
}