import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [budget, setBudget] = useState(0);

  return (
    <div>
      <Header budget={budget} setBudget={setBudget} />
    </div>
  );
}

export default App;
