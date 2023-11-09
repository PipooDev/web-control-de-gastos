import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDataRelacion } from "../context/DataRelacionProvider.jsx";

function DataRelacion() {
  const { data, loadDataRelacion, deleteDataRelacion, toggleDataDoneRelacion } =
    useDataRelacion();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadDataRelacion();
  }, []);

  const TableRow = ({ data }) => {
    const [isOpen, setIsOpen] = useState("true");

    const handleDone = async () => {
      await toggleDataDoneRelacion(data.id);
    };

    const toggleShowData = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);
    return (
      <>
        <button className="button-td" onClick={toggleShowData}>
          <span
            className="material-symbols-outlined"
            style={{
              transform: `rotate(${isOpen ? 0 : 180}deg)`,
              transition: "all 0.4s",
              color: "#5fa5e7",
              margin: "-15px",
              marginBottom: "-5px",
            }}
          >
            expand_more
          </span>
        </button>
        {!isOpen && (
          <>
            <button
              className="btn-borrar"
              onClick={() => deleteDataRelacion(data.id)}
            >
              Borrar
            </button>
            <br />
            <button
              onClick={() => navigate(`/editRelacion/${data.id}`)}
              className="btn-editar"
            >
              Editar
            </button>
          </>
        )}
        {!isOpen && (
          <tr>
            <th style={{ borderTop: "0.5px solid var(--color-dark)" }}>id</th>
            <th style={{ borderTop: "0.5px solid var(--color-dark)" }}>
              Revisados
            </th>
            <th style={{ borderTop: "0.5px solid var(--color-dark)" }}>
              Id de Componente
            </th>
            <th style={{ borderTop: "0.5px solid var(--color-dark)" }}>TR</th>
          </tr>
        )}
        <tr key={data.id}>
          <td
            style={{
              paddingLeft: "18px",
            }}
          >
            {data.id}
          </td>
          <td>
            <button
              onClick={() => handleDone(data.REVISADO)}
              style={{
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              {data.REVISADO == 1 ? "️✅️" : "❌"}
            </button>
          </td>
          <td>{data.ID_COMPONENTE}</td>
          <td>{data.TR}</td>
        </tr>

        {!isOpen && (
          <>
            <tr>
              <th>Fecha TR</th>
              <th>Razón Social</th>
              <th>RFC</th>
              <th>Folio CFDI/RECIBO</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.FECHA_TR}</td>
              <td className="td-toggle">{data.RAZON_SOCIAL}</td>
              <td className="td-toggle">{data.RFC}</td>
              <td className="td-toggle">{data.FOLIO_CFDI_RECIBO}</td>
            </tr>
            <tr>
              <th>Fecha CFDI/RECIBO</th>
              <th>SUBTOTAL CFDI/RECIBO</th>
              <th>DESCUENTO CFDI/RECIBO</th>
              <th>IVA al 16% CFDI/RECIBO</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.FECHA_CFDI_RECIBO}</td>
              <td className="td-toggle">{data.SUBTOTAL_CFDI_RECIBO}</td>
              <td className="td-toggle">{data.DESCUENTO_CFDI_RECIBO}</td>
              <td className="td-toggle">{data.IVA_16_CFDI_RECIBO}</td>
            </tr>
            <tr>
              <th>IVA Retenido CFDI/RECIBO</th>
              <th>ISR CFDI/RECIBO</th>
              <th>IEPS CFDI/RECIBO</th>
              <th>Total CFDI/RECIBO</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.IVA_RETENIDO_CFDI_RECIBO}</td>
              <td className="td-toggle">{data.ISR_CFDI_RECIBO}</td>
              <td className="td-toggle">{data.IEPS_CFDI_RECIBO}</td>
              <td className="td-toggle">{data.TOTAL_CFDI_RECIBO}</td>
            </tr>
            <tr>
              <th>{"Bancos (Reintegrados) a la Cuenta"}</th>
              <th>Descripción General Partida </th>
              <th>PTDA/PTAL</th>
              <th>Nombre PTDA/PTAL</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.BANCOS_REINTEGRO_A_CUENTA}</td>
              <td className="td-toggle">{data.DESCRIP_GENERAL_PARTIDA}</td>
              <td className="td-toggle">{data.PTDA_PTAL}</td>
              <td className="td-toggle">{data.NOMBRE_PTDA_PTAL}</td>
            </tr>
            <tr>
              <th>SubCTa</th>
              <th>Nombre SubCTa</th>
              <th>Capitulo</th>
              <th>Nombre de Capitulo</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.SUBCTA}</td>
              <td className="td-toggle">{data.NOMBRE_SUBCTA}</td>
              <td className="td-toggle">{data.CAPITULO}</td>
              <td className="td-toggle">{data.NOMBRE_CAPITULO}</td>
            </tr>
          </>
        )}
      </>
    );
  };

  function renderMain() {
    const filteredData = data.filter((data) =>
      data.ID_COMPONENTE.toLowerCase().includes(search.toLowerCase())
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
    <div>
      <main>
        <div>
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
          </form>
          <br />

          <div className="recent-orders">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Revisado</th>
                  <th>ID Componente</th>
                  <th>TR</th>
                </tr>
              </thead>
              <tbody>{renderMain()}</tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DataRelacion;
