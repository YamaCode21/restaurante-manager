const db = require("../config/db");

exports.getProducts = (req, res) => {
  db.query("SELECT * FROM productos", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.createProduct = (req, res) => {
  const { nombre, descripcion, precio, stock, categoria } = req.body;

  const sql =
    "INSERT INTO productos (nombre, descripcion, precio, stock, categoria) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [nombre, descripcion, precio, stock, categoria],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Producto creado" });
    },
  );
};
