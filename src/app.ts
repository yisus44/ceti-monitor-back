import express from "express";
import helmet from "helmet";
import AulaRouter from "./routers/ClassroomRouter";
import CameraRouter from "./routers/CameraRouter";
import EdificioRouter from "./routers/BuildingRouter";
import SensorRouter from "./routers/SensorRouter";
import UserRouter from "./routers/UserRouter";

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use(CameraRouter);
app.use(SensorRouter);
app.use(EdificioRouter);
app.use(UserRouter);
app.use(AulaRouter);
export default app;
