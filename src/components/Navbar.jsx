import { Link, useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const user = localStorage.getItem("userEmail")

  const handleLogout = () => {

    localStorage.removeItem("userEmail")

    navigate("/login")
  }

  return (

    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 px-10 py-5 flex justify-between items-center z-50">

      <h1 className="text-4xl font-black text-cyan-500 tracking-tight">
        PawConnect
      </h1>

      <div className="flex gap-8 items-center text-lg font-semibold">

        <Link to="/" className="hover:text-cyan-400 transition">
          Home
        </Link>

        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-cyan-400 transition">
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-400 px-5 py-2 rounded-xl transition text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-cyan-400 transition">
              Login
            </Link>

            <Link
              to="/register"
              className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-xl transition text-black"
            >
              Register
            </Link>
          </>
        )}

      </div>

    </nav>
  )
}

export default Navbar