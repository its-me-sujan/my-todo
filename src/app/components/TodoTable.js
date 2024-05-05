import { useTable } from "react-table";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import db from "../../utils/firebase";
import { useState } from "react";

const TodoTable = ({ columns, data, onDeleteTodo, onUpdateTodo }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const updateTodo = async (todoId) => {
    try {
      const todoDocRef = doc(db, "todos", todoId);
      await updateDoc(todoDocRef, editedData);
      console.log("Todo updated in Firebase successfully");
      setEditingId(null);
      setEditedData({});
      onUpdateTodo(todoId, editedData);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      const todoDocRef = doc(db, "todos", todoId);
      await deleteDoc(todoDocRef);
      console.log("Todo deleted successfully from Firestore");
      onDeleteTodo(todoId);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  const handleCellClick = (cell) => {
    setEditingId(cell.row.id);
    setEditedData({ ...editedData, [cell.column.id]: cell.value });
  };

  const handleInputChange = (e, cell) => {
    const { value } = e.target;
    setEditedData({ ...editedData, [cell.column.id]: value });
  };

  return (
    <div>
      <table
        {...getTableProps()}
        className="w-full sm:w-24 border border-black rounded-lg "
      >
        <thead className="text-left bg-gray-500">
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
                    onClick={() => handleCellClick(cell)}
                  >
                    {editingId === row.id && cell.column.id in editedData ? (
                      <input
                        type="text"
                        id={cell.column.id}
                        value={editedData[cell.column.id]}
                        onChange={(e) => handleInputChange(e, cell)}
                      />
                    ) : (
                      cell.render("Cell")
                    )}
                  </td>
                ))}
                <td className="p-2  border-black sm:flex">
                  <button
                    className="border border-black px-3 py-1 mr-3 hover:bg-slate-400"
                    onClick={() => updateTodo(row.original.id)}
                  >
                    Update
                  </button>
                  <button
                    className="border border-black px-3 py-1 hover:bg-slate-400"
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
    </div>
  );
};

export default TodoTable;
