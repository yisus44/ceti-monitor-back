import { IMedicion, MedicionSchema } from "./Measurement";
import { Schema, model } from "mongoose";
import { IMeta, MetaSchema } from "./Meta";

interface ISensor {
  nsc: string;
  tipo: string;
  mediciones?: IMedicion[];
  meta: IMeta;
}

const SensorSchema = new Schema<ISensor>({
  nsc: { type: String, unique: true, required: true },
  mediciones: [{ type: MedicionSchema, default: [] }],
  tipo: { type: String, required: true },
  meta: { type: MetaSchema, required: true },
});

const Sensor = model<ISensor>("Sensor", SensorSchema);
export { Sensor, ISensor, SensorSchema };
