import ProductoPedido from "../components/ProductoPedido";

export default function Pedidos() {
  return (
    <div className="flex">
      <div className="w-full">
        <h1 className="text-3xl font-bold">Gestión de Pedidos</h1>
        <div className="flex flex-col gap-3">
          <ProductoPedido />
          <ProductoPedido />
          <ProductoPedido />
        </div>
      </div>
    </div>
  );
}