import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  date: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  cep: {
    type: String,
    required: true,
  },
  logradouro: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  estadoCivil: {
    type: String,
    required: true,
  },
  possuiCasa: {
    type: String,
    required: true,
  },
  rendaFamiliar: {
    type: String,
    required: true,
  },
  rendaMensal: {
    type: String,
    required: true,
  },
  acessoInternet: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

const User = mongoose.model("User", UserSchema);

export default User;