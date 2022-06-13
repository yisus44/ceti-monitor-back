import { Router, Response, Request } from "express";
import ResponseDTO from "../common/DTOS/ResponseDTO";
import { Camera, ICamera } from "../models/Camera";

const CameraRouter = Router();

CameraRouter.post(
  "/camera",
  async function (req: Request<{}, ICamera>, res: Response) {
    try {
      const camera = new Camera({
        nsc: req.body.nsc,
        personas: req.body.personas,
        modelo: req.body.modelo,
        nombre: req.body.nombre,
      });
      await camera.save();
      return res.json(new ResponseDTO<ICamera>(camera, null, 201));
    } catch (error: any) {
      return res.json(new ResponseDTO<null>(null, error.message, 400));
    }
  }
);

CameraRouter.put("/camera/:id", async function (req: any, res: Response) {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Provide a id");
    if (!req.body.personas) throw new Error("Provide valid data");
    const camera = await Camera.findById(id);
    if (!camera) throw new Error("Error fetching camera");

    camera.personas = req.body.personas;

    await camera.save();
    return res.json(new ResponseDTO<ICamera>(camera, null, 201));
  } catch (error: any) {
    return res.json(new ResponseDTO<null>(null, error.message, 400));
  }
});

CameraRouter.get("/camera", async function (req: Request, res: Response) {
  try {
    const cameras = await Camera.find();
    return res.json(new ResponseDTO<typeof cameras>(cameras, null, 200));
  } catch (error: any) {
    return res.json(new ResponseDTO<null>(null, error.message, 400));
  }
});

CameraRouter.get(
  "/camera/:id",
  async function (req: Request<any, ICamera>, res: Response) {
    try {
      const id = req.params.id;
      if (!id) throw new Error("Provide a id");
      const camera = await Camera.findById(id);
      return res.json(new ResponseDTO<typeof camera>(camera, null, 200));
    } catch (error: any) {
      return res.json(new ResponseDTO<null>(null, error.message, 400));
    }
  }
);

export default CameraRouter;
