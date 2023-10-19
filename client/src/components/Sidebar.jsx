import { Link } from "react-router-dom";

function Sidebar() {
  const handleOpenClose = () => {
    document.querySelector("aside").style.display = "none";
  };

  const closeAuth = () => {
    localStorage.setItem("auth", "");
    window.location.reload();
  }

  return (
    <aside>
      <div className="toggle">
        <div className="logo">
          <img src="https://static.vecteezy.com/system/resources/previews/015/275/813/original/hygge-slow-living-cottagecore-cat-free-png.png" />
          <h2>Plataforma</h2>
        </div>
        <div className="close" id="close-btn">
          <span className="material-icons-sharp" onClick={handleOpenClose}>
            close
          </span>
        </div>
      </div>

      <div className="sidebar">
        <ul>
          <Link to="/" className="a">
            <span className="material-symbols-outlined">home</span>
            <h3>Inicio</h3>
          </Link>

          <Link to="/form" className="a">
            <span className="material-symbols-outlined">note_add</span>
            <h3>Registros</h3>
          </Link>

          <Link to="/data" className="a">
            <span className="material-icons-sharp">task_alt</span>
            <h3>Revisados</h3>
          </Link>

          {/*<Link to="/" className="a">
            <span className="material-symbols-outlined">contact_page</span>
            <h3>Proveedores</h3>
  </Link>*/}

          {/*<Link to="/" className="a">
            <span className="material-icons-sharp">report_gmailerrorred</span>
            <h3>Reportes</h3>
</Link>*/}

          <Link onClick={closeAuth} className="a">
            <span className="material-icons-sharp">logout</span>
            <h3>Cerrar sesión</h3>
          </Link>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
