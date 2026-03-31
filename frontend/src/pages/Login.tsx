import { useState } from "react";
import API from "../api/axios";
import fondo from "../assets/imagenes/fondo_login.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }} className="h-screen">
      <div className="bg-black/40">
        <div className="container flex justify-center items-center h-screen">
          <div className="bg-white w-4/12 flex flex-col items-center gap-6 shadow-2xl p-3 rounded-xl">
            <h1 className="text-2xl font-bold">¡Bienvenido!</h1>
            <div className="flex w-full flex-col gap-3">
              <input
                type="email"
                className="border p-2 rounded-md"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="border p-2 rounded-md"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-600 w-full p-2 rounded-sm text-white"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
            <a href="#" className="text-sm">
              ¿Olvidaste la contraseña?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
