import prisma from "@/utils/prisma";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const POST = async (req: NextRequest) => {
    const { name, phone, branchId, service, date, time } = await req.json();
    const userId = (await getServerSession(authOptions))?.user.id
    try {
        const reservation = await prisma.reservations.create({
            data: {
                userId: userId,
                name: name,
                phone: phone,
                branchId: branchId,
                service: service,
                date: date,
                time: time
            }
        })
        return new Response(JSON.stringify(reservation), { status: 201 })
    } catch (error)
    {
        return new Response("Error creating reservation", { status: 500 })
    }

}