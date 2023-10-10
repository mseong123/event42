import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import FortyTwoProvider from "next-auth/providers/42-school";

export default NextAuth({
  providers: [
    FortyTwoProvider({
      clientId: process.env.FORTYTWO_CLIENT_ID,
      clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
    }),
  ],
})