import { useState } from "react";
import { v4 } from "uuid";
import TodoButton from "./Button";
import InputTodo from "./Input_Todo";
import TodoList from "./Todos_List";

const TodoWithProps = () => {
  const [todayInputVal, setTodoInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const handleSaveInput = () => {
    if (!todayInputVal) {
      return alert("Please Enter A Your Todo First !!");
    }
    setTodos((prevState) => [
      ...prevState,
      { id: v4(), todayInputVal: todayInputVal },
    ]);
    setTodoInputVal("");
  };

  const onDeleteTodo = (id) => {
    return setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const onEditTodo = (item) => {
    setEditingTodo(item.id);
    setNewTodoTitle(item.todayInputVal);
  };

  const updateNewTodo = () => {
    setTodos((prevState) => {
      return prevState.map((item) => {
        if (item.id === editingTodo) {
          item.todayInputVal = newTodoTitle;
        }
        return item;
      });
    });

    setEditingTodo(null);
    setNewTodoTitle(null);
  };

  return (
    <>
      <InputTodo
        value={todayInputVal}
        onChange={(value) => setTodoInputVal(value)}
      />
      <TodoButton onClick={handleSaveInput} label={"Add Todos"} />

      <TodoList
        todoList={todos}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
        newTodoTitle={newTodoTitle}
        editingTodo={editingTodo}
        onChange={(value) => setNewTodoTitle(value)}
        updateNewTodo={updateNewTodo}
      />
    </>
  );
};
export default TodoWithProps;
