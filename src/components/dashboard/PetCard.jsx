function PetCard({
  id,
  name,
  age,
  breed,
  gender,
  location,
  description,
  image,
  onDelete,
  showDelete

}) {

    console.log(onDelete)

  return (

    <div className="relative z-10 bg-white/5 border border-white/10 hover:border-cyan-400/30 rounded-[40px] backdrop-blur-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-cyan-500/20 hover:shadow-2xl">
      {/* Image Section */}

      <div>

        <img
          src={image}
          alt={name}
          className="w-full h-[320px] object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Status Badge */}

        <div className="absolute top-5 left-5 bg-cyan-500 text-black px-5 py-2 rounded-full text-sm font-black shadow-xl">

          Available For Adoption

        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        {/* Top Row */}

        <div className="flex items-center justify-between">

          <h1 className="text-4xl font-black text-white">
            {name}
          </h1>

          <span className="text-3xl">
            🐾
          </span>

        </div>

        {/* Breed + Gender */}

        <div className="flex items-center gap-4 mt-5 flex-wrap">

          <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-slate-200 text-sm">

            Breed: {breed}

          </div>

          <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-slate-200 text-sm">

            Gender: {gender}

          </div>

          <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-slate-200 text-sm">

            Age: {age}

          </div>

        </div>

        {/* Location */}

        <div className="mt-6 flex items-center gap-3 text-cyan-300 text-lg">

          📍 {location}

        </div>

        {/* Description */}

        <p className="text-slate-300 mt-6 text-lg leading-relaxed">

          {description}

        </p>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

  <button className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-black py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl">

    Adopt Now

  </button>

 {showDelete && (

  <div
    onClick={() => {
      console.log("DELETE CLICKED")
      onDelete(id)
    }}
    className="cursor-pointer bg-red-500 hover:bg-red-400 px-6 py-4 rounded-2xl text-white font-bold flex items-center justify-center"
  >

    Delete

  </div>

)}
</div>

      </div>

    </div>
  )
}

export default PetCard  