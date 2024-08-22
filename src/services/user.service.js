import User from "../models/user.model.js";

const createService = async (body) => await User.create(body);
const findAllService = async () => await User.find();

const findByEmail = async (email) => await User.findOne({ email });

export default { createService, findAllService, findByEmail };
