import { useEffect, useState, useCallback, ChangeEvent } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { login, register } from "../../services/auth.service";

//sacar la validación de formulario, y submit(?)

const LoginRegister = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const shouldRedirect = false;
  const redirectTo = ("")

  const toggleForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setEmailError("");
    setPasswordError("");
    setNameError("");

    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //comparar y cambiar, poner usecontext
    if (isLogin) {
      try {
        const response = await login(email, password);
        if (response.status === 200) {
          const { token, user } = response.data;
          localStorage.setItem("token", JSON.stringify({ token, user }));
          navigate("/home");
        } else {
          console.log("Login failed?!");
        }
      } catch (error) {
        console.log("login failed", error);
        setEmailError("Email o contraseña incorrectos.");
      }
    } else {
      try {
        const response = await register(name, email, password);
        if (response.status === 201) {
          setIsLogin(true);
          setEmail("");
          setPassword("");
          setName("");
          setEmailError("");
          setPasswordError("");
          setNameError("");

          alert("Registro exitoso. Ahora puedes iniciar sesión.");
        }
      } catch (error) {
        console.log("register failed", error);
        setEmailError("Email ya registrado.");
      }
    }
  };

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundColor: "#9B0000",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {shouldRedirect && <Navigate to={redirectTo} />}
      <div className="bg-white p-8 rounded-xl shadow-md w-4/5 md:w-1/2 lg:w-1/3 ">
        <h1 className="text-2xl mb-4 text-red-700 text-center">
          {isLogin ? "Login" : "Registro"}
        </h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="text-gray-800 mt-1 block w-full px-3 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                onChange={handleNameChange}
              />
              {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              className="text-gray-800 mt-1 block w-full px-3 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="text-gray-800 mt-1 block w-full px-3 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-wine-200 focus:border-wine-200 sm:text-sm"
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full  text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline bg-red-700 hover:bg-red-600"
          >
            {isLogin ? "Login" : "Regístrate"}
          </button>
        </form>
        <p className="text-gray-800 mt-4 text-sm text-center">
          {isLogin ? "¿Eres nuevo? " : "¿Ya estás registrado? "}
          <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>
            {isLogin ? "Regístrate" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
