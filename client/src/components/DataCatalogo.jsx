import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDataCatalogo } from "../context/DataCatalogoProvider.jsx";

function DataCatalogo() {
  const {
    data,
    loadDataCatalogo,
    deleteDataCatalogo,
    toggleDataDoneCatalogo,
    toggleSoliDeEmpleoCatalogo,
    togglePadGobCatalogo,
    toggleAcreConsCat,
    toggleCVCat,
    toggleCedProCat,
    toggleTituloProCat,
    toggleINECat,
    toggleCURP2Cat,
    toggleCompDomCat,
    toggleActNacCat,
    toggleConsSATCat,
    toggleNoInhabCat,
    toggleAntNoPenCat,
    toggleCertMedCat,
    toggleCartaRecCat2,
    toggleCaratBancCat,
    toggleFotInfCat,
    toggleLicConCat,
  } = useDataCatalogo();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadDataCatalogo();
  }, []);

  const TableRow = ({ data }) => {
    const [isOpen, setIsOpen] = useState("true");

    const handleDone = async () => {
      await toggleDataDoneCatalogo(data.id);
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
            <button className="btn-borrar" onClick={() => deleteData(data.id)}>
              Borrar
            </button>
            <br />
            <button
              onClick={() => navigate(`/edit/${data.id}`)}
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
              Beneficiario
            </th>
            <th style={{ borderTop: "0.5px solid var(--color-dark)" }}>
              Tipo de persona
            </th>
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
          <td>{data.BENEFICIARIO}</td>
          <td>{data.TIPO_DE_PERSONA}</td>
        </tr>

        {!isOpen && (
          <>
            <tr>
              <th>RFC</th>
              <th>CURP</th>
              <th>Catalogo de vialidad</th>
              <th>Tipo de Vialidad</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.RFC}</td>
              <td className="td-toggle">{data.CURP}</td>
              <td className="td-toggle">{data.CATALOGO_VIALIDAD}</td>
              <td className="td-toggle">{data.TIPO_DE_VIALIDAD}</td>
            </tr>
            <tr>
              <th>Nombre de vialidad</th>
              <th>Num. de Int. Ext. Mz. Lt.</th>
              <th>Asentamiento</th>
              <th>Nombre del Asentamiento</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.NOMBRE_DE_VIALIDAD}</td>
              <td className="td-toggle">{data.NUMERO_INT_EXT_MZ_LT}</td>
              <td className="td-toggle">{data.ASENTAMIENTO}</td>
              <td className="td-toggle">{data.NOMBRE_DEL_ASENTAMIENTO}</td>
            </tr>
            <tr>
              <th>Entidad Federativa</th>
              <th>Municipio de delegacion</th>
              <th>Codigo postal</th>
              <th>Banco</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.ENTIDAD_FEDERATIVA}</td>
              <td className="td-toggle">{data.MUNICIPIO_DELEGACION}</td>
              <td className="td-toggle">{data.CODIGO_POSTAL}</td>
              <td className="td-toggle">{data.BANCO}</td>
            </tr>
            <tr>
              <th>Cta. Banco</th>
              <th>Clave Interbancaria</th>
              <th>Tipo de Beneficiario</th>
              <th>Num. de contrato</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.CTA_BANCO}</td>
              <td className="td-toggle">{data.CLABE_INTERBANCARIA}</td>
              <td className="td-toggle">{data.TIPO_DE_BENEFICIARIO}</td>
              <td className="td-toggle">{data.NUM_CONTRATO}</td>
            </tr>
            <tr>
              <th>Solicitud de empleo</th>
              <th>Padron gobierno del estado</th>
              <th>CV</th>
              <th>Acreditaciones de constancias</th>
            </tr>
            <tr>
              <td>
                <button
                  onClick={async () => {
                    await toggleSoliDeEmpleoCatalogo(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.SOLICITUD_DE_EMPLEO == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await togglePadGobCatalogo(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.PADRON_GOBIERNO_DEL_ESTADO == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleCVCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.CV == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleAcreConsCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.ACREDITACIONES_CONSTANCIAS == 1 ? "️✅️" : "❌"}
                </button>
              </td>
            </tr>
            <tr>
              <th>Cédula profesional</th>
              <th>Número de cédula profesional</th>
              <th>Título profesional</th>
              <th>INE</th>
            </tr>
            <tr>
              <td>
                <button
                  onClick={async () => {
                    await toggleCedProCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.CEDULA_PROFESIONAL == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>{data.NUMERO_CEDULA_PROFESIONAL}</td>
              <td>
                <button
                  onClick={async () => {
                    await toggleTituloProCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.TITULO_PROFESIONAL == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleINECat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.INE == 1 ? "️✅️" : "❌"}
                </button>
              </td>
            </tr>
            <tr>
              <th>CURP 2</th>
              <th>Acta de nacimiento</th>
              <th>Comprobante de domicilio</th>
              <th>Constancia del SAT</th>
            </tr>
            <tr>
              <td>
                <button
                  onClick={async () => {
                    await toggleCURP2Cat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.CURP2 == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleActNacCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.ACTA_DE_NACIMIENTO == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleCompDomCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.COMPROBANTE_DE_DOMICILIO == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleConsSATCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.CONSTANCIA_DEL_SAT == 1 ? "️✅️" : "❌"}
                </button>
              </td>
            </tr>
            <tr>
              <th>No inhabilitado</th>
              <th>Antecedentes no penales</th>
              <th>Certificado médico</th>
              <th>Carta de recomendación</th>
            </tr>
            <tr>
              <td>
                <button
                  onClick={async () => {
                    await toggleNoInhabCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.NO_INHABILITADO == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleAntNoPenCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.ANTECEDENTES_NO_PENALES == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleCertMedCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.CERTIFICADO_MEDICO == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleCartaRecCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.CARTA_DE_RECOMENDACION == 1 ? "️✅️" : "❌"}
                </button>
              </td>
            </tr>
            <tr>
              <th>Carta de recomendación 2</th>
              <th>Caratula Bancario</th>
              <th>Fotografia tamaño infantil</th>
              <th>Licencia para conducir</th>
            </tr>
            <tr>
              <td>
                <button
                  onClick={async () => {
                    await toggleCartaRecCat2(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.CARTA_DE_RECOMENDACION2 == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleCaratBancCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.CARATULA_BANCARIO == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleFotInfCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.FOTOGRAFIA_TAMAÑO_INFANTIL == 1 ? "️✅️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  onClick={async () => {
                    await toggleLicConCat(data.id);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {data.LICENCIA_PARA_CONDUCIR == 1 ? "️✅️" : "❌"}
                </button>
              </td>
            </tr>
            <tr>
              <th>Padron dobierno del Estado 2</th>
              <th>Acta constitutiva</th>
              <th>Constancia del SAT 2</th>
              <th>Opinión positiva</th>
            </tr>
            <tr>
              <td>{data.PADRON_GOBIERNO_DEL_ESTADO2}</td>
              <td>{data.ACTA_CONSTITUTIVA}</td>
              <td>{data.CONSTANCIA_DEL_SAT2}</td>
              <td>{data.OPINION_POSITIVA}</td>
            </tr>
            <tr>
              <th>Comprobante de domicilio 2</th>
              <th>Semblanza curricular PM</th>
              <th>Caratula Bancario 2</th>
              <th>CV RL</th>
            </tr>
            <tr>
              <td style={{ borderBottom: "0.5px solid var(--color-dark)" }}>{data.COMPROBANTE_DE_DOMICILIO2}</td>
              <td style={{ borderBottom: "0.5px solid var(--color-dark)" }}>{data.SEMBLANZA_CURRICULAR_PM}</td>
              <td style={{ borderBottom: "0.5px solid var(--color-dark)" }}>{data.CARATULA_BANCARIO2}</td>
              <td style={{ borderBottom: "0.5px solid var(--color-dark)" }}>{data.CV_RL}</td>
            </tr>
          </>
        )}
      </>
    );
  };

  function renderMain() {
    const filteredData = data.filter(
      (data) =>
        data.BENEFICIARIO.toLowerCase().includes(search.toLowerCase()) ||
        data.TIPO_DE_PERSONA.toLowerCase().includes(search.toLowerCase()) ||
        data.RFC.toLowerCase().includes(search.toLowerCase()) ||
        data.CURP.toLowerCase().includes(search.toLowerCase()) ||
        data.CATALOGO_VIALIDAD.toLowerCase().includes(search.toLowerCase()) ||
        data.TIPO_DE_VIALIDAD.toLowerCase().includes(search.toLowerCase()) ||
        data.NOMBRE_DE_VIALIDAD.toLowerCase().includes(search.toLowerCase()) ||
        data.NUMERO_INT_EXT_MZ_LT.toLowerCase().includes(
          search.toLowerCase()
        ) ||
        data.ASENTAMIENTO.toLowerCase().includes(search.toLowerCase()) ||
        data.NOMBRE_DEL_ASENTAMIENTO.toLowerCase().includes(
          search.toLowerCase()
        ) ||
        data.ENTIDAD_FEDERATIVA.toLowerCase().includes(search.toLowerCase()) ||
        data.MUNICIPIO_DELEGACION.toLowerCase().includes(
          search.toLowerCase()
        ) ||
        data.CODIGO_POSTAL.toLowerCase().includes(search.toLowerCase()) ||
        data.BANCO.toLowerCase().includes(search.toLowerCase()) ||
        data.CTA_BANCO.toLowerCase().includes(search.toLowerCase()) ||
        data.CLABE_INTERBANCARIA.toLowerCase().includes(search.toLowerCase()) ||
        data.TIPO_DE_BENEFICIARIO.toLowerCase().includes(
          search.toLowerCase()
        ) ||
        data.NUM_CONTRATO.toLowerCase().includes(search.toLowerCase()) ||
        data.NUMERO_CEDULA_PROFESIONAL.toLowerCase().includes(
          search.toLowerCase()
        )
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
                  <th>Beneficiario</th>
                  <th>Tipo de Persona</th>
                </tr>
              </thead>
              <tbody>{renderMain()}</tbody>
            </table>
          </div>
        </div>
        <ul className="accordion">
          <li>
            <input type="checkbox" name="accordion" id="first" />
            <label htmlFor="first">Products</label>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default DataCatalogo;
