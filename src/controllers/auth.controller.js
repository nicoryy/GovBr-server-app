import bcrypt from "bcrypt";
import authService from "../services/auth.service.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "Email and password are required",
    });
  }

  const user = await authService.loginService(email);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(401).send({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: "2mins",
  });

  res.status(200).send({
    message: "User logged in successfully",
    user: {
      id: user._id,
      nome: user.nome,
      email: user.email,
      date: user.date,
      cpf: user.cpf,
      cep: user.cep,
      logradouro: user.logradouro,
      bairro: user.bairro,
      cidade: user.cidade,
      estado: user.estado,
      telefone: user.telefone,
      sexo: user.sexo,
      estadoCivil: user.estadoCivil,
      possuiCasa: user.possuiCasa,
      rendaFamiliar: user.rendaFamiliar,
      rendaMensal: user.rendaMensal,
      acessoInternet: user.acessoInternet,
    },
    token: token,
  });
};

export default { login };


