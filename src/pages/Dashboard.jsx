import { useState, useEffect } from "react"
import { deletePet } from "../services/petService"
import { useNavigate } from "react-router-dom"

import Sidebar from "../components/dashboard/Sidebar"
import StatsCard from "../components/dashboard/StatsCard"
import ActivityCard from "../components/dashboard/ActivityCard"
import HeroBanner from "../components/dashboard/HeroBanner"
import QuickActions from "../components/dashboard/QuickActions"
import PetCard from "../components/dashboard/PetCard"

function Dashboard() {

  const navigate = useNavigate()

  const [myPets, setMyPets] = useState([])

  const [nearbyPets, setNearbyPets] = useState([])

  const [loading, setLoading] = useState(true)

  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {

    const user = localStorage.getItem("userEmail")

    if (!user) {
      navigate("/login")
    }

  }, [])

  const user = localStorage.getItem("userEmail")

  const fetchPets = async () => {

    try {

      setLoading(true)

      const userEmail = localStorage.getItem("userEmail")

      const myPetsResponse = await fetch(
        `http://localhost:8081/pets/myPets/${userEmail}`
      )

      const nearbyPetsResponse = await fetch(
        `http://localhost:8081/pets/nearby/${userEmail}`
      )

      const myPetsData = await myPetsResponse.json()

      const nearbyPetsData = await nearbyPetsResponse.json()

      setMyPets(myPetsData)

      setNearbyPets(nearbyPetsData)

      setLoading(false)

    } catch (error) {

      console.log(error)

      setLoading(false)
    }
  }

  useEffect(() => {

    fetchPets()

  }, [])

  const handleDeletePet = async (id) => {

    try {

      await deletePet(id)

      fetchPets()

    } catch (error) {

      console.log(error)
    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white flex">

      <div className="md:hidden fixed top-0 left-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/10 z-50 px-6 py-4 flex items-center justify-between">

        <h1 className="text-3xl font-black text-cyan-400">
          PawConnect
        </h1>

        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-4xl"
        >
          ☰
        </button>

      </div>

      <Sidebar />

      {showSidebar && (

        <div className="fixed top-0 left-0 z-50 md:hidden">

          <Sidebar />

        </div>

      )}

      <div className="md:ml-[280px] w-full p-6 md:p-10 pt-28 md:pt-10">

        <HeroBanner user={user} />

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <StatsCard
            title="Pets Adopted"
            value="12"
            color="cyan"
            emoji="🐶"
          />

          <StatsCard
            title="Rescue Reports"
            value="8"
            color="pink"
            emoji="🚑"
          />

          <StatsCard
            title="Nearby Shelters"
            value="5"
            color="green"
            emoji="🏠"
          />

        </div>

        <QuickActions />

        <div className="mt-14">

          <h2 className="text-5xl font-black mb-8">
            My Pets 🐾
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {loading && (
              <h2 className="text-2xl text-cyan-400">
                Loading pets...
              </h2>
            )}

            {!loading && myPets.length === 0 && (
              <h2 className="text-2xl text-slate-400">
                No pets found 🐾
              </h2>
            )}

            {myPets.map((pet) => {
              return (
                <PetCard
                  key={pet.id}
                  id={pet.id}
                  name={pet.name}
                  age={pet.age}
                  breed={pet.breed}
                  gender={pet.gender}
                  location={pet.location}
                  description={pet.description}
                  image={pet.imageUrl}
                  onDelete={handleDeletePet}
                  showDelete={true}
                />
              )
            })}

          </div>

        </div>

        <div className="mt-14">

          <h2 className="text-5xl font-black mb-8">
            Nearby Pets 🐾
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {nearbyPets.map((pet) => {
              return (
                <PetCard
                  key={pet.id}
                  id={pet.id}
                  name={pet.name}
                  age={pet.age}
                  breed={pet.breed}
                  gender={pet.gender}
                  location={pet.location}
                  description={pet.description}
                  image={pet.imageUrl}
                  showDelete={false}
                />
              )
            })}

          </div>

        </div>

        <div className="mt-14">

          <h2 className="text-5xl font-black mb-8">
            Recent Activity ⚡
          </h2>

          <div className="space-y-6">

            <ActivityCard
              title="Golden Retriever Adopted 🐕"
              time="2 hours ago"
            />

            <ActivityCard
              title="Injured Cat Rescue Reported 🐈"
              time="5 hours ago"
            />

            <ActivityCard
              title="New Shelter Added 🏠"
              time="Yesterday"
            />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard