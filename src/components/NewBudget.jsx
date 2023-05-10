import { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setMessage("no es un presupuesto válido");
      return;
    }

    setMessage("");
    setIsValidBudget(true);
  };

  return (
    <div className="container-budget container shadow ">
      <form onSubmit={handleBudget} className="form">
        <div className="field">
          <label>Definir Presupuesto</label>
          <input
            className="new-budget"
            type="Number"
            placeholder="Añade tu presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />

        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
