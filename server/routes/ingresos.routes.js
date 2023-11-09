import { Router } from "express";
import {
  fetchDataIngresos,
  getDataIngresos,
  createDataIngresos,
  deleteDataIngresos,
  updateDataIngresos
} from "../controllers/dataIngresos.controller.js";

const router = Router();

router.get('/dataIngresos', fetchDataIngresos)

router.get('/dataIngresos/:NumProg', getDataIngresos)

router.post('/dataIngresos', createDataIngresos)

router.put('/dataIngresos/:NumProg', updateDataIngresos)

router.delete('/dataIngresos/:NumProg', deleteDataIngresos)

export default router;