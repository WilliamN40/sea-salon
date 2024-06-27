import prisma from "@/utils/prisma";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const { name, phone, service, date, time } = await req.json();
    try {
        const reservation = await prisma.reservations.create({
            data: {
                name: name,
                phone: phone,
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