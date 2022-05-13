import NextAuth from "next-auth/next";
import Auth0Provider from 'next-auth/providers/auth0';
import GithubProvider from "next-auth/providers/github"
 

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    })
  ],

  pages: {
    signIn: '/auth/signin'
  }

})