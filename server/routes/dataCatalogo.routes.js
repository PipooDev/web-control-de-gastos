import { Router } from "express";
import {
  fetchDataCatalogo,
  getDataCatalogo,
  createDataCatalogo,
  deleteDataCatalogo,
  updateDataCatalogo
} from "../controllers/dataCatalogo.controller.js";

const router = Router();

router.get('/dataCatalogo', fetchDataCatalogo)

router.get('/dataCatalogo/:id', getDataCatalogo)

router.post('/dataCatalogo', createDataCatalogo)

router.put('/dataCatalogo/:id', updateDataCatalogo)

router.delete('/dataCatalogo/:id', deleteDataCatalogo)

export default router;