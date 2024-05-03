// pages/index.js
"use client";
import React, { useState, useEffect, useMemo } from "react";
import db from "../utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";

export default function Home() {
  const [todos, setTodos] = useState([]);
  
  useEffect( () => {
    const fetchTodos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "todos"));
        const tempTodos = [];
        querySnapshot.forEach((doc) => {
          const todo = {
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
          };
          tempTodos.push(todo);
        });
        console.log("Todos fetched from Firebase");
        setTodos(tempTodos);
      } catch (error) {
        console.error("Error fetching todos: ", error);
      }
    };
    if (todos.length === 0) {
      fetchTodos();
    }
  }, [todos]);

  const columns = [
    { Header: "Title", accessor: "title" },
    { Header: "Description", accessor: "description" },
  ];

  const addTodo = async (data) => {
    const newTodo = {
      id: new Date().getTime().toString(),
      title: data["title"],
      description: data["description"],
    };
    // console.log(newTodo);
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        id: newTodo.id.toString(),
        title: newTodo.title,
        description: newTodo.description,
      });
      console.log("Document written with ID: ", docRef.id);
      setTodos([...todos, newTodo]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="md:flex p-8 ">
      <div className="md:w-1/3 ">
        <TodoForm onSubmit={addTodo} />
      </div>
      <div className="md:w-2/3 mt-6 md:mt-0 md:ml-4">
        <TodoTable columns={columns} data={todos} />
      </div>
    </div>
  );
}
