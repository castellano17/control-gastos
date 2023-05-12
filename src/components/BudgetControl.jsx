import { useEffect, useState } from "react";
import { formatAmount } from "../utils/FormatAmount.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
  budget,
  expenses,
  setBudget,
  setExpenses,
  setIsValidBudget,
}) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const TotalSpent = expenses.reduce(
      (total, expense) => expense.quality + total,
      0
    );

    const totalAvailable = budget - TotalSpent;

    // Calcular el porcentaje gastado
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setAvailable(totalAvailable);
    setSpent(TotalSpent);

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1500);
  }, [expenses]);

  const handleResetApp = () => {
    const result = confirm("¿Deseas reiniciar presupuesto y gastos?");

    if (result) {
      setExpenses([]);
      setBudget(0);
      setIsValidBudget(false);
      // localStorage.clear();
      // window.location.reload();
    }
  };

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
          })}
          value={percentage}
          text={`${percentage}% Gastado`}
        />
      </div>
      <div className="conten-budget">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span> {formatAmount(budget)}
        </p>

        <p className={`${available < 0 ? "negativo" : ""}`}>
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
