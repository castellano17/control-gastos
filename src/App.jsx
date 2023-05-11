import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import IconNewExpense from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generateId } from "./utils/GenerateId";
import ListExpenses from "./components/ListExpenses";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const [expenseEdit, setExpenseEdit] = useState({});

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      handleNewExpense();
    }
  }, [expenseEdit]);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const SaveExpense = (expense) => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);

    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
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
            <ListExpenses expenses={expenses} setExpenseEdit={setExpenseEdit} />
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
        />
      )}
    </div>
  );
}

export default App;
