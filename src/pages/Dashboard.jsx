import { useState } from "react"
import { getAllPets, deletePet } from "../services/petService"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


import Sidebar from "../components/dashboard/Sidebar"
import StatsCard from "../components/dashboard/StatsCard"
import ActivityCard from "../components/dashboard/ActivityCard"
import HeroBanner from "../components/dashboard/HeroBanner"
import QuickActions from "../components/dashboard/QuickActions"
import PetCard from "../components/dashboard/PetCard"

function Dashboard() {

  const navigate = useNavigate()

  useEffect(() => {

    const user = localStorage.getItem("userEmail")


    if (!user) {
      navigate("/login")
    }

  }, [])

  const user = localStorage.getItem("userEmail")

 const [myPets, setMyPets] = useState([])

 const [nearbyPets, setNearbyPets] = useState([])




  const fetchPets = async () => {

  try {

    const userEmail = localStorage.getItem("userEmail")

    const myPetsResponse = await fetch(
      `http://localhost:8081/pets/myPets/${userEmail}`
    )

    const nearbyPetsResponse = await fetch(
      `http://localhost:8081git status/pets/nearby/${userEmail}`
    )

    const myPetsData = await myPetsResponse.json()

    const nearbyPetsData = await nearbyPetsResponse.json()

    setMyPets(myPetsData)

    setNearbyPets(nearbyPetsData)

  } catch (error) {

    console.log(error)
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

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="ml-[280px] w-full p-10">

        {/* Hero */}

        <HeroBanner user={user} />

        {/* Stats */}

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

        {/* Quick Actions */}

        <QuickActions />

        {/* Pet Cards */}

        <div className="mt-14">

  <h2 className="text-5xl font-black mb-8">
    My Pets 🐾
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

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

        {/* Activity */}

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