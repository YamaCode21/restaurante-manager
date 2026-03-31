export type EstadoPedido = 'pendiente' | 'preparando' | 'listo' | 'entregado';

export interface Pedidos {
  id: number;
  restaurante_id: number;
  usuario_id: number;
  estado: EstadoPedido;
  total: number;
  fecha: string | Date;
}