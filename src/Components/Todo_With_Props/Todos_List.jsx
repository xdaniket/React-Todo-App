import TodoButton from "./Button";
import EditTodo from "./EditTodo";

const TodoList = ({
  todoList,
  onDeleteTodo,
  newTodoTitle,
  editingTodo,
  onChange,
  onEditTodo,
  updateNewTodo,
}) => {
  if (todoList.length === 0) {
    return <p>The list will appear here .</p>;
  }

  return (
    <>
      <div>
        {todoList.map((items) => {
          return (
            <>
              <ul>
                <li key={items.id}>
                  {items.id === editingTodo ? (
                    <EditTodo
                      value={newTodoTitle}
                      onChange={(value) => onChange(value)}
                      updateNewTodo={updateNewTodo}
                      items={items}
                    />
                  ) : (
                    <>
                      <p>{items.todayInputVal}</p>
                      <TodoButton
                        onClick={() => onDeleteTodo(items.id)}
                        label={"Delete"}
                      />

                      <TodoButton
                        onClick={() => onEditTodo(items)}
                        label={"Edit"}
                      />
                    </>
                  )}
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};
export default TodoList;
