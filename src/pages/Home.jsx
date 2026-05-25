import Navbar from "../components/Navbar"

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white">

      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">

        <h1 className="text-7xl font-black mb-6 leading-tight">
          Find. Rescue. <br />
          Adopt Pets.
        </h1>

        <p className="text-slate-300 text-xl max-w-2xl mb-10">
          PawConnect is a modern platform connecting rescued animals,
          shelters, and loving adopters together.
        </p>

        <div className="flex gap-6">

          <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-2xl text-black font-bold text-lg transition">
            Adopt Now
          </button>

          <button className="border border-white/20 hover:border-cyan-400 px-8 py-4 rounded-2xl text-lg transition">
            Report Rescue
          </button>

        </div>

      </div>

    </div>
  )
}

export default Home