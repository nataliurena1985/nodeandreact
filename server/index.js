const express = require("express");
const app = express();

app.use(express.json());

const mysql = require("mysql");

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log("corriendo en el puerto 3001");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "empleados_crud",
});

app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const pais = req.body.pais;
  const cargo = req.body.cargo;
  const anios = req.body.anios;
  console.log("create");
  db.query(
    "INSERT INTO empleados(nombre,edad,pais,cargo,anios) VALUES (?,?,?,?,?)",
    [nombre, edad, pais, cargo, anios],
    (err, result) => {
      if (err) {
        console.log("ERROR DB", err);
      } else {
        console.log("REGISTRADO DB");
        res.send("Empleado registrado con exito");
      }
    }
  );
});

app.get("/empleados", (req, res) => {
  console.log("get");
  db.query(
    "SELECT * FROM empleados",

    (err, result) => {
      if (err) {
        console.log("ERROR DB get", err);
      } else {
        console.log("REGISTRADO DB get");
        res.send(result);
      }
    }
  );
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const pais = req.body.pais;
  const cargo = req.body.cargo;
  const anios = req.body.anios;
  console.log("update");
  db.query(
    "UPDATE empleados SET nombre=?,edad=?,pais=?,cargo=?,anios=? WHERE id=?",
    [nombre, edad, pais, cargo, anios, id],
    (err, result) => {
      if (err) {
        console.log("ERROR DB", err);
      } else {
        console.log("put DB");
        res.send("Empleado actualizado con exito");
      }
    }
  );
});
