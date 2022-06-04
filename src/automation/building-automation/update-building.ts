import { SensorEnum } from "../../common/SensorType";
import { IEdificio } from "../../models/Building";
import { generateFakeMeasurement } from "./generate-fake-measurement";

export function updateBuilding(edificios: IEdificio[]) {
  edificios.forEach((edificio) => {
    edificio.redes.forEach((red) => {
      red.aulas.forEach((aula) => {
        aula.sensores.forEach((sensor) => {
          let valor;
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
          sensor.mediciones.push({
            valor,
          });
        });
      });
    });
  });
  return edificios;
}
