import React from "react";

const fares = [
  { band: "Fare Band 1", distance: "0–8 km", cash: "R13,00", points: 13 },
  { band: "Fare Band 2", distance: "8–14 km", cash: "R19,00", points: 19 },
  { band: "Fare Band 3", distance: "14–21 km", cash: "R23,50", points: 23.5 },
  { band: "Fare Band 4", distance: "21–29 km", cash: "R26,00", points: 26 },
  { band: "Fare Band 5", distance: "29–38 km", cash: "R30,00", points: 30 },
  { band: "Fare Band 6", distance: "38–48 km", cash: "R32,00", points: 32 },
  { band: "Fare Band 7", distance: "48+ km", cash: "R35,00", points: 35 },
];

export default function BusFares() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Bus Fare Table</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2">Fare Band</th>
              <th className="px-4 py-2">Distance</th>
              <th className="px-4 py-2">Cash Fare</th>
              <th className="px-4 py-2">Travel Points</th>
            </tr>
          </thead>
          <tbody>
            {fares.map((fare, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border px-4 py-2">{fare.band}</td>
                <td className="border px-4 py-2">{fare.distance}</td>
                <td className="border px-4 py-2">{fare.cash}</td>
                <td className="border px-4 py-2">{fare.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
