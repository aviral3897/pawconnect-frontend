function ActivityCard({ title, time }) {

  return (

    <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-[1.02]">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">
            {title}
          </h3>

          <p className="text-slate-400 mt-3 text-lg">
            {time}
          </p>

        </div>

        <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>

      </div>

    </div>
  )
}

export default ActivityCard