import { pool } from "../db.js";

export const fetchDataRelacion = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM plataf81_palaciodb.relacion_gastos"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDataRelacion = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM plataf81_palaciodb.relacion_gastos WHERE id = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "Data not found" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createDataRelacion = async (req, res) => {
    try {
        const {
            ID_COMPONENTE, TR, FECHA_TR, RAZON_SOCIAL, RFC, FOLIO_CFDI_RECIBO, FECHA_CFDI_RECIBO, SUBTOTAL_CFDI_RECIBO, DESCUENTO_CFDI_RECIBO, IVA_16_CFDI_RECIBO, IVA_RETENIDO_CFDI_RECIBO, ISR_CFDI_RECIBO, IEPS_CFDI_RECIBO, TOTAL_CFDI_RECIBO, BANCOS_REINTEGRO_A_CUENTA, DESCRIP_GENERAL_PARTIDA, PTDA_PTAL, NOMBRE_PTDA_PTAL, SUBCTA, NOMBRE_SUBCTA, CAPITULO, NOMBRE_CAPITULO, REVISADO
        } = req.body;

        const [result] = await pool.query(
            `INSERT INTO relacion_gastos(ID_COMPONENTE,TR,FECHA_TR,RAZON_SOCIAL,RFC,FOLIO_CFDI_RECIBO,FECHA_CFDI_RECIBO,SUBTOTAL_CFDI_RECIBO,DESCUENTO_CFDI_RECIBO,IVA_16_CFDI_RECIBO,IVA_RETENIDO_CFDI_RECIBO,ISR_CFDI_RECIBO,IEPS_CFDI_RECIBO,TOTAL_CFDI_RECIBO,BANCOS_REINTEGRO_A_CUENTA,DESCRIP_GENERAL_PARTIDA,PTDA_PTAL,NOMBRE_PTDA_PTAL,SUBCTA,NOMBRE_SUBCTA,CAPITULO,NOMBRE_CAPITULO,REVISADO) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [ID_COMPONENTE,TR,FECHA_TR,RAZON_SOCIAL,RFC,FOLIO_CFDI_RECIBO,FECHA_CFDI_RECIBO,SUBTOTAL_CFDI_RECIBO,DESCUENTO_CFDI_RECIBO,IVA_16_CFDI_RECIBO,IVA_RETENIDO_CFDI_RECIBO,ISR_CFDI_RECIBO,IEPS_CFDI_RECIBO,TOTAL_CFDI_RECIBO,BANCOS_REINTEGRO_A_CUENTA,DESCRIP_GENERAL_PARTIDA,PTDA_PTAL,NOMBRE_PTDA_PTAL,SUBCTA,NOMBRE_SUBCTA,CAPITULO,NOMBRE_CAPITULO,REVISADO]
        );
        res.json({
            id: result.insertId,
            ID_COMPONENTE,TR,FECHA_TR,RAZON_SOCIAL,RFC,FOLIO_CFDI_RECIBO,FECHA_CFDI_RECIBO,SUBTOTAL_CFDI_RECIBO,DESCUENTO_CFDI_RECIBO,IVA_16_CFDI_RECIBO,IVA_RETENIDO_CFDI_RECIBO,ISR_CFDI_RECIBO,IEPS_CFDI_RECIBO,TOTAL_CFDI_RECIBO,BANCOS_REINTEGRO_A_CUENTA,DESCRIP_GENERAL_PARTIDA,PTDA_PTAL,NOMBRE_PTDA_PTAL,SUBCTA,NOMBRE_SUBCTA,CAPITULO,NOMBRE_CAPITULO,REVISADO
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateDataRelacion = async (req, res) => {
    try {
        const result = await pool.query("UPDATE relacion_gastos SET ? WHERE id = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteDataRelacion = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM relacion_gastos WHERE id = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Not found" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};