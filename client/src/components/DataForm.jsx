import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useData } from "../context/DataProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";

function DataForm() {
  const { createData, getData, updateData } = useData();
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      if (params.id) {
        const data = await getData(params.id);
        setData({
          title: data.title,
          description: data.description,
        });
      }
    };
    loadData();
  }, []);

  return (
    <main>
      <div className="new-form">
        <div className="form-container">
          <h2>{params.id ? "Editar Notas/Recordatorios" : "Agregar Notas/Recordatorios"}</h2>

          <Formik
            initialValues={data}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              console.log(values);

              if (params.id) {
                await updateData(params.id, values);
                navigate("/");
              } else {
                await createData(values);
                navigate("/");
              }
              setData({
                title: "",
                description: "",
              });
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div className="input-box">
                  <label>Titulo</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="escribe un titulo"
                    onChange={handleChange}
                    value={values.title}
                  />
                </div>
                <div className="input-box">
                  <label>Descripción</label>
                  <input
                    name="description"
                    rows="3"
                    placeholder="escribe un descripción"
                    onChange={handleChange}
                    value={values.description}
                  />
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/*<div className="new-form">
        <div className="form-container">
          <h2>New Form</h2>
          <form action="#">
            <div className="input-box">
              <label>Nombre completo</label>
              <input type="text" placeholder="Nombre completo" />
            </div>
            <div className="input-box">
              <label>Nombre completo</label>
              <input type="date" placeholder="Nombre completo" />
            </div>

            <div className="column">
              <div className="input-box">
                <label>Nombre completo</label>
                <input type="text" placeholder="Nombre completo" />
              </div>
              <div className="input-box">
                <label>Nombre completo</label>
                <input type="text" placeholder="Nombre completo" />
              </div>
            </div>

            <div className="gender-box">
              <h3>Gender</h3>
              <div className="gender-option">
                <div className="gender">
                  <input type="radio" id="check-male" name="gender" />
                  <label for="check-male">Male</label>
                </div>
                <div className="gender">
                  <input type="radio" id="check-female" name="gender" />
                  <label for="check-female">Female</label>
                </div>
                <div className="gender">
                  <input type="radio" id="check-other" name="gender" />
                  <label for="check-other">other</label>
                </div>
              </div>
            </div>

            <div className="input-box">
              <label>Nombre completo</label>
              <input type="text" placeholder="Nombre completo" />
            </div>
            <div className="select-box">
              <select>
                <option>Country</option>
                <option>dsf</option>
                <option>Cousdfsdntry</option>
                <option>Countrysss</option>
              </select>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>*/}
    </main>
  );
}

export default DataForm;
