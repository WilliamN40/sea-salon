import { hash } from "bcrypt";
import prisma from "@/utils/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, name, email, phone, password } = body;
        const hashedPassword = await hash(password, 12);

        const existingUser = await prisma.users.findUnique({
            where: {
                id: userId,
            },
        });

        if (existingUser) {
            return new Response("User already exists", { status: 409 });
        }

        const user = await prisma.users.create({
            data: {
                id: userId,
                name,
                email,
                phone,
                password: hashedPassword,
                role: "Customer",
            },
        });

        return new Response(JSON.stringify(user), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to create user", { status: 500 });
    }
}