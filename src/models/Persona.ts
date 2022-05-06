import { Schema, model } from "mongoose";

interface IPersona {
  nombre: string;
  temperaturaCorporal: number;
}

const PersonaSchema = new Schema<IPersona>({
  nombre: { type: String, required: true },
  temperaturaCorporal: { type: Number, required: true },
});

const Persona = model<IPersona>("Persona", PersonaSchema);

export { Persona, PersonaSchema, IPersona };
