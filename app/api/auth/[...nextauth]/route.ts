import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/utils/prisma";
import { compare } from "bcrypt";
import { authOptions } from "@/utils/auth";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }