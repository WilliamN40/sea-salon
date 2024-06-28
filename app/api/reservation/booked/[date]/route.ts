import prisma from "@/utils/prisma"

export async function GET(request: Request, { params }: { params: { date: string } }) {
    console.log(params)
    const reservations = await prisma.reservations.findMany({
        where: {
            date: params.date
        }
    })
    const timeBooked = new Set(reservations.map(reservation => reservation.time))
    return new Response(JSON.stringify(Array.from(timeBooked)), { status: 200 })
}