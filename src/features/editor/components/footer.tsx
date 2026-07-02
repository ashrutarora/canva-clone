"use client";

import { Minus, Plus, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

// The footer bar sits below the canvas and shows zoom controls
// and other canvas-level info — just like Canva's bottom bar.
export const Footer = () => {
    return (
        <footer className="h-[52px] border-t bg-background w-full flex items-center justify-end gap-x-1 px-3 shrink-0 overflow-x-auto">

            {/* Fit to screen */}
            <Button
                variant="ghost"
                size="icon"
                aria-label="Fit canvas to screen"
            >
                <Maximize className="size-4" />
            </Button>

            {/* Zoom out */}
            <Button
                variant="ghost"
                size="icon"
                aria-label="Zoom out"
            >
                <Minus className="size-4" />
            </Button>

            {/* Zoom level display */}
            <Button variant="ghost" size="sm" className="text-xs w-[60px]">
                100%
            </Button>

            {/* Zoom in */}
            <Button
                variant="ghost"
                size="icon"
                aria-label="Zoom in"
            >
                <Plus className="size-4" />
            </Button>

        </footer>
    );
};
