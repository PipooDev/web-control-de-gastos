import { useData } from "../context/DataProvider.jsx";
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

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
            <img src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/392928491_709104871252588_834248932198351706_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEcODm2t3iZT3Cv3KpdvWziuV98LzjXax25X3wvONdrHSjS5Bt7Ebw0JUugcEIFJ0P5kTn4qMR-zqEEzyGJtvaE&_nc_ohc=MfG0ZtqBAYYAX_rJMp8&_nc_ht=scontent.fmty1-1.fna&oh=00_AfBNfce_QIGKF3QycBF_xHVH-Q00Vt7yqgM2Ntex_G727w&oe=654FE611" />
          </div>
        </div>
      </div>
      <div className="user-profile">
        <div className="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/6341/6341918.png" />
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
