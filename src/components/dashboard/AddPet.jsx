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

  const [previewImage, setPreviewImage] = useState("")

  const handleChange = (e) => {

    setPetData({
      ...petData,
      [e.target.name]: e.target.value
    })
  }

  const handleImageUpload = async (e) => {

    const file = e.target.files[0]

    setPreviewImage(URL.createObjectURL(file))

    const data = new FormData()

    data.append("file", file)

    data.append("upload_preset", "pawconnect")

    data.append("cloud_name", "dtnu0fg67")

    try {

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dtnu0fg67/image/upload",
        {
          method: "POST",
          body: data
        }
      )

      const uploadedImage = await response.json()

      setPetData({
        ...petData,
        imageUrl: uploadedImage.url
      })

      alert("Image Uploaded Successfully 📸")

    } catch (error) {

      console.log(error)

      alert("Image Upload Failed ❌")
    }
  }

  const handleSubmit = async () => {

    try {

      if (
        !petData.name ||
        !petData.breed ||
        !petData.age ||
        !petData.gender ||
        !petData.location ||
        !petData.description ||
        !petData.imageUrl
      ) {

        alert("Please fill all fields ❌")

        return
      }

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

      <Sidebar />

      <div className="ml-[280px] w-full p-10">

        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

          <h1 className="text-6xl font-black text-cyan-400">
            Add New Pet 🐾
          </h1>

          <p className="text-slate-300 text-2xl mt-4">
            Help animals find loving homes through PawConnect.
          </p>

        </div>

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
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="bg-white/10 border border-white/10 rounded-2xl p-5 text-xl outline-none focus:border-cyan-400"
            />

            {previewImage && (

  <img
    src={previewImage}
    alt="Preview"
    className="w-full h-[300px] object-cover rounded-3xl mt-6 border border-white/10"
  />

)}

            

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