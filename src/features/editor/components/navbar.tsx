"use client";

import {
    ChevronDown,
    Download,
    MousePointerClick,
    Redo2,
    Undo2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    return (
        <nav className="w-full flex items-center h-[68px] gap-x-8 border-b px-4 lg:px-6">
            {/* Left — Logo */}
            <div className="flex items-center gap-x-2 shrink-0">
                {/* Simple "graphic" logo mark made with Tailwind */}
                <div className="size-8 rounded-md bg-blue-600 flex items-center justify-center">
                    <MousePointerClick className="size-4 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight">image.ai</span>
            </div>

            {/* Center — File name + actions */}
            <div className="flex items-center gap-x-1 flex-1 min-w-0">
                {/* Editable project name */}
                <Button variant="ghost" size="sm" className="gap-x-1 text-sm font-medium truncate">
                    Untitled Project
                    <ChevronDown className="size-4 opacity-50 shrink-0" />
                </Button>
            </div>

            {/* Right — Undo / Redo / Export */}
            <div className="flex items-center gap-x-1 shrink-0">
                {/* Undo */}
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Undo"
                >
                    <Undo2 className="size-4" />
                </Button>

                {/* Redo */}
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Redo"
                >
                    <Redo2 className="size-4" />
                </Button>

                {/* Divider */}
                <div className="w-px h-6 bg-border mx-2" />

                {/* Export */}
                <Button variant="default" size="sm" className="gap-x-2">
                    <Download className="size-4" />
                    Export
                </Button>
            </div>
        </nav>
    );
};
