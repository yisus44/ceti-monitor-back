import cron from "node-cron";
import { SensorEnum } from "../common/SensorType";
import { Edificio } from "../models/Building";

async function generateFakeData() {
  const edificios = await Edificio.find({});
  await Edificio.deleteMany({});

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
  edificios.forEach((edificio) => {
    const nuevoEdificio = new Edificio({
      nombre: edificio.nombre,
      redes: edificio.redes,
    });
    nuevoEdificio.save();
  });
}

function generateFakeMeasurement(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

cron.schedule("*/5 * * * *", () => {
  console.log("Generating new data");
  generateFakeData();
});
