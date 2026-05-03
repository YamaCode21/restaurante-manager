import { useState, useMemo } from "react";
import type { Productos } from "../types/productos";

type Props = {
  productos: Productos[];
  onResults: (resultados: Productos[]) => void;
};

export default function ProductSearch({ productos, onResults }: Props) {
  const [busqueda, setBusqueda] = useState<string>("");

  const normalizar = (texto: string) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Elimina acentos

  const resultados = useMemo(() => {
    return productos.filter((producto) =>
      normalizar(producto.nombre).includes(normalizar(busqueda)),
    );
  }, [busqueda, productos]);

  useMemo(() => {
    onResults(resultados);
  }, [resultados, onResults]);

  return (
    <input 
    type="text"
    placeholder="Buscar producto..."
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
    />
  )
}
