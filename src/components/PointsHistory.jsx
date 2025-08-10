import React from "react";
import { useCardPoints } from "../context/CardPointsContext";

export default function PointsHistory() {
  const { history, balance } = useCardPoints();

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Points History</h2>
      <p className="text-lg font-semibold mb-6 text-center text-blue-700">
        Current Balance: <span className="text-3xl">{balance} pts</span>
      </p>

      {history.length === 0 ? (
        <p className="text-center text-gray-500">No points loaded yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200 max-h-56 overflow-y-auto">
          {history.map((entry, i) => (
            <li
              key={i}
              className="py-3 flex justify-between items-center text-gray-700"
            >
              <span>{entry.date}</span>
              <span>
                Loaded <strong>R{entry.amount}</strong> →{" "}
                <strong>{entry.points} pts</strong>
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

