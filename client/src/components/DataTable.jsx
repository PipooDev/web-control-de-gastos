import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useData } from "../context/DataProvider.jsx";

function DataTable() {
  const { data, loadData, deleteData, toggleDataDone } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const TableRow = ({ data }) => {
    const handleDone = async () => {
      await toggleDataDone(data.id);
    };

    return (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.description}</td>
        <td>
          <button onClick={() => handleDone(data.done)}>
            {data.done == 1 ? "️✅️" : "❌"}
          </button>
        </td>
        <td>
          <button onClick={() => deleteData(data.id)} className="borrar">Delete</button>
          <button onClick={() => navigate(`/edit/${data.id}`)} className="editar">Edit</button>
        </td>
      </tr>
    );
  };

  function renderMain() {
    return data.map((data) => <TableRow key={data.id} data={data} />);
  }

  if (data.length === 0)
    return (
      <main>
        <h1>No hay datos registrados</h1>
      </main>
    );

  return (
    <main>
      <div className="recent-orders">
        <h2>Recent Orders</h2>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Done</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>{renderMain()}</tbody>
        </table>
      </div>
    </main>
  );
}

export default DataTable;
