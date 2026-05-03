import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center justify-evenly">
      <h3>Restaurante-Manager</h3>
      <nav className="flex">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `p-3 transition-all flex items-center ${isActive ? "border-b-2 border-blue-500 font-bold" : "text-black"}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/pedidos"
          className={({ isActive }) =>
            `p-3 transition-all flex items-center ${isActive ? "border-b-2 border-blue-500 font-bold" : "text-black"}`
          }
        >
          Pedidos
        </NavLink>
        <NavLink
          to="/productos"
          className={({ isActive }) =>
            `p-3 transition-all flex items-center ${isActive ? "border-b-2 border-blue-500 font-bold" : "text-black"}`
          }
        >
          Productos
        </NavLink>
        {/* <NavLink
          to="/inventario"
          className={({ isActive }) =>
            `p-3 transition-all flex items-center ${isActive ? "border-b-2 border-blue-500 font-bold" : "text-black"}`
          }
        >
          Inventario
        </NavLink> */}
        {/* <NavLink
          to="/usuarios"
          className={({ isActive }) =>
            `p-3 transition-all flex items-center ${isActive ? "border-b-2 border-blue-500 font-bold" : "text-black"}`
          }
        >
          Usuarios
        </NavLink> */}
        <NavLink
          to="/reportes"
          className={({ isActive }) =>
            `p-3 transition-all flex items-center ${isActive ? "border-b-2 border-blue-500 font-bold" : "text-black"}`
          }
        >
          Reportes
        </NavLink>
      </nav>
      <div>Perfil</div>
    </header>
  );
}
