// src/components/BusCard.jsx
import Button from "./Button";

export default function BusCard({ bus }) {
  const getStatus = () => {
    const statuses = ["On Time", "Delayed", "Cancelled"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  const status = getStatus();
  const statusColor =
    status === "On Time"
      ? "text-green-600"
      : status === "Delayed"
      ? "text-yellow-500"
      : "text-red-600";

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between border-l-4 border-civic">
      <h2 className="text-xl font-semibold text-dark mb-2">{bus.name}</h2>
      <p className="text-sm text-gray-600">Route ID: {bus.routeId}</p>
      <p className="text-sm mt-2">
        Status: <span className={`font-semibold ${statusColor}`}>{status}</span>
      </p>
      <div className="mt-4">
        <Button>View</Button>
      </div>
    </div>
  );
}
