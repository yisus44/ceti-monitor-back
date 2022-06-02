import cron from "node-cron";
import { Edificio } from "../models/Building";

async function generateFakeData() {
  const edificios = await Edificio.find({});
  await Edificio.deleteMany({});

  edificios.forEach((edificio) => {
    edificio.redes.forEach((red) => {
      red.aulas.forEach((aula) => {
        aula.sensores.forEach((sensor) => {
          sensor.mediciones.push({
            valor: generateFakeMeasurement(),
          });
          console.log(sensor.mediciones);
        });
      });
    });
  });
  edificios.forEach((edificio) => {
    const edf = new Edificio({
      nombre: edificio.nombre,
      redes: edificio.redes,
    });
    edf.save();
  });
}

function generateFakeMeasurement(): number {
  return Math.floor(Math.random() * 10) + 1;
}

cron.schedule("* * * * *", () => {
  console.log("running a task every minute");
});

cron.schedule("*/5 * * * *", () => {
  console.log("Generating new data");
  generateFakeData();
});
