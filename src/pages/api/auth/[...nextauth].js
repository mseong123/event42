import NextAuth from 'next-auth'
import FortyTwoProvider from "next-auth/providers/42-school";

export default NextAuth({
  providers: [
    FortyTwoProvider({
      clientId: process.env.FORTY_TWO_CLIENT_ID,
      clientSecret: process.env.FORTY_TWO_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/Login', // Replace with the path to your custom sign-in page
  },
  callbacks: {
    
  
  async jwt({ token, profile, account }) {
	
	if (profile && account) {
		// we pass user_id, login and access_token to the frontend via token
		
		token.user_id = profile.id
		token.login = profile.login
		token.accessToken = account.access_token
	}
	return token
	},
	async session({ session, token }) {

		// we received user_id, login and access_token from the jwt callback
		session.user.login = token.login
		session.user.user_id = token.user_id
		session.accessToken = token.accessToken
		return session
	},
	async redirect({ url, baseUrl }) {
		// Allows relative callback URLs
		
		return baseUrl+'/Dashboard'
	  },
}
})