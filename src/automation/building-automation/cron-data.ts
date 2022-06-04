import { Edificio, IEdificio } from "../../models/Building";
import { updateBuilding } from "../building-automation/update-building";

export async function cronGenerateFakeData() {
  let edificios: IEdificio[];
  try {
    edificios = await Edificio.find({});
  } catch (error) {
    console.log("Error getting buildings");
    return;
  }

  const updatedBuildings = updateBuilding(edificios);

  updatedBuildings.forEach(async (edificio) => {
    await Edificio.updateOne({ nombre: edificio.nombre }, edificio);
  });
}
