import { cronGenerateFakeData } from "./cron-data";

export function cronStartGenerateFakeData() {
  console.log("Generating new data");
  cronGenerateFakeData();
}
