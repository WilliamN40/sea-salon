import prisma from "@/utils/prisma"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const service = await prisma.services.delete({
            where: {
                id: parseInt(params.id)
            }
        })
        return new Response("Service deleted successfully", { status: 200 })
    } catch (error) {
        return new Response("Error deleting service", { status: 500 })
    }
}