import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {authConfig} from "./authconfig";
import { connectToDB } from "./app/lib/utils";
import { User } from "./app/lib/models";

const login = async (credentials)=>{
try {
    connectToDB()
    const user = await User.findOne({username: credentials.username})

    if(!user) throw new Error("Wrong credentials!")

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
    
    if(!isPasswordCorrect) throw new Error("Wrong credentials!")

    return user;

} catch (error) {
    console.log(err)
    throw new Error("Failed to login")
}
}

export const {signIn, signOut, auth} =  NextAuth({
    ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
            await login(credentials)
        } catch (error) {
            return null
        }
      },
    }),
  ],
})