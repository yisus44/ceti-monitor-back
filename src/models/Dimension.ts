import { Schema, model } from "mongoose";

/**Considerar usar enums para tipo de aula */

interface IDimension {
  ancho: Number;
  largo: Number;
  alto: Number;
}
const DimensionSchema = new Schema<IDimension>({
  ancho: { type: Number, required: true },
  largo: { type: Number, required: true },
  alto: { type: Number, required: true },
});

const Dimension = model<IDimension>("Dimension", DimensionSchema);
export { IDimension, DimensionSchema };
