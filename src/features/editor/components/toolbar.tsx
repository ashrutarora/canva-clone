"use client";

import { Button } from "@/components/ui/button";
import {
    AlignCenter,
    AlignLeft,
    AlignRight,
    Bold,
    ChevronDown,
    Copy,
    Italic,
    Trash2,
    Underline,
} from "lucide-react";

// This toolbar sits above the canvas and shows context-sensitive
// actions depending on what the user has selected on the canvas.
// For now it renders a general-purpose set of controls as a foundation.
export const Toolbar = () => {
    return (
        <div className="shrink-0 h-[56px] border-b bg-background w-full flex items-center gap-x-1 px-3 overflow-x-auto">

            {/* ── Fill color ─────────────────────────── */}
            <div className="flex items-center gap-x-1.5 border-r pr-3 mr-1 shrink-0">
                <div className="size-5 rounded border shadow-sm bg-black cursor-pointer hover:opacity-80 transition-opacity" />
                <span className="text-xs text-muted-foreground">Fill</span>
            </div>

            {/* ── Font controls ──────────────────────── */}
            <div className="flex items-center gap-x-0.5 border-r pr-3 mr-1 shrink-0">
                <Button variant="ghost" size="icon" aria-label="Bold">
                    <Bold className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Italic">
                    <Italic className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Underline">
                    <Underline className="size-4" />
                </Button>
            </div>

            {/* ── Alignment ──────────────────────────── */}
            <div className="flex items-center gap-x-0.5 border-r pr-3 mr-1 shrink-0">
                <Button variant="ghost" size="icon" aria-label="Align left">
                    <AlignLeft className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Align center">
                    <AlignCenter className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Align right">
                    <AlignRight className="size-4" />
                </Button>
            </div>

            {/* ── Opacity ────────────────────────────── */}
            <div className="flex items-center gap-x-1.5 border-r pr-3 mr-1 shrink-0">
                <Button variant="ghost" size="sm" className="gap-x-1 text-xs w-[80px] justify-between">
                    <span>Opacity</span>
                    <span className="text-muted-foreground">100%</span>
                    <ChevronDown className="size-3 opacity-50" />
                </Button>
            </div>

            {/* ── Object actions ─────────────────────── */}
            <div className="flex items-center gap-x-0.5 shrink-0 ml-auto">
                <Button variant="ghost" size="icon" aria-label="Duplicate">
                    <Copy className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Delete" className="text-destructive hover:text-destructive">
                    <Trash2 className="size-4" />
                </Button>
            </div>

        </div>
    );
};
