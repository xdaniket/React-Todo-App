import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

const TodoApp = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!todoTitle) {
      return alert("Please enter a todo title");
    }

    setTodos((lastState) => [...lastState, { id: v4(), title: todoTitle }]);
    setTodoTitle("");
  };

  const onDeleteTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const updateTodo = () => {
    setTodos((prevState) => {
      return prevState.map((item) => {
        if (item.id === editingTodo) {
          item.title = newTodoTitle;
        }
        return item;
      });
    });

    setEditingTodo(null);
    setNewTodoTitle(null);
  };

  const onEditTodo = (item) => {
    console.log("item :", item);
    setEditingTodo(item.id);
    setNewTodoTitle(item.title);
  };

  return (
    <>
      <div>
        <input
          value={todoTitle}
          type="text"
          placeholder="Enter todo title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <ul>
          {todos.map((item) => {
            return (
              <li key={item.id}>
                {item.id === editingTodo ? (
                  <div>
                    <input
                      type={"text"}
                      value={newTodoTitle}
                      placeholder="Enter new todo title"
                      onChange={(e) => setNewTodoTitle(e.target.value)}
                    />

                    <button onClick={updateTodo}>Update</button>
                  </div>
                ) : (
                  <div>
                    <p>{item.title}</p>
                    <button onClick={() => onEditTodo(item)}>Edit</button>
                    <button onClick={() => onDeleteTodo(item.id)}>
                      Delete
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
