import { Schema, model } from "mongoose";

interface IMedicion {
  valor: Number;
  fechaHora: Date;
}
const MedicionSchema = new Schema<IMedicion>({
  valor: { type: Number, required: true },
  fechaHora: { type: Date, default: new Date() },
});
const Medicion = model<IMedicion>("Medicion", MedicionSchema);
export { Medicion, IMedicion, MedicionSchema };
