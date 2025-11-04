import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import FeaturedSection from "./components/FeaturedSection";

function FooterInline() {
  return (
    <footer className="py-10 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-red-500 via-yellow-400 to-blue-600" />
          <span className="font-semibold">Vibe Market</span>
        </div>
        <p className="text-sm text-gray-600">Built with a bold palette: red • blue • yellow • white</p>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-blue-600 hover:underline">Privacy</a>
          <a href="#" className="text-sm text-blue-600 hover:underline">Terms</a>
          <a href="#" className="text-sm text-blue-600 hover:underline">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedSection />
      <section id="deals" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white p-8 sm:p-12 shadow-sm relative">
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_20%_20%,#ef4444_0,transparent_40%),radial-gradient(circle_at_80%_30%,#60a5fa_0,transparent_35%),radial-gradient(circle_at_40%_80%,#f59e0b_0,transparent_35%)]" />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Limited-time color drops</h3>
              <p className="text-gray-700 max-w-2xl">Weekly releases inspired by primary palettes. Sign up to get early access to red, blue, and yellow editions across art, apparel, and tech.</p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
                <input type="email" required placeholder="Enter your email" className="flex-1 rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 shadow hover:brightness-110 transition">Notify me</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FooterInline />
    </div>
  );
}
