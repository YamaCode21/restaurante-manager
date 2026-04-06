import Aside from "../components/Aside";
import ProductList from "../components/ProductList";

export default function Dashboard() {
  return (
    <div className="flex">
      <Aside />
      <div className="w-full bg-gray-100">
        <h1>Dashboard</h1>
        <ProductList />
      </div>
    </div>
  );
}
