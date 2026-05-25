import axios from "axios"

const API_URL = "http://localhost:8081/auth"

export const loginUser = async (data) => {
  return axios.post(`${API_URL}/login`, data)
}

export const registerUser = async (data) => {
  return axios.post(`${API_URL}/signup`, data)
}
