import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white overflow-hidden">

      <div className="flex items-center justify-between px-8 md:px-20 py-8 border-b border-white/10 backdrop-blur-xl">

        <h1 className="text-4xl md:text-5xl font-black text-cyan-400">
          PawConnect
        </h1>

        <div className="flex gap-4">

          <button
            onClick={() => navigate("/login")}
            className="bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-2xl font-bold transition-all"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-2xl font-black transition-all"
          >
            Register
          </button>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-20 py-20 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">

            Rescue.
            <br />

            Adopt.
            <br />

            Love 🐾

          </h1>

          <p className="text-slate-300 text-xl md:text-2xl mt-10 leading-relaxed">

            PawConnect helps rescue animals find loving homes through modern technology and compassionate communities.

          </p>

          <div className="flex flex-wrap gap-6 mt-12">

            <button
              onClick={() => navigate("/dashboard")}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-10 py-5 rounded-3xl text-xl transition-all hover:scale-105"
            >
              Adopt Now 🐶
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="bg-white/10 hover:bg-white/20 border border-white/10 font-bold px-10 py-5 rounded-3xl text-xl transition-all hover:scale-105"
            >
              Rescue Now 🚑
            </button>

          </div>

        </div>

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
            alt="Dog"
            className="rounded-[40px] shadow-2xl border border-white/10"
          />

        </div>

      </div>

    </div>
  )
}

export default Home