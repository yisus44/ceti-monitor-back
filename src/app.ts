import express from "express";
import helmet from "helmet";
import CameraRouter from "./routers/CameraRouter";
import EdificioRouter from "./routers/EdificioRouter";
import SensorRouter from "./routers/SensorRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use(CameraRouter);
app.use(SensorRouter);
app.use(EdificioRouter);
export default app;
