export type EstadoPedido = 'pendiente' | 'en_cocina' | 'listo' | 'entregado';

export interface Pedidos {
  id: number;
  user_id: number;
  estado: EstadoPedido;
}