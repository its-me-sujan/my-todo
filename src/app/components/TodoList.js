import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key = {todo.id} todo = {todo} onclick = {onclick} />
      ))}
    </ul>
  );
};

export default TodoList;
