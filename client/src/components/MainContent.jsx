import { ResponsivePie } from "@nivo/pie";
import { useData } from "../context/DataProvider.jsx";
import { useDataCatalogo } from "../context/DataCatalogoProvider.jsx";
import { useDataRelacion } from "../context/DataRelacionProvider.jsx";
import { useDataIngresos } from "../context/DataIngresosProvider.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function DataCatalogo() {
  const { data, loadDataCatalogo } = useDataCatalogo();
  useEffect(() => {
    loadDataCatalogo();
  }, []);
  const valueDataCatalgo = data.length;
  return valueDataCatalgo;
}
function DataIngresos() {
  const { data, loadDataIngresos } = useDataIngresos();
  useEffect(() => {
    loadDataIngresos();
  }, []);
  const valueDataIngresos = data.length;
  return valueDataIngresos;
}
function DataRelacion() {
  const { data, loadDataRelacion } = useDataRelacion();
  useEffect(() => {
    loadDataRelacion();
  }, []);
  const valueDataRelacion = data.length;
  return valueDataRelacion;
}

function MainContent() {
  const { data, loadData } = useData();
  useEffect(() => {
    loadData();
  }, []);
  const valueData = data.length;
  const valueDataCatalgo = DataCatalogo();
  const valueDataRelacion = DataRelacion();
  const valueDataIngresos = DataIngresos();
  const dataPie = [
    {
      id: "CatalagoCtasEGR",
      label: "CatalagoCtasEGR",
      value: valueDataCatalgo,
      color: "hsl(86, 70%, 50%)",
    },
    {
      id: "Registro Relacion",
      label: "Registro Relacion",
      value: valueDataRelacion,
      color: "hsl(290, 70%, 50%)",
    },
    {
      id: "Ingreso Datos",
      label: "Ingreso Datos",
      value: valueDataIngresos,
      color: "hsl(191, 70%, 50%)",
    },
  ];

  const MyResponsivePie = ({ dataPie }) => {
    return (
      <ResponsivePie
        data={dataPie}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={2}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "spectral" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor="#f7d060"
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 3]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "Ingreso Datos",
            },
            id: "dots",
          },
          
          {
            match: {
              id: "Registro Relacion",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 150,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    );
  };

  return (
    <main>
      <h1>PLataforma de organización</h1>
      <p>Pulse para ir a las distintas tablas de datos</p>
      <div className="analyse">
        <div className="sales">
          <Link to="/dataCatalogo" className="a">
            <div className="status">
              <div className="info">
                <h1>Catalogo Ctas EGR</h1>
              </div>
              <div className="progresss">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="percentage">
                  <span className="material-symbols-outlined">
                    patient_list
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="visits">
          <Link to="/dataIngresos" className="a">
            <div className="status">
              <div className="info">
                <h1>Ingresos Datos</h1>
              </div>
              <div className="progresss">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="percentage">
                  <span className="material-symbols-outlined">
                    prescriptions
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="searches">
          <Link to="/dataCatalogo" className="a">
            <div className="status">
              <div className="info">
                <h1>
                  Registro Relacion
                  <br /> Gastos
                </h1>
              </div>
              <div className="progresss">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="percentage">
                  <span className="material-symbols-outlined">
                    playlist_add_circle
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="new-users">
        <h2>New Users</h2>
        <div className="user-list">
          {/*<div className="user">
            <img src="https://i.pinimg.com/564x/12/e1/3c/12e13c0e017f796e21b3ce61f2241cdd.jpg" />
            <h2>Catálogo</h2>
            <p>54 Min Ago</p>
          </div>
          <div className="user">
            <img src="https://i.pinimg.com/564x/7d/17/d6/7d17d6e969f62921766c39188904b38c.jpg" />
            <h2>Amir</h2>
            <p>3 Hours Ago</p>
          </div>
          <div className="user">
            <img src="https://i.pinimg.com/564x/6c/02/99/6c02992186ba2747a012535e8e22cea9.jpg" />
            <h2>Ember</h2>
            <p>6 Hours Ago</p>
  </div>*/}
          <div className="user">
            <Link
              to="mailto:hectormancilla369@gmail.com?Subject=Ayuda%20sobre%20Plataforma%20de%20control%20de%20datos"
              className="a user"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "65px" }}
              >
                chat_info
              </span>
              <h2>Contacto</h2>
              <p>
                Reporte de fallos y sugerencias
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ height: 450 }}>
        <MyResponsivePie dataPie={dataPie} />
      </div>
    </main>
  );
}

export default MainContent;
