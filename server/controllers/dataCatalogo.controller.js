import { pool } from "../db.js";

export const fetchDataCatalogo = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM palaciodb.catalogoctasegr"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDataCatalogo = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM CatalogoCtasEGR WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Data not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDataCatalogo = async (req, res) => {
  try {
    const {
      beneficiario,
      tipo_de_persona,
      rfc,
      curp,
      catalogo_vialidad,
      tipo_de_vialidad,
      nombre_de_vialidad,
      numero_int_ext_mz_lt,
      asentamiento,
      nombre_del_asentamiento,
      entidad_federativa,
      municipio_delegacion,
      codigo_postal,
      banco,
      cta_banco,
      clabe_interbancaria,
      tipo_de_beneficiario,
      num_contrato,
      solicitud_de_empleo,
      padron_gobierno_del_estado,
      cv,
      acreditaciones_constancias,
      cedula_profesional,
      numero_cedula_profesional,
      titulo_profesional,
      ine,
      curp2,
      acta_de_nacimiento,
      comprobante_de_domicilio,
      constancia_del_sat,
      no_inhabilitado,
      antecedentes_no_penales,
      certificado_medico,
      carta_de_recomendacion,
      carta_de_recomendacion2,
      caratula_bancario,
      fotografia_tamano_infantil,
      licencia_para_conducir,
      padron_gobierno_del_estado2,
      acta_constitutiva,
      constancia_del_sat2,
      opinion_positiva,
      comprobante_de_domicilio2,
      semblanza_curricular_pm,
      caratula_bancario2,
      cv_rl,
      ine_rl,
      cedula_profesional_rl,
      numero_cedula_profesional_rl,
      curp_rl,
      acta_de_nacimiento_rl,
    } = req.body;

    // Valida los datos de la solicitud
    const errors = validateData(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Genera la consulta `INSERT INTO`
    const generateInsertQuery = (table, data) => {
      const columns = Object.keys(data);
      const values = data.map(value => JSON.stringify(value));
      const query = `
    INSERT INTO ${table} (
      ${columns.join(", ")}
    )
    VALUES (
      ${values.join(", ")}
    );
  `;
      return query;
    };

    // Ejecuta la consulta
    const query = generateInsertQuery("CatalogoCtasEGR", data);
    const [result] = await pool.query(query);

    // Devuelve un mensaje de éxito
    res.json({
      id: result.insertId,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDataCatalogo = async (req, res) => {
  try {
    const result = await pool.query("UPDATE CatalogoCtasEGR SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDataCatalogo = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM CatalogoCtasEGR WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Data not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};