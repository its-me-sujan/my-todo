import { useState } from "react";

const TodoForm = ({ addTodo, date }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [idCounter, setIdCounter] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please enter both a title and description.");
      return;
    }
    const newTodo = {
      id: idCounter,
      title,
      description,
    };
    addTodo(newTodo);
    setIdCounter(idCounter + 1);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className=" max-w-md mx-auto mb-3 p-4 border-4 border-black rounded-lg">
      <label htmlFor="title">Title:</label>
      <input
        className="w-full h-12 border rounded px-2 mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Eg. Do Laundry"
      />
      <label htmlFor="description">Description:</label>
      <textarea
        className="w-full h-22 border rounded px-2 mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Eg. Gather Clothes"
      />
      <button type="submit" className="w-full h-8 rounded-lg bg-sky-500 text-white hover:bg-sky-700">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
