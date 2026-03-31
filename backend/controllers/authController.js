const db = require('../config/db');
const bcryt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { nombre, email, password, role } = req.body;

  const sql = 'INSERT INTO users (nombre, email, password, role) VALUES (?, ?, ?, ?)';

  db.query(sql, [nombre, email, hashedPassword, role], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: 'Usuario registrado'});
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });

    const user = result[0];

    const validPassword = bcryt.compareSync(password, user.password);
    if (!validPassword) return res.status(401).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);

    res.json({ token, user });
  });
};