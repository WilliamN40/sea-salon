import prisma from "@/utils/prisma"

export async function GET(request: Request, { params }: { params: { userId: string } }) {
    const user = await prisma.users.findUnique({
        where: {
            id: params.userId
        }
    })
    if (!user) return new Response("User not found", { status: 404 })
    return new Response(JSON.stringify(user), { status: 200 })
}