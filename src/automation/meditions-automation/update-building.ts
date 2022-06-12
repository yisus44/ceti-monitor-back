import { SensorEnum } from "../../common/SensorType";
import { Medicion } from "../../models/Measurement";

import { ISensor } from "../../models/Sensor";
import { generateFakeMeasurement } from "./generate-fake-measurement";
export function updateSensor(sensores: ISensor[]) {
  sensores.forEach((sensor) => {
    let valor: number;

    switch (sensor.tipo) {
      case SensorEnum.AGUA:
        valor = generateFakeMeasurement(10, 30);
        break;
      case SensorEnum.TEMPERATURA:
        valor = generateFakeMeasurement(20, 40);
        break;

      case SensorEnum.HUMEDAD:
        valor = generateFakeMeasurement(10, 30);
        break;
      default:
        valor = generateFakeMeasurement(1, 50);
        break;
    }

    if (sensor.mediciones) {
      const meditions = new Medicion({ valor: valor });
      sensor.mediciones.push(meditions);
    }
  });
  return sensores;
}
