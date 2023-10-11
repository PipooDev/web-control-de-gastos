import OrdersTable from "./OrdersTable";

function MainContent() {
  return (
    <main>
      <h1>Analytics</h1>
      <div className="analyse">
        <div className="sales">
          <div className="status">
            <div className="info">
              <h3>Total Sales</h3>
              <h1>$65,024</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+81%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="visits">
          <div className="status">
            <div className="info">
              <h3>Site Visits</h3>
              <h1>24,981</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>-48%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="searches">
          <div className="status">
            <div className="info">
              <h3>Searches</h3>
              <h1>14,147</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+21%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="new-users">
        <h2>New Users</h2>
        <div className="user-list">
          <div className="user">
            <img src="https://i.pinimg.com/564x/12/e1/3c/12e13c0e017f796e21b3ce61f2241cdd.jpg" />
            <h2>Jack</h2>
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
          </div>
          <div className="user">
            <img src="https://www.shutterstock.com/image-vector/plus-icon-flat-design-style-260nw-589199351.jpg" />
            <h2>More</h2>
            <p>New user</p>
          </div>
        </div>
      </div>

      <OrdersTable />
    </main>
  );
}

export default MainContent;
