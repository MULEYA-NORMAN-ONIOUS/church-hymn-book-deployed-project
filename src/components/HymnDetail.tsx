import React from "react";
import { Hymn } from "@/data/hymnData";
interface HymnDetailProps {
  hymn: Hymn | null;
}
const HymnDetail = ({
  hymn
}: HymnDetailProps) => {
  if (!hymn) {
    return <div className="h-full flex items-center justify-center text-muted-foreground">
        <p className="text-center text-sm sm:text-base">Select a HYMN from the list to view its lyrics</p>
      </div>;
  }
  return <div className="h-full">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
        {hymn.id}. {hymn.title}
      </h2>
      <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed overflow-y-auto max-h-[50vh] lg:max-h-[60vh]">
        {hymn.lyrics}
      </div>
    </div>;
};
export default HymnDetail;