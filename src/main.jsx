import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./Components/TodoComplete";
import TodoWithProps from "./Components/Todo_With_Props/TodoParent";

ReactDOM.createRoot(document.getElementById("root")).render(<TodoWithProps />);
