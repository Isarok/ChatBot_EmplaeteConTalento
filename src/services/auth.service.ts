import axios from "axios";
/* import { API_URL } from "../../config.ts";
 */

const API_URL =
  "https://empleatecontalentobackend-production.up.railway.app/api";

  
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
  sesiondata: {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: number;
  };
};
}

export const loggedIn = () => {
  return !!localStorage.getItem("token");
};

export const login = async (email: string, password: string, setIsLoggedIn: Function) => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
      email,
      password,
    });
    console.log(response.status);
    console.log(response.data);

    // Check if login is successful and update isLoggedIn state
    if (response.status === 200) {
      localStorage.setItem("token", JSON.stringify(response.data.sesiondata.token));
      setIsLoggedIn(true); // Update isLoggedIn state
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error en el login:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("token");
  console.log(userStr)
  if (userStr) return JSON.parse(userStr);
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    console.log(response.status);
    return response;
  } catch (error) {
    console.log("Error trayendo los usuarios:", error);
    throw error;
  }
};
