import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useDataRelacion } from "../context/DataRelacionProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";

function RelacionForm() {
  const { createDataRelacion, getDataRelacion, updateDataRelacion } = useDataRelacion();
  const [data, setDataRelacion] = useState({
    ID_COMPONENTE: "",
    TR: "",
    FECHA_TR: "",
    RAZON_SOCIAL: "",
    RFC: "",
    FOLIO_CFDI_RECIBO: "",
    FECHA_CFDI_RECIBO: "",
    SUBTOTAL_CFDI_RECIBO: "",
    DESCUENTO_CFDI_RECIBO: "",
    IVA_16_CFDI_RECIBO: "",
    IVA_RETENIDO_CFDI_RECIBO: "",
    ISR_CFDI_RECIBO: "",
    IEPS_CFDI_RECIBO: "",
    TOTAL_CFDI_RECIBO: "",
    BANCOS_REINTEGRADOS_A_CUENTA: "",
    DESCRIP_GENERAL_PARTIDA: "",
    PTDA_PTAL: "",
    NOMBRE_PTDA_PTAL: "",
    SUBCTA: "",
    NOMBRE_SUBCTA: "",
    CAPITULO: "",
    NOMBRE_CAPITULO: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);

  useEffect(() => {
    const loadDataRelacion = async () => {
      if (params.id) {
        const data = await getDataRelacion(params.id);
        console.log(params.id);
        setDataRelacion({
          id: data.id,
          ID_COMPONENTE: data.ID_COMPONENTE,
          TR: data.TR,
          FECHA_TR: data.FECHA_TR,
          RAZON_SOCIAL: data.RAZON_SOCIAL,
          RFC: data.RFC,
          FOLIO_CFDI_RECIBO: data.FOLIO_CFDI_RECIBO,
          FECHA_CFDI_RECIBO: data.FECHA_CFDI_RECIBO,
          SUBTOTAL_CFDI_RECIBO: data.SUBTOTAL_CFDI_RECIBO,
          DESCUENTO_CFDI_RECIBO: data.DESCUENTO_CFDI_RECIBO,
          IVA_16_CFDI_RECIBO: data.IVA_16_CFDI_RECIBO,
          IVA_RETENIDO_CFDI_RECIBO: data.IVA_RETENIDO_CFDI_RECIBO,
          ISR_CFDI_RECIBO: data.ISR_CFDI_RECIBO,
          IEPS_CFDI_RECIBO: data.IEPS_CFDI_RECIBO,
          TOTAL_CFDI_RECIBO: data.TOTAL_CFDI_RECIBO,
          BANCOS_REINTEGRADOS_A_CUENTA: data.BANCOS_REINTEGRADOS_A_CUENTA,
          DESCRIP_GENERAL_PARTIDA: data.DESCRIP_GENERAL_PARTIDA,
          PTDA_PTAL: data.PTDA_PTAL,
          NOMBRE_PTDA_PTAL: data.NOMBRE_PTDA_PTAL,
          SUBCTA: data.SUBCTA,
          NOMBRE_SUBCTA: data.NOMBRE_SUBCTA,
          CAPITULO: data.CAPITULO,
          NOMBRE_CAPITULO: data.NOMBRE_CAPITULO,
        });
      }
    };
    loadDataRelacion();
  }, []);

  return (
    <main>
      <div className="new-form">
        <div className="form-container">
          <h2>
            {params.id
              ? "Editar registro con id:  " + data.id
              : "Crear registro"}
          </h2>

          <Formik
            initialValues={data}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              if (params.id) {
                await updateDataRelacion(params.id, values);
                navigate("/dataRelacion");
              } else {
                await createDataRelacion(values);
                navigate("/dataRelacion");
              }
              setDataRelacion({
                ID_COMPONENTE: "",
                TR: "",
                FECHA_TR: "",
                RAZON_SOCIAL: "",
                RFC: "",
                FOLIO_CFDI_RECIBO: "",
                FECHA_CFDI_RECIBO: "",
                SUBTOTAL_CFDI_RECIBO: "",
                DESCUENTO_CFDI_RECIBO: "",
                IVA_16_CFDI_RECIBO: "",
                IVA_RETENIDO_CFDI_RECIBO: "",
                ISR_CFDI_RECIBO: "",
                IEPS_CFDI_RECIBO: "",
                TOTAL_CFDI_RECIBO: "",
                BANCOS_REINTEGRADOS_A_CUENTA: "",
                DESCRIP_GENERAL_PARTIDA: "",
                PTDA_PTAL: "",
                NOMBRE_PTDA_PTAL: "",
                SUBCTA: "",
                NOMBRE_SUBCTA: "",
                CAPITULO: "",
                NOMBRE_CAPITULO: "",
              });
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div className="column">
                  <div className="input-box">
                    <label>ID Componente</label>
                    <input
                      type="text"
                      name="ID_COMPONENTE"
                      onChange={handleChange}
                      value={values.ID_COMPONENTE}
                    />
                  </div>

                  <div className="input-box">
                    <label>TR</label>
                    <input
                      type="text"
                      name="TR"
                      onChange={handleChange}
                      value={values.TR}
                    />
                  </div>

                  <div className="input-box">
                    <label>Fecha TR</label>
                    <input
                      type="text"
                      name="FECHA_TR"
                      onChange={handleChange}
                      value={values.FECHA_TR}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Razón Social</label>
                    <input
                      type="text"
                      name="RAZON_SOCIAL"
                      onChange={handleChange}
                      value={values.RAZON_SOCIAL}
                    />
                  </div>

                  <div className="input-box">
                    <label>RFC</label>
                    <input
                      type="text"
                      name="RFC"
                      onChange={handleChange}
                      value={values.RFC}
                    />
                  </div>

                  <div className="input-box">
                    <label>Folio CFDI/Recibo</label>
                    <input
                      type="text"
                      name="FOLIO_CFDI_RECIBO"
                      onChange={handleChange}
                      value={values.FOLIO_CFDI_RECIBO}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Fecha CFDI/Recibo</label>
                    <input
                      type="text"
                      name="FECHA_CFDI_RECIBO"
                      onChange={handleChange}
                      value={values.FECHA_CFDI_RECIBO}
                    />
                  </div>

                  <div className="input-box">
                    <label>Subtotal CFDI/Recibo</label>
                    <input
                      type="text"
                      name="SUBTOTAL_CFDI_RECIBO"
                      onChange={handleChange}
                      value={values.SUBTOTAL_CFDI_RECIBO}
                    />
                  </div>

                  <div className="input-box">
                    <label>Descuento CFDI/Recibo</label>
                    <input
                      type="text"
                      name="DESCUENTO_CFDI_RECIBO"
                      onChange={handleChange}
                      value={values.DESCUENTO_CFDI_RECIBO}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>IVA 16% CFDI/Recibo</label>
                    <input
                      type="text"
                      name="IVA_16_CFDI_RECIBO"
                      onChange={handleChange}
                      value={values.IVA_16_CFDI_RECIBO}
                    />
                  </div>

                  <div className="input-box">
                    <label>IVA Retenido CFDI/Recibo</label>
                    <input
                      type="text"
                      name="IVA_RETENIDO_CFDI_RECIBO"
                      onChange={handleChange}
                      value={values.IVA_RETENIDO_CFDI_RECIBO}
                    />
                  </div>

                  <div className="input-box">
                    <label>ISR CFDI/Recibo</label>
                    <input
                      type="text"
                      name="ISR_CFDI_RECIBO"
                      onChange={handleChange}
                      value={values.ISR_CFDI_RECIBO}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>IEPS CFDI/Recibo</label>
                    <input
                      type="text"
                      name="IEPS_CFDI_RECIBO"
                      onChange={handleChange}
                      value={values.IEPS_CFDI_RECIBO}
                    />
                  </div>

                  <div className="input-box">
                    <label>Total CFDI/Recibo</label>
                    <input
                      type="text"
                      name="TOTAL_CFDI_RECIBO"
                      onChange={handleChange}
                      value={values.TOTAL_CFDI_RECIBO}
                    />
                  </div>

                  <div className="input-box">
                    <label>{"Bancos (Reintegrados) a la cuenta"}</label>
                    <input
                      type="text"
                      name="BANCOS_REINTEGRADOS_A_CUENTA"
                      onChange={handleChange}
                      value={values.BANCOS_REINTEGRADOS_A_CUENTA}
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Descripción General Partida</label>
                    <input
                      type="text"
                      name="DESCRIP_GENERAL_PARTIDA"
                      onChange={handleChange}
                      value={values.DESCRIP_GENERAL_PARTIDA}
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
                    <label>Nombre Ptda-Ptal</label>
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
                    <label>Capitulo</label>
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
                    <label>Nombre Capitulo</label>
                    <input
                      type="text"
                      name="NOMBRE_CAPITULO"
                      onChange={handleChange}
                      value={values.NOMBRE_CAPITULO}
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

export default RelacionForm;
