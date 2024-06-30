import prisma from "@/utils/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    const reservations = await prisma.reservations.findMany({
        where: {
            userId: params.userId
        },
        include: {
            service: true,
            branch: true
        }
    })

    return new Response(JSON.stringify(reservations), { status: 200 })
}