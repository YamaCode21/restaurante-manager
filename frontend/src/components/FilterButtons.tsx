type EstadoFiltro = "todos" | "activo" | "desactivado";

type Props = {
  value: EstadoFiltro;
  onChange: (value: EstadoFiltro) => void;
};

export default function FilterButtons({ value, onChange }: Props) {
  const botones: EstadoFiltro[] = ["todos", "activo", "desactivado"];

  return (
    <div className="flex gap-2 mb-4">
      {botones.map((btn) => {
        const activo = value === btn;
        return (
          <button
            key={btn}
            onClick={() => onChange(btn)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${activo ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
              `}
          >
            {btn.charAt(0).toUpperCase() + btn.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
