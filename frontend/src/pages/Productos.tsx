import ProductSearch from "../components/ProductSearch";

export default function Productos() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestión de Productos</h2>
        <ProductSearch productos={[]} onResults={(resultados) => console.log(resultados)} />
        <button className="bg-blue-500 rounded-md p-3 text-white">Agregar Producto</button>
      </div>
      {/* Filtros */}
      <div>
        <button></button>
      </div>
    </div>
  )
}