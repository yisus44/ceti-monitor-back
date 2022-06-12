import cron from "node-cron";
import { cronStartGenerateFakeData } from "./meditions-utomation/data-generator";
cronStartGenerateFakeData();
cron.schedule("*/1 * * * *", cronStartGenerateFakeData);
