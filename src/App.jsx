import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import IconNewExpense from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generateId } from "./utils/GenerateId";
import ListExpenses from "./components/ListExpenses";
import Filters from "./components/Filters";

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );

  const [expenseEdit, setExpenseEdit] = useState({});

  const [filter, setFilter] = useState("");
  const [expensesFilters, setExpensesFilters] = useState([]);

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [expenseEdit]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    if (filter) {
      //Filtrar gastos por categoría
      const expensesFilters = expenses.filter(
        (expense) => expense.category === filter
      );
      setExpensesFilters(expensesFilters);
    }
  }, [filter]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0;
    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  const handleNewExpense = () => {
    setModal(true);
    setExpenseEdit({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const SaveExpense = (expense) => {
    if (expense.id) {
      //Actualizar
      const expensesUpdates = expenses.map((expenseState) =>
        expenseState.id === expense.id ? expense : expenseState
      );
      setExpenses(expensesUpdates);
    } else {
      //Nuevo Gasto
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
      setExpenseEdit({});
    }

    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const deleteExpense = (id) => {
    const expensesUpdates = expenses.filter((expense) => expense.id !== id);
    setExpenses(expensesUpdates);
  };

  return (
    <div className={modal ? "set" : ""}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />
            <ListExpenses
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              expensesFilters={expensesFilters}
            />
          </main>
          <div className="new-expense">
            <img
              src={IconNewExpense}
              alt="Icon New Expense"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          SaveExpense={SaveExpense}
          expenseEdit={expenseEdit}
          setExpenseEdit={setExpenseEdit}
        />
      )}
    </div>
  );
}

export default App;
