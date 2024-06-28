import prisma from "@/utils/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const services = await prisma.services.findMany({
        where: {
            branchId: parseInt(params.id)
        } 
    });
    return new Response(JSON.stringify(services), { status: 200 });
}