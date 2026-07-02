import { useCallback, useEffect } from "react";
import { fabric } from "fabric";
interface useAutoResizeProps {
    canvas?: fabric.Canvas | null;
    container?: HTMLDivElement | null;
}

export const useAutoResize = ({ canvas, container }: useAutoResizeProps) => {

    const autoZoom = useCallback(() => {
        if (canvas && container) {
            const { width, height } = container.getBoundingClientRect();
            canvas.setWidth(width);
            canvas.setHeight(height);

            const center = canvas.getCenter();

            const zoomRatio = 0.85;
            const localWorkspace = canvas.getObjects().find((obj) => obj.name === "clip");
            const scale = Math.min(
                width / (localWorkspace?.width ?? 1),
                height / (localWorkspace?.height ?? 1)
            );
            const zoom = zoomRatio * scale;

            canvas.setViewportTransform(fabric.iMatrix.concat());
            canvas.zoomToPoint(new fabric.Point(center.left, center.top), zoom);

            if (!localWorkspace) return;

            const workspaceCenter = localWorkspace.getCenterPoint();
            const viewportTransform = canvas.viewportTransform;

            if (canvas.width === undefined || canvas.height === undefined || !viewportTransform) return;
            
            viewportTransform[4] = canvas.width / 2 - workspaceCenter.x * viewportTransform[0];
            viewportTransform[5] = canvas.height / 2 - workspaceCenter.y * viewportTransform[3];
            
            canvas.setViewportTransform(viewportTransform);

            localWorkspace.clone((cloned: fabric.Rect) => {
                canvas.clipPath = cloned;
                canvas.requestRenderAll();
            });

        }
    }, [canvas, container]);

    useEffect(() => {
        const handleResize = () => {
            autoZoom();
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [canvas, container]);
};
