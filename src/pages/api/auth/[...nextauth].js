import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async session({ session, token }) {
      // return {
      //   ...session,
      //   user: {
      //     ...session.user,
      //     username: session.user.name.split(" ").join("").toLocaleLowerCase(),
      //     uid: token.sub,
      //   },
      // };
      return { ...session, user: { ...session.user, username: "AzureSnake" } };
    },
  },
};

export default NextAuth(authOptions);
