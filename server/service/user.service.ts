import User from "../model/userSchema";

export const getUserById = async (id) => User.findById(id);
export const createUser = async function createUser({
  firstName,
  lastName,
  email,
  password,
  role,
 
}) {
  return new Promise(async (resolve, reject) => {
    const user = await User.findOne({ email })

    if (user) {
      reject('Email is already in use')
    }

    resolve(
      await User.create({
        firstName,
        lastName,
        email,
        password,
        role,
      })
    )
  })
}
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
