export const dynamic = "force-dynamic";
import prisma from "@/utils/prisma";

export async function GET() {
    const services = await prisma.services.findMany();
    return new Response(JSON.stringify(services), { status: 200 });
}