import { ISensor, Sensor } from "../../models/Sensor";
import { updateSensor } from "./update-building";

export async function cronGenerateFakeData() {
  let sensors: ISensor[];
  try {
    sensors = await Sensor.find({});
  } catch (error) {
    console.log("Error getting buildings");
    return;
  }
  console.log(sensors);
  const updatedSensors = updateSensor(sensors);

  updatedSensors.forEach(async (sensor) => {
    await Sensor.updateOne({ nsc: sensor.nsc }, sensor);
  });
}
