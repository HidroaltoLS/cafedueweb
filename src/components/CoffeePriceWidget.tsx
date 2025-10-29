import { useState } from "react";
import { BadgeDollarSign } from "lucide-react";

export default function CoffeePriceWidget() {
  const [loading] = useState(false);
  const [nyPrice] = useState<number | null>(195.40);
  const [ecRef] = useState<number | null>(210.00);
  const [asOf] = useState<string>(new Date().toISOString().slice(0, 10));

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <BadgeDollarSign className="w-5 h-5" />
          <h3 className="text-sm font-semibold">Indicadores del café</h3>
        </div>
        <span className="text-xs text-gray-500">
          {loading ? "Actualizando..." : asOf}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-2 rounded border">
          <p className="text-xs text-gray-500">NY ICE (cts/lb)</p>
          <p className="text-lg font-semibold">{nyPrice ?? "—"}</p>
        </div>
        <div className="p-2 rounded border">
          <p className="text-xs text-gray-500">Ecuador (USD/qq)</p>
          <p className="text-lg font-semibold">{ecRef ?? "—"}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2">* Valores de demostración</p>
    </div>
  );
}
