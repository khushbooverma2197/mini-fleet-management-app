import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setIsAuth(false);
      navigate("/login");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <div className="navbar-icon">🚗</div>
        <h1>Fleet Manager Pro</h1>
      </div>
      <div className="navbar-actions">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
