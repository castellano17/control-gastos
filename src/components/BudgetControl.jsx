import { useEffect, useState } from "react";
import { formatAmount } from "../utils/FormatAmount.js";

const BudgetControl = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const TotalSpent = expenses.reduce(
      (total, expense) => expense.quality + total,
      0
    );

    const totalAvailable = budget - TotalSpent;
    setAvailable(totalAvailable);

    setSpent(TotalSpent);
  }, [expenses]);

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
          <span>Disponible: </span> {formatAmount(available)}
        </p>

        <p>
          <span>Gastado: </span> {formatAmount(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
