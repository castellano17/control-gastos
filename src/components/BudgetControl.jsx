import React from "react";
import { formatAmount } from "../utils/FormatAmount.js";

const BudgetControl = ({ budget }) => {
  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className="conten-budget">
        <p>
          <span>Presupuesto: </span> {formatAmount(budget)}
        </p>

        <p>
          <span>Disponible: </span> {formatAmount(0)}
        </p>

        <p>
          <span>Gastado: </span> {formatAmount(0)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
