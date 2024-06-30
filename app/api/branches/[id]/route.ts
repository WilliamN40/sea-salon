import prisma from "@/utils/prisma"
import { NextRequest } from "next/server"

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const branch = await prisma.branches.delete({
            where: {
                id: parseInt(params.id),
            },
        })
        return new Response("Branch deleted successfully", { status: 200 })
    } catch (error) {
        return new Response("Error deleting branch", { status: 500 })
    }
}