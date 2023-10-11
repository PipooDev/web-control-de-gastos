function Sidebar() {
  const handleOpenClose = () => {
    document.querySelector("aside").style.display = "none";
  };

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
        <a href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <h3>Dashboard</h3>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">home</span>
          <h3>Inicio</h3>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">note_add</span>
          <h3>Registros</h3>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">contact_page</span>
          <h3>Proveedores</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">task_alt</span>
          <h3>Revisados</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">report_gmailerrorred</span>
          <h3>Reportes</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">logout</span>
          <h3>Cerrar sesión</h3>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
