import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo = {todo} onclick = {onclick} />
      ))}
    </ul>
  );
};

export default TodoList;
