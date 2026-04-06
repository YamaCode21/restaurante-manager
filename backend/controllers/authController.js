const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nombre, email, password, rol, resturante_id } = req.body;

  try {
    // 1. Encriptar la contraseña (10 rondas de sal es el estándar)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 2. Insertar en la base de datos
    const sql = `INSERT INTO usuarios (nombre, email, password, rol, resturante_id) 
                 VALUES (?, ?, ?, ?, ?)`;
    
    db.query(sql, [nombre, email, hashedPassword, rol, resturante_id], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: "El email ya está registrado" });
        }
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json({ 
        message: "Usuario creado con éxito",
        id: result.insertId 
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Error al procesar la contraseña" });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ?';

  db.query(sql, [email], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });

    const user = result[0];

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(401).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);

    res.json({ token, user });
  });
};