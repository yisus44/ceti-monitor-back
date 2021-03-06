import { Router, Response, Request } from "express";
import ResponseDTO from "../DTOS/ResponseDTO";
import { IAula } from "../models/Classroom";
import { Edificio } from "../models/Building";

const AulaRouter = Router();

async function getAulaById(id: string): Promise<IAula> {
  let aulas: IAula[] = [];
  try {
    if (!id) throw new Error("Provide a id");
    const edificios = await Edificio.find();
    edificios.forEach((edificio) => {
      edificio.redes.forEach((red) => {
        red.aulas.forEach((aula) => {
          if (aula._id?.toString() === id.toString()) {
            aulas.push(aula);
          }
        });
      });
    });
  } catch {
    console.log("Error fetching data in Aula Router");
  }
  return aulas[0];
}

AulaRouter.get(
  "/classroom/:id",
  async function (req: Request<any, IAula>, res: Response) {
    try {
      const id = req.params.id;
      const aula = getAulaById(id);
      return res.json(new ResponseDTO<typeof aula>(aula, null, 200));
    } catch (error: any) {
      return res.json(new ResponseDTO<null>(null, error.message, 400));
    }
  }
);

export default AulaRouter;
