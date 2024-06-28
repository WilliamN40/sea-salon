import prisma from "@/utils/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { name, duration } = await req.json();
    try {
        const service = await prisma.services.create({
            data: {
                name: name,
                duration: duration,
            },
        });
        return new Response(JSON.stringify(service), { status: 201 });
    } catch (error) {
        return new Response("Error creating service", { status: 500 });
    }
}