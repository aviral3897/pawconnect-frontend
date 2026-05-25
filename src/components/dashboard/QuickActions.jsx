import { useNavigate } from "react-router-dom"

function QuickActions() {

  const navigate = useNavigate()

  return (

    <div className="mt-12">

      {/* Heading */}

      <div className="flex items-center gap-4 mb-8">

        <h1 className="text-6xl font-black text-white">
          Quick Actions
        </h1>

        <span className="text-5xl">
          ⚡
        </span>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {/* Add Pet */}

        <div
          onClick={() => navigate("/add-pet")}
          className="cursor-pointer bg-gradient-to-br from-cyan-950 to-slate-950 border border-cyan-500/20 hover:border-cyan-400/40 rounded-[40px] p-10 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-2xl"
        >

          <div className="text-6xl mb-6">
            🐶
          </div>

          <h2 className="text-4xl font-black text-white">
            Add Pet
          </h2>

          <p className="text-slate-300 text-xl mt-5 leading-relaxed">
            Upload pets for adoption and help them find loving homes.
          </p>

        </div>

        {/* Rescue */}

        <div
          className="cursor-pointer bg-gradient-to-br from-pink-950 to-purple-950 border border-pink-500/20 hover:border-pink-400/40 rounded-[40px] p-10 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/20 hover:shadow-2xl"
        >

          <div className="text-6xl mb-6">
            🚑
          </div>

          <h2 className="text-4xl font-black text-white">
            Report Rescue
          </h2>

          <p className="text-slate-300 text-xl mt-5 leading-relaxed">
            Report injured or stray animals needing immediate attention.
          </p>

        </div>

        {/* Shelters */}

        <div
          className="cursor-pointer bg-gradient-to-br from-green-950 to-teal-950 border border-green-500/20 hover:border-green-400/40 rounded-[40px] p-10 transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 hover:shadow-2xl"
        >

          <div className="text-6xl mb-6">
            🏠
          </div>

          <h2 className="text-4xl font-black text-white">
            Shelters
          </h2>

          <p className="text-slate-300 text-xl mt-5 leading-relaxed">
            Discover nearby shelters and rescue organizations.
          </p>

        </div>

        {/* AI Match */}

        <div
          className="cursor-pointer bg-gradient-to-br from-indigo-950 to-purple-950 border border-indigo-500/20 hover:border-indigo-400/40 rounded-[40px] p-10 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/20 hover:shadow-2xl"
        >

          <div className="text-6xl mb-6">
            🤖
          </div>

          <h2 className="text-4xl font-black text-white">
            AI Match
          </h2>

          <p className="text-slate-300 text-xl mt-5 leading-relaxed">
            Get intelligent pet recommendations based on preferences.
          </p>

        </div>

      </div>

    </div>
  )
}

export default QuickActions