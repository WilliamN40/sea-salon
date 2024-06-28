import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            role: string
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id: string
        role: string
    }
}