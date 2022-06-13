import "./App.css";
import NumberPresenter from "./components/NumberPresenter";
import NumberModifier from "./components/NumberModifier";
import { useCounter } from "./components/CounterProvider";

function App() {
  const { value, increment, decrement } = useCounter();
  return (
    <div className="App">
      <p>Change the value</p>
      <p>{value}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <NumberPresenter />
      <NumberModifier />
    </div>
  );
}

export default App;
