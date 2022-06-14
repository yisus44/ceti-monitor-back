import { Router, Response, Request } from "express";
import ResponseDTO from "../common/DTOS/ResponseDTO";
import { Edificio, IEdificio } from "../models/Building";
import { Camera } from "../models/Camera";
import { Aula } from "../models/Classroom";
import { Sensor } from "../models/Sensor";

const EdificioRouter = Router();

EdificioRouter.post(
  "/building",
  async function (req: Request<{}, IEdificio>, res: Response) {
    try {
      const edificio = new Edificio({
        nombre: req.body.nombre,
        redes: req.body.redes,
        imgUrl: req.body.imgUrl,
      });

      const sensores = [];
      await edificio.save();

      edificio.redes.forEach((red) => {
        red.aulas.forEach((aula) => {
          aula.cameras.forEach(async (camera) => {
            const newCamera = new Camera({
              nsc: camera.nsc,
              nombre: camera.nombre,
              modelo: camera.modelo,
              personas: [],
            });
            console.log(newCamera);
            await newCamera.save();
            console.log("camera saved");
          });

          aula.sensores.forEach(async (sensor) => {
            const newSensor = new Sensor({
              nsc: sensor.nsc,
              mediciones: [],
              tipo: sensor.tipo,
              meta: sensor.meta,
            });
            console.log(sensor.nsc);
            newSensor.save();
          });
        });
      });

      return res.json(new ResponseDTO<IEdificio>(edificio, null, 201));
    } catch (error: any) {
      return res.json(new ResponseDTO<null>(null, error.message, 400));
    }
  }
);

EdificioRouter.get("/building", async function (req: Request, res: Response) {
  try {
    const edificio = await Edificio.find();
    return res.json(new ResponseDTO<typeof edificio>(edificio, null, 200));
  } catch (error: any) {
    return res.json(new ResponseDTO<null>(null, error.message, 400));
  }
});

EdificioRouter.get(
  "/building/:id",
  async function (req: Request<any, IEdificio>, res: Response) {
    try {
      const id = req.params.id;
      if (!id) throw new Error("Provide a id");
      const edificio = await Edificio.findById(id);
      return res.json(new ResponseDTO<typeof edificio>(edificio, null, 200));
    } catch (error: any) {
      return res.json(new ResponseDTO<null>(null, error.message, 400));
    }
  }
);

export default EdificioRouter;
