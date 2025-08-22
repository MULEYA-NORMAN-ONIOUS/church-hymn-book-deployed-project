
import React from "react";
import { cn } from "@/lib/utils";
import { Hymn } from "@/data/hymnData";

interface HymnListItemProps {
  hymn: Hymn;
  isSelected: boolean;
  onClick: () => void;
}

const HymnListItem = ({ hymn, isSelected, onClick }: HymnListItemProps) => {
  return (
    <div
      className={cn(
        "p-2 cursor-pointer rounded hover:bg-accent hover:text-accent-foreground transition-colors flex-1 text-sm",
        isSelected && "bg-accent text-accent-foreground"
      )}
      onClick={onClick}
    >
      <span className="font-semibold mr-2">{hymn.id}.</span>
      <span className="truncate">{hymn.title}</span>
    </div>
  );
};

export default HymnListItem;
