import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./components/TodoApp";
import { ToastContainer } from "react-toastify";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <>
    <TodoApp />
    <ToastContainer />
  </>
);
