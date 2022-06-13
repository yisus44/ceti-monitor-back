import { Schema, model } from "mongoose";
import { AulaSchema, IAula } from "./Classroom";

interface IRed {
  nombre: string;
  detalle?: string;
  aulas: IAula[];
}
const RedSchema = new Schema<IRed>({
  nombre: { type: String, required: true },
  detalle: { type: String },
  aulas: [{ type: AulaSchema, required: true }],
});
const Red = model<IRed>("Red", RedSchema);
export { Red, IRed, RedSchema };
