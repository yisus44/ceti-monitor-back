import { IPersona, PersonaSchema } from "./Person";
import { Schema, model } from "mongoose";

interface ICamera {
  nsc: string;
  nombre: string;
  modelo: string;
  personas: IPersona[];
}

const CameraSchema = new Schema<ICamera>({
  nsc: { type: String, required: true, unique: true },
  nombre: { type: String, required: true, unique: true },
  modelo: { type: String, required: true, unique: true },
  personas: [{ type: PersonaSchema, required: true }],
});

const Camera = model<ICamera>("Camera", CameraSchema);
export { Camera, ICamera, CameraSchema };
