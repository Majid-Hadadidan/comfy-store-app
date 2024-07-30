import { useState } from "react";
import { formatPrice } from "../../utils";

function FormRange({ name, size, label }) {
  const maxPrice = 100000;
  const step = 10000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className="form-control">
      <label className="label cursor-pointer" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        step={step}
        id={name}
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(event) => setSelectedPrice(event.target.value)}
        className={`range range-secondary ${size}`}
      />
      <div className="w-full flex justify-between items-center text-sm px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
}
export default FormRange;
