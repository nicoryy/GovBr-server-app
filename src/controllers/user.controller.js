import userService from "../services/user.service.js";

const createUser = async (req, res) => {
  const {
    nome,
    email,
    password,
    date,
    cpf,
    cep,
    logradouro,
    bairro,
    cidade,
    estado,
    telefone,
    sexo,
    estadoCivil,
    possuiCasa,
    rendaFamiliar,
    rendaMensal,
    acessoInternet,
  } = req.body;

  if (
    !nome ||
    !email ||
    !password ||
    !date ||
    !cpf ||
    !cep ||
    !logradouro ||
    !bairro ||
    !cidade ||
    !estado ||
    !telefone ||
    !sexo ||
    !estadoCivil ||
    !possuiCasa ||
    !rendaFamiliar ||
    !rendaMensal ||
    !acessoInternet
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const emailExists = await userService.findByEmail(email);
  if (emailExists) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const user = await userService.createService(req.body);

  res.status(201).send({ message: "User created", user: { ...user._doc } });
};

const findAllUsers = async (req, res) => {
  const users = await userService.findAllService();
  res.send({ message: "Users found", users });
};

export default { createUser, findAllUsers };
