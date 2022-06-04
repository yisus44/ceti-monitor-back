import cron from "node-cron";
import { cronStartGenerateFakeData } from "./building-automation/data-generator";
cronStartGenerateFakeData();
cron.schedule("*/5 * * * *", cronStartGenerateFakeData);
