// src/services/api.js
const API_BASE = "http://localhost:3000";

export async function getBuses() {
  const res = await fetch(`${API_BASE}/buses`);
  if (!res.ok) throw new Error("Failed to fetch buses");
  return res.json();
}

// Mock login: fetch users and check username/password
export async function loginUser(username, password) {
  const res = await fetch(
    `${API_BASE}/users?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
  );
  if (!res.ok) throw new Error("Login failed");

  const users = await res.json();
  if (users.length === 0) throw new Error("Invalid credentials");

  return users[0]; // return user object
}

export async function registerUser(username, password, name) {
  const res = await fetch(`${API_BASE}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, name }),
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
}
