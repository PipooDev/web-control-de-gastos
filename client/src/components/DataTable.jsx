import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useData } from "../context/DataProvider.jsx";

function DataTable() {
  const { data, loadData, deleteData, toggleDataDone } = useData();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadData();
    console.log(loadData);
    console.log(data);
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
          <button onClick={() => deleteData(data.id)} className="borrar">
            Delete
          </button>
          <button
            onClick={() => navigate(`/edit/${data.id}`)}
            className="editar"
          >
            Edit
          </button>
        </td>
      </tr>
    );
  };

  function renderMain() {
    const filteredData = data.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );

    return filteredData.map((data) => <TableRow key={data.id} data={data} />);
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

        <form>
          <div className="input-box">
            <label>Buscar registro</label>
            <input
              type="text"
              placeholder="escribe alguna palabra clave"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form><br />

        <table className="table">
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
