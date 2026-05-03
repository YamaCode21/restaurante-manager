import { NavLink, useNavigate } from "react-router-dom";

export default function Aside() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <aside className="flex flex-col justify-between items-center w-3/12 bg-white h-screen p-4">
      <div className="flex flex-col items-center gap-20 w-full">
        <h2 className="mt-10">LOGO</h2>

        <div className="flex flex-col gap-2 w-full">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `p-3 rounded-lg transition-all flex items-center border-2 border-transparent ${isActive ? "bg-blue-600 font-bold text-white shadow-md" : "hover:border-blue-700 text-black"}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/pedidos"
            className={({ isActive }) =>
              `p-3 rounded-lg transition-all flex items-center border-2 border-transparent ${isActive ? "bg-blue-600 font-bold text-white shadow-md" : "hover:border-blue-700 text-black"}`
            }
          >
            Pedidos
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              `p-3 rounded-lg transition-all flex items-center border-2 border-transparent ${isActive ? "bg-blue-600 font-bold text-white shadow-md" : "hover:border-blue-700 text-black"}`
            }
          >
            Productos
          </NavLink>
          <NavLink
            to="/inventario"
            className={({ isActive }) =>
              `p-3 rounded-lg transition-all flex items-center border-2 border-transparent ${isActive ? "bg-blue-600 font-bold text-white shadow-md" : "hover:border-blue-700 text-black"}`
            }
          >
            Inventario
          </NavLink>
          <NavLink
            to="/usuarios"
            className={({ isActive }) =>
              `p-3 rounded-lg transition-all flex items-center border-2 border-transparent ${isActive ? "bg-blue-600 font-bold text-white shadow-md" : "hover:border-blue-700 text-black"}`
            }
          >
            Usuarios
          </NavLink>
          <NavLink
            to="/reportes"
            className={({ isActive }) =>
              `p-3 rounded-lg transition-all flex items-center border-2 border-transparent ${isActive ? "bg-blue-600 font-bold text-white shadow-md" : "hover:border-blue-700 text-black"}`
            }
          >
            Reportes
          </NavLink>
        </div>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className="p-3 hover:border-red-500 border-2 border-transparent rounded-lg text-black cursor-pointer flex items-center gap-2 transition-colors"
        >
          🚪 Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
