import { useState } from "react";
const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    todo.description
  );

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, {
      id: todo.id,
      title: updatedTitle,
      description: updatedDescription,
    });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div className="flex flex-col items-center">
        <input
          className="w-full h-12 border rounded px-2 mb-2"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <textarea
          className="w-full h-12 border rounded px-2 mb-2"
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />
        <button
          className="w-12 h-8 rounded-lg bg-blue-500 hover:bg-blue-700 text-white"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      ) : (
        <>
          <div className="w-full h-12 border rounded px-2 mb-2">
            {todo.title}
          </div>
          <div className="w-full h-12 border rounded px-2 mb-2">
            {todo.description}
          </div>
          <div className="flex flex-row justify-between">
            <button
              className="w-1/2 mr-1 h-8 rounded-lg bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="w-1/2 ml-1 h-8 rounded-lg bg-red-500 hover:bg-red-700 text-white"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
