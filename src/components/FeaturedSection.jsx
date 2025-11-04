import { Star, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Crimson Canvas",
    price: 120,
    color: "from-red-500 to-red-600",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Azure Headphones",
    price: 210,
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1646500366920-b4c5ce29237d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBenVyZSUyMEhlYWRwaG9uZXN8ZW58MHwwfHx8MTc2MjI0NDgzMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Sunburst Tee",
    price: 39,
    color: "from-yellow-400 to-yellow-500",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 4,
    title: "Minimal Sneakers",
    price: 150,
    color: "from-white to-gray-200",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    rating: 4.7,
  },
];

function ProductCard({ title, price, color, image, rating }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col">
      <div className="relative aspect-square overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
        <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-0 group-hover:opacity-20 transition-opacity`} />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.round(rating) ? 'fill-yellow-400' : ''}`} />
          ))}
          <span className="ml-2 text-xs text-gray-500">{rating}</span>
        </div>
        <h3 className="mt-2 font-semibold text-gray-900 line-clamp-1">{title}</h3>
        <div className="mt-1 text-lg font-bold">${price}</div>
        <button className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 text-white shadow hover:brightness-110 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function FeaturedSection() {
  return (
    <section id="featured" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Featured <span className="text-blue-600">Products</span>
          </h2>
          <a href="#" className="text-sm text-blue-600 hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
