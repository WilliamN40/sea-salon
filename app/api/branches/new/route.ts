import prisma from "@/utils/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { name, location, openingtime, closingtime } = await req.json();
    const branch = await prisma.branches.create({
        data: {
            name,
            location,
            openingtime,
            closingtime

        }
    });
    return new Response(JSON.stringify(branch), { status: 201 });
}