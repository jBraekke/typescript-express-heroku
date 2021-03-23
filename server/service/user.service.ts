import User from "../model/userSchema";

export const getUserById = async (id) => User.findById(id);
export const createUser = async (data) => User.create(data);
export const listUsers = async () => User.find();
export const getUser = async (id) => User.findById(id);
export const updateUser = async (id, data) =>
  User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeUser = async (id) => {
  const user = await User.findById(id);
  user.remove();
};
export const getUserByProviderId = async (providerId) => {
  return await User.findOne({ providerId }).exec();
};
export const getUserByEmail = async (email) => {
  return await User.findOne({ email }).exec();
};
