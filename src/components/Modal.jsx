import closeBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const hideModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={closeBtn} alt="Cerrar modal" onClick={hideModal} />
      </div>

      <form className={`form ${animateModal ? "animate" : "close"}`}>
        <legend>Nuevo Gasto</legend>

        <div className="field">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
          />
        </div>

        <div className="field">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto"
          />
        </div>

        <div className="field">
          <label htmlFor="categoria">Categoría</label>
          <select name="" id="categoria">
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

        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
