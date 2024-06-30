import prisma from "@/utils/prisma"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { serviceId: string, date: string } }) {
    const reservations = await prisma.reservations.findMany({
        where: {
            serviceId: parseInt(params.serviceId),
            date: params.date
        }
    })
    const timeBooked = new Set(reservations.map(reservation => reservation.time))
    return new Response(JSON.stringify(Array.from(timeBooked)), { status: 200 })
}