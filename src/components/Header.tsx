
import React, { useState } from "react";
import { Heart, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Hymn } from "@/data/hymnData";
 


// Using uploaded church logo

interface HeaderProps {
  favorites: Hymn[];
  onToggleFavorite: (hymn: Hymn) => void;
  rating: number;
  onRateApp: (rating: number) => void;
}

const Header: React.FC<HeaderProps> = ({ favorites, onToggleFavorite, rating, onRateApp }) => {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
     <header className="bg-[#800000] text-white p-3 sm:p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img 
             src="/logo.png" 
             alt="Church Logo" 
             className="w-20 h-auto rounded object-contain"
             />


          <h1 className="text-lg sm:text-xl font-bold truncate">NFAFC HYMN-BOOK</h1>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* About */}
          <Dialog open={showAbout} onOpenChange={setShowAbout}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline ml-1">About</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>About This HYMN Book</DialogTitle>
              </DialogHeader>
              <div className="max-h-60 overflow-y-auto">
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4">
                    This hym book contains the 109 songs which are writen in different languages and these includes, Chewa, Tonga, Ndebele and Shona. These songs incorporates praise and worship songs which can be sang with a tone of joy.
                  </p>
                  
                  <h4 className="text-base font-semibold mb-2">HOW TO USE THE HYM_BOOK</h4>
                  <p className="mb-4">
                    To use this app, you will just tap on the hym song you want and it shaw desplay, for the small mobile devices if you want to check for the next song you shall tap on the back button then all the songs shall desplay again. remember this application gives you a chance to put your favorite songs in the fervorite lists.
                    
             

                    
                   <p>  <div>
                             HISTRY OF NEFAFC:..................................................
                    CHIDZIWITSO CHA CHRISTU, CHAKUBWERA
                          KWACHE KWA MZIMU OYERA MU 
                   NEW FOUNDATION APOSTOLIC FAITH CHURCH
                   (N.F.A.F)</div></p>
            ...............................................................................................
Unayamba kufikakira kwa Bambo coneck ndopu 1960 Kumulobezi,Oyamba amene anayamba ulundo monga m’neneri Johane m’Batidzi.Amene anayamba kubatidza anthu amitundu yonse yosiyana siyana munoMu Zambia yonse ambiri ndiena asiyana siyana ochokera ku Zimbabwe, Tanzania, Uganda, Kenya, Zaire, Angola, Malawi, Mozambique,Ndi South Africa.

Kuchokera apa 1974 ana kumana ndi St anna-Allam. Ndikumubatidza ndi madzi aim koma mwa moya chabe. Atailandila mphavu ya Mzimu oyera St Anna-Allam. Amacita zinthu zodabwitsa ndizodzidzitswa kwa mbiri kuno ku Kafue Estates ndi Lusaka yonse. Kuutsa anthun omwe analikkubweretsedwa akufa kale ndi odwala, obvutika, munjira zotsisyana siyana zambiri ndi mitundu ina, Azungu, amwenye, ndiena otere osiyana siyana. Ambiri kuti achilitsidwe ndimphamvu ya mzimu oyera chabe.Sana onjezepo kanthu kalikonse ai. Mphaka tsopanotere

Osagwira mankhwala popemphelera anthu ai.Koma kuwa pemphelera mwamzimu oyera ndi mau a Mulungu chabe.Natsopano akali tero m’mzimu oyera pazonse achita.Kayendetsedwe ka Jesu Kristu mwa mzimu oyera chabe, natrsopano lino tere aphitilirebe ndi kugwira nchitoyi ya buku la kayendetsedwe ka mzimu oyera mwa Yesu kristu ambuye wathu Amen.

Ayetsedwa kwa mbiri mudziko ndi anthu, kumutumira zinjoka, kuchayana nazo, amfiti zipuku, ziwanda, koma zonse zalephela kuti zimugonjetse, zonsezo wadzi gonjetsa na mau chabe mwa mzimu oyera mphavu ya ambuyatu Yesu Kristu mwa Atate Mulungu mwini.

