import { useTable } from "react-table";

const TodoTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <div>
      <table
        {...getTableProps()}
        className="w-full sm:w-24 border border-black rounded-lg"
      >
        <thead className="text-left">
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
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
                <td >
                  <button onClick={() => alert(`update ${row.original}`)}>
                    Update
                  </button>
                </td>
                <td>
                  <button onClick={() => alert(`delete ${row.original}`)}>Delete</button>
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
