import express from 'express';
import cors from 'cors'
import { PORT } from './config.js';

import indexRoutes from "./routes/index.routes.js";
import dataRoutes from "./routes/data.routes.js";
import dataCatalogoRoutes from "./routes/dataCatalogo.routes.js";
import dataIngresosRoutes from "./routes/ingresos.routes.js";
import dataRelacionRoutes from "./routes/relacion.routes.js";




const app = express();

app.use(express.json());
app.use(cors());

app.use(dataRoutes);
app.use(dataCatalogoRoutes);
app.use(dataIngresosRoutes);
app.use(dataRelacionRoutes);
app.use(indexRoutes);


app.listen(PORT)
console.log("running");
