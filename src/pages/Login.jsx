import { useState } from "react"
import Navbar from "../components/Navbar"
import { loginUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {

    try {

      const response = await loginUser({
        email,
        password
      })

      alert(response.data)

      if (response.data === "Login successful!") {

        localStorage.setItem("userEmail", email)

        navigate("/dashboard")
      }

    } catch (error) {

      alert("Login Failed ❌")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white">

      <Navbar />

      <div className="flex items-center justify-center min-h-screen px-6">

        <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-5xl font-black text-center text-cyan-400 mb-3">
            Welcome Back
          </h1>

          <p className="text-slate-300 text-center mb-10">
            Login to continue helping pets ❤️
          </p>

          <div className="space-y-6">

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-cyan-400 transition"
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-cyan-400 transition"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all p-4 rounded-2xl text-black font-bold text-lg"
            >
              Login
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login