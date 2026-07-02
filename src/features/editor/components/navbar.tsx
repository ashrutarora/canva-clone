"use client";

import {
    ChevronDown,
    Download,
    MousePointerClick,
    Redo2,
    Undo2,
} from "lucide-react";
import { CiFileOn } from "react-icons/ci";
import { BsCloudCheck } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Hint } from "@/components/hint";
import { Logo } from "./logo";

export const Navbar = () => {
    return (
        <nav className="w-full flex items-center h-[68px] gap-x-8 border-b lg:px-4 px-2">

            {/* ── Logo ───────────────────────────────────── */}
            <Logo />

            {/* ── Center section ─────────────────────────── */}
            <div className="w-full flex items-center gap-x-1 h-full">

                {/* File dropdown */}
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="ghost">
                            File
                            <ChevronDown className="size-4 ml-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-60">
                        <DropdownMenuItem
                            onClick={() => {
                                // TODO: add functionality
                            }}
                            className="flex items-center gap-x-2"
                        >
                            <CiFileOn className="size-8" />
                            <div>
                                <p>Open</p>
                                <p className="text-xs text-muted-foreground">
                                    Open a JSON file
                                </p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Vertical separator */}
                <Separator orientation="vertical" className="mx-2" />

                {/* Select tool button */}
                <Hint label="Select" side="bottom" sideOffset={10}>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                            // TODO: add dynamic class
                        }}
                    >
                        <MousePointerClick className="size-4" />
                    </Button>
                </Hint>

                {/* Undo */}
                <Hint label="Undo" side="bottom" sideOffset={10}>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                            // TODO: add functionality
                        }}
                    >
                        <Undo2 className="size-4" />
                    </Button>
                </Hint>

                {/* Redo */}
                <Hint label="Redo" side="bottom" sideOffset={10}>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                            // TODO: add functionality
                        }}
                    >
                        <Redo2 className="size-4" />
                    </Button>
                </Hint>

                {/* Vertical separator */}
                <Separator orientation="vertical" className="mx-2" />

                {/* Save indicator */}
                <div className="flex items-center gap-x-2">
                    <BsCloudCheck className="text-muted-foreground" style={{ width: 20, height: 20 }} />
                    <div className="text-xs text-muted-foreground">Saved</div>
                </div>

                {/* ── Right section — Export ──────────────── */}
                <div className="ml-auto flex items-center gap-x-4">
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button size="sm" variant="ghost">
                                Export
                                <Download className="size-4 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="min-w-60">
                            <DropdownMenuItem
                                className="flex items-center gap-x-2"
                                onClick={() => {
                                    // TODO: add functionality
                                }}
                            >
                                <CiFileOn className="size-8" />
                                <div>
                                    <p>JSON</p>
                                    <p className="text-xs text-muted-foreground">
                                        Save for later editing
                                    </p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="flex items-center gap-x-2"
                                onClick={() => {
                                    // TODO: add functionality
                                }}
                            >
                                <CiFileOn className="size-8" />
                                <div>
                                    <p>PNG</p>
                                    <p className="text-xs text-muted-foreground">
                                        Best for sharing on the web
                                    </p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="flex items-center gap-x-2"
                                onClick={() => {
                                    // TODO: add functionality
                                }}
                            >
                                <CiFileOn className="size-8" />
                                <div>
                                    <p>JPEG</p>
                                    <p className="text-xs text-muted-foreground">
                                        Best for printing
                                    </p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="flex items-center gap-x-2"
                                onClick={() => {
                                    // TODO: add functionality
                                }}
                            >
                                <CiFileOn className="size-8" />
                                <div>
                                    <p>SVG</p>
                                    <p className="text-xs text-muted-foreground">
                                        Best for editing in vector software
                                    </p>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* TODO: add user button component */}
                </div>
            </div>
        </nav>
    );
};
