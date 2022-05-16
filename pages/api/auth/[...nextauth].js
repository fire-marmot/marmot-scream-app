import NextAuth from "next-auth/next";
import Auth0Provider from 'next-auth/providers/auth0';

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    })
  ],
    callbacks: {
    async jwt({ token, user, account, profile, isNewUser}) {
      if (account) {
        token.accessToken = account.access_token;
        token.refresh = account.refresh_token;
        token.user = user;
      }
      return token
    },
    async session({ session, token, user, profile, account }) {
      session = token;
      return session;
    },
  }
});