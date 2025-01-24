import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Received credentials:", credentials);
        const { email, password } = credentials || {};

       
        if (email === "priyanka@gmail.com" && password === "password") {
            const user = {
                id: "1",
                name: "Priyanka Bhatt",
                email: "priyanka@gmail.com",
              };
              console.log("Authentication successful:", user);
              return user;
        }
      
        return null; // Return null if authentication fails
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
