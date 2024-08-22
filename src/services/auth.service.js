import User from "../models/user.model.js";

const loginService = async (email) => {
  return User.findOne({ email }).select("+password");
};

export default { loginService }