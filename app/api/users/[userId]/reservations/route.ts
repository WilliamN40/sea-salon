import prisma from "@/utils/prisma";

export async function GET(request: Request, { params }: { params: { userId: string } }) {
    const reservations = await prisma.reservations.findMany({
        where: {
            userId: params.userId
        }
    })

    return new Response(JSON.stringify(reservations), { status: 200 })
}