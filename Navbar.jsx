// frontend/src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">TravelGram</h1>
      <div className="flex gap-4">
        <a href="/" className="hover:underline">Home</a>
        <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-1 rounded-full">
          Login
        </button>
      </div>
    </nav>
  )
}