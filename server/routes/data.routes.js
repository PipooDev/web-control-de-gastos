import { Router } from "express";
import {
  fetchData,
  getData,
  createData,
  deleteData,
  updateData,
  loginUser,
} from "../controllers/data.controllers.js";

const router = Router();

router.get('/data', fetchData)

router.get('/data/:id', getData)

router.post('/data', createData)

router.put('/data/:id', updateData)

router.delete('/data/:id', deleteData)

router.post('/login', loginUser)

export default router;