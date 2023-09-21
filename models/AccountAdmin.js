import { Schema, model, models } from "mongoose"

const accountAdminSchema = new Schema({
  primer_nombre: {
    type: String,
    trim:true,
  },
  segundo_nombre: {
      type: String,
      trim:true,
  },
  primer_apellido: {
      type: String,
      trim:true,
  },
  segundo_apellido: {
      type: String,
      trim:true,
  },
  cedula: {
    select: {
      type: String
    },
    input: {
      type: String
    }
  },
  nacionalidad: {
    type: String,
    trim:true,
  },
  sexo: {
    type: String,
  },
  telefono: {
    type: String,
    trim:true,
  },
  cargo: {
    type: String,trim:true
  },
  image_1: {
    public_id: String,
    secure_url: String
  },
  superAdmin: { type: Boolean, default: false },
  permissions: {
    read: [String],
    write: [String],
  },
})

export default accountAdminSchema