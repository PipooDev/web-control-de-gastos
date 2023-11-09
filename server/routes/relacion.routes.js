import { Router } from "express";
import {
  fetchDataRelacion,
  getDataRelacion,
  createDataRelacion,
  deleteDataRelacion,
  updateDataRelacion
} from "../controllers/dataRelacion.controllers.js";

const router = Router();

router.get('/dataRelacion', fetchDataRelacion)

router.get('/dataRelacion/:id', getDataRelacion)

router.post('/dataRelacion', createDataRelacion)

router.put('/dataRelacion/:id', updateDataRelacion)

router.delete('/dataRelacion/:id', deleteDataRelacion)

export default router;