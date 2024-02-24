"use server"
import { User } from "./models";
import { connectToDB } from "./utils";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    });

    console.log(newUser)

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }
};
