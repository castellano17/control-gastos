import { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget }) => {
  const [message, setMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    if (!Number(budget) || Number(budget) < 0) {
      setMessage("no es un presupuesto válido");
    } else {
      console.log("es un presupuesto valid");
    }
  };

  return (
    <div className="container-budget container shadow ">
      <form onSubmit={handleBudget} className="form">
        <div className="field">
          <label>Definir Presupuesto</label>
          <input
            className="new-budget"
            type="text"
            placeholder="Añade tu presupuesto"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <input type="submit" value="Añadir" />

        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
