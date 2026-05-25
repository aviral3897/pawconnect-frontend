import { useState } from "react"
import Sidebar from "./Sidebar"
import { addPet } from "../../services/petService"

function AddPet() {

  const [petData, setPetData] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    location: "",
    description: "",
    imageUrl: "",
    status: "Available",
    ownerEmail: localStorage.getItem("userEmail")
    
  })

  const handleChange = (e) => {

    setPetData({
      ...petData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {

    try {

      await addPet(petData)

      alert("Pet Added Successfully 🚀")

      setPetData({
        name: "",
        breed: "",
        age: "",
        gender: "",
        location: "",
        description: "",
        imageUrl: "",
        status: "Available",
        ownerEmail: localStorage.getItem("userEmail")
      })

    } catch (error) {

      console.log(error)

      alert("Failed To Add Pet ❌")
    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="ml-[280px] w-full p-10">

        {/* Header */}

        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

          <h1 className="text-6xl font-black text-cyan-400">
            Add New Pet 🐾
          </h1>

          <p className="text-slate-300 text-2xl mt-4">
            Help pets find loving homes through PawConnect.
          </p>

        </div>

        {/* Form */}

        <div className="mt-10 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

          <div className="grid md:grid-cols-2 gap-8">

            <input
              type="text"
              name="name"
              placeholder="Pet Name"
              value={petData.name}
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl p-5 text-xl outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="breed"
              placeholder="Breed"
              value={petData.breed}
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl p-5 text-xl outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="age"
              placeholder="Age"
              value={petData.age}
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl p-5 text-xl outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={petData.gender}
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl p-5 text-xl outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={petData.location}
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl p-5 text-xl outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={petData.imageUrl}
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl p-5 text-xl outline-none focus:border-cyan-400"
            />

          </div>

          <textarea
            name="description"
            placeholder="Pet Description"
            value={petData.description}
            onChange={handleChange}
            rows="6"
            className="w-full mt-8 bg-white/10 border border-white/10 rounded-2xl p-5 text-xl outline-none focus:border-cyan-400"
          />

          <button
            onClick={handleSubmit}
            className="mt-10 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xl px-10 py-5 rounded-2xl transition-all hover:scale-105"
          >

            Add Pet 🚀

          </button>

        </div>

      </div>

    </div>
  )
}

export default AddPet