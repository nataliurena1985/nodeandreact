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
    <div class="container">
      <div className="App">
        <div className="lista">
          {empleadosList.map((val, key) => {
            return <div className="">{val.nombre}</div>;
          })}
        </div>
      </div>
      <div class="card text-center">
        <div class="card-header">GESTION EMPLEADOS</div>
        <div class="card-body">
          <label>
            Nombre:
            <input
              onChange={(Event) => {
                setNombre(Event.target.value);
              }}
              tipe="text"
            ></input>{" "}
          </label>
          <br />
          <label>
            Edad:
            <input
              onChange={(Event) => {
                setEdad(Event.target.value);
              }}
              tipe="number"
            ></input>{" "}
          </label>
          <br />
          <label>
            Pais:
            <input
              onChange={(Event) => {
                setPais(Event.target.value);
              }}
              tipe="text"
            ></input>{" "}
          </label>
          <br />
          <label>
            Cargo:
            <input
              onChange={(Event) => {
                setCargo(Event.target.value);
              }}
              tipe="text"
            ></input>{" "}
          </label>
          <br />
          <label>
            Años:
            <input
              onChange={(Event) => {
                setAnios(Event.target.value);
              }}
              tipe="number"
            ></input>{" "}
          </label>
          <br />
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
