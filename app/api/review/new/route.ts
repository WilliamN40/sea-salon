import prisma from "@/utils/prisma";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const { name, rating, comment } = await req.json();
    try {
        const review = await prisma.reviews.create({
            data: {
                name: name,
                rating: rating,
                comment: comment,
            },
        });
        return new Response(JSON.stringify(review), { status: 201 });
    } catch (error) {
        return new Response("Error creating review", { status: 500 });
    }
}