export const dynamic = "force-dynamic";
import prisma from "@/utils/prisma";

export async function GET() {
    const reviews = await prisma.reviews.findMany();
    return new Response(JSON.stringify(reviews), { status: 200 });
}