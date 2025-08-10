import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user.name}!</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
