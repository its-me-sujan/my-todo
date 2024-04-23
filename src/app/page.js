"use client";
import { useState } from "react";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { collection, getDocs } from "firebase/firestore";
import firebase from "../firebase";
import { get } from "http";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const currentDate = new Date().toDateString();
  // const addTodo = (newTodo) => {
  //   setTodos([...todos, newTodo]);
  // };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };
  useEffect(() => {
    getDocs(collection(firebase.db, "todo")).then((result) => {
      const tempTodos = [];
      result.forEach((doc) => {
        const todo = {
          id: doc.data().id,
          title: doc.data().title,
          description: doc.data().description,
        };
        tempTodos.push(todo);
      });
      setTodos(tempTodos);
    });
  }, [todos]);
  return (
    <div className="flex mt-4">
      <div className="w-1/2 pr-4">
        <div className="text-center mb-3 font-bold">
          <p className="text-4xl">Todo App</p>
          <h2>Date: {currentDate}</h2>
        </div>
        <div className="ml-4">
          <TodoList todos={todos} />
        </div>
      </div>
      <div className="w-1/2 pl-4 flex justify-center items-center">
        <div>
          <TodoForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
