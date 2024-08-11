// app/api/auth/[...nextauth]/route.ts
import { debug } from 'console';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  debug:process.env.NODE_ENV===

};

export default NextAuth(authOptions);
