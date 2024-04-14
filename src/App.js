import "./App.css";
import { useState } from "react";

import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState(0);
  const [empleadosList, setEmpleados] = useState([]);

  const add = () => {
    alert("post");
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anios: anios,
    })
      .then(() => {
        getEmpleados();
        alert("Empleado registrado");
      })
      .catch((e) => alert(e));
  };

  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados").then((response) => {
      setEmpleados(response.data);
      // alert("hola");
    });
  };

  // getEmpleados();

  return (
    <div className="container">
      <div className="App">
        <div className="lista">
          {empleadosList.map((val, key) => {
            return <div className="">{val.nombre}</div>;
          })}
        </div>
      </div>
      <div className="card text-center">
        <div class="card-header">GESTION EMPLEADOS</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombre:
            </span>
            <input
              type="text"
              onChange={(Event) => {
                setNombre(Event.target.value);
              }}
              class="form-control"
              placeholder="Ingrese un Nombre"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Edad:
            </span>
            <input
              type="number"
              onChange={(Event) => {
                setEdad(Event.target.value);
              }}
              class="form-control"
              placeholder="Ingrese una edad"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Pais:
            </span>
            <input
              type="text"
              onChange={(Event) => {
                setPais(Event.target.value);
              }}
              class="form-control"
              placeholder="Ingrese un pais"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Cargo:
            </span>
            <input
              type="text"
              onChange={(Event) => {
                setCargo(Event.target.value);
              }}
              class="form-control"
              placeholder="Ingrese un cargo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Años de experiencia:
            </span>
            <input
              type="number"
              onChange={(Event) => {
                setAnios(Event.target.value);
              }}
              class="form-control"
              placeholder="Ingrese los años"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="card-footer text-muted">
          <button className="btn btn-success" onClick={add}>
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
