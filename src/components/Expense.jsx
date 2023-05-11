import React from "react";
import { formatDate } from "../utils/FormatAmount";

import IconAhorro from "../img/icono_ahorro.svg";
import IconCasa from "../img/icono_casa.svg";
import IconComida from "../img/icono_comida.svg";
import IconGastos from "../img/icono_gastos.svg";
import IconOcio from "../img/icono_ocio.svg";
import IconSalud from "../img/icono_salud.svg";
import IconSuscripciones from "../img/icono_suscripciones.svg";

const objetIcons = {
  ahorro: IconAhorro,
  comida: IconComida,
  casa: IconCasa,
  gastos: IconGastos,
  Ocio: IconOcio,
  suscripciones: IconSuscripciones,
  salud: IconSalud,
};

const Expense = ({ expense }) => {
  const { category, name, quality, id, date } = expense;
  return (
    <div className="expense shadow">
      <div className="conten-expense">
        {/* Imagen */}
        <img src={objetIcons[category]} alt="Icons Gasto" />
        <div className="description-expense">
          <p className="category">{category}</p>
          <p className="name-expense">{name}</p>
          <p className="date-expense">
            Agregado el: {""}
            <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
      <p className="amount-expense">${quality}</p>
    </div>
  );
};

export default Expense;
