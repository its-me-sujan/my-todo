"use client";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
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
    <div className="flex justify-center items-center pt-5">
      <div>
        <div className="text-center mb-3 font-bold">
          <p className="text-4xl">Todo App</p>
          <h2>Date: {currentDate}</h2>
        </div>
        <TodoForm addTodo={addTodo} date={currentDate} />
        <TodoList
          todos={todos} //passing todos state from App to TodoList
          deleteTodo={deleteTodo} //passing deleteTodo function
          updateTodo={updateTodo} //passing updateTodo function
        />
      </div>
    </div>
  );
};

export default Home;
