import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useDataIngresos } from "../context/DataIngresosProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useDataCatalogo } from "../context/DataCatalogoProvider.jsx";

function IngresosForm() {
  const { createDataIngresos, getDataIngresos, updateDataIngresos } =
    useDataIngresos();
  const [data, setDataIngresos] = useState({
    REVISADO: 0,
    NumProg: 0,
    OFICIO_SOLI_PAGO: "",
    DIA_SOLI_PAGO: "",
    MES_SOLI_PAGO: "",
    BENEFICIARIO: "",
    TIPO_DE_BENEFICIARIO: "",
    RFC: "",
    BANCO: "",
    CTA_BANCO: "",
    CLABE_INTERBANCARIA: "",
    IMPORTE: "",
    IMPORTE_PARA_COMBINAR: "",
    DESCRIP_IMPORTE: "",
    CONCEPTO_PAGO: "",
    ID_COMPONENTE: "",
    NOMBRE_COMPONENTE: "",
    CTA_CONTABLE_PROGRAMA: "",
    NOMBRE_PROGRAMA: "",
    FONDO_DE_INVERSION: "",
    RAMO: "",
    CTA_BANCO_PROGRAMA: "",
    CTA_CLABE_PROGRAMA: "",
    BANCO_AP: "",
    CTA_BANCO_AP: "",
    CLABE_AP: "",
    DIAS_DE_COMISION: "",
    DIAS_INICIO_COMISION: "",
    MES_INICIO_COMISION: "",
    DIA_FIN_COMISION: "",
    MES_FIN_COMISION: "",
    MOTIVO_DE_COMISION: "",
    LUGAR_DE_COMISION: "",
    MEDIO_DE_TRASPORTE: "",
    COMBUSTIBLES: "",
    PEAJES: "",
    PASAJES: "",
    VIATICOS_COMIDA: "",
    HOSPEDAJE: "",
    TOTAL_VIATICOS: "",
    ADSCRIPCION: "",
    NUM_CONTRATO: "",
    MES_DE_PAGO: "",
    PUESTO_DESEMPEÑO: "",
    TIPO_DE_ADJUDICACION: "",
    NUM_OFICIO_INVITACION: "",
    NUM_DE_ADJUDICACION: "",
    NUM_CONTRATO_ADJUDICACION: "",
    OBJETO_CONTRATO: "",
    MONTO_CONTRATO_IVA: "",
    PTDA_PTAL: 0,
    NOMBRE_PTDA_PTAL: "",
    SUBCTA: 0,
    NOMBRE_SUBCTA: "",
    CAPITULO: 0,
    NOMBRE_CAPITULO: "",
    DOC_FISCAL_PAGO: "",
    FOLIO_FISCAL_NUM_FACTURA: "",
    DIA_FACTURA: 0,
    MES_FACTURA: "",
    AÑO_FACTURA: "",
    SUBTOTAL_FACTURA: "",
    IVA_FACTURA: "",
    IVA_COMBINAR_FACTURA: "",
    RET_ISR_FACTURA: "",
    SUBTOTAL_COMBINAR_FACTURA: "",
    IVA_COMBINAR_COMBINAR_FACTURA: "",
    RET_ISR_COMBINAR_FACTURA: "",
    DOC_FISICOS_ANEXADOS: "",
    STATUS_TRANSFERENCIA: "",
    IMPORTE_TR: "",
    NUM_TR: "",
    FECHA_AP_TRANSFERENCIA: "",
    COMPROBADO: "",
    POR_COMPROBAR: "",
    REINTEGRADO: "",
    TOTAL_TR: "",
    STATUS_SOLI_PAGO: "",
    NUM_OFICIO_ENTREGA_COMPROBACION: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadDataIngresos = async () => {
      if (params.NumProg) {
        const data = await getDataIngresos(params.NumProg);
        setDataIngresos({
          NumProg: data.NumProg,
          OFICIO_SOLI_PAGO: data.OFICIO_SOLI_PAGO,
          DIA_SOLI_PAGO: data.DIA_SOLI_PAGO,
          MES_SOLI_PAGO: data.MES_SOLI_PAGO.trim(),
          BENEFICIARIO: data.BENEFICIARIO.trim(),
          TIPO_DE_BENEFICIARIO: data.TIPO_DE_BENEFICIARIO.trim(),
          RFC: data.RFC.trim(),
          BANCO: data.BANCO.trim(),
          CTA_BANCO: data.CTA_BANCO.trim(),
          CLABE_INTERBANCARIA: data.CLABE_INTERBANCARIA.trim(),
          IMPORTE: data.IMPORTE,
          IMPORTE_PARA_COMBINAR: data.IMPORTE_PARA_COMBINAR,
          DESCRIP_IMPORTE: data.DESCRIP_IMPORTE,
          CONCEPTO_PAGO: data.CONCEPTO_PAGO,
          ID_COMPONENTE: data.ID_COMPONENTE,
          NOMBRE_COMPONENTE: data.NOMBRE_COMPONENTE,
          CTA_CONTABLE_PROGRAMA: data.CTA_CONTABLE_PROGRAMA,
          NOMBRE_PROGRAMA: data.NOMBRE_PROGRAMA,
          FONDO_DE_INVERSION: data.FONDO_DE_INVERSION,
          RAMO: data.RAMO,
          CTA_BANCO_PROGRAMA: data.CTA_BANCO_PROGRAMA,
          CTA_CLABE_PROGRAMA: data.CTA_CLABE_PROGRAMA,
          BANCO_AP: data.BANCO_AP,
          LUGAR_DE_COMISION: data.LUGAR_DE_COMISION,
          DIAS_DE_COMISION: data.DIAS_DE_COMISION,
          DIAS_INICIO_COMISION: data.DIAS_INICIO_COMISION,
          MES_INICIO_COMISION: data.MES_INICIO_COMISION,
          DIA_FIN_COMISION: data.DIA_FIN_COMISION,
          MES_FIN_COMISION: data.MES_FIN_COMISION,
          MOTIVO_DE_COMISION: data.MOTIVO_DE_COMISION,
          MEDIO_DE_TRASPORTE: data.MEDIO_DE_TRASPORTE,
          COMBUSTIBLES: data.COMBUSTIBLES,
          PEAJES: data.PEAJES,
          PASAJES: data.PASAJES,
          VIATICOS_COMIDA: data.VIATICOS_COMIDA,
          HOSPEDAJE: data.HOSPEDAJE,
          TOTAL_VIATICOS: data.TOTAL_VIATICOS,
          ADSCRIPCION: data.ADSCRIPCION,
          NUM_CONTRATO: data.NUM_CONTRATO,
          MES_DE_PAGO: data.MES_DE_PAGO,
          PUESTO_DESEMPEÑO: data.PUESTO_DESEMPEÑO,
          TIPO_DE_ADJUDICACION: data.TIPO_DE_ADJUDICACION,
          NUM_OFICIO_INVITACION: data.NUM_OFICIO_INVITACION,
          NUM_DE_ADJUDICACION: data.NUM_DE_ADJUDICACION,
          NUM_CONTRATO_ADJUDICACION: data.NUM_CONTRATO_ADJUDICACION,
          OBJETO_CONTRATO: data.OBJETO_CONTRATO,
          MONTO_CONTRATO_IVA: data.MONTO_CONTRATO_IVA,
          PTDA_PTAL: data.PTDA_PTAL,
          NOMBRE_PTDA_PTAL: data.NOMBRE_PTDA_PTAL,
          SUBCTA: data.SUBCTA,
          NOMBRE_SUBCTA: data.NOMBRE_SUBCTA,
          CAPITULO: data.CAPITULO,
          NOMBRE_CAPITULO: data.NOMBRE_CAPITULO,
          DOC_FISCAL_PAGO: data.DOC_FISCAL_PAGO,
          FOLIO_FISCAL_NUM_FACTURA: data.FOLIO_FISCAL_NUM_FACTURA,
          DIA_FACTURA: data.DIA_FACTURA,
          MES_FACTURA: data.MES_FACTURA,
          AÑO_FACTURA: data.AÑO_FACTURA,
          SUBTOTAL_FACTURA: data.SUBTOTAL_FACTURA,
          SUBTOTAL_COMBINAR_FACTURA: data.SUBTOTAL_COMBINAR_FACTURA,
          IVA_FACTURA: data.IVA_FACTURA,
          IVA_COMBINAR_FACTURA: data.IVA_COMBINAR_FACTURA,
          RET_ISR_FACTURA: data.RET_ISR_FACTURA,
          RET_ISR_COMBINAR_FACTURA: data.RET_ISR_COMBINAR_FACTURA,
          DOC_FISICOS_ANEXADOS: data.DOC_FISICOS_ANEXADOS,
          STATUS_TRANSFERENCIA: data.STATUS_TRANSFERENCIA,
          IMPORTE_TR: data.IMPORTE_TR,
          NUM_TR: data.NUM_TR,
          FECHA_AP_TRANSFERENCIA: data.FECHA_AP_TRANSFERENCIA,
          COMPROBADO: data.COMPROBADO,
          POR_COMPROBAR: data.POR_COMPROBAR,
          REINTEGRADO: data.REINTEGRADO,
          TOTAL_TR: data.TOTAL_TR,
          STATUS_SOLI_PAGO: data.STATUS_SOLI_PAGO,
          NUM_OFICIO_ENTREGA_COMPROBACION: data.NUM_OFICIO_ENTREGA_COMPROBACION,
          REVISADO: data.REVISADO,
        });
      }
    };
    loadDataIngresos();
  }, []);

  function renderTB() {
    const { data, loadDataCatalogo } = useDataCatalogo();
    useEffect(() => {
      loadDataCatalogo();
    }, []);
    const select = document.querySelector("#BENEFICIARIO");
    if (select) {
      const valueSelect = select.options[select.selectedIndex].value;
      const filteredData = data.filter((data) =>
        data.BENEFICIARIO.toLowerCase().includes(valueSelect.toLowerCase())
      );
      if (valueSelect.length > 0) {
        return filteredData.map((data) => (
          <option key={data.id} data={data} value={data.BENEFICIARIO}>
            {data.TIPO_DE_BENEFICIARIO}
          </option>
        ));
      } else {
        return <option key="none" data="" value={""}></option>;
      }
    }
  }
  function renderRFC() {
    const { data, loadDataCatalogo } = useDataCatalogo();
    useEffect(() => {
      loadDataCatalogo();
    }, []);
    const select = document.querySelector("#BENEFICIARIO");
    if (select) {
      const valueSelect = select.options[select.selectedIndex].value;
      const filteredData = data.filter((data) =>
        data.BENEFICIARIO.toLowerCase().includes(valueSelect.toLowerCase())
      );
      if (valueSelect.length > 0) {
        return filteredData.map((data) => (
          <option key={data.id} data={data} value={data.RFC}>
            {data.RFC}
          </option>
        ));
      } else {
        return <option key="none" data="" value={""}></option>;
      }
    }
  }
  function renderBANCO() {
    const { data, loadDataCatalogo } = useDataCatalogo();
    useEffect(() => {
      loadDataCatalogo();
    }, []);
    const select = document.querySelector("#BENEFICIARIO");
    if (select) {
      const valueSelect = select.options[select.selectedIndex].value;
      const filteredData = data.filter((data) =>
        data.BENEFICIARIO.toLowerCase().includes(valueSelect.toLowerCase())
      );
      if (valueSelect.length > 0) {
        return filteredData.map((data) => (
          <option key={data.id} data={data} value={data.BANCO}>
            {data.BANCO}
          </option>
        ));
      } else {
        return <option key="none" data="" value={""}></option>;
      }
    }
  }
  function renderCTA_BANCO() {
    const { data, loadDataCatalogo } = useDataCatalogo();
    useEffect(() => {
      loadDataCatalogo();
    }, []);
    const select = document.querySelector("#BENEFICIARIO");
    if (select) {
      const valueSelect = select.options[select.selectedIndex].value;
      const filteredData = data.filter((data) =>
        data.BENEFICIARIO.toLowerCase().includes(valueSelect.toLowerCase())
      );
      if (valueSelect.length > 0) {
        return filteredData.map((data) => (
          <option key={data.id} data={data} value={data.CTA_BANCO}>
            {data.CTA_BANCO}
          </option>
        ));
      } else {
        return <option key="none" data="" value={""}></option>;
      }
    }
  }
  function renderCI() {
    const { data, loadDataCatalogo } = useDataCatalogo();
    useEffect(() => {
      loadDataCatalogo();
    }, []);
    const select = document.querySelector("#BENEFICIARIO");
    if (select) {
      const valueSelect = select.options[select.selectedIndex].value;
      const filteredData = data.filter((data) =>
        data.BENEFICIARIO.toLowerCase().includes(valueSelect.toLowerCase())
      );
      if (valueSelect.length > 0) {
        return filteredData.map((data) => (
          <option key={data.id} data={data} value={data.CLABE_INTERBANCARIA}>
            {data.CLABE_INTERBANCARIA}
          </option>
        ));
      } else {
        return <option key="none" data=""></option>;
      }
    }
  }
  function renderBeneficiario() {
    const { data, loadDataCatalogo } = useDataCatalogo();
    useEffect(() => {
      loadDataCatalogo();
    }, []);
    return data.map(
      (data) => (
        renderCI.apply,
        (
          <option key={data.id} data={data} value={data.BENEFICIARIO}>
            {data.BENEFICIARIO}
          </option>
        )
      )
    );
  }
  return (
    <main>
      <div className="new-form">
        <div className="form-container">
          <h2>
            {params.NumProg
              ? "Editar registro con id:  " + data.NumProg
              : "Crear registro"}
          </h2>

          <Formik
            initialValues={data}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              if (params.NumProg) {
                await updateDataIngresos(params.NumProg, values);
                navigate("/dataIngresos");
              } else {
                await createDataIngresos(values);
                navigate("/dataIngresos");
              }
              setDataIngresos({
                REVISADO: 0,
                NumProg: 0,
                OFICIO_SOLI_PAGO: "",
                DIA_SOLI_PAGO: "",
                MES_SOLI_PAGO: "",
                BENEFICIARIO: "",
                TIPO_DE_BENEFICIARIO: "",
                RFC: "",
                BANCO: "",
                CTA_BANCO: "",
                CLABE_INTERBANCARIA: "",
                IMPORTE: "",
                IMPORTE_PARA_COMBINAR: "",
                DESCRIP_IMPORTE: "",
                CONCEPTO_PAGO: "",
                ID_COMPONENTE: "",
                NOMBRE_COMPONENTE: "",
                CTA_CONTABLE_PROGRAMA: "",
                NOMBRE_PROGRAMA: "",
                FONDO_DE_INVERSION: "",
                RAMO: "",
                CTA_BANCO_PROGRAMA: "",
                CTA_CLABE_PROGRAMA: "",
                BANCO_AP: "",
                CTA_BANCO_AP: "",
                CLABE_AP: "",
                DIAS_DE_COMISION: "",
                DIAS_INICIO_COMISION: "",
                MES_INICIO_COMISION: "",
                DIA_FIN_COMISION: "",
                MES_FIN_COMISION: "",
                MOTIVO_DE_COMISION: "",
                LUGAR_DE_COMISION: "",
                MEDIO_DE_TRASPORTE: "",
                COMBUSTIBLES: "",
                PEAJES: "",
                PASAJES: "",
                VIATICOS_COMIDA: "",
                HOSPEDAJE: "",
                TOTAL_VIATICOS: "",
                ADSCRIPCION: "",
                NUM_CONTRATO: "",
                MES_DE_PAGO: "",
                PUESTO_DESEMPEÑO: "",
                TIPO_DE_ADJUDICACION: "",
                NUM_OFICIO_INVITACION: "",
                NUM_DE_ADJUDICACION: "",
                NUM_CONTRATO_ADJUDICACION: "",
                OBJETO_CONTRATO: "",
                MONTO_CONTRATO_IVA: "",
                PTDA_PTAL: 0,
                NOMBRE_PTDA_PTAL: "",
                SUBCTA: 0,
                NOMBRE_SUBCTA: "",
                CAPITULO: 0,
                NOMBRE_CAPITULO: "",
                DOC_FISCAL_PAGO: "",
                FOLIO_FISCAL_NUM_FACTURA: "",
                DIA_FACTURA: 0,
                MES_FACTURA: "",
                AÑO_FACTURA: "",
                SUBTOTAL_FACTURA: "",
                IVA_FACTURA: "",
                IVA_COMBINAR_FACTURA: "",
                RET_ISR_FACTURA: "",
                SUBTOTAL_COMBINAR_FACTURA: "",
                IVA_COMBINAR_COMBINAR_FACTURA: "",
                RET_ISR_COMBINAR_FACTURA: "",
                DOC_FISICOS_ANEXADOS: "",
                STATUS_TRANSFERENCIA: "",
                IMPORTE_TR: "",
                NUM_TR: "",
                FECHA_AP_TRANSFERENCIA: "",
                COMPROBADO: "",
                POR_COMPROBAR: "",
                REINTEGRADO: "",
                TOTAL_TR: "",
                STATUS_SOLI_PAGO: "",
                NUM_OFICIO_ENTREGA_COMPROBACION: "",
              });
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div className="column">
                  <div className="input-box">
                    <label>Oficio Solicitud de Pago</label>
                    <input
                      type="text"
                      name="OFICIO_SOLI_PAGO"
                      onChange={handleChange}
                      value={values.OFICIO_SOLI_PAGO}
                    />
                  </div>
                  <div className="input-box">
                    <label>Dia Solicitud de Pago</label>
                    <input
                      type="text"
                      name="DIA_SOLI_PAGO"
                      onChange={handleChange}
                      value={values.DIA_SOLI_PAGO}
                    />
                  </div>

                  <div className="input-box select-box">
                    <label>Mes Solicitud de Pago</label>
                    <select
                      name="MES_SOLI_PAGO"
                      onChange={handleChange}
                      value={values.MES_SOLI_PAGO}
                    >
                      <option></option>
                      <option>Enero</option>
                      <option>Febrero</option>
                      <option>Marzo</option>
                      <option>Abril</option>
                      <option>Mayo</option>
                      <option>Junio</option>
                      <option>Julio</option>
                      <option>Agosto</option>
                      <option>Septiembre</option>
                      <option>Octubre</option>
                      <option>Noviembre</option>
                      <option>Diciembre</option>
                    </select>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box select-box">
                    <label>Beneficiario</label>
                    <select
                      name="BENEFICIARIO"
                      id="BENEFICIARIO"
                      onChange={handleChange}
                      value={values.BENEFICIARIO}
                    >
                      <option key="none" data="" value={""}></option>
                      {renderBeneficiario()}
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Tipo de Beneficiario</label>
                    <select
                      name="TIPO_DE_BENEFICIARIO"
                      id="TIPO_DE_BENEFICIARIO"
                      onChange={handleChange}
                      value={values.TIPO_DE_BENEFICIARIO}
                    >
                      {params.NumProg ? (
                        (
                          <option
                            key="none"
                            data=""
                            value={values.TIPO_DE_BENEFICIARIO}
                          >
                            {values.TIPO_DE_BENEFICIARIO}
                          </option>
                        ) + data.NumProg
                      ) : (
                        <option key="none" data="" value={""}></option>
                      )}
                      {renderTB()}
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>RFC</label>
                    <select
                      name="RFC"
                      id="RFC"
                      onChange={handleChange}
                      value={values.RFC}
                    >
                      {params.NumProg ? (
                        (
                          <option key="none" data="" value={values.RFC}>
                            {values.RFC}
                          </option>
                        ) + data.NumProg
                      ) : (
                        <option key="none" data="" value={""}></option>
                      )}
                      {renderRFC()}
                    </select>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box select-box">
                    <label>Banco a Transferir</label>
                    <select
                      name="BANCO"
                      id="BANCO"
                      onChange={handleChange}
                      value={values.BANCO}
                    >
                      {params.NumProg ? (
                        (
                          <option key="none" data="" value={values.BANCO}>
                            {values.BANCO}
                          </option>
                        ) + data.NumProg
                      ) : (
                        <option key="none" data="" value={""}></option>
                      )}
                      {renderBANCO()}
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Cta. Banco Beneficiario</label>
                    <select
                      name="CTA_BANCO"
                      id="CTA_BANCO"
                      onChange={handleChange}
                      value={values.CTA_BANCO}
                    >
                      {params.NumProg ? (
                        (
                          <option key="none" data="" value={values.CTA_BANCO}>
                            {values.CTA_BANCO}
                          </option>
                        ) + data.NumProg
                      ) : (
                        <option key="none" data="" value={""}></option>
                      )}
                      {renderCTA_BANCO()}
                    </select>
                  </div>
                  <div className="input-box select-box">
                    <label>Cta. Clabe Beneficiario</label>
                    <select
                      name="CLABE_INTERBANCARIA"
                      id="CLABE_INTERBANCARIA"
                      onChange={handleChange}
                      value={values.CLABE_INTERBANCARIA}
                    >
                      {params.NumProg ? (
                        (
                          <option
                            key="none"
                            data=""
                            value={values.CLABE_INTERBANCARIA}
                          >
                            {values.CLABE_INTERBANCARIA}
                          </option>
                        ) + data.NumProg
                      ) : (
                        <option key="none" data="" value={""}></option>
                      )}
                      {renderCI()}
                    </select>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Importe</label>
                    <input
                      type="text"
                      name="IMPORTE"
                      onChange={handleChange}
                      value={values.IMPORTE}
                    />
                  </div>
                  <div className="input-box">
                    <label>Importe para Combinar</label>
                    <input
                      type="text"
                      name="IMPORTE_PARA_COMBINAR"
                      onChange={handleChange}
                      value={values.IMPORTE_PARA_COMBINAR}
                    />
                  </div>
                  <div className="input-box">
                    <label>Descripción Importe</label>
                    <input
                      type="text"
                      name="DESCRIP_IMPORTE"
                      onChange={handleChange}
                      value={values.DESCRIP_IMPORTE}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Concepto de Pago</label>
                    <input
                      type="text"
                      name="CONCEPTO_PAGO"
                      onChange={handleChange}
                      value={values.CONCEPTO_PAGO}
                    />
                  </div>

                  <div className="input-box select-box">
                    <label>ID del Componente</label>
                    <select
                      name="ID_COMPONENTE"
                      onChange={handleChange}
                      value={values.ID_COMPONENTE}
                    >
                      <option></option>;<option>IED-2023-0003-01</option>
                      <option>IED-2023-0003-02</option>
                      <option>IED-2023-0003-03</option>
                      <option>IED-2023-0003-04</option>
                      <option>IED-2023-0003-05</option>
                      <option>IED-2023-0003-06</option>
                      <option>IED-2023-0003-07</option>
                      <option>IED-2023-0003-08</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <label>Nombre del Componente</label>
                    <input
                      type="text"
                      name="NOMBRE_COMPONENTE"
                      onChange={handleChange}
                      value={values.NOMBRE_COMPONENTE}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Cta. Contable Programa</label>
                    <input
                      type="text"
                      name="CTA_CONTABLE_PROGRAMA"
                      onChange={handleChange}
                      value={values.CTA_CONTABLE_PROGRAMA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Nombre del Programa</label>
                    <input
                      type="text"
                      name="NOMBRE_PROGRAMA"
                      onChange={handleChange}
                      value={values.NOMBRE_PROGRAMA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Fondo de Inversión</label>
                    <input
                      type="text"
                      name="FONDO_DE_INVERSION"
                      onChange={handleChange}
                      value={values.FONDO_DE_INVERSION}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Ramo</label>
                    <input
                      type="text"
                      name="RAMO"
                      onChange={handleChange}
                      value={values.RAMO}
                    />
                  </div>
                  <div className="input-box">
                    <label>Cta. Banco del Programa</label>
                    <input
                      type="text"
                      name="CTA_BANCO_PROGRAMA"
                      onChange={handleChange}
                      value={values.CTA_BANCO_PROGRAMA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Cta. clabe del Programa</label>
                    <input
                      type="text"
                      name="CTA_CLABE_PROGRAMA"
                      onChange={handleChange}
                      value={values.CTA_CLABE_PROGRAMA}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Banco</label>
                    <input
                      type="text"
                      name="BANCO_AP"
                      onChange={handleChange}
                      value={values.BANCO_AP}
                    />
                  </div>
                  <div className="input-box">
                    <label>Lugar de Comisión</label>
                    <input
                      type="text"
                      name="LUGAR_DE_COMISION"
                      onChange={handleChange}
                      value={values.LUGAR_DE_COMISION}
                    />
                  </div>
                  <div className="input-box">
                    <label>Días de Comisión</label>
                    <input
                      type="text"
                      name="DIAS_DE_COMISION"
                      onChange={handleChange}
                      value={values.DIAS_DE_COMISION}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Día inicio de Comisión</label>
                    <input
                      type="text"
                      name="DIAS_INICIO_COMISION"
                      onChange={handleChange}
                      value={values.DIAS_INICIO_COMISION}
                    />
                  </div>
                  <div className="input-box">
                    <label>Mes inicio de Comisión</label>
                    <input
                      type="text"
                      name="MES_INICIO_COMISION"
                      onChange={handleChange}
                      value={values.MES_INICIO_COMISION}
                    />
                  </div>
                  <div className="input-box">
                    <label>Día fin de Comisión</label>
                    <input
                      type="text"
                      name="DIA_FIN_COMISION"
                      onChange={handleChange}
                      value={values.DIA_FIN_COMISION}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Mes fin de Comisión</label>
                    <input
                      type="text"
                      name="MES_FIN_COMISION"
                      onChange={handleChange}
                      value={values.MES_FIN_COMISION}
                    />
                  </div>
                  <div className="input-box">
                    <label>Motivo de Comisión</label>
                    <input
                      type="text"
                      name="MOTIVO_DE_COMISION"
                      onChange={handleChange}
                      value={values.MOTIVO_DE_COMISION}
                    />
                  </div>
                  <div className="input-box">
                    <label>Medio de transporte</label>
                    <input
                      type="text"
                      name="MEDIO_DE_TRASPORTE"
                      onChange={handleChange}
                      value={values.MEDIO_DE_TRASPORTE}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Combustibles</label>
                    <input
                      type="text"
                      name="COMBUSTIBLES"
                      onChange={handleChange}
                      value={values.COMBUSTIBLES}
                    />
                  </div>
                  <div className="input-box">
                    <label>PEAJES</label>
                    <input
                      type="text"
                      name="PEAJES"
                      onChange={handleChange}
                      value={values.PEAJES}
                    />
                  </div>
                  <div className="input-box">
                    <label>PASAJES</label>
                    <input
                      type="text"
                      name="PASAJES"
                      onChange={handleChange}
                      value={values.PASAJES}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>{"Viáticos (Comida)"}</label>
                    <input
                      type="text"
                      name="VIATICOS_COMIDA"
                      onChange={handleChange}
                      value={values.VIATICOS_COMIDA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Hospedaje</label>
                    <input
                      type="text"
                      name="HOSPEDAJE"
                      onChange={handleChange}
                      value={values.HOSPEDAJE}
                    />
                  </div>
                  <div className="input-box">
                    <label>Total Viáticos</label>
                    <input
                      type="text"
                      name="TOTAL_VIATICOS"
                      onChange={handleChange}
                      value={values.TOTAL_VIATICOS}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Adscripción</label>
                    <input
                      type="text"
                      name="ADSCRIPCION"
                      onChange={handleChange}
                      value={values.ADSCRIPCION}
                    />
                  </div>
                  <div className="input-box">
                    <label>Num. de Contrato</label>
                    <input
                      type="text"
                      name="NUM_CONTRATO"
                      onChange={handleChange}
                      value={values.NUM_CONTRATO}
                    />
                  </div>
                  <div className="input-box">
                    <label>Mes de Pago</label>
                    <input
                      type="text"
                      name="MES_DE_PAGO"
                      onChange={handleChange}
                      value={values.MES_DE_PAGO}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Puesto Desempeñado</label>
                    <input
                      type="text"
                      name="PUESTO_DESEMPEÑO"
                      onChange={handleChange}
                      value={values.PUESTO_DESEMPEÑO}
                    />
                  </div>
                  <div className="input-box">
                    <label>Tipo de Adjudicación</label>
                    <input
                      type="text"
                      name="TIPO_DE_ADJUDICACION"
                      onChange={handleChange}
                      value={values.TIPO_DE_ADJUDICACION}
                    />
                  </div>
                  <div className="input-box">
                    <label>Num. Oficio de Invitación</label>
                    <input
                      type="text"
                      name="NUM_OFICIO_INVITACION"
                      onChange={handleChange}
                      value={values.NUM_OFICIO_INVITACION}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Num. de Adjudicación</label>
                    <input
                      type="text"
                      name="NUM_DE_ADJUDICACION"
                      onChange={handleChange}
                      value={values.NUM_DE_ADJUDICACION}
                    />
                  </div>
                  <div className="input-box">
                    <label>Num Contrato de Adjudicación</label>
                    <input
                      type="text"
                      name="NUM_CONTRATO_ADJUDICACION"
                      onChange={handleChange}
                      value={values.NUM_CONTRATO_ADJUDICACION}
                    />
                  </div>
                  <div className="input-box">
                    <label>Objeto del Contrato</label>
                    <input
                      type="text"
                      name="OBJETO_CONTRATO"
                      onChange={handleChange}
                      value={values.OBJETO_CONTRATO}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Monto Contrato con IVA</label>
                    <input
                      type="text"
                      name="MONTO_CONTRATO_IVA"
                      onChange={handleChange}
                      value={values.MONTO_CONTRATO_IVA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Ptda-Ptal</label>
                    <input
                      type="text"
                      name="PTDA_PTAL"
                      onChange={handleChange}
                      value={values.PTDA_PTAL}
                    />
                  </div>
                  <div className="input-box">
                    <label>Nombre de Ptda-Ptal</label>
                    <input
                      type="text"
                      name="NOMBRE_PTDA_PTAL"
                      onChange={handleChange}
                      value={values.NOMBRE_PTDA_PTAL}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>SubCTa</label>
                    <input
                      type="text"
                      name="SUBCTA"
                      onChange={handleChange}
                      value={values.SUBCTA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Nombre SubCTa</label>
                    <input
                      type="text"
                      name="NOMBRE_SUBCTA"
                      onChange={handleChange}
                      value={values.NOMBRE_SUBCTA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Capítulo</label>
                    <input
                      type="text"
                      name="CAPITULO"
                      onChange={handleChange}
                      value={values.CAPITULO}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Nombre de Capítulo</label>
                    <input
                      type="text"
                      name="NOMBRE_CAPITULO"
                      onChange={handleChange}
                      value={values.NOMBRE_CAPITULO}
                    />
                  </div>
                  <div className="input-box">
                    <label>Doc. Fiscal de pago</label>
                    <input
                      type="text"
                      name="DOC_FISCAL_PAGO"
                      onChange={handleChange}
                      value={values.DOC_FISCAL_PAGO}
                    />
                  </div>
                  <div className="input-box">
                    <label>Folio Fiscal/Num. Factura </label>
                    <input
                      type="text"
                      name="FOLIO_FISCAL_NUM_FACTURA"
                      onChange={handleChange}
                      value={values.FOLIO_FISCAL_NUM_FACTURA}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Dia Factura</label>
                    <input
                      type="text"
                      name="DIA_FACTURA"
                      onChange={handleChange}
                      value={values.DIA_FACTURA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Mes de Factura</label>
                    <input
                      type="text"
                      name="MES_FACTURA"
                      onChange={handleChange}
                      value={values.MES_FACTURA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Año de Factura</label>
                    <input
                      type="text"
                      name="AÑO_FACTURA"
                      onChange={handleChange}
                      value={values.AÑO_FACTURA}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Subtotal Factura</label>
                    <input
                      type="text"
                      name="SUBTOTAL_FACTURA"
                      onChange={handleChange}
                      value={values.SUBTOTAL_FACTURA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Subtotal Combinar</label>
                    <input
                      type="text"
                      name="SUBTOTAL_COMBINAR_FACTURA"
                      onChange={handleChange}
                      value={values.SUBTOTAL_COMBINAR_FACTURA}
                    />
                  </div>
                  <div className="input-box">
                    <label>IVA Factura</label>
                    <input
                      type="text"
                      name="IVA_FACTURA"
                      onChange={handleChange}
                      value={values.IVA_FACTURA}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>IVA Combinar</label>
                    <input
                      type="text"
                      name="IVA_COMBINAR_FACTURA"
                      onChange={handleChange}
                      value={values.IVA_COMBINAR_FACTURA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Ret ISR</label>
                    <input
                      type="text"
                      name="RET_ISR_FACTURA"
                      onChange={handleChange}
                      value={values.RET_ISR_FACTURA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Ret ISR Combinar</label>
                    <input
                      type="text"
                      name="RET_ISR_COMBINAR_FACTURA"
                      onChange={handleChange}
                      value={values.RET_ISR_COMBINAR_FACTURA}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Doc. Físicos Anexados</label>
                    <input
                      type="text"
                      name="DOC_FISICOS_ANEXADOS"
                      onChange={handleChange}
                      value={values.DOC_FISICOS_ANEXADOS}
                    />
                  </div>
                  <div className="input-box">
                    <label>Status Transferencia</label>
                    <input
                      type="text"
                      name="STATUS_TRANSFERENCIA"
                      onChange={handleChange}
                      value={values.STATUS_TRANSFERENCIA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Importe TR</label>
                    <input
                      type="text"
                      name="IMPORTE_TR"
                      onChange={handleChange}
                      value={values.IMPORTE_TR}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Num. TR</label>
                    <input
                      type="text"
                      name="NUM_TR"
                      onChange={handleChange}
                      value={values.NUM_TR}
                    />
                  </div>
                  <div className="input-box">
                    <label>Fecha Aplicación Transferencia</label>
                    <input
                      type="text"
                      name="FECHA_AP_TRANSFERENCIA"
                      onChange={handleChange}
                      value={values.FECHA_AP_TRANSFERENCIA}
                    />
                  </div>
                  <div className="input-box">
                    <label>Comprobado</label>
                    <input
                      type="text"
                      name="COMPROBADO"
                      onChange={handleChange}
                      value={values.COMPROBADO}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Por Comprobar</label>
                    <input
                      type="text"
                      name="POR_COMPROBAR"
                      onChange={handleChange}
                      value={values.POR_COMPROBAR}
                    />
                  </div>
                  <div className="input-box">
                    <label>Reintegrado</label>
                    <input
                      type="text"
                      name="REINTEGRADO"
                      onChange={handleChange}
                      value={values.REINTEGRADO}
                    />
                  </div>
                  <div className="input-box">
                    <label>Total TR</label>
                    <input
                      type="text"
                      name="TOTAL_TR"
                      onChange={handleChange}
                      value={values.TOTAL_TR}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Status Solicitud de Pago</label>
                    <input
                      type="text"
                      name="STATUS_SOLI_PAGO"
                      onChange={handleChange}
                      value={values.STATUS_SOLI_PAGO}
                    />
                  </div>
                  <div className="input-box">
                    <label>Num Oficio entrega de Comprobación</label>
                    <input
                      type="text"
                      name="NUM_OFICIO_ENTREGA_COMPROBACION"
                      onChange={handleChange}
                      value={values.NUM_OFICIO_ENTREGA_COMPROBACION}
                    />
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
}

export default IngresosForm;
