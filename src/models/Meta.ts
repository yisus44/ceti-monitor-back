import { Schema, model } from "mongoose";

interface IMeta {
  aire: String;
  oxigeno: String;
  humedad: String;
  temperatura: String;
}
const MetaSchema = new Schema<IMeta>({
  aire: { type: String, required: true },
  oxigeno: { type: String, required: true },
  humedad: { type: String, required: true },
  temperatura: { type: String, required: true },
});

const Meta = model<IMeta>("Meta", MetaSchema);
export { Meta, IMeta, MetaSchema };
