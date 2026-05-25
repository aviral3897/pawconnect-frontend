function StatsCard({ title, value, color, emoji }) {

  const colorStyles = {
    cyan: "from-cyan-500/20 to-cyan-900/20 border-cyan-400/20 text-cyan-400",
    pink: "from-pink-500/20 to-pink-900/20 border-pink-400/20 text-pink-400",
    green: "from-green-500/20 to-green-900/20 border-green-400/20 text-green-400",
  }

  return (

    <div className={`bg-gradient-to-br ${colorStyles[color]} border backdrop-blur-2xl rounded-3xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300`}>

      <div className="flex items-center justify-between">

        <div>

          <h2 className={`text-6xl font-black ${colorStyles[color].split(" ")[2]}`}>
            {value}
          </h2>

          <p className="text-slate-300 text-xl mt-4">
            {title}
          </p>

        </div>

        <div className="text-6xl">
          {emoji}
        </div>

      </div>

    </div>
  )
}

export default StatsCard