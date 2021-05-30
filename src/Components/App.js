import React, { useReducer } from "react";
import Context from "../Context/Context";
import Routing from "./Routing";
import { Reducer } from "../Redux/Reducer";
import InitialState from "../Redux/State";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Routing />
    </Context.Provider>
  );
}

export default App;