import TodoButton from "./Button";

const EditTodo = ({ value, onChange, updateNewTodo, items }) => {
  return (
    <>
      <div>
        <input
          type={"text"}
          value={value}
          placeholder="Enter new todo title"
          onChange={(e) => onChange(e.target.value)}
        />
        <TodoButton onClick={() => updateNewTodo(items)} label={"Update"} />
      </div>
    </>
  );
};
export default EditTodo;
