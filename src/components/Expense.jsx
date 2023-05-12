import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

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

const Expense = ({ expense, setExpenseEdit, deleteExpense }) => {
  const { category, name, quality, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpenseEdit(expense)}>Editar </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
        {" "}
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
