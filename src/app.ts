import express from "express";
import helmet from "helmet";
import AulaRouter from "./routers/AulaRouter";
import CameraRouter from "./routers/CameraRouter";
import EdificioRouter from "./routers/EdificioRouter";
import SensorRouter from "./routers/SensorRouter";
import UserRouter from "./routers/UserRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use(CameraRouter);
app.use(SensorRouter);
app.use(EdificioRouter);
app.use(UserRouter);
app.use(AulaRouter);
export default app;
