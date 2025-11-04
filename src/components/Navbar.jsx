import { ShoppingBag, Search, User, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 via-yellow-400 to-blue-600" />
          <span className="font-bold text-lg tracking-tight">Vibe Market</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#categories" className="hover:text-red-600 transition-colors">Categories</a>
          <a href="#featured" className="hover:text-blue-600 transition-colors">Featured</a>
          <a href="#deals" className="hover:text-yellow-500 transition-colors">Deals</a>
        </div>
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="p-2 rounded-full hover:bg-white/60 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Favorites" className="p-2 rounded-full hover:bg-white/60 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button aria-label="Account" className="p-2 rounded-full hover:bg-white/60 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="ml-1 inline-flex items-center gap-2 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-600 text-white px-3 py-2 rounded-full shadow">
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