Tsopano wakwanitsa zaka 26 years mu mzimu oyera omweo alikupitlidzabe nchito ya Mzimu oyera.Mphaka 1999 uno ayendabe patsogolo namphamvu yonse.1980, ana kumana ndi Bishop H.P Ngoma. Nayenso anadza naye monga Petro, mwa Mzimu Oyera kuti onse awiri awa, anyamulitsane utenga wa Mzimu Oyera pamodzi awiri awa kuti New Foundation Apostolic Faith church. Imveke Dziko lonse mumaphemphero ndi machitidwe amphamvu ya mzimu oyera chabe amatenda osiyana siyana mwa mzimu oyera wa Yesu Christu. Mulungu mwini Amen!

Kuchokera apa 1983 Bambo Prophit Coneck Ndopu, anawalira. Mzimu Oyera. Uyu, unadza mwa St. Anna-Allam ndi Bishop H.P Ngoma ndi ma pastors ena opitilidza nchuto ya Mulungu wa Mzimu Oyera. Mphaka lero lino 1999 kupitilizabe patsogolo mwamphamvu.Kubatizda anthu onse amuphingo uno ndiena onse obwela kulandila zao zonse ndi mau okhawa chabe mwa Mzimu Oyera. Welengani Marko1:8-9; Johane 16:1-12; Nchito or Acts 2:17-22

Ndikupemphani onse a N.F.A.FChurch, kuti musabwerele kumbuyo, phitilidzani mbiri iyi ya nchito ya Mzimu Oyera, bhukitsani ziko lonse lapansi. Ndipelekanso mutndele kwainu nonse Akristu anazathu amenenso tagwizana pachikondi ichi chotizindikidzila mau awa olembedwa munyimbo izi za Mzimu Oyera a N.F.A.F Church. Asogoleri ndi anchito onse a Zambia Adventist Press Lusaka Chipongwe, Mulungu akhale nanu mwa Mzimu oyera-Amen!

Ma Pastors  ena atsogoleri ama Branches a N.F.A.F Church, Mr P Nyangu Linda Branch, Mr Martin Bell Chipakata Misisi Branch ndi ena otere Mulungu akudalitseni mwa Mzimu Oyera. Ndi kukhala nanu Amen! Mtendere kwa ma Churches onse a Kristu anazathu mwa Ambuye Yesu Kristu mwa Mzimu Oyera. Pamodzi ndi mafumu onse ndi Boma. Mtendere ukhale ndi inu nonse Amen! Mwachikondi Mulungu mwa Mzimu Oyera Atate ndi Mwana ndi Mzimu Omweyo ndine m’bale wanu mwa Mzimu Oyera.

Bishop H.P Ngoma
Prophitess Anna-Allam (St)
Plot # 61 (B) C.7
Kafue estate
Head office
P.O  Box 370087
Tel; 312153 Naboye Kafue 

                  </p>
                  
                  <p className="text-center font-medium">
                    New Foundation Apostolic Faith Church wishes you God's fever as you sing along.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          {/* Favorites */}
          <Dialog open={showFavorites} onOpenChange={setShowFavorites}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline ml-1">Favorites</span>
                {favorites.length > 0 && (
                  <span className="ml-1 bg-accent text-accent-foreground rounded-full px-1.5 py-0.5 text-xs">
                    {favorites.length}
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Favorite HYMS</DialogTitle>
              </DialogHeader>
              <div className="max-h-60 overflow-y-auto">
                {favorites.length === 0 ? (
                  <p className="text-muted-foreground">No favorite HYMS yet</p>
                ) : (
                  favorites.map((hymn) => (
                    <div key={hymn.id} className="flex items-center justify-between p-2 border-b">
                      <span className="text-sm">{hymn.id}. {hymn.title}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => onToggleFavorite(hymn)}
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </DialogContent>
          </Dialog>
          {/* Rating */}
          <Dialog open={showRating} onOpenChange={setShowRating}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline ml-1">Rate</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>Rate This App</DialogTitle>
              </DialogHeader>
              <div className="flex items-center justify-center gap-2 py-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => onRateApp(star)}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    <Star 
                      className={`w-8 h-8 ${
                        star <= rating 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-center text-sm text-muted-foreground">
                  Thank you for rating us {rating} star{rating !== 1 ? 's' : ''}!
                </p>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
