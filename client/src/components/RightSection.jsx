import { useData } from "../context/DataProvider.jsx";
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo2.jpg';
import iconF from '../assets/iconFactura.png';

function RightSection() {
  const { darkMode, data, loadData, deleteData, toggleDataDone } = useData();

  const navigate = useNavigate();

  useEffect(() => {
    // Cargar el estado desde localStorage
    const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";

    // Si el estado no existe, establecerlo en false
    if (!isDarkModeEnabled) {
      localStorage.setItem("darkMode", "false");
    }

    if (isDarkModeEnabled) {
      document.body.classList.add("dark-mode-variables");
      document
        .querySelector(".dark-mode")
        .querySelector("span:nth-child(1)")
        .classList.remove("active");
      document
        .querySelector(".dark-mode")
        .querySelector("span:nth-child(2)")
        .classList.add("active");
    } else {
      document.body.classList.remove("dark-mode-variables");
      document
        .querySelector(".dark-mode")
        .querySelector("span:nth-child(1)")
        .classList.add("active");
      document
        .querySelector(".dark-mode")
        .querySelector("span:nth-child(2)")
        .classList.remove("active");
    }

    loadData();
  }, []);

  const TableRow = ({ data }) => {
    const [isOpen, setIsOpen] = useState("true");
    const toggleShowData = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);
    const handleDone = async () => {
      await toggleDataDone(data.id);
    };
    const date = new Date(data.createAt);
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];
    return (
      <div
        className={`${
          data.done == 1 ? "notification" : "notification deactive"
        }`}
      >
        <div className="icon" onClick={() => handleDone(data.done)}>
          <span className="material-icons-sharp">{`${
            data.done == 1 ? "check_box" : "check_box_outline_blank"
          }`}</span>
        </div>
        <div className="content">
          <div className="info">
            <h3>{data.title}</h3>
            <p>{data.description}</p>

            <small className="text_muted">
              {month + "/" + day + "/" + year}
            </small>
          </div>
          <span className="material-icons-sharp" onClick={toggleShowData}>
            more_vert
          </span>
          {!isOpen && (
            <>
              <button
                className="btn-borrar-notas"
                onClick={() => deleteData(data.id)}
              >
                <span class="material-symbols-outlined">delete</span>
              </button>
              <br />
              <button
                onClick={() => navigate(`/edit/${data.id}`)}
                className="btn-editar-notas"
              >
                <span class="material-symbols-outlined">edit</span>
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  function renderMain() {
    return data.map((data) => <TableRow key={data.id} data={data} />);
  }

  const handleOpenClose = () => {
    document.querySelector("aside").style.display = "block";
  };

  const handleDarkModeClick = () => {
    darkMode();
  };

  return (
    <div className="right-section">
      <div className="nav">
        <button id="menu-btn">
          <span className="material-icons-sharp" onClick={handleOpenClose}>
            menu
          </span>
        </button>
        <div className="dark-mode" onClick={handleDarkModeClick}>
          <span className="material-icons-sharp active">light_mode</span>
          <span className="material-icons-sharp">dark_mode</span>
        </div>

        <div className="profile">
          <div className="info">
            <p></p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src={logo} />
          </div>
        </div>
      </div>
      <div className="user-profile">
        <div className="logo">
          <img src={iconF} />
          <h2>Plataforma</h2>
          <p>Control de gastos</p>
        </div>
      </div>
      <div className="reminders">
        <div className="header">
          <span className="material-icons-sharp">notifications_none</span>
        </div>
        <div className="recent-orders">
          <table className="table">
            <div>{renderMain()}</div>
          </table>
        </div>

        <Link to="/form" className="a">
          <div className="notification add-reminder">
            <div>
              <span className="material-icons-sharp">add</span>
              <h3>Añadir Notas/Recordatorios</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RightSection;
