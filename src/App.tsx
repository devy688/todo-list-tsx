import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <ToDoList />
    </div>
  );
}

export default App;
