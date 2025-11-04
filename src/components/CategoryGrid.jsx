import { Palette, Watch, Headphones, Shirt } from "lucide-react";

const categories = [
  {
    name: "Art & Prints",
    color: "from-red-500 to-red-600",
    icon: Palette,
  },
  {
    name: "Accessories",
    color: "from-blue-500 to-blue-600",
    icon: Watch,
  },
  {
    name: "Audio & Tech",
    color: "from-yellow-400 to-yellow-500",
    icon: Headphones,
  },
  {
    name: "Apparel",
    color: "from-white to-gray-200",
    icon: Shirt,
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Shop by <span className="text-red-600">Category</span>
          </h2>
          <a href="#" className="text-sm text-blue-600 hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ name, color, icon: Icon }) => (
            <a
              key={name}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition`} />
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-white to-gray-100 border border-gray-200 shadow-sm">
                  <Icon className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-600">Explore curated picks</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
