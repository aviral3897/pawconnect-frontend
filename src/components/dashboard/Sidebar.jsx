import {
  LayoutDashboard,
  PawPrint,
  ShieldPlus,
  HeartHandshake,
  Settings,
  LogOut,
  PlusCircle
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function Sidebar() {

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("userEmail")

    navigate("/login")
  }

  return (

    <div className="w-[280px] min-h-screen bg-black/40 border-r border-white/10 backdrop-blur-2xl fixed left-0 top-0 p-6 flex flex-col justify-between">

      <div>

        {/* Logo */}

        <div className="mb-14">

          <h1 className="text-5xl font-black text-cyan-400">
            PawConnect
          </h1>

          <p className="text-slate-400 mt-3">
            Rescue. Adopt. Love.
          </p>

        </div>

        {/* Menu */}

        <div className="space-y-5">

          {/* Dashboard */}

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full flex items-center gap-4 bg-cyan-500 text-black px-5 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
          >

            <LayoutDashboard size={26} />

            Dashboard

          </button>

          {/* Add Pet */}

          <button
            onClick={() => navigate("/add-pet")}
            className="w-full flex items-center gap-4 bg-white/5 hover:bg-cyan-500/20 border border-white/10 px-5 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105"
          >

            <PlusCircle size={26} />

            Add Pet

          </button>

          {/* Pet Listings */}

          <button
            className="w-full flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105"
          >

            <PawPrint size={26} />

            Pet Listings

          </button>

          {/* Rescue */}

          <button
            className="w-full flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105"
          >

            <ShieldPlus size={26} />

            Rescue Reports

          </button>

          {/* Adoption */}

          <button
            className="w-full flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105"
          >

            <HeartHandshake size={26} />

            Adoption Requests

          </button>

          {/* Settings */}

          <button
            className="w-full flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105"
          >

            <Settings size={26} />

            Settings

          </button>

        </div>

      </div>

      {/* Logout */}

      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-4 bg-red-500 hover:bg-red-400 px-5 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
      >

        <LogOut size={26} />

        Logout

      </button>

    </div>
  )
}

export default Sidebar