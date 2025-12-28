import React from "react";

const vehicleImages = {
  Auto: "🛺",
  Car: "🚗",
  Truck: "🚚",
  Bus: "🚌"
};

const FleetCard = React.memo(({ data, onDriver, onToggle, onDelete }) => {
  return (
    <div className="card">
      <div className="card-image" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '80px'
      }}>
        {vehicleImages[data.category] || "🚗"}
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <div className="card-reg">{data.reg}</div>
          <span className={`card-badge ${data.available ? 'badge-available' : 'badge-unavailable'}`}>
            {data.available ? "● Available" : "● In Use"}
          </span>
        </div>
        
        <div className="card-info">
          <div className="info-row">
            <span className="info-icon">🚙</span>
            <span className="info-label">Type:</span>
            <span className="info-value">{data.category}</span>
          </div>
          <div className="info-row">
            <span className="info-icon">👤</span>
            <span className="info-label">Driver:</span>
            <span className="info-value">{data.driver}</span>
          </div>
        </div>
        
        <div className="card-actions">
          <button 
            className="btn-primary"
            onClick={() => {
              const name = prompt("New Driver Name");
              if (name) onDriver(data.id, name);
            }}
            title="Update Driver"
          >
            Update
          </button>
          <button 
            className="btn-secondary"
            onClick={() => onToggle(data.id)}
            title="Toggle Availability"
          >
            {data.available ? "Mark Busy" : "Mark Free"}
          </button>
          <button 
            className="btn-danger"
            onClick={() => onDelete(data.id)}
            title="Delete Vehicle"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
});

export default FleetCard;
