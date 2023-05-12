import React from "react";
import Expense from "./Expense";

const ListExpenses = ({
  expenses,
  setExpenseEdit,
  deleteExpense,
  filter,
  expensesFilters,
}) => {
  return (
    <div className="list-expenses container">
      {filter ? (
        <>
          <h2>
            {expensesFilters.length
              ? "Gastos"
              : "No hay gastos en esta categoría"}
          </h2>

          {expensesFilters.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Gastos" : "No hay gastos aún"}</h2>

          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListExpenses;
