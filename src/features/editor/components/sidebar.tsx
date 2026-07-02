"use client";

import { useState } from "react";
import {
    ImageIcon,
    LayoutTemplate,
    Pencil,
    Settings,
    Shapes,
    Sparkles,
    Type,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";

// Each entry in the icon rail
const SIDEBAR_TOOLS = [
    { id: "templates", label: "Templates", icon: LayoutTemplate },
    { id: "images",    label: "Images",    icon: ImageIcon      },
    { id: "text",      label: "Text",      icon: Type           },
    { id: "shapes",    label: "Shapes",    icon: Shapes         },
    { id: "draw",      label: "Draw",      icon: Pencil         },
    { id: "ai",        label: "AI",        icon: Sparkles       },
    { id: "settings",  label: "Settings",  icon: Settings       },
] as const;

type ToolId = (typeof SIDEBAR_TOOLS)[number]["id"];

export const Sidebar = () => {
    const [activeTool, setActiveTool] = useState<ToolId | null>(null);

    const handleToolClick = (id: ToolId) => {
        // Clicking the active tool again closes the panel (toggle)
        setActiveTool((prev) => (prev === id ? null : id));
    };

    return (
        <div className="flex h-full">
            {/* ── Icon rail ─────────────────────────────────────── */}
            <aside className="w-[100px] h-full flex flex-col gap-y-1 border-r overflow-y-auto py-2 bg-background">
                {SIDEBAR_TOOLS.map((tool) => (
                    <SidebarItem
                        key={tool.id}
                        icon={tool.icon}
                        label={tool.label}
                        isActive={activeTool === tool.id}
                        onClick={() => handleToolClick(tool.id)}
                    />
                ))}
            </aside>

            {/* ── Expandable panel ──────────────────────────────── */}
            {activeTool && (
                <div className="w-[300px] h-full border-r bg-background overflow-y-auto">
                    <SidebarPanel activeTool={activeTool} />
                </div>
            )}
        </div>
    );
};

// ── Panel content per tool ─────────────────────────────────────────
const SidebarPanel = ({ activeTool }: { activeTool: ToolId }) => {
    return (
        <div className="p-4 flex flex-col gap-y-4">
            <h2 className="text-sm font-semibold capitalize">{activeTool}</h2>
            <div className="text-xs text-muted-foreground">
                {PANEL_CONTENT[activeTool]}
            </div>
        </div>
    );
};

const PANEL_CONTENT: Record<ToolId, React.ReactNode> = {
    templates: (
        <div className="grid grid-cols-2 gap-2">
            {["Blank", "Presentation", "Social Post", "Logo", "Poster", "Card"].map((t) => (
                <button
                    key={t}
                    className="rounded-md border aspect-video flex items-center justify-center text-[10px] font-medium hover:bg-muted transition-colors"
                >
                    {t}
                </button>
            ))}
        </div>
    ),
    images: (
        <div className="flex flex-col gap-y-3">
            <button className="w-full rounded-md border-2 border-dashed py-6 text-xs text-muted-foreground hover:bg-muted transition-colors">
                + Upload an image
            </button>
            <p className="text-[10px] text-muted-foreground">
                Stock photos coming soon.
            </p>
        </div>
    ),
    text: (
        <div className="flex flex-col gap-y-2">
            {[
                { label: "Add a heading",    size: "text-lg font-bold"   },
                { label: "Add a subheading", size: "text-sm font-medium" },
                { label: "Add body text",    size: "text-xs"             },
            ].map(({ label, size }) => (
                <button
                    key={label}
                    className={`w-full text-left rounded-md border px-3 py-2 hover:bg-muted transition-colors ${size}`}
                >
                    {label}
                </button>
            ))}
        </div>
    ),
    shapes: (
        <div className="grid grid-cols-4 gap-2">
            {["■", "●", "▲", "◆", "⬟", "★", "⬭", "⬡"].map((shape) => (
                <button
                    key={shape}
                    className="aspect-square flex items-center justify-center rounded-md border text-xl hover:bg-muted transition-colors"
                >
                    {shape}
                </button>
            ))}
        </div>
    ),
    draw: (
        <div className="flex flex-col gap-y-3">
            <p>Brush size</p>
            <input type="range" min={1} max={50} defaultValue={10} className="w-full" />
            <p className="mt-2">Brush color</p>
            <input type="color" defaultValue="#000000" className="w-10 h-10 cursor-pointer rounded border" />
        </div>
    ),
    ai: (
        <div className="flex flex-col gap-y-3">
            <textarea
                placeholder="Describe what you want to generate…"
                className="w-full rounded-md border p-2 text-xs resize-none h-24 focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <button className="w-full rounded-md bg-primary text-primary-foreground text-xs py-2 hover:bg-primary/80 transition-colors">
                ✨ Generate
            </button>
        </div>
    ),
    settings: (
        <div className="flex flex-col gap-y-4 text-xs">
            <div className="flex justify-between items-center">
                <span>Canvas width</span>
                <input type="number" defaultValue={900}  className="w-20 border rounded px-2 py-1 text-right" />
            </div>
            <div className="flex justify-between items-center">
                <span>Canvas height</span>
                <input type="number" defaultValue={1200} className="w-20 border rounded px-2 py-1 text-right" />
            </div>
            <div className="flex justify-between items-center">
                <span>Background</span>
                <input type="color" defaultValue="#ffffff" className="w-10 h-8 cursor-pointer rounded border" />
            </div>
        </div>
    ),
};
