import axios from "axios"

const PET_API = "http://localhost:8081/pets"

export const getAllPets = async () => {

    return axios.get(PET_API)
}

export const addPet = async (petData) => {

    return axios.post(`${PET_API}/add`, petData)
}

export const deletePet = async (id) => {

    return axios.delete(`${PET_API}/delete/${id}`)
}