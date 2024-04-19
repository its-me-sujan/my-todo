const TodoItem = ({ todo }) => {
  return (
    <li>
      <p>{`Todo ${todo.id}`}</p>
      <div className="ml-4 border-2 border-black rounded-lg" >
        <div className="ml-2">
          <p>Title:</p>
          <div className="h-12 border rounded px-2 mb-2">{todo.title}</div>
          <p>Description:</p>
          <div className="h-12 border rounded px-2 mb-2">
            {todo.description}
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
