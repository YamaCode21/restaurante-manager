import { useEffect, useState } from "react";
import type { Productos } from "../types/productos";
import API from "../api/axios";

export default function ProductList() {
  const [products, setProducts] = useState<Productos[]>([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.nombre} - S/ {p.precio}
        </div>
      ))}
    </div>
  );
}
