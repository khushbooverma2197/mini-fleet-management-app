import { useState } from "react";

const Sidebar = ({ addFleet }) => {
  const [form, setForm] = useState({
    reg: "",
    category: "Car",
    driver: "",
    available: true,
  });

  const handleSubmit = () => {
    if (!form.reg || !form.driver) return alert("All fields required");
    addFleet({ ...form, id: Date.now() });
    setForm({ reg: "", category: "Car", driver: "", available: true });
  };

  return (
    <div className="sidebar">
      <h2>Add New Vehicle</h2>
      <form className="sidebar-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="form-group">
          <label htmlFor="reg">Registration Number</label>
          <input 
            id="reg"
            placeholder="e.g., ABC-1234" 
            value={form.reg} 
            onChange={e => setForm({ ...form, reg: e.target.value })} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Vehicle Category</label>
          <select 
            id="category"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          >
            <option value="Auto">Auto</option>
            <option value="Car">Car</option>
            <option value="Truck">Truck</option>
            <option value="Bus">Bus</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="driver">Driver Name</label>
          <input 
            id="driver"
            placeholder="e.g., John Doe" 
            value={form.driver} 
            onChange={e => setForm({ ...form, driver: e.target.value })} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="available">Availability Status</label>
          <select 
            id="available"
            value={form.available}
            onChange={e => setForm({ ...form, available: e.target.value === "true" })}
          >
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>
        </div>
        
        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  );
};

export default Sidebar;
