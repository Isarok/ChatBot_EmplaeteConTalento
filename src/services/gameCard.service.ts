import axios from "axios";

const API_URL =
  "https://empleatecontalentobackend-production.up.railway.app/api";

export const postCard = async (
  title: string,
  description: string,
  image: string
) => {
  try {
    const response = await axios.post(`${API_URL}/cards`, {
      title,
      description,
      image,
    });
    return response;
  } catch (error) {
    console.log("Error guardando card:", error);
    throw error;
  }
};

export const getAllCards = async () => {
  try {
    const response = await axios.get(`${API_URL}/cards`);
    console.log(response.status);
    return response.data;
  } catch (error) {
    console.log("Error al traer cards:", error);
    throw error;
  }
};
