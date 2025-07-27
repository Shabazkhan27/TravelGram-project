// frontend/src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <div 
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/1e40af/ffffff?text=Discover+the+World')"}}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">TravelGram</h1>
        <p className="text-xl md:text-2xl mb-8">Share your journey with the world 🌍✈️</p>
        <button className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full text-lg font-semibold transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}