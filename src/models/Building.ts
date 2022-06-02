import { Schema, model } from "mongoose";
import { IRed, RedSchema } from "./Network";

interface IBuilding {
  nombre: string;
  redes: IRed[];
}

const BuildingSchema = new Schema<IBuilding>({
  nombre: { type: String, required: true },
  redes: [{ type: RedSchema, required: true }],
});

const Building = model<IBuilding>("Edificio", BuildingSchema);
export {
  Building as Edificio,
  IBuilding as IEdificio,
  BuildingSchema as EdificioSchema,
};

// {
//     "edificios": [
//         {
//             "nombre": "A",
//             "detalle": {},
//             "redes": [
//                 {
//                     "nombre": "Red 1",
//                     "detalle": {},
//                     "aulas": [
//                         {
//                             "nombre": "Aula 1",
//                             "tipo_aula": "Laboratorio de software libre",
//                             "dimensiones": {
//                                 "ancho": 2,
//                                 "alto": 4,
//                                 "largo": 6
//                             },
//                             "sensores": [
//                                 {
//                                     "nss": "FN123",
//                                     "nombre": "Sensor 1",
//                                     "modelo": "S1",
//                                     "tipo": "Humedad",
//                                     "meta": {
//                                         "aire": {},
//                                         "oxigeno": {},
//                                         "humedad": {},
//                                         "temperatura": {}
//                                     }
//                                 }
//                             ],
//                             "camaras": [
//                                 {
//                                     "nsc": "C123",
//                                     "nombre": "Camara 1",
//                                     "modelo": "C1"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "nombre": "B",
//             "detalle": {}
//         }
//     ]
