import "./App.css";
import Header from "./components/Header";
import ComA from "./components/ComA";
import { useState, createContext } from "react";

const AppState = createContext();

function App() {
  const [data, setData] = useState("Web3Mantra");
  const [name, setName] = useState({ name: "suman", age: 20 });
  return (
    <div>
      <AppState.Provider value={{ data, name }}>
        <Header />

        <ComA />
      </AppState.Provider>
    </div>
  );
}

export default App;
export { AppState };
