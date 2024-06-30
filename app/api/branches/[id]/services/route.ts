import prisma from "@/utils/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const services = await prisma.services.findMany({
        where: {
            branchId: parseInt(params.id)
        } 
    });
    return new Response(JSON.stringify(services), { status: 200 });
}