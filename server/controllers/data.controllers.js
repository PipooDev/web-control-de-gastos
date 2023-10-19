import { pool } from "../db.js";

export const fetchData = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM data ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getData = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM data WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Data not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createData = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO data(title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateData = async (req, res) => {
  try {
    const result = await pool.query("UPDATE data SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteData = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM data WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Data not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const values = [username, password]
    var sql = "SELECT * FROM auth WHERE username = ? AND password = ?";
    const [result] = await pool.query(sql, values);
    if (result.length === 0)
      return res.status(404).json({ message: "Usuario no encontrado" }
      );
    res.json({
      "id": result[0].id,
      "role": result[0].account_type,
      "username": result[0].username,
      "password": result[0].password,
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
