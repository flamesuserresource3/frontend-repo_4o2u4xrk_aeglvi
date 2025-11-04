import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full" style={{ height: "80vh" }}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          aria-label="Interactive 3D cover"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-white/90 pointer-events-none" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full text-xs font-semibold bg-white text-gray-900 px-2 py-1 shadow">
            New season • Bold colors
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Discover the marketplace where
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600"> color meets craft</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl">
            Shop curated products from independent makers. Vivid styles in red, blue, yellow, and crisp white — all in one place.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#featured" className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 shadow hover:brightness-110 transition">
              Explore Featured
            </a>
            <a href="#categories" className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-gray-300 bg-white/80 hover:bg-white transition">
              Browse Categories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
