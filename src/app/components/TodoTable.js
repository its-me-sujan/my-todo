import { useTable } from "react-table";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import db from "../../utils/firebase";
import { useState } from "react";
import Modal from "./Modal"

const TodoTable = ({ columns, data, onDeleteTodo, onUpdateTodo }) => {
  const [showModal, setShowModal] = useState(false);
  const [editedTodo, setEditedTodo] = useState();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const updateTodo = async (updatedTodo) => {
    try {
      const todoDocRef = doc(db, "todos", updatedTodo.id);
      await updateDoc(todoDocRef, updatedTodo);
      onUpdateTodo(updatedTodo.id, updatedTodo);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      const todoDocRef = doc(db, "todos", todoId);
      await deleteDoc(todoDocRef);
      onDeleteTodo(todoId);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  const handleUpdateButtonClick = (todo) => {
    setEditedTodo(todo);
    setShowModal(true);
  };

  const handleSave = () => {
    updateTodo(editedTodo);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });
    
  };

  return (
    <div className="md:flex">
      <table
        {...getTableProps()}
        className="w-full sm:w-24 border border-black rounded-lg "
      >
        <thead className="text-left bg-gray-100">
          {headerGroups.map((headerGroups) => (
            <tr
              {...headerGroups.getHeaderGroupProps()}
              className="border-b border-black"
            >
              {headerGroups.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="p-2 border-r border-black"
                >
                  {column.render("Header")}
                </th>
              ))}
              <th className="p-2 border-r border-black">Action</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b border-black">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="p-2 border-r border-black"
                    key={cell.column.id}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
                <td className="p-2  border-black sm:flex">
                  <button
                    className="px-3 py-1 mr-3 mb-1 sm:mb-0 rounded-lg bg-sky-500 text-white hover:bg-sky-700"
                    onClick={() => handleUpdateButtonClick(row.original)}
                  >
                    Update
                  </button>
                  <button
                    className="px-3 py-1 rounded-lg bg-sky-500 text-white hover:bg-sky-700"
                    onClick={() => deleteTodo(row.original.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        editedTodo={editedTodo}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
      />
    </div>
  );
};

export default TodoTable;
