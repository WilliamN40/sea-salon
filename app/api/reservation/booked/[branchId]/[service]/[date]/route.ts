import prisma from "@/utils/prisma"

export async function GET(request: Request, { params }: { params: { branchId: string, service: string, date: string } }) {
    const reservations = await prisma.reservations.findMany({
        where: {
            branchId: parseInt(params.branchId),
            service: params.service,
            date: params.date
        }
    })
    const timeBooked = new Set(reservations.map(reservation => reservation.time))
    return new Response(JSON.stringify(Array.from(timeBooked)), { status: 200 })
}