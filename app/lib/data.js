import { Product, User } from "./models";
import { connectToDB } from "./utils";

//FETCH USERS
export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    console.log(users);

    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

//FETCH SINGLE USER
export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id)
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

//FETCH PRODUCTS
export const fetchProducts = async (q,page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

//FETCH SINGLE PRODUCT
export const fetchProduct= async (id) => {

  try {
    connectToDB();
    const product = await Product.findById(id)
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

//LOGIN AUTHENTICATION
export const authenticat = async (formData)=>{
  const {username, password} = Object.fromEntries(formData)

  try{
    await signIn("credentials", {username, password})
  }catch(err){
    console.log(err)
    throw err;
  }
}