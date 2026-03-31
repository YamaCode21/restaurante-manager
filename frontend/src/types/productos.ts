export interface Productos {
  id: number;
  nombre: string;
  precio: number;
  categoria_id: number;
  stock: number;
  activo: boolean;
  creado_en: string | Date;
}