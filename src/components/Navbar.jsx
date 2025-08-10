import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide text-accent">
          Tshwane Transit
        </Link>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`md:flex md:items-center md:space-x-6 ${isOpen ? "block mt-4" : "hidden"} md:mt-0`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-accent transition ${isActive ? "text-accent font-semibold" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-accent transition ${isActive ? "text-accent font-semibold" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/card-points"
              className={({ isActive }) =>
                `hover:text-accent transition ${isActive ? "text-accent font-semibold" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              Card Points
            </NavLink>
          </li>

          {user ? (
            <>
              <li className="text-light">Hi, <span className="font-medium">{user.email}</span></li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="hover:text-accent transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `hover:text-accent transition ${isActive ? "text-accent font-semibold" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `hover:text-accent transition ${isActive ? "text-accent font-semibold" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
