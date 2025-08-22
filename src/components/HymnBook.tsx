
import React, { useState } from "react";
import { Search, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { hymnData, Hymn } from "@/data/hymnData";
import HymnListItem from "./HymnListItem";
import HymnDetail from "./HymnDetail";
import Header from "./Header";
import Footer from "./Footer";

const HymnBook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHymn, setSelectedHymn] = useState<Hymn | null>(null);
  const [favorites, setFavorites] = useState<Hymn[]>([]);
  const [appRating, setAppRating] = useState<number>(0);

  // Filter hymns based on search query
  const filteredHymns = searchQuery
    ? hymnData.filter(
        (hymn) =>
          hymn.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hymn.id.toString().includes(searchQuery)
      )
    : hymnData;

  const handleHymnSelect = (hymn: Hymn) => {
    setSelectedHymn(hymn);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The filtering is done automatically via the filteredHymns variable
  };

  const handleToggleFavorite = (hymn: Hymn) => {
    setFavorites(prev => 
      prev.find(fav => fav.id === hymn.id)
        ? prev.filter(fav => fav.id !== hymn.id)
        : [...prev, hymn]
    );
  };

  const handleRateApp = (rating: number) => {
    setAppRating(rating);
  };

  const isFavorite = (hymn: Hymn) => favorites.some(fav => fav.id === hymn.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        rating={appRating}
        onRateApp={handleRateApp}
      />
      
      {/* Mobile-first book-like layout */}
      <div className="flex-1 container mx-auto p-2 sm:p-4">
        {/* Mobile: Show HYM detail if selected, otherwise show tabs */}
        <div className="block lg:hidden">
          {selectedHymn ? (
            <div className="bg-card rounded-lg border p-4 min-h-[70vh] book-page">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedHymn(null)}
                className="mb-4 text-sm"
              >
                ← Back to HYM List
              </Button>
              <HymnDetail hymn={selectedHymn} />
            </div>
          ) : (
            <div className="bg-card rounded-lg border p-4 book-page">
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4 text-center">HYMN LIST</h2>
                
                <form onSubmit={handleSearch} className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                      className="pl-10 text-base book-input"
                      placeholder="Search HYMS..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </form>
                
                <div className="space-y-2 max-h-[60vh] overflow-y-auto">
                  {filteredHymns.map((hymn) => (
                    <div key={hymn.id} className="flex items-center gap-2 border-b border-border/30 pb-2">
                      <HymnListItem 
                        hymn={hymn}
                        isSelected={selectedHymn?.id === hymn.id}
                        onClick={() => handleHymnSelect(hymn)}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleToggleFavorite(hymn)}
                        className="p-1 h-8 w-8 flex-shrink-0"
                      >
                        <Heart 
                          className={`w-4 h-4 ${
                            isFavorite(hymn) 
                              ? "fill-red-500 text-red-500" 
                              : "text-muted-foreground"
                          }`}
                        />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:flex gap-4">
          {/* Left panel: Hymn list */}
          <div className="w-1/3 flex flex-col">
            <div className="bg-card rounded-lg border p-4 flex-1">
              <h2 className="text-xl font-bold mb-4">HYMN LIST</h2>
              
              <form onSubmit={handleSearch} className="mb-4 flex gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                  <Input
                    className="pl-8 text-sm"
                    placeholder="Search HYMS..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" size="sm">Search</Button>
              </form>
              
              <div className="h-[60vh] overflow-y-auto">
                {filteredHymns.map((hymn) => (
                  <div key={hymn.id} className="flex items-center gap-2 mb-1">
                    <HymnListItem 
                      hymn={hymn}
                      isSelected={selectedHymn?.id === hymn.id}
                      onClick={() => handleHymnSelect(hymn)}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleToggleFavorite(hymn)}
                      className="p-1 h-8 w-8 flex-shrink-0"
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          isFavorite(hymn) 
                            ? "fill-red-500 text-red-500" 
                            : "text-muted-foreground"
                        }`}
                      />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Selected hymn */}
          <div className="w-2/3 flex flex-col">
            <div className="bg-card rounded-lg border p-4 flex-1">
              <HymnDetail hymn={selectedHymn} />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HymnBook;
