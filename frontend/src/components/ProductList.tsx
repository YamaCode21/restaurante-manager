import { useEffect, useState } from "react";
import API from "../api/axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);

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
