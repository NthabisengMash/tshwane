export default function About() {
  return (
    <div className="bg-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">About Tshwane Bus App</h1>
        <p className="text-lg">
          Empowering commuters with smart, reliable, and accessible transit information.
        </p>
      </section>

      {/* Mission & Purpose */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
        <p className="text-dark mb-6">
          The Tshwane Bus App is designed to help residents and visitors navigate the city
          with ease. Whether you're catching an A Re Yeng bus or checking your Connector card
          balance, our goal is to make public transport more transparent and user-friendly.
        </p>

        {/* Features or Values */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded shadow border-l-4 border-civic">
            <h3 className="text-xl font-bold text-dark mb-2">Real-Time Bus Info</h3>
            <p className="text-gray-700">
              Stay updated with live bus statuses, routes, and schedules.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow border-l-4 border-accent">
            <h3 className="text-xl font-bold text-dark mb-2">Card Points Management</h3>
            <p className="text-gray-700">
              View and top up your Connector card with ease.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow border-l-4 border-primary">
            <h3 className="text-xl font-bold text-dark mb-2">Accessible Design</h3>
            <p className="text-gray-700">
              Built with simplicity and clarity for all users.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-dark mb-2">Local Integration</h3>
            <p className="text-gray-700">
              Designed to reflect the spirit and needs of Tshwane commuters.
            </p>
          </div>
        </div>
      </section>

      {/* Team or Contact Section */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Meet the Team</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["Nthabiseng", "Kabelo", "Thuli"].map((name) => (
            <div key={name} className="bg-white p-6 rounded shadow text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-full" />
              <h3 className="text-lg font-bold text-dark">{name}</h3>
              <p className="text-sm text-gray-600">Transit Tech Contributor</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Roadmap</h2>
        <ul className="list-disc list-inside text-dark space-y-2">
          <li>✅ Launch real-time bus tracking</li>
          <li>✅ Enable Connector card top-up</li>
          <li>🔜 Add fare calculator and trip planner</li>
          <li>🔜 Integrate with City of Tshwane services</li>
          <li>🔜 Offline mode for low-connectivity areas</li>
        </ul>
      </section>

      <ul className="list-disc list-inside text-dark space-y-2">
  <li>✅ <NavLink to="/fares" className="text-primary underline">Launch real-time bus tracking</NavLink></li>
  <li>✅ <NavLink to="/card-points" className="text-primary underline">Enable Connector card top-up</NavLink></li>
  <li>🔜 <NavLink to="/fares" className="text-primary underline">Add fare calculator and trip planner</NavLink></li>
  <li>🔜 <NavLink to="/about" className="text-primary underline">Integrate with City of Tshwane services</NavLink></li>
  <li>🔜 <NavLink to="/about" className="text-primary underline">Offline mode for low-connectivity areas</NavLink></li>
     </ul>
 

      {/* Footer */}
      <footer className="bg-dark text-white py-6 mt-12 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tshwane Transit App. Built for the people of Tshwane.
        </p>
        <p className="text-xs mt-2">
          Inspired by <a href="https://www.areyeng.co.za/" className="text-accent underline">A Re Yeng</a> and <a href="https://www.tshwane.gov.za/" className="text-accent underline">City of Tshwane</a>.
        </p>
      </footer>
    </div>
  );
}
