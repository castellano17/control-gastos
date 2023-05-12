import { useEffect, useState } from "react";
import closeBtn from "../img/cerrar.svg";
import Message from "./Message";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  SaveExpense,
  expenseEdit,
  setExpenseEdit,
}) => {
  const [name, setName] = useState("");
  const [quality, setQuality] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setName(expenseEdit.name);
      setQuality(expenseEdit.quality);
      setCategory(expenseEdit.category);
      setId(expenseEdit.id);
      setDate(expenseEdit.date);
    }
  }, []);

  const hideModal = () => {
    setAnimateModal(false);
    setExpenseEdit({});

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, quality, category].includes("")) {
      setMessage("Todos los campos son obligatorios");

      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }

    SaveExpense({ name, quality, category, id, date });
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={closeBtn} alt="Cerrar modal" onClick={hideModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`form ${animateModal ? "animate" : "close"}`}
      >
        <legend>{expenseEdit.name ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {message && <Message type="error">{message} </Message>}

        <div className="field">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto"
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
          />
        </div>

        <div className="field">
          <label htmlFor="categoria">Categoría</label>
          <select
            name=""
            id="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos varios</option>
            <option value="Ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="salud">Salud</option>
          </select>
        </div>

        <input
          type="submit"
          value={expenseEdit.name ? "Guardar cambios" : "Añadir Gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
