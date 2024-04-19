import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo = {todo} />
      ))}
    </ul>
  );
};

export default TodoList;
