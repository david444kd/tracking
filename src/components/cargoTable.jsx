import React from "react";

const CargoTable = ({ cargos, onStatusChange, statuses }) => {
  const getStatusClass = (status) => {
    if (status === "Ожидает отправки") {
      return "bg-warning text-dark";
    } else if (status === "В пути") {
      return "bg-primary text-white";
    } else if (status === "Доставлен") {
      return "bg-success text-white";
    } else {
      return "";
    }
  };

  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Название груза</th>
          <th>Статус</th>
          <th>Пункт отправления</th>
          <th>Пункт назначения</th>
          <th>Дата отправления</th>
        </tr>
      </thead>
      <tbody>
        {cargos.map((cargo, index) => (
          <tr key={cargo.id}>
            <td>{index + 1}</td>
            <td>{cargo.name}</td>
            <td>
              <select
                className={`form-select ${getStatusClass(cargo.status)}`}
                value={cargo.status}
                onChange={(e) => onStatusChange(cargo.id, e.target.value)}
              >
                {statuses.map((status, statusIndex) => (
                  <option key={statusIndex} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </td>
            <td>{cargo.origin}</td>
            <td>{cargo.destination}</td>
            <td>{cargo.departureDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Экспортируем компонент
export default CargoTable;
