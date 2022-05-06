import { Schema, model } from "mongoose";
import { CameraSchema, ICamera } from "./Camera";
import { DimensionSchema, IDimension } from "./Dimension";
import { ISensor, SensorSchema } from "./Sensor";

/**Considerar usar enums para tipo de aula */

interface IAula {
  nombre: String;
  tipoAula: String;
  dimensiones: IDimension[];
  sensores: ISensor[];
  cameras: ICamera[];
}
const AulaSchema = new Schema<IAula>({
  nombre: { type: String, required: true },
  tipoAula: { type: String, required: true },
  dimensiones: [{ type: DimensionSchema, required: true }],
  sensores: [{ type: SensorSchema, required: true }],
  cameras: [{ type: CameraSchema, required: true }],
});
const Aula = model<IAula>("Aula", AulaSchema);
export { Aula, IAula, AulaSchema };
