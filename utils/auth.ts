import { AuthOptions } from "next-auth"
import prisma from "./prisma"
import { compare } from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/login",
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                userId: {},
                password: {}
            },

            async authorize(credentials) {
                console.log(credentials)
                const user = await prisma.users.findUnique({
                    where: {
                        id: credentials?.userId
                    }
                })

                if (user) {
                    const checkPassword = await compare(credentials?.password || "", user.password)

                    if (checkPassword) {
                        return user
                    }
                }

                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user?.id) {
                token.id = user.id
            }
            if (user?.role) {
                token.role = user.role
            }
            return token
        },
        async session({ session, token }) {
            session.user.id = token.id
            session.user.role = token.role
            return session
        }
    }
}

