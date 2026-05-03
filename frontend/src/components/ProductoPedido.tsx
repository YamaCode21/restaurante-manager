import { Icon } from "@iconify/react";

export default function ProductoPedido() {
  return (
    <div className="flex gap-5 items-center bg-gray-200 rounded-2xl p-2">
      <div className="w-2/12 flex flex-col">
        <p>ID</p>
        <p>Hora</p>
        <p>Estado de Demora</p>
      </div>
      <div className="w-6/12">
        <p>Cliente</p>
        <p>Mesa</p>
      </div>
      <span className="w-3/12">Estado de Pedido</span>
      <div className="w-2/12 flex justify-center items-center gap-3">
        <button><Icon icon="tabler:edit" width="30" height="30" className="text-orange-500" /></button>
        <button><Icon icon="tabler:trash" width="30" height="30" className="text-red-500" /></button>
      </div>
    </div>
  )
}