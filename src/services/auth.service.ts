import axios from "axios";

const API_URL = "http://localhost:3006/api";

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log("Error en el registro:", error);
    throw error;
  }
};

interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: number;
  };
}

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
      email,
      password,
    });
    console.log(response.status);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log("Error en el registro:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
