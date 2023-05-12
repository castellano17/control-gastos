import { useState } from "react";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters shadow container">
      <form>
        <div className="field">
          <label>Filtrar Gastos</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">-- Todas las categorías --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos varios</option>
            <option value="Ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="salud">Salud</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
