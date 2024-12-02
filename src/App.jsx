import React, { useState } from "react";
import CargoTable from "./components/cargoTable";
import AddCargoForm from "./components/addCargoForm.jsx";
import { cargoList, statuses } from "../src/data/data.js";
const App = () => {
  const [cargos, setCargos] = useState(cargoList);

  const addCargo = (newCargo) => {
    setCargos([...cargos, newCargo]);
  };

  const updateCargoStatus = (id, newStatus) => {
    setCargos(
      cargos.map((cargo) => {
        if (cargo.id === id) {
          return { ...cargo, status: newStatus };
        }
        return cargo;
      })
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Отслеживание грузов</h1>
      <AddCargoForm onAddCargo={addCargo} />
      <CargoTable
        cargos={cargos}
        onStatusChange={updateCargoStatus}
        statuses={statuses}
      />
    </div>
  );
};

export default App;
