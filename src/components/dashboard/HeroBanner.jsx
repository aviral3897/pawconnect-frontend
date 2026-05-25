function HeroBanner({ user }) {

  return (

    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 border border-white/10 backdrop-blur-2xl rounded-[40px] p-12 shadow-2xl">

      {/* Glow Effects */}

      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* Content */}

      <div className="relative z-10">

        <h1 className="text-7xl font-black leading-tight">

          Welcome Back <br />

          <span className="text-cyan-400">
            Hero 🐾
          </span>

        </h1>

        <p className="text-2xl text-slate-300 mt-8 max-w-3xl leading-relaxed">

          PawConnect helps rescuers, shelters, and adopters connect
          together to save more lives with modern technology and AI-powered recommendations.

        </p>

        <div className="flex gap-6 mt-10">

          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105">

            Explore Pets

          </button>

          <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105">

            Rescue Now

          </button>

        </div>

        <div className="mt-10 text-slate-400 text-lg">
          Logged in as:
          <span className="text-cyan-400 font-bold ml-3">
            {user}
          </span>
        </div>

      </div>

    </div>
  )
}

export default HeroBanner
