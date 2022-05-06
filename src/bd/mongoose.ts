import { databaseConnectionString } from "../keys/config";

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(databaseConnectionString);
  console.log("DATABASE UP AND RUNNING");
}
