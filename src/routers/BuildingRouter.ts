import { Router, Response, Request } from "express";
import ResponseDTO from "../common/DTOS/ResponseDTO";
import { Edificio, IEdificio } from "../models/Building";

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
      await edificio.save();
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
