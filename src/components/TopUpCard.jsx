import React, { useState } from "react";
import { useCardPoints } from "../context/CardPointsContext";

const amounts = [
  { rands: 10, points: 10 },
  { rands: 20, points: 20 },
  { rands: 60, points: 60 },
  { rands: 100, points: 122 },
  { rands: 180, points: 230 },
];

export default function TopUpCard() {
  const { addPoints } = useCardPoints();
  const [selected, setSelected] = useState(null);

  const handleTopUp = () => {
    if (selected) {
      addPoints(selected.rands, selected.points);
      alert(`Loaded R${selected.rands} for ${selected.points} points!`);
      setSelected(null);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Load Card Points</h2>
      <div className="flex flex-wrap gap-3 mb-4">
        {amounts.map((amt) => (
          <button
            key={amt.rands}
            onClick={() => setSelected(amt)}
            className={`px-4 py-2 rounded border transition ${
              selected?.rands === amt.rands
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            R{amt.rands} → {amt.points} pts
          </button>
        ))}
      </div>
      <button
        onClick={handleTopUp}
        disabled={!selected}
        className="w-full py-2 bg-green-600 text-white rounded disabled:bg-gray-400"
      >
        Load Points
      </button>
    </div>
  );
}
