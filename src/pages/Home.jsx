import { useEffect, useState } from "react";
import { getBuses } from "../services/api";
import Button from "../components/Button";
import BusCard from "../components/BusCard";

export default function Home() {
  const [buses, setBuses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const busesPerPage = 6;

  useEffect(() => {
    getBuses()
      .then((data) => {
        setBuses(data);
        setFiltered(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const filteredList = buses.filter((bus) =>
      bus.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredList);
    setPage(1); // Reset to first page on search
  }, [search, buses]);

  const paginatedBuses = filtered.slice(
    (page - 1) * busesPerPage,
    page * busesPerPage
  );

  const totalPages = Math.ceil(filtered.length / busesPerPage);

  const getStatus = () => {
    const statuses = ["On Time", "Delayed", "Cancelled"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-light">
        <p className="text-primary text-xl animate-pulse">Loading buses...</p>
      </div>
    );
  }

  return (
    <div className="bg-light min-h-screen">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to Tshwane Transit</h1>
        <p className="text-lg">Your gateway to safe, reliable, and smart city travel.</p>
      </section>

      {/* Search Filter */}
      <div className="container mx-auto px-6 py-6">
        <input
          type="text"
          placeholder="Search buses by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded mb-6"
        />

        {/* Bus Cards */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedBuses.map((bus) => (
            <div
              key={bus.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between border-l-4 border-civic"
            >
              <h2 className="text-xl font-semibold text-dark mb-2">{bus.name}</h2>
              <p className="text-sm text-gray-600">Route ID: {bus.routeId}</p>
              <p className="text-sm mt-2">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    getStatus() === "On Time"
                      ? "text-green-600"
                      : getStatus() === "Delayed"
                      ? "text-yellow-500"
                      : "text-red-600"
                  }`}
                >
                  {getStatus()}
                </span>
              </p>
              <div className="mt-4">
                <Button>View</Button>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {paginatedBuses.map((bus) => (
    <BusCard key={bus.id} bus={bus} />
  ))}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center gap-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-dark font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
