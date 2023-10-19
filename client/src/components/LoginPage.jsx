import { useState, useNavigate } from "react";
import React from "react";
import { loginUserRequest } from "../api/data.api.js";

function LoginPage() {
  const [body, setBody] = useState({ username: "", password: "" });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    const loginUser = async (body) => {
      try {
        const response = await loginUserRequest(body);
        console.log(response.data);
        localStorage.setItem("auth", "yes");
        window.location.reload();
        return response.data;
      } catch (error) {
        if (error.response.status === 404) {
          alert("Usuario o contraseña incorrectos");
        } else {
          alert("Ha ocurrido un error");
        }
      }
    };
    loginUser(body);
  };

  return (
    <div>
      <main>
        <div className="new-form">
          <div className="form-container">
            <h2>Inicio de sesión</h2>
            <form action="#">
              <div className="input-box">
                <label>Usuario</label>
                <input
                  type="text"
                  placeholder="Introduce el nombre de usuario"
                  value={body.username}
                  onChange={inputChange}
                  label="username"
                  name="username"
                />
              </div>
              <div className="input-box">
                <label>Contraseña</label>
                <input
                  type="password"
                  placeholder="Introduce la contraseña"
                  value={body.password}
                  onChange={inputChange}
                  label="password"
                  name="password"
                />
              </div>
              <button type="button" onClick={onSubmit}>
                Entrar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
