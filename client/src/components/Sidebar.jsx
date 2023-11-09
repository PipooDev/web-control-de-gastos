import { Link } from "react-router-dom";

function Sidebar() {
  const handleOpenClose = () => {
    document.querySelector("aside").style.display = "none";
  };

  const closeAuth = () => {
    localStorage.setItem("auth", "");
    window.location.reload();
  };

  return (
    <aside>
      <div className="toggle">
        <div className="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/6341/6341918.png" />
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

          <Link to="/dataCatalogo" className="a">
            <span className="material-symbols-outlined">patient_list</span>
            <h3>Catalogo</h3>
          </Link>

          <Link to="/formCatalogo" className="a">
            <span className="material-symbols-outlined">person_add</span>
            <h3>Add Catalogo</h3>
          </Link>

          <Link to="/dataIngresos" className="a">
            <span className="material-symbols-outlined">prescriptions</span>
            <h3>Ingresos</h3>
          </Link>

          <Link to="/formIngresos" className="a">
            <span className="material-icons-sharp">note_add</span>
            <h3>Add Ingresos</h3>
          </Link>

          <Link to="/dataRelacion" className="a">
            <span className="material-symbols-outlined">
              playlist_add_check_circle
            </span>
            <h3>Relación Gastos</h3>
          </Link>
          <Link to="/formRelacion" className="a">
            <span className="material-symbols-outlined">
              playlist_add_circle
            </span>
            <h3>Add Relación Gastos</h3>
          </Link>

          <Link to="/form" className="a">
            <span className="material-symbols-outlined">add_alert</span>
            <h3>Add Notas</h3>
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
