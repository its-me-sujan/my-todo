"use client";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const currentDate = new Date().toDateString();
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };
  return (
    <div className="flex mt-4">
      <div className="w-1/2 pr-4">
        <div className="text-center mb-3 font-bold">
          <p className="text-4xl">Todo App</p>
          <h2>Date: {currentDate}</h2>
        </div>
        <div className="ml-4">
          <TodoList
            todos={todos}
          />
        </div>
      </div>
      <div className="w-1/2 pl-4 flex justify-center items-center">
        <div>
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
