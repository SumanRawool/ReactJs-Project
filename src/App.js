import "./App.css";
import Header from "./components/Header";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type == "INC") {
    return state + 2;
  } else if (action.type == "DEC") {
    return state - 2;
  } else if (action.type == "MUL") {
    return state * 2;
  }
  console.log("state:", state);
  console.log("action: ", action);
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <Header />
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "MUL" })}>Mutiply</button>
    </div>
  );
}

export default App;
