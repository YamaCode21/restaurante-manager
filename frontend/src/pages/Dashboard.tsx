import ProductList from "../components/ProductList";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="w-full">
        <h1>Dashboard</h1>
        <ProductList />
      </div>
    </div>
  );
}
