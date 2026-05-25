import Navbar from "../components/Navbar"
import { useState } from "react"
import { registerUser } from "../services/authService"

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async () => {
    try {

      const response = await registerUser(formData)

      alert("Registration Successful 🚀")

      console.log(response.data)

    } catch (error) {

      console.log(error)

      alert("Registration Failed ❌")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white">

      <Navbar />

      <div className="flex items-center justify-center min-h-screen px-6">

        <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-5xl font-black text-center text-cyan-400 mb-3">
            Create Account
          </h1>

          <p className="text-slate-300 text-center mb-10">
            Join PawConnect today 🐾
          </p>

          <div className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-cyan-400 transition"
            />

            <input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-cyan-400 transition"
            />

            <button
              onClick={handleRegister}
              className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all p-4 rounded-2xl text-black font-bold text-lg"
            >
              Register
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register