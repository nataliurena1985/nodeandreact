import "./App.css";
import { useState } from "react";

import Axios from "axios";

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState(0);

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
        alert("Empleado registrado");
      })
      .catch((e) => alert(e));
  };

  return (
    <div className="App">
      <div className="datos">
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

        <button onClick={add}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
