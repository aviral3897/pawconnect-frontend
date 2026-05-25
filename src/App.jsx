import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"

import AddPet from "./components/dashboard/AddPet"

function App() {

  return (

    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Dashboard */}

      <Route path="/dashboard" element={<Dashboard />} />

      {/* Pet System */}

      <Route path="/add-pet" element={<AddPet />} />

    </Routes>
  )
}

export default App;

//