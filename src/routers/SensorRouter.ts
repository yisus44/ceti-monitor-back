import { Router, Response, Request } from "express";
import ResponseDTO from "../common/DTOS/ResponseDTO";
import { IMedicion } from "../models/Measurement";
import { Sensor, ISensor } from "../models/Sensor";

const SensorRouter = Router();

SensorRouter.post(
  "/sensor",
  async function (req: Request<{}, ISensor>, res: Response) {
    try {
      const sensor = new Sensor({
        nsc: req.body.nsc,
        mediciones: req.body.mediciones,
        tipo: req.body.tipo,
        meta: req.body.meta,
      });
      setLastMedition(sensor as ISensor);
      await sensor.save();
      return res.json(new ResponseDTO<ISensor>(sensor, null, 201));
    } catch (error: any) {
      return res.json(new ResponseDTO<null>(null, error.message, 400));
    }
  }
);

SensorRouter.get("/sensor", async function (req: Request, res: Response) {
  try {
    const sensors = await Sensor.find();
    sensors.forEach((sensor) => {
      setLastMedition(sensor as ISensor);
    });
    return res.json(new ResponseDTO<typeof sensors>(sensors, null, 200));
  } catch (error: any) {
    return res.json(new ResponseDTO<null>(null, error.message, 400));
  }
});

SensorRouter.get(
  "/sensor/:id",
  async function (req: Request<any, ISensor>, res: Response) {
    try {
      const id = req.params.id;
      if (!id) throw new Error("Provide a id");
      const sensor = await Sensor.findById(id);
      setLastMedition(sensor as ISensor);
      console.log(sensor);
      return res.json(new ResponseDTO<typeof sensor>(sensor, null, 200));
    } catch (error: any) {
      return res.json(new ResponseDTO<null>(null, error.message, 400));
    }
  }
);
async function setLastMedition(sensor: ISensor) {
  const lastMeditions = sensor?.mediciones?.at(-1);
  if (lastMeditions) {
    //@ts-ignore
    sensor?.ultimaMedicion = lastMeditions;
  } else {
    //@ts-ignore
    sensor?.ultimaMedicion = [];
  }
}

export default SensorRouter;
