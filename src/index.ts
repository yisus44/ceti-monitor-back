require("dotenv").config();
import app from "./app";
import { PORT } from "./keys/config";
import "./bd/mongoose";
import "./automation/index";

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
