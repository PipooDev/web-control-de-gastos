function RightSection() {
  const handleOpenClose = () => {
    document.querySelector("aside").style.display = "block";
  };
  const handleDarkModeClick = () => {
    document.body.classList.toggle("dark-mode-variables");
    document
      .querySelector(".dark-mode")
      .querySelector("span:nth-child(1)")
      .classList.toggle("active");
    document
      .querySelector(".dark-mode")
      .querySelector("span:nth-child(2)")
      .classList.toggle("active");
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
            <p>
              Hey <b>Reza</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src="https://i.pinimg.com/564x/53/3f/ee/533feef9a73f888962b4230aaf62baef.jpg" />
          </div>
        </div>
      </div>
      <div className="user-profile">
        <div className="logo">
          <img src="https://static.vecteezy.com/system/resources/previews/015/275/813/original/hygge-slow-living-cottagecore-cat-free-png.png" />
          <h2>Plataforma</h2>
          <p>Control de gastos</p>
        </div>
      </div>
      <div className="reminders">
        <div className="header">
          <span className="material-icons-sharp">notifications_none</span>
        </div>
        <div className="notification">
          <div className="icon">
            <span className="material-icons-sharp">volume_up</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text_muted">08:00 AM - 12:00 PM</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>

        <div className="notification deactive">
          <div className="icon">
            <span className="material-icons-sharp">edit</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text_muted">08:00 AM - 12:00 PM</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>

        <div className="notification add-reminder">
          <div>
            <span className="material-icons-sharp">add</span>
            <h3>Add Reminder</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
