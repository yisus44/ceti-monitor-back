import { IMedicion, MedicionSchema } from "./Measurement";
import { Schema, model } from "mongoose";
import { IRed, RedSchema } from "./Network";

interface IEdificio {
  nombre: string;
  redes: IRed[];
}

const EdificioSchema = new Schema<IEdificio>({
  nombre: { type: String, required: true },
  redes: [{ type: RedSchema, required: true }],
});

const Edificio = model<IEdificio>("Edificio", EdificioSchema);
export { Edificio, IEdificio, EdificioSchema };

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
