"use client";

import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    isActive?: boolean;
    onClick: () => void;
}

export const SidebarItem = ({
    icon: Icon,
    label,
    isActive,
    onClick,
}: SidebarItemProps) => {
    return (
        <Button
            variant="ghost"
            onClick={onClick}
            className={cn(
                "w-full h-[80px] flex flex-col rounded-none gap-y-1.5 p-2",
                isActive
                    ? "bg-muted text-primary border-r-2 border-blue-600"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
        >
            <Icon className="size-5 stroke-[1.5] shrink-0" />
            <span className="text-xs">{label}</span>
        </Button>
    );
};
