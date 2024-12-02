import React, { useState } from "react";
import { cities } from "../data/data";

const AddCargoForm = ({ onAddCargo }) => {
  const [formData, setFormData] = useState({
    name: "",
    origin: "",
    destination: "",
    departureDate: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, origin, destination, departureDate } = formData;

    if (!name || !origin || !destination || !departureDate) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    onAddCargo({
      id: `CARGO${Math.floor(Math.random() * 1000)}`,
      name,
      origin,
      destination,
      departureDate,
      status: "Ожидает отправки",
    });

    setFormData({
      name: "",
      origin: "",
      destination: "",
      departureDate: "",
    });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Название груза"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
          >
            <option value="">Пункт отправления</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="">Пункт назначения</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <input
            type="date"
            className="form-control"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Добавить груз
      </button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
};

export default AddCargoForm;
