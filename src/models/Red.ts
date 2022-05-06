import { Schema, model } from "mongoose";
import { AulaSchema, IAula } from "./Aula";

interface IRed {
  nombre: string;
  aulas: IAula[];
}
const RedSchema = new Schema<IRed>({
  nombre: { type: String, required: true },
  aulas: [{ type: AulaSchema, required: true }],
});
const Red = model<IRed>("Red", RedSchema);
export { Red, IRed, RedSchema };
