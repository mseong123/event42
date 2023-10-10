import NextAuth from 'next-auth'
import FortyTwoProvider from "next-auth/providers/42-school";

export default NextAuth({
  providers: [
    FortyTwoProvider({
      clientId: process.env.FORTY_TWO_CLIENT_ID,
      clientSecret: process.env.FORTY_TWO_CLIENT_SECRET,
    }),
  ],
})