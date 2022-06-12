import cron from "node-cron";
import { cronStartGenerateFakeData } from "./meditions-automation/data-generator";
cronStartGenerateFakeData();
cron.schedule("*/1 * * * *", cronStartGenerateFakeData);
