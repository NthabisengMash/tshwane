import React, { useState } from "react";

const locations = [
  { name: "Station A", distance: 2 },
  { name: "Station B", distance: 5 },
  { name: "Station C", distance: 8 },
];

export default function SelectLocation() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-3">Select Pickup / Drop-off Points</h2>
      <div className="flex space-x-4">
        <div>
          <label className="block mb-1 font-medium">Pickup</label>
          <select
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="border px-3 py-2 rounded w-40"
          >
            <option value="">Select pickup</option>
            {locations.map((loc) => (
              <option key={loc.name} value={loc.name}>
                {loc.name} ({loc.distance} km)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Drop-off</label>
          <select
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="border px-3 py-2 rounded w-40"
          >
            <option value="">Select drop-off</option>
            {locations.map((loc) => (
              <option key={loc.name} value={loc.name}>
                {loc.name} ({loc.distance} km)
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
