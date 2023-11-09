import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDataIngresos } from "../context/DataIngresosProvider.jsx";

function DataIngresos() {
  const {
    data,
    loadDataIngresos,
    deleteDataIngresos,
    toggleDataDoneIngresos,
  } = useDataIngresos();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadDataIngresos();
  }, []);

  const TableRow = ({ data }) => {
    const [isOpen, setIsOpen] = useState("true");

    const handleDone = async () => {
      await toggleDataDoneIngresos(data.NumProg);
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
            <button className="btn-borrar" onClick={() => deleteDataIngresos(data.NumProg)}>
              Borrar
            </button>
            <br />
            <button
              onClick={() => navigate(`/editIngresos/${data.NumProg}`)}
              className="btn-editar"
            >
              Editar
            </button>
          </>
        )}
        {!isOpen && (
          <tr>
            <th style={{ borderTop: "0.5px solid var(--color-dark)" }}>No. Prog.</th>
            <th style={{ borderTop: "0.5px solid var(--color-dark)" }}>
              Revisados
            </th>
            <th style={{ borderTop: "0.5px solid var(--color-dark)" }}>
              Beneficiario
            </th>
            <th style={{ borderTop: "0.5px solid var(--color-dark)" }}>
              Oficio Solicitud Pago
            </th>
          </tr>
        )}
        <tr key={data.NumProg}>
          <td
            style={{
              paddingLeft: "18px",
            }}
          >
            {data.NumProg}
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
          <td>{data.OFICIO_SOLI_PAGO}</td>
        </tr>

        {!isOpen && (
          <>
            <tr>
              <th>Día soli. Pago</th>
              <th>Mes solicitud de pago</th>
              <th>Tipo de Beneficiario</th>
              <th>RFC</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.DIA_SOLI_PAGO}</td>
              <td className="td-toggle">{data.MES_SOLI_PAGO}</td>
              <td className="td-toggle">{data.TIPO_DE_BENEFICIARIO}</td>
              <td className="td-toggle">{data.RFC}</td>
            </tr>
            <tr>
              <th>Banco a transferir</th>
              <th>Cta. Banco Beneficiario</th>
              <th>Cta. Clabe Beneficiario</th>
              <th>Importe</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.BANCO}</td>
              <td className="td-toggle">{data.CTA_BANCO}</td>
              <td className="td-toggle">{data.CLABE_INTERBANCARIA}</td>
              <td className="td-toggle">{data.IMPORTE}</td>
            </tr>
            <tr>
              <th>Importe para combinar</th>
              <th>Descripción Importe</th>
              <th>Concepto de Pago</th>
              <th>ID Componente</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.IMPORTE_PARA_COMBINAR}</td>
              <td className="td-toggle">{data.DESCRIP_IMPORTE}</td>
              <td className="td-toggle">{data.CONCEPTO_PAGO}</td>
              <td className="td-toggle">{data.ID_COMPONENTE}</td>
            </tr>
            <tr>
              <th>Nombre de Componente</th>
              <th>Cta. Contable Programa</th>
              <th>Nombre del Programa</th>
              <th>Fondo de inversión</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.NOMBRE_COMPONENTE}</td>
              <td className="td-toggle">{data.CTA_CONTABLE_PROGRAMA}</td>
              <td className="td-toggle">{data.NOMBRE_PROGRAMA}</td>
              <td className="td-toggle">{data.FONDO_DE_INVERSION}</td>
            </tr>
            <tr>
              <th>Ramo</th>
              <th>Cta. Banco Programa</th>
              <th>Cta. Clabe Programa</th>
              <th>Banco</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.RAMO}</td>
              <td className="td-toggle">{data.CTA_BANCO_PROGRAMA}</td>
              <td className="td-toggle">{data.CTA_CLABE_PROGRAMA}</td>
              <td className="td-toggle">{data.BANCO_AP}</td>
            </tr>
            <tr>
              <th>Lugar de Comisión</th>
              <th>Dias de Comisión</th>
              <th>Dia, inicio de de Comisión</th>
              <th>Mes, inicio de de Comisión</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.LUGAR_DE_COMISION}</td>
              <td className="td-toggle">{data.DIAS_DE_COMISION}</td>
              <td className="td-toggle">{data.DIAS_INICIO_COMISION}</td>
              <td className="td-toggle">{data.MES_INICIO_COMISION}</td>
            </tr>
            <tr>
              <th>Día fin de Comisión</th>
              <th>Mes fin de Comisión</th>
              <th>Motivo de la Comisión</th>
              <th>Medio de transporte</th>
            </tr>
             <tr>
              <td className="td-toggle">{data.DIA_FIN_COMISION}</td>
              <td className="td-toggle">{data.MES_FIN_COMISION}</td>
              <td className="td-toggle">{data.MOTIVO_DE_COMISION}</td>
              <td className="td-toggle">{data.MEDIO_DE_TRASPORTE}</td>
            </tr>
            <tr>
              <th>Combustibles</th>
              <th>Peajes</th>
              <th>Pasajes</th>
              <th>{"Viáticos(Alimentos)"}</th>
            </tr>
             <tr>
              <td className="td-toggle">{data.COMBUSTIBLES}</td>
              <td className="td-toggle">{data.PEAJES}</td>
              <td className="td-toggle">{data.PASAJES}</td>
              <td className="td-toggle">{data.VIATICOS_COMIDA}</td>
            </tr>
            <tr>
              <th>Hospedaje</th>
              <th>Total Viáticos</th>
              <th>Adscripción de</th>
              <th>No. Contrato</th>
            </tr>
            <tr>
              <td className="td-toggle">{data.HOSPEDAJE}</td>
              <td className="td-toggle">{data.TOTAL_VIATICOS}</td>
              <td className="td-toggle">{data.ADSCRIPCION}</td>
              <td className="td-toggle">{data.NUM_CONTRATO}</td>
            </tr>
            <tr>
              <th>Mes de pago</th>
              <th>Puesto desempeñado</th>
              <th>Tipo de Adjudicación</th>
              <th>No. Oficio de Invitación</th>
            </tr>
            <tr>
              <td>{data.MES_DE_PAGO}</td>
              <td>{data.PUESTO_DESEMPEÑO}</td>
              <td>{data.TIPO_DE_ADJUDICACION}</td>
              <td>{data.NUM_OFICIO_INVITACION}</td>
            </tr>
            <tr>
              <th>No. de Adjudicación</th>
              <th>No. de contrato Adjudicación</th>
              <th>Objeto del Contrato</th>
              <th>Monto Contrato con IVA</th>
            </tr>
             <tr>
              <td className="td-toggle">{data.NUM_DE_ADJUDICACION}</td>
              <td className="td-toggle">{data.NUM_CONTRATO_ADJUDICACION}</td>
              <td className="td-toggle">{data.OBJETO_CONTRATO}</td>
              <td className="td-toggle">{data.MONTO_CONTRATO_IVA}</td>
            </tr>
            <tr>
              <th>Ptda-Ptal</th>
              <th>Nombre Ptda_Ptal</th>
              <th>SubCTa</th>
              <th>Nombrer SubCTa</th>
            </tr>
             <tr>
              <td className="td-toggle">{data.PTDA_PTAL}</td>
              <td className="td-toggle">{data.NOMBRE_PTDA_PTAL}</td>
              <td className="td-toggle">{data.SUBCTA}</td>
              <td className="td-toggle">{data.NOMBRE_SUBCTA}</td>
            </tr>
            <tr>
              <th>Capitulo</th>
              <th>Nombre Capitulo</th>
              <th>Documento Fiscal para pago</th>
              <th>Folio Fiscal/No. Factura</th>
            </tr>
             <tr>
              <td className="td-toggle">{data.CAPITULO}</td>
              <td className="td-toggle">{data.NOMBRE_CAPITULO}</td>
              <td className="td-toggle">{data.DOC_FISCAL_PAGO}</td>
              <td className="td-toggle">{data.FOLIO_FISCAL_NUM_FACTURA}</td>
            </tr>
            <tr>
              <th>Dia Factura</th>
              <th>Mes Factura</th>
              <th>Año Factura</th>
              <th>Subtotal</th>
            </tr>
             <tr>
              <td className="td-toggle">{data.DIA_FACTURA}</td>
              <td className="td-toggle">{data.MES_FACTURA}</td>
              <td className="td-toggle">{data.AÑO_FACTURA}</td>
              <td className="td-toggle">{data.SUBTOTAL_FACTURA}</td>
            </tr>
            <tr>
              <th>Subtotal Combinar</th>
              <th>IVA</th>
              <th>IVA Combinar</th>
              <th>Ret ISR</th>
            </tr>
             <tr>
              <td className="td-toggle">{data.SUBTOTAL_COMBINAR_FACTURA}</td>
              <td className="td-toggle">{data.IVA_FACTURA}</td>
              <td className="td-toggle">{data.IVA_COMBINAR_FACTURA}</td>
              <td className="td-toggle">{data.RET_ISR_FACTURA}</td>
            </tr>
            <tr>
              <th>Ret ISR Combinar</th>
              <th>Documentos físicos Anexados</th>
              <th>Status Transferencia</th>
              <th>Importe TR</th>
            </tr>
             <tr>
              <td className="td-toggle">{data.RET_ISR_COMBINAR_FACTURA}</td>
              <td className="td-toggle">{data.DOC_FISICOS_ANEXADOS}</td>
              <td className="td-toggle">{data.STATUS_TRANSFERENCIA}</td>
              <td className="td-toggle">{data.IMPORTE_TR}</td>
            </tr>
            <tr>
              <th>No. tr</th>
              <th>Fecha Aplicación Transferencia</th>
              <th>Comprobado</th>
              <th>Por Comprobar</th>
            </tr>
             <tr>
              <td className="td-toggle">{data.NUM_TR}</td>
              <td className="td-toggle">{data.FECHA_AP_TRANSFERENCIA}</td>
              <td className="td-toggle">{data.COMPROBADO}</td>
              <td className="td-toggle">{data.POR_COMPROBAR}</td>
            </tr>
            <tr>
              <th>Reintegrado</th>
              <th>Total TR</th>
              <th>Status Solicitud de pago</th>
              <th>No. Oficio entrega de Comprobación</th>
            </tr>
            
            <tr>
              <td style={{ borderBottom: "0.5px solid var(--color-dark)" }}>{data.REINTEGRADO}</td>
              <td style={{ borderBottom: "0.5px solid var(--color-dark)" }}>{data.TOTAL_TR}</td>
              <td style={{ borderBottom: "0.5px solid var(--color-dark)" }}>{data.STATUS_SOLI_PAGO}</td>
              <td style={{ borderBottom: "0.5px solid var(--color-dark)" }}>{data.NUM_OFICIO_ENTREGA_COMPROBACION}</td>
            </tr>
          </>
        )}
      </>
    );
  };

  function renderMain() {
    const filteredData = data.filter(
      (data) =>
        data.BENEFICIARIO.toLowerCase().includes(search.toLowerCase())||
        data.OFICIO_SOLI_PAGO.toLowerCase().includes(search.toLowerCase())||
        data.MES_SOLI_PAGO.toLowerCase().includes(search.toLowerCase())||
        data.DIA_SOLI_PAGO.toLowerCase().includes(search.toLowerCase())
    );

    return filteredData.map((data) => <TableRow key={data.NumProg} data={data} />);
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
                  <th>Num. Prog.</th>
                  <th>Revisado</th>
                  <th>Beneficiario</th>
                  <th>Oficio Solicitud de pago</th>
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

export default DataIngresos;
