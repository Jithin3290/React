
import { useAuth } from "./useAuth"

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user?.name} </h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
