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

  const updatedSensors = updateSensor(sensors);

  updatedSensors.forEach(async (sensor) => {
    try {
      await Sensor.updateOne(
        { nsc: sensor.nsc },
        { mediciones: sensor.mediciones }
      );
    } catch (ex) {
      console.log(ex);
      console.log("ya no truena");
    }
  });
}
