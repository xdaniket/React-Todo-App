const InputTodo = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};
InputTodo.defaultProps = {
  type: "text",
  placeholder: "Enter A Todo List Here !!",
};
export default InputTodo;
