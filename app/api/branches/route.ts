import prisma from "@/utils/prisma";

export async function GET() {
    const branches = await prisma.branches.findMany();
    return new Response(JSON.stringify(branches), { status: 200 });
}