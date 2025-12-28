import { useCallback, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";

const Admin = () => {
  const [fleet, setFleet] = useState([]);

  const addFleet = (data) => {
    setFleet(prev => [...prev, data]);
  };

  const updateDriver = useCallback((id, name) => {
    setFleet(fleet =>
      fleet.map(f => (f.id === id ? { ...f, driver: name } : f))
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleet(fleet =>
      fleet.map(f =>
        f.id === id ? { ...f, available: !f.available } : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (window.confirm("Delete vehicle?")) {
      setFleet(fleet => fleet.filter(f => f.id !== id));
    }
  }, []);

  const stats = useMemo(() => {
    const total = fleet.length;
    const available = fleet.filter(f => f.available).length;
    const unavailable = total - available;
    return { total, available, unavailable };
  }, [fleet]);

  return (
    <>
      <Navbar />
      <div className="admin">
        <Sidebar addFleet={addFleet} />
        <div className="main-content">
          <div className="content-header">
            <h2>Fleet Overview</h2>
            <p>Manage and monitor your vehicle fleet</p>
          </div>
          
          <div className="fleet-stats">
            <div className="stat-card">
              <h3>Total Vehicles</h3>
              <p>{stats.total}</p>
            </div>
            <div className="stat-card">
              <h3>Available</h3>
              <p style={{color: '#28a745'}}>{stats.available}</p>
            </div>
            <div className="stat-card">
              <h3>In Use</h3>
              <p style={{color: '#dc3545'}}>{stats.unavailable}</p>
            </div>
          </div>
          
          <div className="grid">
            {fleet.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">🚗</div>
                <h3>No vehicles added yet</h3>
                <p>Start by adding your first vehicle using the form on the left</p>
              </div>
            ) : (
              fleet.map(item => (
                <FleetCard
                  key={item.id}
                  data={item}
                  onDriver={updateDriver}
                  onToggle={toggleAvailability}
                  onDelete={deleteFleet}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
