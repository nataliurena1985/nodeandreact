const express = require("express");
const app = express();

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "soporte",
  database: "empleados_crud",
});

app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const pais = req.body.pais;
  const cargo = req.body.cargo;
  const anios = req.body.anios;

  db.query(
    "INSERT INTO empleados(nombre,edad,pais,cargo,anios) VALUES (?,?,?,?,?)"
  );
});
